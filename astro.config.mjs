// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics';

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.nimblebrain.ai',
  integrations: [
    starlight({
      title: 'NimbleBrain Docs',
      favicon: '/favicon.ico',
      customCss: ['./src/styles/custom.css'],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/NimbleBrainInc/nimblebrain' },
        { icon: 'discord', label: 'Discord', href: 'https://nimblebrain.ai/discord' },
        { icon: 'x.com', label: 'X', href: 'https://x.com/nimblebraininc' },
      ],
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Literata:ital,opsz,wght@0,7..72,400;0,7..72,500;0,7..72,600;0,7..72,700;1,7..72,400;1,7..72,500;1,7..72,600&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Mono:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap',
          },
        },
      ],
      plugins: [
        starlightSidebarTopics([
          {
            label: 'Getting Started',
            link: '/',
            icon: 'rocket',
            items: [
              { label: 'What is NimbleBrain?', slug: 'index' },
              { label: 'Quickstart', slug: 'quickstart' },
              { label: 'Installation', slug: 'installation' },
              { label: 'Core Concepts', slug: 'concepts' },
            ],
          },
          {
            label: 'Using NimbleBrain',
            link: '/using/chat',
            icon: 'laptop',
            items: [
              { label: 'Chat', slug: 'using/chat' },
              { label: 'Installing Apps', slug: 'using/installing-apps' },
              { label: 'Managing Apps', slug: 'using/managing-apps' },
              { label: 'Skills', slug: 'using/skills' },
              { label: 'Conversations', slug: 'using/conversations' },
              { label: 'Multi-Agent Delegation', slug: 'using/delegation' },
              { label: 'Telemetry', slug: 'using/telemetry' },
            ],
          },
          {
            label: 'Building Apps',
            link: '/apps/overview',
            icon: 'puzzle',
            items: [
              { label: 'App Overview', slug: 'apps/overview' },
              { label: 'Synapse SDK', slug: 'apps/synapse' },
              { label: 'Manifest Reference', slug: 'apps/manifest' },
              { label: 'MCP App Bridge', slug: 'apps/bridge' },
              { label: 'UI Resources', slug: 'apps/ui-resources' },
              { label: 'Theming', slug: 'apps/theming' },
              { label: 'Placements & Navigation', slug: 'apps/placements' },
              { label: 'Local Development', slug: 'apps/local-dev' },
              { label: 'Publishing to mpak', slug: 'apps/publishing' },
              { label: 'Example: Hello World App', slug: 'apps/hello-world' },
            ],
          },
          {
            label: 'CLI',
            link: '/cli/overview',
            icon: 'seti:shell',
            items: [
              { label: 'Overview', slug: 'cli/overview' },
              { label: 'nb (Interactive)', slug: 'cli/interactive' },
              { label: 'nb serve', slug: 'cli/serve' },
              { label: 'nb dev', slug: 'cli/dev' },
              { label: 'nb bundle', slug: 'cli/bundle' },
              { label: 'nb skill', slug: 'cli/skill' },
              { label: 'nb config', slug: 'cli/config' },
              { label: 'nb status', slug: 'cli/status' },
              { label: 'nb reload', slug: 'cli/reload' },
              { label: 'nb telemetry', slug: 'cli/telemetry' },
            ],
          },
          {
            label: 'API',
            link: '/api/overview',
            icon: 'open-book',
            items: [
              { label: 'Overview', slug: 'api/overview' },
              { label: 'Authentication', slug: 'api/authentication' },
              { label: 'Chat', slug: 'api/chat' },
              { label: 'Apps', slug: 'api/apps' },
              { label: 'Conversations', slug: 'api/conversations' },
              { label: 'Tools', slug: 'api/tools' },
              { label: 'Events', slug: 'api/events' },
              { label: 'Workspace', slug: 'api/workspace' },
              { label: 'Health', slug: 'api/health' },
            ],
          },
          {
            label: 'Configuration',
            link: '/config/nimblebrain-json',
            icon: 'setting',
            items: [
              { label: 'nimblebrain.json', slug: 'config/nimblebrain-json' },
              { label: 'Bundle Configuration', slug: 'config/bundles' },
              { label: 'Agent Profiles', slug: 'config/agents' },
              { label: 'Logging', slug: 'config/logging' },
              { label: 'Environment Variables', slug: 'config/environment' },
            ],
          },
          {
            label: 'Deployment',
            link: '/deploy/docker',
            icon: 'cloud-download',
            items: [
              { label: 'Docker Compose', slug: 'deploy/docker' },
              { label: 'Kubernetes (Helm)', slug: 'deploy/kubernetes' },
              { label: 'Security', slug: 'deploy/security' },
            ],
          },
        ]),
      ],
    }),
  ],
});
