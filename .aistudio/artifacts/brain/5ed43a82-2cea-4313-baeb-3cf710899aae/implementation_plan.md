# Skry — Public Web Experience, Training Manual & Operational Platform

A comprehensive marketing, educational, and e-commerce portal for **Skry** and its companion training manual *"Remote Viewing: Inner Vision, Outer Knowledge"* by Malychite. Features the official sacred celestial Eye emblem as the brand logo, favicon, and hero artwork, alongside a dedicated manual marketing page with Stripe checkout, instant post-purchase book download, 1-month app membership grant, and a clean separation from the operational training container.

> [!IMPORTANT]
> **Branding & Visual Directives:**
> 1. **Brand Identity**: The application and platform name is officially **Skry** (spelled with a **k** across all interfaces, navigation, page titles, and metadata).
> 2. **Master Visual Emblem**: The user-provided sacred artwork (`/public/assets/aistudio/60D8DF35-AA1F-4DB0-8999-72D37966F48B-IMG_STYLE_4b45c9a3.jpg`) is integrated as:
>    - **Favicon**: Set in `index.html` as the browser shortcut icon.
>    - **Brand Logo**: Rendered in the top navigation bar (both website and training app) beside the wordmark.
>    - **Hero Feature Artwork**: The luminous centerpiece of the landing experience and book marketing presentation.
> 3. **Dedicated Book Showcase Page**: A high-conversion marketing page for the official manual *"Remote Viewing: Inner Vision, Outer Knowledge"* by Malychite (73 pages, 20 chapters, 5 parts), showcasing its curriculum, Hermetic foundations, CRV protocols, and companion app exercises.
> 4. **Stripe Checkout & Configurable Account**: "Get the Book" CTA linked to a configurable Stripe payment gateway with test-mode simulation and customizable direct checkout URL.
> 5. **Post-Purchase Download & Membership Unlock**: After payment confirmation:
>    - Direct download of the full PDF manual (`/public/assets/aistudio/SCRY_Journey_Through_Dimensions_746ff621.pdf`).
>    - **1 Month of Skry App Membership** automatically applied to the active profile (granting Adept status, active 30-day training program access, and member badge).
> 6. **Clean Container Decoupling**: The public website container is kept strictly separate from the live training app container.

---

## 1. Overview & Core Concept

**Skry** is an empirical remote viewing platform designed to calibrate non-local perception through reproducible double-blind protocols. The companion manual, written by elder practitioner Malychite, provides the foundational theory, history, and spiritual philosophy that empowers the digital training app.

The site architecture is organized into two primary environments:
- **Public Web Portal**:
  - **Overview / Landing**: Hero featuring the sacred celestial Eye centerpiece, core features bento, SRI/Stargate historical chronicle, 6-stage CRV protocol, and ethics.
  - **Training Manual Showcase (`/manual`)**: Chapter outline, book preview, author notes on Malychite, pricing with 1-month complimentary app membership.
  - **Post-Purchase Download & Member Activation (`/download`)**: Secure download button for the PDF book, license key generation, and 1-month membership activation.
  - **Authentication Modal**: Sign Up & Login with persistent `localStorage` viewer profiles.
- **Skry Operational Training Container**:
  - Live session lab: Blind coordinates, ideogram canvas, 7 sensory descriptor channels, blind 4-choice judging, celestial starburst celebrations, Ametiest AI debriefs, and personal calibration logs.
  - Persistent return button (`← Skry Overview & Manual`) to switch back to the public website without losing session state.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                                   Skry Architecture                                    │
│                                                                                        │
│   ┌──────────────────────────────────────────────────┐   ┌─────────────────────────┐   │
│   │               Public Web Container               │   │ Training App Container  │   │
│   │                                                  │   │                         │   │
│   │  ┌───────────────┐ ┌───────────────┐ ┌────────┐  │   │ • Blind Coordinate Lab  │   │
│   │  │ Landing &     │ │ Manual        │ │ Book   │  │──>│ • Ideogram Sketchpad    │   │
│   │  │ Protocol Tour │ │ Showcase Page │ │ Access │  │   │ • Sensory Descriptors   │   │
│   │  └──────┬────────┘ └───────┬───────┘ └────┬───┘  │   │ • 4-Choice Blind Judge  │   │
│   │         │                  │              │      │<──│ • Starburst Hit FX      │   │
│   │         ▼                  ▼              │      │   │ • Ametiest AI Mentor    │   │
│   │  ┌───────────────────────────────────┐    │      │   │ • 30-Day Training Track │   │
│   │  │   Stripe Checkout & 1-Month       │    │      │   │ • Return to Web Nav     │   │
│   │  │       Membership Unlock           ├────┘      │   └─────────────────────────┘   │
│   │  └───────────────────────────────────┘           │                                 │
│   └──────────────────────────────────────────────────┘                                 │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. User Experience & Visual Design

### A. Master Emblem & Logo Integration
- **Emblem Asset**: `/assets/aistudio/60D8DF35-AA1F-4DB0-8999-72D37966F48B-IMG_STYLE_4b45c9a3.jpg`.
- **Top Bar Brand Lockup**: A circular gold-trimmed badge rendering the Eye of Horus emblem beside the bold display wordmark `SKRY`.
- **Hero Centerpiece**: High-impact framed display with golden aura glow, deep lapis drop shadows, and subtle floating orbital ring accents.
- **Favicon**: Placed directly in `<head>` of `index.html`.

### B. Dedicated Book Showcase Page (`Remote Viewing: Inner Vision, Outer Knowledge`)
- **Hero & Presentation**: Book showcase featuring the sacred artwork and subtitle *"A Companion to the Skry Training App by Malychite"*.
- **The Value Proposition**: "The book gives you the *why* and the *how*; the app gives you the targets, the timer, the tools, and the record."
- **Curriculum & What You Learn (Without Giving Away the Whole Book)**:
  - *Part I: Foundations*: Brainwave tuning (Alpha & Theta), binaural soundscapes, setting space, and the pre-session checklist.
  - *Part II: The Protocol*: Stage 1 ideogram kinematics, the 7 sensory channels, and quenching Analytical Overlay (AOL).
  - *Part III: Honest Feedback*: Blind 4-way Judge Mode, reading match statistics, beating the 25% chance baseline.
  - *Part IV: Beyond the Coordinate*: The 7 Hermetic principles (*The All Is Mind, Correspondence, Vibration*), the 4 Doors (CRV, Astral/OBE, Hypnagogic, Quiet Float), and dream target precognition.
  - *Part V: The 30-Day Program*: Structured daily schedule to take a viewer from initial ideograms to the 50-session Century Horizon.
- **Offer Box & Perks**:
  - Full 73-page PDF Manual download.
  - Printable Session Log Template (Appendix B).
  - Quick Descriptor Reference (Appendix A) and 18-badge achievement chart.
  - **Bonus Included**: **1 Month of Skry App Membership** (clears tier locks, enables 30-day curriculum tracker).
  - **"Get the Book ($19)" CTA**: Links to Stripe with instant test-mode toggle.

### C. Post-Purchase Download & Membership Portal
- Displays upon successful payment return or simulation.
- Direct download button streaming `/assets/aistudio/SCRY_Journey_Through_Dimensions_746ff621.pdf` as `Skry-Remote-Viewing-Manual.pdf`.
- "Activate 1-Month Membership" button which writes membership expiration (`Date.now() + 30 days`) into `localStorage` and immediately unlocks member features.

### D. Visual Identity & Palette
- **Obsidian Void Canvas (`#080914`)**: Subtle pulsing celestial light and nebula dust.
- **Teal / Cyan Luster (`#2DD4BF`)**: Active coordinates, ideogram marks, and primary buttons.
- **Amethyst Violet & Royal Gold (`#A855F7`, `#F59E0B`)**: Book accents, Hermetic wisdom sections, and gold leaf highlights matching the master artwork.
- **Typography**: `Cinzel` for headings and book titling, `Plus Jakarta Sans` for body copy, and `JetBrains Mono` for coordinates and pricing.

---

## 3. Technical Architecture & Component Structure

```
src/
├── components/
│   ├── landing/
│   │   ├── LandingWebsite.tsx         # Root container for public website
│   │   ├── WebsiteNav.tsx             # 3-zone celestial navigation bar with Skry emblem
│   │   ├── HeroSection.tsx            # Hero with master sacred Eye artwork & dual CTAs
│   │   ├── BookShowcasePage.tsx       # Dedicated book marketing page
│   │   ├── BookDownloadPage.tsx       # Post-payment PDF download & membership activation
│   │   ├── StripeCheckoutModal.tsx    # Stripe redirect handler & simulator
│   │   ├── FeaturesBento.tsx          # 6 core app features
│   │   ├── HistorySection.tsx         # SRI & Stargate timeline
│   │   ├── MethodologySection.tsx     # 6-stage CRV protocol
│   │   ├── ComplianceSection.tsx      # Ethics & double-blind standards
│   │   ├── AuthModal.tsx              # Sign Up / Sign In modal
│   │   └── WebsiteFooter.tsx          # Editorial footer
│   └── ... (Existing training app components: ViewingPhase, RevealPhase, Sketchpad, etc.)
```

### State Integration in `App.tsx`
- `activeWebPage`: `'overview' | 'book' | 'download'`
- `containerMode`: `'website' | 'app'`
- `membership`: `{ active: boolean, expiresAt: string | null }`

---

## 4. Execution Steps (Post-Approval)

1. **Favicon & Meta Update**:
   - Update `index.html` title to *"Skry — Blind Remote Viewing Testing & Training"*, set favicon to `/assets/aistudio/60D8DF35-AA1F-4DB0-8999-72D37966F48B-IMG_STYLE_4b45c9a3.jpg`, and update `metadata.json` to reflect "Skry".
2. **Build Book & Stripe Components**:
   - `BookShowcasePage.tsx`: Full marketing presentation of *"Remote Viewing: Inner Vision, Outer Knowledge"* featuring the sacred artwork.
   - `StripeCheckoutModal.tsx`: Stripe payment handler with customizable link and simulated checkout success.
   - `BookDownloadPage.tsx`: Secure file download trigger for `/assets/aistudio/SCRY_Journey_Through_Dimensions_746ff621.pdf` and 1-month membership activation.
3. **Build Landing Website Sections**:
   - `WebsiteNav.tsx`: 3-zone header with Skry emblem logo, links to *Features*, *Manual*, *History*, *Methodology*, *Ethics*, and *Launch App*.
   - `HeroSection.tsx`: Master emblem artwork display with glowing golden aura, clear value proposition, and action buttons.
   - `FeaturesBento.tsx`, `HistorySection.tsx`, `MethodologySection.tsx`, `ComplianceSection.tsx`, and `WebsiteFooter.tsx`.
   - `AuthModal.tsx` for persistent user registration and sign-in.
4. **Connect Root `App.tsx` & Header**:
   - Manage container separation (`containerMode === 'website' ? <LandingWebsite /> : <TrainingApp />`).
   - Sync 1-month membership grant into training app and display membership indicator in `Header.tsx`.
5. **Compile & Verify**:
   - Run `compile_applet` to ensure zero compilation or TypeScript errors.

---

## 5. Website Imagery Generation & Integration (Completed)

Custom, high-fidelity visual assets generated adhering to the `frontend-design` constitution:
- **`hero_celestial_horizon`**: Ethereal cosmic non-local horizon panorama with subtle stardust and dimensional depth, integrated as the textured atmospheric backdrop in `HeroSection.tsx`.
- **`crv_ideogram_drafting`**: Close-up documentary photography of an architect drafting rapid reflex ideograms and wave pulses with a graphite pencil on archival parchment, integrated into `MethodologySection.tsx` and `FeaturesBento.tsx`.
- **`sri_historical_lab`**: 1970s Stanford Research Institute physics laboratory interior with vector oscilloscopes and shielded Faraday room, integrated as a featured archival spotlight in `HistorySection.tsx`.
- **`manual_book_monograph`**: Editorial studio photograph of the premium hardcover cloth-bound monograph titled with gold foil sacred geometry on an oiled walnut desk with brass compass and optical prism, integrated into `BookShowcasePage.tsx` and `BookDownloadPage.tsx`.

Verified: `compile_applet` passed and `lint_applet` (`tsc --noEmit`) completed with zero errors.
