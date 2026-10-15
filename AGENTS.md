# Architecture rules

- Keep official contact destinations in src/lib/contact.ts so every chat and email link stays consistent.
- Mount the shared WhatsApp chat control outside the route table so it appears on every page, including unknown routes.