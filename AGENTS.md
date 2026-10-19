# Architecture rules

- Keep official contact destinations in src/lib/contact.ts so every chat and email link stays consistent.
- Mount the shared WhatsApp chat control outside the route table so it appears on every page, including unknown routes.
- Keep the shared anonymous client-results section in one component so Home and KasiConnect present consistent outcomes; never name clients or link client sites in it.
- Resolve both / and /index to the Home page so legacy home-page addresses do not show a 404.