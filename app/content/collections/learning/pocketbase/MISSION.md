# Mission: Building with PocketBase

## Why

Ilango is starting a new product (not yet named — separate from Ink and Kobun)
and wants PocketBase as its backend: extended with custom Go code, serving a
React Router v8 frontend. Learning PocketBase properly means the new product
gets a backend he fully understands and can bend, rather than a black box.

## Success looks like

- Run and configure a PocketBase instance confidently: collections, API rules, auth, files.
- Extend PocketBase as a Go framework — custom routes, event hooks, migrations — matching how the new product will actually be built.
- Wire a React Router v8 frontend to it with the JS SDK: auth flows, CRUD, realtime subscriptions.
- Deploy a production instance (single binary + SQLite, backups, reverse proxy).

## Constraints

- Full-time day job; this is side-project time. Lessons must be short and finishable in one sitting.
- Already writes Go (Ink) and React — teach PocketBase, not the languages.
- Prefers building to understand; hands-on over theory.

## Out of scope

- The JS (Goja) extension path — Go extension is the chosen route.
- Comparing/evaluating alternative BaaS tools (Supabase, Firebase). Decision is made.
- Frontend fundamentals (React, routing) — only the PocketBase integration points.
