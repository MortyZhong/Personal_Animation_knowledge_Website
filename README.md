# My Learning Map

A personal universe for exploring computer science. Expand knowledge trees, review question cards, and switch character themes to connect ideas across subjects.

Built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lucide. This is a completely static application: no backend, accounts, database, or server-side routing.

## Getting started

Install a currently supported Node.js LTS release and its accompanying npm version. Then run these commands in the project directory:

```bash
npm install
npm run dev
```

Open the address shown in the terminal, usually `http://localhost:5173`.

```bash
npm run build     # Check TypeScript and build for production in dist/
npm run preview   # Preview the production build
```

If `npm` in WSL incorrectly points to a Windows installation, install Node.js and npm inside WSL and check `command -v node npm`. If dependencies are already installed, you can also run `node node_modules/vite/bin/vite.js --host 0.0.0.0` directly.

## Features

- Explore seven domains: AWS, HPC, Machine Learning, Haskell, Frontend, Database, and Distributed Systems.
- Expand and collapse nodes to follow the knowledge hierarchy; use breadcrumbs to return to parent topics.
- Read explanations, key points, expandable questions, and code examples in the detail panel. On mobile, the panel appears below the knowledge tree.
- Explore detailed AWS topics such as S3, buckets, objects, and static website hosting.
- Search titles and descriptions at every level. Use `Ctrl+K` or `⌘K` to focus the search box and `Esc` to clear it.
- Mark topics as learned and review them under **My progress**. Learning progress and recently explored topics are saved in the current browser's `localStorage`.
- Switch domains to change colors, characters, and decorative elements. Animations respect the system's reduced-motion preference.
- Open the sidebar through the mobile menu. Navigation controls and knowledge nodes support keyboard interaction.

Learning data is not sent to a server or synchronized across devices. Clearing browser data removes saved progress. If persistent storage is unavailable, progress remains available only for the current session. Domain root nodes can be marked as learned, but the overview's topic and learned counts include only nodes below each root.

## Adding knowledge

Edit domains and main branches in `src/data/knowledge.ts`. Add deeper branches to existing nodes in `src/data/detailBranches.ts`. Both files use the `KnowledgeNode` type in `src/types/knowledge.ts` and support `children` at any depth. Every node needs a globally unique, stable `id` because saved progress uses these IDs.

For example, add a branch under the `bucket` key in `detailBranches.ts`:

```ts
bucket: [
  {
    id: 's3-object-checksums',
    title: 'Object Checksums',
    description: 'Verify that uploaded and downloaded object data is intact.',
    keyPoints: ['Choose a supported checksum algorithm for the workflow.'],
  },
]
```

Search, the knowledge tree, breadcrumbs, and topic counts will update automatically. When adding a new top-level domain, also add a theme with the same `id` in `src/config/themes.ts`.

## Adding or replacing anime assets

See [ASSET_CREDITS.md](./ASSET_CREDITS.md) for the current media and its sources. The overview uses a local MP4 background video. Each of the seven domains uses a wide 2D scene image shared by its card and domain page.

Put new images in `public/assets/`, then configure them in `src/config/themes.ts`:

```ts
hpc: {
  name: 'Example theme',
  accent: '#53869b',
  wash: '#edf5f8',
  label: 'Many cores. One shared goal.',
  background: asset('scenes/example-theme.png'),
  source: 'https://your-original-source.example/',
},
```

Wide PNG or WebP images work best. Keep the main characters toward the right so the domain title has room on the left. A gradient overlay keeps text readable, and cards crop their images with `object-fit: cover`. Update the asset credits when adding new media.

The overview video is at `public/assets/video/site-background.mp4`. It starts muted because browsers generally block autoplay with sound. Visitors can enable sound using the **Sound on** button in the upper-right corner of the cover. The video element unmounts when a domain page opens.

## Deploying to Amazon S3

1. Create an S3 bucket for the website.
2. Under **Properties**, enable **Static website hosting** and set the index document to `index.html`.
3. Run `npm run build`.
4. Upload the **contents** of `dist/` to the bucket root, including `index.html`, `favicon.svg`, and `assets/`.
5. Configure read access for the website files you intend to publish. Direct access through an S3 website endpoint requires public reads; limit those permissions to the dedicated website bucket and follow your account's policies.
6. Open the S3 website endpoint to test the deployment.

The site does not use path-based routing. Switching domains does not change the URL, so refreshing the page does not require an SPA rewrite rule. Vite's relative base path and the theme asset paths also support deployment under a subdirectory.

S3 website endpoints provide HTTP only. For HTTPS, use CloudFront. When using a private S3 bucket with CloudFront origin access control (OAC), configure the S3 REST endpoint as the origin rather than the website endpoint. See the [AWS static website guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html) and [website endpoint documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteEndpoints.html).

## Project structure

```text
src/
  components/    Recursive knowledge nodes, detail panels, theme cards, and icons
  config/        Theme colors and background configuration
  data/          Learning content and detailed branches
  types/         TypeScript data types
  utils/         Recursive path lookup and node flattening
  App.tsx        Navigation, search, and local learning progress
  index.css      Tailwind entry point and responsive theme styles
public/assets/   Scene images and background video
```

## Verification

- 2026-10-08: TypeScript checks and the Vite production build passed.
