# PocketBase Resources

## Knowledge

- [Official docs: Introduction](https://pocketbase.io/docs)
  The canonical starting point — what PocketBase is, download, first run. Use for: setup and orientation.
- [Official docs: Collections](https://pocketbase.io/docs/collections)
  Data modelling — base/auth/view collections, field types. Use for: anything schema-related.
- [Official docs: API rules and filters](https://pocketbase.io/docs/api-rules-and-filters)
  PocketBase's authorisation model — rules as filter expressions. Use for: access control, the filter syntax.
- [Official docs: Authentication](https://pocketbase.io/docs/authentication)
  Auth collections, password/OAuth2/OTP flows, tokens. Use for: all auth work.
- [Official docs: Extending PocketBase](https://pocketbase.io/docs/use-as-framework)
  The Go-framework path — importing PocketBase as a library, hooks, routes, migrations. Use for: everything in the Go-extension phase of the mission.
- [Official docs: Go overview](https://pocketbase.io/docs/go-overview/)
  The minimal main.go, project setup, build/run commands. Use for: starting any Go-extended project.
- [Official docs: Go event hooks](https://pocketbase.io/docs/go-event-hooks/)
  Full hook catalogue and the Bind/BindFunc/e.Next() conventions. Use for: choosing the right hook and its timing.
- [Official docs: Go routing](https://pocketbase.io/docs/go-routing/)
  Custom routes, middleware, request helpers on se.Router. Use for: adding endpoints beyond the CRUD API.
- [Official docs: Going to production](https://pocketbase.io/docs/going-to-production)
  Deployment, backups, reverse proxies, hardening. Use for: the deployment phase.
- [Official docs: Web APIs reference](https://pocketbase.io/docs/api-records)
  REST endpoint reference. Use for: exact request/response shapes when wiring the frontend.
- [Go package docs: pkg.go.dev/github.com/pocketbase/pocketbase](https://pkg.go.dev/github.com/pocketbase/pocketbase)
  API-level Go reference. Use for: exact signatures when writing hooks and routes.
- [GitHub releases](https://github.com/pocketbase/pocketbase/releases)
  Changelog. PocketBase is pre-1.0 (v0.39.x as of Aug 2026) — check here before upgrading; breaking changes do happen between minor versions.
- [JS SDK: github.com/pocketbase/js-sdk](https://github.com/pocketbase/js-sdk)
  The client library the React Router v8 frontend will use. README is the primary reference.

## Wisdom (Communities)

- [GitHub Discussions — pocketbase/pocketbase](https://github.com/pocketbase/pocketbase/discussions)
  The official Q&A forum; the maintainer (Gani Georgiev) answers directly. Use for: design questions, "is this the right way" checks.
- [r/pocketbase](https://reddit.com/r/pocketbase)
  Smaller but active. Use for: deployment war stories, stack pairings.

## Gaps

- No vetted resource yet for PocketBase + React Router v8 specifically (v8 shipped mid-2026; most tutorials cover older setups). Integration lessons will be built from the JS SDK README + React Router docs directly.
- No deep resource yet on PocketBase internals/source reading — find one if the mission grows a build-to-understand angle.
