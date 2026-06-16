> [!WARNING]
> **This repository is archived and no longer maintained.**
>
> The NimbleBrain documentation now lives **inside the runtime repo** at [`NimbleBrainInc/nimblebrain` → `docs/`](https://github.com/NimbleBrainInc/nimblebrain/tree/main/docs), so docs ship in lockstep with the code that they describe.
>
> **👉 Active location:** [github.com/NimbleBrainInc/nimblebrain/tree/main/docs](https://github.com/NimbleBrainInc/nimblebrain/tree/main/docs) · Published site unchanged: **[docs.nimblebrain.ai](https://docs.nimblebrain.ai)**
>
> Issues and pull requests are closed. Please open any new docs reports against the runtime repository.

---

# NimbleBrain Docs

[![Deploy to GitHub Pages](https://github.com/NimbleBrainInc/nimblebrain-docs/actions/workflows/deploy.yml/badge.svg)](https://github.com/NimbleBrainInc/nimblebrain-docs/actions/workflows/deploy.yml)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

Documentation site for [NimbleBrain](https://nimblebrain.ai) — the composable MCP orchestrator and app host.

**[docs.nimblebrain.ai](https://docs.nimblebrain.ai)**

## Local Development

Prerequisites: [Bun](https://bun.sh) (or Node.js 22+)

```bash
bun install
bun run dev       # Start dev server at localhost:4321
bun run build     # Production build to dist/
bun run preview   # Preview the production build
```

## Deployment

Pushes to `main` automatically deploy to GitHub Pages via the [deploy workflow](.github/workflows/deploy.yml).

## License

Content is licensed under [CC BY 4.0](LICENSE).
