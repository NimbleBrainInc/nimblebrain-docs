# NimbleBrain Docs

Mintlify documentation site. Config in `docs.json`.

## Structure

3-tab navigation: **Studio** | **Developers** | **Self-Hosted**

```
studio/           # Main product docs (NIRA, playbooks, agents, connections)
developers/       # SDK and API reference (for integrating with Studio)
  sdk/            # TypeScript SDK (@nimblebrain/sdk)
  api/            # REST API docs
  integrations/   # Client integrations (Claude Desktop, Cursor, etc.)
runtime/          # Self-hosted runtime (NimbleTools)
cli/              # ntcli command reference (under Self-Hosted tab)
```

### Product Mapping
- **Studio** = NimbleBrain SaaS platform
- **Developers** = SDK/API for integrating WITH Studio
- **Self-Hosted** = NimbleTools runtime + ntcli (for running your own instance)

## Key Files

- `docs.json` - Navigation (tabs inside `navigation` object)
- `studio/concepts.mdx` - Core terminology definitions
- `studio/agent-templates.mdx` - Seed agents (Riley, Alex, Casey)

## Internal Link Patterns

Links must match the file path structure:
- `/studio/mcp-servers/...` (not `/docs/mcp-servers/`)
- `/developers/...` (not `/dev/`)
- `/studio/claude-desktop` (not `/dev/claude-desktop-integration`)

## Domains

- `studio.nimblebrain.ai` - User-facing Studio URL
- `studio-api.nimblebrain.ai` - SDK/API endpoint
- `nimbletools.ai` - Marketing website
- `*.nimbletools.dev` - Infrastructure APIs (CLI/MCP)

## Verification

```bash
mintlify dev          # Local preview on port 3000
mintlify broken-links # Check internal links
```

## Source of Truth

For Studio features, check `/apps/studio/` in the monorepo:
- Agent templates: `docs/features/SEED_AGENTS.md`
- SDK: `/sdks/typescript/README.md`

## Conventions

- MDX with Mintlify components: `<Card>`, `<Accordion>`, `<Steps>`, `<Tabs>`
- Images: `/images/` folder, reference as `/images/filename.png`
- New pages must be added to `docs.json` navigation
- Icons: Only top-level sidebar groups should have icons (defined in `docs.json`). Individual pages should NOT have `icon:` in frontmatter.

## UTM Parameters

All Discord links should include UTM parameters for tracking:

```
https://www.nimblebrain.ai/discord?utm_source=docs&utm_campaign={section}
```

| Location | Campaign Value |
|----------|----------------|
| Home/Introduction | `home` |
| Studio pages | `studio` |
| Developers pages | `developers` |
| Self-Hosted pages | `self-hosted` |
| Navbar (global) | `navbar` |
| Footer (global) | `footer` |

When adding new Discord links, use the appropriate `utm_campaign` value based on which section the page belongs to.
