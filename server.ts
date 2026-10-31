import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const isProduction = process.env.NODE_ENV === 'production';

app.use(express.json());

const AMETIEST_SYSTEM_PROMPT = `You are Ametiest, the guide on Malychite's remote viewing site and inside the Scry practice platform. Malychite is an author, Wiccan teacher and Hermetic practitioner who trained in astral work as part of his high-priesthood initiation. He wrote the book *Journey Through Dimensions* and built Scry, an app for practicing remote viewing against real targets.

# Who you are
- Warm, steady and clear, like a good teacher who has done this work for years. You are encouraging but never gushing.
- You speak plainly. You explain terms the first time you use them.
- You keep answers short in chat: usually 2 to 5 sentences, or a short list when steps help. Offer to go deeper rather than writing an essay.
- You are an AI guide. If someone asks whether you are a person, say you are an AI assistant for Malychite's site and Scry.

# What you help with
1. **History.** The documented history of remote viewing research: the SRI program that began in the early 1970s under Russell Targ and Harold Puthoff, Ingo Swann's work on coordinate remote viewing, Pat Price, Joseph McMoneagle, and the U.S. Army and DIA programs that ran under names such as Gondola Wish, Grill Flame, Center Lane, Sun Streak and finally Stargate, which closed in 1995 and was later declassified. Present this as documented history, and be accurate. When you are not sure of a date or name, say so rather than guessing.
2. **Method.** Practical protocol: blind targets and target reference numbers, the cool-down before a session, ideograms, recording raw sensory data (colors, textures, temperatures, sounds, shapes) before naming anything, and declaring Analytic Overlay (AOL), meaning the mind's urge to guess what the target is. Teach people to write the AOL down, set it aside, and keep describing.
3. **Practice and mindset.** Building a routine, journaling sessions, giving honest feedback on hits and misses, handling frustration, and working through mental blocks such as performance pressure, front-loading, and the need to be right.
4. **Malychite's framework.** Remote viewing as a trainable skill that sits next to astral and dimensional work. Explain the difference simply: remote viewing is a structured, protocol-driven way of describing a target; astral travel is an experiential, out-of-body practice. Both train perception.

# Where to point people
- For the deeper theory, the dimensional framework and Malychite's own teaching, recommend *Journey Through Dimensions*.
- For hands-on practice with real blind targets and session logging, recommend Scry.
- Recommend each only when it genuinely fits the question, and never more than once per answer. Never pressure anyone to buy.

# Honesty and care
- Be truthful about the evidence. The government programs were real and are documented. Scientific opinion on the results is divided: some evaluations found effects worth further study, while others, including the 1995 review that ended Stargate, found the results not reliable enough for intelligence use. When asked, give both sides fairly and let people make up their own minds.
- Never promise results, guarantee accuracy, or claim that remote viewing can predict the future, find missing people, or replace professional advice.
- Do not help anyone use remote viewing to spy on, track or locate a specific private person.
- If someone describes distress, frightening experiences, losing track of what is real, or thoughts of harming themselves, set the lesson aside, respond with care, encourage them to talk with someone they trust or a professional, and in the U.S. mention they can call or text 988 for the Suicide and Crisis Lifeline.
- Stay on topic. If asked about something unrelated, answer briefly if it is harmless and bring the conversation back to remote viewing and practice.`;

function getFallbackAmetiestResponse(userMessage: string, sessionContext?: any): string {
  const lower = userMessage.toLowerCase();

  if (lower.includes('aol') || lower.includes('analytic') || lower.includes('overlay') || lower.includes('guess')) {
    return 'Analytic Overlay (AOL) is your mind\'s natural habit of trying to name or guess the target from a few sensory clues. When a concrete noun pops up—like "Eiffel Tower" or "bridge"—write "AOL:" followed by the word in the margin, set it aside, and return to raw colors, textures, and temperatures.';
  }

  if (lower.includes('ideogram') || lower.includes('stage 1') || lower.includes('first') || lower.includes('sketch')) {
    return 'An ideogram is a quick, spontaneous pen stroke made the moment you focus on the target coordinate. Instead of trying to draw a picture, let your hand move for a second or two and notice the basic feeling—whether it feels hard, fluid, rising, or flat. Would you like to try a quick cooldown and ideogram drill?';
  }

  if (lower.includes('stargate') || lower.includes('sri') || lower.includes('history') || lower.includes('targ') || lower.includes('puthoff') || lower.includes('swann')) {
    return 'Documented remote viewing research began in the early 1970s at Stanford Research Institute (SRI) under physicists Russell Targ and Harold Puthoff, with Ingo Swann developing the coordinate protocol. The U.S. military and DIA ran operational and research units under names like Grill Flame, Center Lane, Sun Streak, and finally Stargate until 1995. Evaluations remain divided between compelling anomalies and questions about intelligence reliability.';
  }

  if (lower.includes('astral') || lower.includes('dimension') || lower.includes('book') || lower.includes('malychite')) {
    return 'In Malychite\'s framework, remote viewing and astral work sit side by side as ways of training perception. Remote viewing uses a grounded, step-by-step protocol to describe a blind target on paper, while astral travel is an immersive out-of-body experience. For the deeper dimensional theory behind both, you can explore Malychite\'s book *Journey Through Dimensions*.';
  }

  if (sessionContext?.phase === 'revealed' && sessionContext?.targetName) {
    return `Looking at your unveiled session for ${sessionContext.code} (${sessionContext.targetName}, ${sessionContext.scorePercentage ?? 0}% match): focus on which raw sensory descriptors—like water, stone, or openness—were accurate, even if your analytical mind tried to build a different story around them. Every blind session calibrates your signal discrimination.`;
  }

  if (sessionContext?.code) {
    return `You are currently tuned to blind coordinate ${sessionContext.code}. Take a slow breath to settle your mind, make a quick spontaneous mark on the sketchpad, and log only raw sensations—temperature, texture, light, and shape—without trying to name the place.`;
  }

  return 'Welcome. I am Ametiest, the AI guide for Malychite\'s site and Scry. I can help you with the history of SRI and Stargate, the step-by-step viewing method (ideograms and declaring Analytic Overlay), or debriefing your practice sessions. What would you like to work on?';
}

app.post('/api/ametiest/chat', async (req: Request, res: Response) => {
  try {
    const { message, history = [], sessionContext } = req.body;

    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'Message is required' });
      return;
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      res.json({
        reply: getFallbackAmetiestResponse(message, sessionContext),
        source: 'fallback',
      });
      return;
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

    const contents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];
    const recentHistory = Array.isArray(history) ? history.slice(-8) : [];

    for (const turn of recentHistory) {
      if ((turn.role === 'user' || turn.role === 'model') && typeof turn.text === 'string') {
        contents.push({
          role: turn.role,
          parts: [{ text: turn.text }],
        });
      }
    }

    let contextualPrompt = message;
    if (sessionContext) {
      const ctxParts = [
        `Active Scry Phase: ${sessionContext.phase || 'practice'}`,
        sessionContext.code ? `Coordinate: ${sessionContext.code}` : '',
        sessionContext.selectedDescriptors?.length
          ? `Viewer's Logged Descriptors: ${sessionContext.selectedDescriptors.join(', ')}`
          : '',
        sessionContext.freeText ? `Viewer's Sensory Notes: "${sessionContext.freeText}"` : '',
        sessionContext.phase === 'revealed' && sessionContext.targetName
          ? `Unveiled Target: ${sessionContext.targetName} (${sessionContext.targetLocation || ''}) — Algorithmic Score: ${sessionContext.scorePercentage ?? 0}% (${sessionContext.verdict || ''})`
          : 'Target is currently BLIND (do not guess or reveal the target identity; help the viewer stay in raw sensory protocol).',
      ].filter(Boolean);

      contextualPrompt = `[Scry Live Session Context — ${ctxParts.join(' | ')}]\n\nViewer says: ${message}`;
    }

    contents.push({
      role: 'user',
      parts: [{ text: contextualPrompt }],
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents,
      config: {
        systemInstruction: AMETIEST_SYSTEM_PROMPT,
        temperature: 0.65,
        maxOutputTokens: 450,
      },
    });

    const reply = response.text || getFallbackAmetiestResponse(message, sessionContext);
    res.json({ reply, source: 'gemini' });
  } catch (error) {
    console.error('Ametiest chat error:', error);
    const fallback = getFallbackAmetiestResponse(req.body?.message || '', req.body?.sessionContext);
    res.json({ reply: fallback, source: 'fallback_error' });
  }
});

async function startServer() {
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Scry + Ametiest] Server listening on http://localhost:${PORT}`);
  });
}

startServer().catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
