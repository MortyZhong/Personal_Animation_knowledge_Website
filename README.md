😋You found my website at a very AI time🕰️ in your life🔥🔥 

Animation is so good💯❗❗

even a devil may cry👿😭💥



## 🌐 Live Website

[Explore My Learning Map](https://MortyZhong.github.io/Personal_Animation_knowledge_Website/)

## 📁 Project Structure

```text
.github/workflows/deploy.yml   # GitHub Pages CI/CD
public/assets/                 # Images and videos
src/
  components/
    TopicCard.tsx              # Domain cards on the overview page and their progress
    KnowledgeNode.tsx          # Recursive nodes in the standard knowledge map
    BehaviorBoard.tsx          # Three-row question board with horizontal dragging
    DetailPanel.tsx            # Right-side Field Notes and question answers
    Icon.tsx                   # Shared icon names mapped to Lucide icons
  config/                      # Themes and backgrounds
  data/
    knowledge.ts               # Domain tree and the combined knowledge export
    detailBranches.ts          # Additional branches for existing topics
    behaviorQuestions.ts       # Behavior Questions and their answer segments
  types/                       # TypeScript types
  utils/                       # Helper functions
  App.tsx                      # App state, navigation, search, progress, and page layout
  index.css                    # Site styles, layouts, typography, and responsive rules
index.html                     # HTML entry point
vite.config.ts                 # Vite configuration
package.json                   # Dependencies and scripts
```

`App.tsx` selects which components to show and passes them the current data and click handlers. The files in `src/data/` provide the knowledge content; components render it, while `index.css` controls how it looks across screen sizes.

## 💻 Run Locally

Requires Node.js and npm.

```bash
npm ci
npm run dev
```

Open the local URL shown in your terminal.

To preview a production build:

```bash
npm run build
npm run preview
```

## 🚀 Deployment

Hosted on **GitHub Pages** and automatically deployed with **GitHub Actions**.

1. In **Settings → Pages**, select **GitHub Actions** as the source.
2. Push changes to the `master` branch.
3. The workflow builds the website and deploys the generated `dist/` files.

---

**Have fun! 🎉✨**
