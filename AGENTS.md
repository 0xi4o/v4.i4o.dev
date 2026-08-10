<!--VITE PLUS START-->

# Using Vite+, the Unified Toolchain for the Web

This project is using Vite+, a unified toolchain built on top of Vite, Rolldown, Vitest, tsdown, Oxlint, Oxfmt, and Vite Task. Vite+ wraps runtime management, package management, and frontend tooling in a single global CLI called `vp`. Vite+ is distinct from Vite, and it invokes Vite through `vp dev` and `vp build`. Run `vp help` to print a list of commands and `vp <command> --help` for information about a specific command.

Docs are local at `node_modules/vite-plus/docs` or online at https://viteplus.dev/guide/.

## Review Checklist

- [ ] Run `vp install` after pulling remote changes and before getting started.
- [ ] Run `vp check` and `vp test` to format, lint, type check and test changes.
- [ ] Check if there are `vite.config.ts` tasks or `package.json` scripts necessary for validation, run via `vp run <script>`.
- [ ] If setup, runtime, or package-manager behavior looks wrong, run `vp env doctor` and include its output when asking for help.

<!--VITE PLUS END-->

# UI & Styling — ShadcnUI + Kami Design System

This project's visual language is the **Kami Design System**, encoded entirely as ShadcnUI
design tokens in `app/app.css` (`:root` = light, `.dark` = dark). Kami is: **warm parchment
canvas, a single ink-blue accent (`--primary` `#1B365D`), serif-led hierarchy, warm
yellow-brown neutrals (never cool grays), and no hard drop shadows.** Keep that token layer
the single source of truth. Follow these rules for all UI work:

- **Build UI from shadcn components.** Use the components in `~/components/ui/*`. Add new
  ones with the shadcn CLI (`pnpm dlx shadcn@latest add <component>`) rather than hand-rolling
  buttons, inputs, dialogs, etc. Compose with `cn()` from `~/lib/utils`. Components are built
  on Base UI (`@base-ui/react`), style `base-mira`.
- **Style only with semantic token classes.** Use `bg-background`, `text-foreground`,
  `bg-card`, `bg-primary`/`text-primary-foreground`, `bg-secondary`, `bg-muted`/
  `text-muted-foreground`, `bg-accent`, `text-destructive`, `border-border`, `ring-ring`,
  `bg-sidebar*`, `bg-chart-*`, etc. **Never** hardcode colors — no `bg-white`, `text-gray-900`,
  `#hex` values, or raw Tailwind color utilities (`bg-zinc-*`, `text-blue-*`). Hardcoded colors
  bypass the Kami tokens and break dark mode.
- **Dark mode is automatic.** It is class-based (`.dark` on a root element). Because you style
  with tokens, components adapt to light/dark with no per-component dark: overrides for color.
- **Radius via `rounded-*`.** The radius scale (`rounded-sm/md/lg/xl/...`) is mapped to Kami's
  4→6→8→12pt scale off `--radius`. Don't set arbitrary pixel radii.
- **Spacing** uses Tailwind's default 4px scale, which already matches Kami's 4pt base unit.
- **Type is serif-led.** The default font (`--font-sans`) is Kami's Charter serif stack; code
  uses `--font-mono` (JetBrains Mono). Don't reintroduce a UI sans font.
- **Restraint:** ink-blue (`primary`) is the single accent hue. Following the mole.fit Kami
  reference site, it carries the **reading system** — headings, links, and inline code all
  render ink-blue — while **body text is warm dark-warm** (`--foreground`) and every other
  surface stays warm neutral. Introduce **no second chromatic hue** and no cool grays. Prefer
  subtle depth (borders, whisper shadow) over hard drop shadows.

## Agent skills

### Issue tracker

Issues live in this repo's GitHub Issues (`0xi4o/v4.i4o.dev`), managed with the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

The five canonical triage roles, using the default label strings. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context — one `CONTEXT.md` and `docs/adr/` at the repo root. See `docs/agents/domain.md`.
