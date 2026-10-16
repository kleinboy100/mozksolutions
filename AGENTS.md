# Architecture rules

- Keep official contact destinations in src/lib/contact.ts so every chat and email link stays consistent.
- Mount the shared WhatsApp chat control outside the route table so it appears on every page, including unknown routes.
- Keep the shared Nosty's client-results section in one component so Home and KasiConnect present consistent outcomes; never name clients or link client sites in it.