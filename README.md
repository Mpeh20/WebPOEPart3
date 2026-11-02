# CTARS Website Project — Web Design & Development (WEDE5020)

## Overview
This repository contains the Portfolio of Evidence (PoE) for **Web Design & Development (WEDE5020)**. The project is the design, front-end development, and optimization of a website for the **Cape Town Animal Rescue Society (CTARS)**.

- **Part 1:** Project Initiation and Planning.
- **Part 2:** Designing the Visuals (CSS Styling & Responsive Design).
- **Part 3:** Enhancing Functionality (JavaScript) and SEO.

---

## Project Details

| Field | Value |
|-------|-------|
| **Subject Name** | Web Design & Development |
| **Subject Code** | WEDE5020 |
| **Student Name** | Vuyolwethu Ngwalangwala |
| **Student Number** | [Ngwalangwala] |
| **Group** | 1 |
| **Assignment** | Part 1, Part 2, & Part 3 |

---

## Live Website
The website is deployed via GitHub Pages and can be viewed here:
**[https://your-username.github.io/ctars-website/](https://your-username.github.io/ctars-website/)**
*(Replace with your actual link)*

---

## Changelog

### [Part 3] – 27 August 2025
**1. JavaScript Form Validation & AJAX**
- **Feedback addressed:** Forms required client-side validation and a better submission experience.
- **Change made:** Implemented JavaScript validation for email format, required fields, and consent checkboxes on `enquiry.html` and `contact.html`. Added a simulated AJAX submission with a loading spinner and success message.
- **Files affected:** `js/script.js`, `enquiry.html`, `contact.html`

**2. Interactive Gallery (Modal Lightbox)**
- **Feedback addressed:** The pet gallery needed interactive features.
- **Change made:** Added a modal lightbox to the pet gallery on `services.html`. Clicking "View Profile" opens a modal displaying the pet's details.
- **Files affected:** `services.html`, `js/script.js`, `css/style.css`

**3. Dynamic Content (Search & Filter)**
- **Feedback addressed:** The adoption gallery needed a way to sort and search.
- **Change made:** Added a live search bar alongside the existing filter buttons. Pet cards now dynamically hide/show based on search terms and selected categories.
- **Files affected:** `services.html`, `js/script.js`

**4. Search Engine Optimization (SEO)**
- **Feedback addressed:** Website needed to be optimized for search engines.
- **Change made:** 
  - Added descriptive `<title>` and `<meta name="description">` tags to all pages.
  - Added `robots.txt` to allow crawling.
  - Added `sitemap.xml` to define website structure.
  - Used descriptive `alt` text for all images.
  - Utilized semantic HTML tags (`<header>`, `<main>`, `<footer>`).
- **Files affected:** All HTML files, `robots.txt`, `sitemap.xml`

### [Part 2] – 14 August 2026
- External stylesheet created (`css/style.css`).
- CSS reset, base styles, and design tokens applied.
- Typography scale, layout (Grid + Flexbox), and visual styles applied.
- Responsive design with media queries at 600 / 900 / 1200px.
- Responsive images with `srcset` / `sizes`.

### [Part 1] – 14 August 2026
- Initial project proposal and sitemap completed.

---

## Technical Features (Part 3)

### JavaScript Functionality
- **Form Validation:** Custom error messages displayed directly below invalid input fields.
- **Modal Lightbox:** Displays detailed pet information without navigating away from the page.
- **Dynamic Search:** Live filtering of pet cards based on user input.

### SEO Best Practices
- **On-Page SEO:** Keywords naturally integrated into headings and paragraphs. Semantic HTML used throughout.
- **Meta Tags:** Unique titles and descriptions for every page.
- **Off-Page SEO:** Social media links embedded in the footer to promote sharing.
- **Files:** `robots.txt` instructs crawlers, and `sitemap.xml` maps the site.

---

## References

### Part 3 References
- MDN Web Docs. (2026). *Client-side form validation.*
  https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
- MDN Web Docs. (2026). *Document Object Model (DOM).*
  https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
- Google Search Central. (2026). *Search Engine Optimization (SEO) Starter Guide.*
  https://developers.google.com/search/docs/fundamentals/seo-starter-guide

### Part 2 References
- MDN Web Docs. (2026). *CSS: Cascading Style Sheets.* Mozilla.
- CSS-Tricks. (2026). *A Complete Guide to Flexbox.*
- CSS-Tricks. (2026). *A Complete Guide to Grid.*

### Part 1 References
- Unsplash / Pexels — free stock photography.
- Google Fonts — Playfair Display and Open Sans.

---

## How to Use

1. Clone the repository.
2. Open `index.html` in your browser.
3. Test the search bar and filter buttons on the **Services** page.
4. Click "View Profile" on a pet to see the modal.
5. Try submitting the forms on **Enquiry** and **Contact** with invalid data to see the JavaScript validation in action.
