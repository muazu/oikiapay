# Implementation Guide: OikiaPay Landing Page

**Goal:** Create a static, responsive landing page using Next.js, TypeScript, and Tailwind CSS, precisely replicating the structure and style of the provided "dappr" example image, using the specified copy and assets for **OikiaPay**. Implement language switching between English (EN) and Greek (EL).

**Tech Stack:**
*   Framework: Next.js (App Router preferred)
*   Language: TypeScript
*   Styling: Tailwind CSS
*   State Management (for language): React Context API or a simple `useState` hook at the page level initially.
*   Deployment Target: Vercel

---

## 1. Project Setup

1.  **Initialize Project:**
    ```bash
    npx create-next-app@latest oikiapay-landing --typescript --eslint --tailwind --src-dir --app --import-alias "@/*"
    ```
2.  **Navigate into Directory:**
    ```bash
    cd oikiapay-landing
    ```
3.  **Tailwind Configuration (`tailwind.config.ts`):**
    *   Define primary colors (e.g., a professional blue similar to dappr: `primary: '#5A67D8'`, adjust grays).
    *   Ensure content path includes `src/**/*.{js,ts,jsx,tsx,mdx}`.
    *   Consider adding a clean sans-serif font (e.g., Inter) via `@next/font/google`.
4.  **Clean Boilerplate:** Remove default content from `src/app/page.tsx` and `src/app/globals.css` (keep Tailwind directives).
5.  **Public Assets:** Create `public/` directory (if not exists) and place all provided assets (`logo.svg`, `hero-mockup.png`, icons, snippets) inside. Ensure the logo file is named appropriately (e.g., `oikiapay-logo.svg`).

---

## 2. Language Switching Implementation

1.  **Create Language Context (Recommended):**
    *   Create `src/context/LanguageContext.tsx`.
    *   Define a context (`LanguageContext`) with `language` ('en' | 'el') and `setLanguage` function.
    *   Create a provider component (`LanguageProvider`) that wraps `src/app/layout.tsx`. Use `useState` internally to manage the current language state ('el' default).
2.  **Create Text Content Store:**
    *   Create `src/lib/content.ts` (or similar).
    *   Define nested objects holding text strings for both 'en' and 'el' languages, matching the copy structure. **Crucially, update any copy text mentioning "[App Name]" to "OikiaPay" within this file.**
    *   ```typescript
        // Example structure within content.ts
        export const content = {
          en: {
            header: { login: 'Log In', signup: 'Sign Up Free' },
            hero: { headline: 'Stop Chasing Payments...', subtitle: 'The easiest way... All in one place with OikiaPay.' },
            // ... other sections using OikiaPay where needed
          },
          el: {
            header: { login: 'Σύνδεση', signup: 'Δωρεάν Εγγραφή' },
            hero: { headline: 'Σταματήστε το Κυνήγι...', subtitle: 'Ο ευκολότερος τρόπος... Όλα σε ένα μέρος με το OikiaPay.' },
            // ... other sections using OikiaPay where needed
          }
        };
        ```
3.  **Implement Language Switcher Component:**
    *   Create `src/components/LanguageSwitcher.tsx`.
    *   Use `useContext(LanguageContext)` to get current `language` and `setLanguage`.
    *   Render buttons or a dropdown to toggle between 'en' and 'el', calling `setLanguage` onClick. Style appropriately.
4.  **Consume Context in Components:**
    *   In components needing text (`Header`, `Hero`, etc.), import `useContext(LanguageContext)` and the `content` object.
    *   Access text dynamically: `content[language].hero.headline`.

---

## 3. Core Layout & Reusable Components

1.  **Main Layout (`src/app/layout.tsx`):**
    *   Wrap the `<body>` content with the `LanguageProvider`.
    *   Include `Header` and `Footer` components here.
2.  **Header Component (`src/components/Header.tsx`):**
    *   Use Tailwind Flexbox (`flex justify-between items-center`). Add padding (`px-4 py-3 md:px-8`).
    *   Left: Logo (`next/image` component recommended: `<Image src="/oikiapay-logo.svg" alt="OikiaPay Logo" width={120} height={40} />`). **Update src and alt text.**
    *   Right: Container (`div` with `flex items-center space-x-4`). Include:
        *   `<LanguageSwitcher />` component.
        *   Log In link (`next/link` with text from `content[language].header.login`). Style as a subtle link.
    *   Make responsive (consider mobile menu later if needed, initially just stack elements).
3.  **Footer Component (`src/components/Footer.tsx`):**
    *   Use Tailwind Flexbox/Grid for layout within a container (`py-8 px-4 md:px-8 bg-gray-100`).
    *   Include Logo (`next/image` again, smaller size, `alt="OikiaPay Logo"`).
    *   Navigation links (`next/link` for Privacy, Terms, Contact using text from `content`).
    *   Optionally repeat `<LanguageSwitcher />` (text link style).
    *   Copyright text (use `content`, ensure it mentions `OikiaPay`).
    *   Ensure responsiveness.
4.  **Button Component (`src/components/Button.tsx`):**
    *   Create a reusable button.
    *   Accept props: `variant` ('primary', 'secondary', 'link'), `size`, `className`, standard HTML button props.
    *   Use Tailwind classes for styling based on variant (e.g., `primary`: `bg-primary text-white px-6 py-2 rounded font-semibold hover:bg-primary-dark`).
5.  **Section Container (`src/components/SectionContainer.tsx`):**
    *   Component that wraps each major page section.
    *   Apply consistent vertical padding (`py-16 md:py-24`) and horizontal padding/max-width (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`).
    *   Accept `className` prop for section-specific background colors or styles.

---

## 4. Page Sections Implementation (`src/app/page.tsx`)

**(Wrap each section's content with `<SectionContainer>` unless noted. Ensure all text is pulled dynamically from the `content[language]` object which should contain "OikiaPay" where appropriate.)**

1.  **Hero Section (Section 1):**
    *   Use `SectionContainer` with potentially `pt-24 pb-16 md:pt-32 md:pb-24`.
    *   Use Tailwind Grid (`grid grid-cols-1 md:grid-cols-2 gap-8 items-center`).
    *   **Left Column:**
        *   Headline (`h1` tag, large text, bold - `text-4xl md:text-5xl lg:text-6xl font-bold`). Use `content[language].hero.headline`.
        *   Sub-headline (`p` tag, medium text, lighter color - `text-lg text-gray-600 mt-4`). Use `content[language].hero.subtitle`.
        *   CTA Button (`Button` component, `variant='primary'`, `mt-8`). Use `content[language].header.signup` (or specific hero CTA text). Link to signup page (e.g., `/signup`).
    *   **Right Column:**
        *   Hero Mockup Image (`next/image` component: `<Image src="/hero-mockup.png" alt="OikiaPay app dashboard mockup" width={600} height={450} className="rounded-lg shadow-xl" />`). **Update alt text.** Ensure responsiveness.

2.  **Features/Why Choose Us (Section 2):**
    *   Use `SectionContainer`.
    *   Use Tailwind Grid (`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`).
    *   **Left Column (Text Content):**
        *   Title (`h2`, `text-3xl md:text-4xl font-bold`). Use `content[language].whyChoose.title`.
        *   Sub-title (`p`, `text-lg text-gray-600 mt-4`). Use `content[language].whyChoose.subtitle`.
        *   Feature Blocks Container (`div` with `mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6`).
        *   **For each Feature Block:** (Icon, Title, Description using `content`)
    *   **Right Column (Visual):** Placeholder or graphic.

3.  **How It Works (Section 3):**
    *   Use `SectionContainer`, possibly with a light background (`bg-gray-50`).
    *   Title (`h2`, centered). Use `content[language].howItWorks.title`.
    *   Sub-title (`p`, centered). Use `content[language].howItWorks.subtitle`.
    *   Steps Container (`div` `mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`).
    *   **For each Step:** (Number/Icon, Description using `content`)

4.  **Features for Roles (Section 4):**
    *   Use `SectionContainer`.
    *   Optional Overall Title (`h2`, centered).
    *   Container (`div` `mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start`).
    *   **Left Column (Admin):**
        *   Visual (`next/image` for `admin-feature-snippet.png`, `alt="OikiaPay admin feature"`). **Update alt text.**
        *   Title (`h3`). Use `content[language].roles.admin.title`.
        *   Bullet point list (`ul`). Use `content[language].roles.admin.bullets`.
    *   **Right Column (Tenant):**
        *   Visual (`next/image` for `tenant-feature-snippet.png`, `alt="OikiaPay tenant feature"`). **Update alt text.**
        *   Title (`h3`). Use `content[language].roles.tenant.title`.
        *   Bullet point list (`ul`). Use `content[language].roles.tenant.bullets`.

5.  **Final CTA (Section 5):**
    *   Use `SectionContainer`, potentially with primary color background (`bg-primary text-white`).
    *   Center content (`text-center`).
    *   Title (`h2`). Use `content[language].finalCta.title`.
    *   Sub-title (`p`). Use `content[language].finalCta.subtitle`.
    *   CTA Button (`Button` component, `variant='secondary'`). Use `content[language].finalCta.buttonText`. Link to `/signup`.

---

## 5. Final Polish & Review

1.  **Responsiveness Check:** Thoroughly test the page on different screen sizes.
2.  **Asset Integration:** Ensure all assets are correctly referenced, including the **OikiaPay** logo, and have appropriate `alt` text mentioning **OikiaPay**.
3.  **Link Verification:** Ensure all buttons and links point to the correct URLs.
4.  **Language Toggling:** Test the language switcher thoroughly. Ensure all text content updates correctly, including references to **OikiaPay**.
5.  **Accessibility:** Perform basic checks (semantic HTML, color contrast, keyboard navigation, `alt` text).
6.  **Code Cleanup:** Remove unused variables, logs, comments. Format code.

---