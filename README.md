# NimbleBrain Documentation

Mintlify-powered documentation site for the NimbleBrain platform.

**Live site:** https://docs.nimblebrain.ai

## Tech Stack

- **Platform:** Mintlify
- **Format:** MDX (Markdown + JSX)
- **Config:** `docs.json`

## Directory Structure

```
docs/
├── docs.json          # Mintlify configuration (navigation, theme, colors)
├── introduction.mdx   # Landing page
├── studio/            # NimbleBrain Studio documentation
├── cli/               # CLI tool documentation
├── runtime/           # Runtime/server documentation
├── dev/               # Developer guides
├── mcp-servers/       # MCP server documentation
└── images/            # Static assets
```

## Development

```bash
# Install Mintlify CLI
npm i -g mintlify

# Start local preview
mintlify dev

# Check for broken links
mintlify broken-links
```

## Configuration

### docs.json Structure

- `navigation.groups` - Sidebar navigation
- `colors` - Brand colors (primary: #0070ff)
- `logo` - Light/dark mode logos
- `navbar` - Top navigation links
- `footer.socials` - Social links

## Content Guidelines

### Writing Style
- Use clear, concise language
- Include code examples for all features
- Start with "Quick Start" for new sections
- Use callouts for important notes

### MDX Components
- `<CodeGroup>` - Tabbed code blocks
- `<Card>` - Feature cards
- `<Accordion>` - Collapsible sections
- `<Tabs>` - Content tabs

### Images
- Store in `/images/` directory
- Use descriptive filenames
- Reference as `/images/filename.png`

## Deployment

Documentation deploys automatically via Mintlify when changes are pushed to main.

## Related Repositories

- **apps/studio** - NimbleBrain Studio web application
- **sdks/typescript** - TypeScript SDK (`@nimblebrain/sdk`)
- **CLI** - `@nimbletools/ntcli` npm package
