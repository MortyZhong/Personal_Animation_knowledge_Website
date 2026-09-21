# Codex Prompt — Build "My Learning Map"

You are working directly inside a Git repository.

Build a complete interactive learning website called:

**My Learning Map**

The website should help me organise and review what I learn in computer science by presenting knowledge as animated, interactive modules rather than as traditional notes.

Do not only provide code snippets or suggestions. Actually create the project, create and modify the required files, install dependencies, run the application, test the build, fix errors, use Git throughout development, and leave the repository in a clean working state.

---

## 1. Project Goal

I want an interactive personal knowledge map.

The homepage should show high-level learning domains such as:

- AWS
- HPC / Parallel Computing
- Machine Learning
- Haskell
- Database
- Distributed Systems

When I click one category, it should smoothly expand into subtopics.

Example:

```text
                 AWS
              /   |    \
            S3   EC2   Lambda
           / | \
     Bucket Object Hosting
```

Clicking a topic should reveal deeper concepts or a detailed knowledge panel.

For example:

```text
AWS
  -> S3
      -> Bucket
      -> Object
      -> Static Website Hosting
```

The goal is to make learning feel like exploring a visual knowledge world rather than opening conventional notes.

---

## 2. Core Interaction

The initial homepage should display several large topic cards:

- AWS
- HPC
- Machine Learning
- Haskell
- Database
- Distributed Systems

When a user clicks **AWS**:

- animate the AWS module
- expand its child nodes
- reveal:
  - S3
  - EC2
  - Lambda
  - CloudFront

When **S3** is clicked:

- expand deeper concepts
- display:
  - Bucket
  - Object
  - Static Website Hosting

Clicking a final concept should open its details in a right-hand detail panel.

The detail panel should support:

- Title
- Short explanation
- Key points
- Questions
- Answers
- Optional examples

Example:

**Question:**  
What is a static website?

**Answer:**  
A static website does not require server-side scripts and consists mainly of HTML, CSS, and client-side JavaScript.

**Question:**  
How does Amazon S3 host a static website?

**Answer:**  
Amazon S3 can host static website files and provide a dedicated URL. When users access the URL, S3 serves the configured root document, usually `index.html`.

**Question:**  
Is an S3 website URL an API?

**Answer:**  
Not exactly. It is an HTTP endpoint primarily used to serve files. An API endpoint usually exposes operations or structured data, while an S3 static website endpoint mainly serves static resources.

---

## 3. Visual Direction — Anime Source Material

This is a personal learning project intended primarily for my own use.

The website may use original anime/game visual assets that I provide locally, including:

- character illustrations
- official artwork
- screenshots
- wallpapers
- logos
- promotional images
- background artwork
- game UI references

The main visual inspirations are:

- Bocchi the Rock!
- Re:Zero
- Mushoku Tensei
- Arknights
- Rascal Does Not Dream of Bunny Girl Senpai

You may directly incorporate these assets into the interface when they are available inside the repository.

You may search online for suitable anime character artwork. Prefer publicly available official character illustrations, wallpapers, and promotional images. Record the original source and any known usage conditions in an asset credits file. Do not bypass access controls or download restrictions, and do not imply that public availability grants a redistribution licence.

Integrate suitable assets into section banners, beside knowledge modules, and in detail panels, rather than only using them as wallpapers. If suitable artwork cannot be obtained, use a graceful placeholder and preserve local replacement support.

I may also manually place assets inside the project, for example:

```text
public/
└── assets/
    ├── bocchi/
    ├── rezero/
    ├── mushoku/
    ├── arknights/
    └── bunny-girl-senpai/
```

The UI should gracefully support these assets without requiring them to exist during the initial implementation.

If an asset is missing, use a visually appropriate placeholder.

---

## 4. Anime Theme System

Different sections of the learning website may visually reference different anime/game worlds.

Suggested mapping:

### AWS
Inspired by **Bocchi the Rock!**
- energetic
- playful
- pink / blue accents
- youthful
- light and fresh

### Machine Learning
Inspired by **Re:Zero**
- pale blue
- white
- lavender
- soft fantasy atmosphere

### HPC / Parallel Computing
Inspired by **Arknights**
- industrial
- technical
- geometric
- futuristic UI
- cool grey / blue / cyan accents

### Haskell
Inspired by **Rascal Does Not Dream of Bunny Girl Senpai**
- clean Japanese city aesthetic
- blue evening tones
- subtle pink accents

### Distributed Systems
Inspired by **Mushoku Tensei**
- sky
- fantasy landscape
- warm cream
- blue
- soft atmospheric visuals

These mappings are not strict. The overall website should still feel visually coherent.

---

## 5. Overall Art Direction

The overall visual style should feel:

- fresh
- youthful
- slightly dreamy
- anime-inspired
- clean
- modern
- calm
- not excessively dark
- not overly saturated
- not childish
- suitable for a developer portfolio

Prefer a light theme by default.

Suggested palette direction:

- soft sky blue
- pale cyan
- white
- light lavender
- subtle pink
- muted green
- warm cream accents

Different knowledge domains may have their own accent colour.

Example:

- AWS: warm orange / cream / playful pink-blue
- HPC: cool blue / cyan
- Machine Learning: soft purple / pale blue
- Haskell: pink / lavender / evening blue
- Database: teal
- Distributed Systems: cyan / sky blue / warm cream

Keep the colours pastel and visually coherent.

---

## 6. Character Artwork Usage

Anime character artwork may appear as part of the UI.

Possible uses include:

- character illustrations beside knowledge modules
- decorative character cut-outs
- background illustrations
- section banners
- loading screen artwork
- detail panel decorations
- floating character elements
- character-themed topic cards

However, the artwork must not interfere with readability.

Knowledge content should always remain the primary focus.

Example layout:

```text
---------------------------------------------------------
                    My Learning Map
---------------------------------------------------------

       Character       Interactive Knowledge Map
       artwork

                         [ AWS ]
                        /  |  \
                      S3  EC2 Lambda

---------------------------------------------------------
```

Character artwork should visually support the interface rather than cover knowledge nodes.

---

## 7. Image Layout

Support transparent PNG/WebP artwork.

Character artwork should preferably use:

```css
object-fit: contain;
```

rather than cropping important parts of the illustration.

Allow decorative characters to extend partially outside containers using absolute positioning when appropriate.

For purely decorative artwork, use:

```css
pointer-events: none;
```

so it does not block interaction with the knowledge map.

Images should adapt properly to different screen sizes.

On smaller screens, decorative artwork may:

- shrink
- move behind content
- fade slightly
- or be hidden completely

to preserve usability.

---

## 8. Background Artwork

Allow full-screen anime artwork or screenshots to be used as backgrounds.

When using detailed artwork behind UI elements, automatically improve readability using techniques such as:

- background blur
- dark/light gradient overlays
- translucent glass panels
- reduced image opacity
- `backdrop-filter`
- subtle vignette

Concept:

```text
background image
      ↓
soft overlay / blur
      ↓
glass UI cards
      ↓
knowledge nodes
```

The artwork should remain visible but should never make text difficult to read.

---

## 9. Background Decorations

The background should not be completely flat.

Use subtle visual elements such as:

- blurred gradient blobs
- faint floating particles
- translucent geometric shapes
- gentle stars
- soft light effects
- abstract clouds
- very subtle grid / digital motifs
- decorative lines
- small floating UI accents

The effect should feel like an anime title screen or modern Japanese technology interface while remaining minimal enough for comfortable reading.

Avoid visual clutter.

---

## 10. UI Style

Knowledge modules should use:

- rounded corners
- subtle glassmorphism
- soft shadows
- thin borders
- translucent backgrounds
- gentle gradients

Suggested card behaviour:

- semi-transparent white background
- subtle lavender / blue border
- soft shadow
- hover: slight scale up
- hover: soft glow
- hover: slight vertical movement

The interface should feel polished but lightweight.

---

## 11. Animations

Use **Framer Motion**.

Animations should include:

### Node hover
- scale slightly
- glow slightly

### Node click
- scale down briefly
- expand children smoothly

### Child appearance
- fade in
- move slightly upward or outward

### Detail panel
- fade and slide in

### Breadcrumb
- smooth transitions

### Category switching
- smooth layout animation

### Optional decorative animation
- slow floating particles
- extremely subtle background movement

Use Framer Motion for theme transitions too:

- background fade
- character fade / slide
- gradient transition
- card accent transition

Do not reload the page when switching themes.

Most UI interactions should be around:

- 150ms to 400ms

Animations should feel smooth but not distracting.

---

## 12. Theme Transitions

When the user switches between major knowledge domains, the visual theme may also change.

Example:

```text
AWS selected
→ Bocchi-style background appears

Machine Learning selected
→ smoothly transition to Re:Zero artwork

HPC selected
→ smoothly transition to Arknights visual style
```

The transition should feel similar to switching scenes or chapters in an anime/game UI.

---

## 13. Important Design Principle

This should **not** look like:

> "A normal dashboard with an anime wallpaper behind it."

The anime artwork should feel integrated into the UI composition.

Try to make the interface feel like an anime/game menu that happens to be a computer science knowledge system.

At the same time, avoid excessive decoration.

The core purpose remains:

- learning
- knowledge exploration
- review

---

## 14. Knowledge Tree Design

The main knowledge map should visually represent hierarchy.

Example:

```text
                    AWS
                     |
             ----------------
             |       |       |
            S3      EC2    Lambda
             |
        -------------
        |     |     |
      Bucket Object Hosting
```

Do not make it look like a normal vertical navigation menu.

It should visually feel like exploring connected knowledge.

However, avoid implementing an overly complicated graph engine in the MVP.

Use a recursive tree layout or clean animated node structure.

---

## 15. Tech Stack

Use:

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion

Optional lightweight libraries are acceptable if genuinely useful.

Do **not** introduce:

- Redux
- backend servers
- authentication
- databases
- unnecessary heavy dependencies

React `useState`, `useMemo`, and `useEffect` should be sufficient for MVP state.

---

## 16. Static Website Requirement

The entire website must remain a static website.

It should eventually be deployable to:

- Amazon S3 Static Website Hosting

Optionally later:

- Amazon CloudFront
- custom domain

The MVP must not require any server-side scripts.

The final build command must produce:

```text
dist/
```

which can be uploaded directly to an S3 bucket.

Avoid server-side routing.

Prefer a single-page application without React Router for the first version.

Refreshing the website must not require special S3 routing configuration.

---

## 17. Data-Driven Architecture

Do **not** hard-code knowledge content inside React components.

Knowledge content should live in something like:

```text
src/data/knowledge.ts
```

Use a reusable hierarchical data structure.

Suggested types:

```ts
interface Question {
  question: string;
  answer: string;
}

interface KnowledgeNode {
  id: string;
  title: string;
  description?: string;
  icon?: string;
  questions?: Question[];
  keyPoints?: string[];
  children?: KnowledgeNode[];
}
```

Example:

```ts
{
  id: "aws",
  title: "AWS",
  children: [
    {
      id: "s3",
      title: "S3",
      children: [
        {
          id: "static-website",
          title: "Static Website Hosting",
          description: "...",
          questions: [
            {
              question: "What is a static website?",
              answer: "..."
            }
          ]
        }
      ]
    }
  ]
}
```

The architecture should make it easy for me to add new topics later without changing the UI code.

---

## 18. Theme / Asset Configuration

Avoid hard-coding image paths throughout React components.

Create a central theme / asset configuration such as:

```text
src/config/themes.ts
```

Suggested structure:

```ts
export interface ThemeConfig {
  id: string;
  name: string;
  background?: string;
  character?: string;
  accent?: string;
}
```

Example:

```ts
export const themes = {
  aws: {
    name: "Bocchi",
    background: "/assets/bocchi/background.webp",
    character: "/assets/bocchi/character.png"
  },

  machineLearning: {
    name: "ReZero",
    background: "/assets/rezero/background.webp",
    character: "/assets/rezero/character.png"
  },

  hpc: {
    name: "Arknights",
    background: "/assets/arknights/background.webp",
    character: "/assets/arknights/character.png"
  }
}
```

This should allow me to replace artwork later without modifying React components.

---

## 19. Recommended Asset Structure

Use something like:

```text
public/
└── assets/
    ├── bocchi/
    │   ├── background.webp
    │   ├── character.png
    │   └── decorations/
    │
    ├── rezero/
    │   ├── background.webp
    │   ├── character.png
    │   └── decorations/
    │
    ├── mushoku/
    │   ├── background.webp
    │   └── character.png
    │
    ├── arknights/
    │   ├── background.webp
    │   └── character.png
    │
    └── bunny-girl-senpai/
        ├── background.webp
        └── character.png
```

If anime assets already exist under `public/assets`, inspect them and actively incorporate them into the visual composition.

Do not treat them merely as background wallpapers.

Use them as part of:

- character placement
- section identity
- background composition
- animated theme transitions

If no assets are currently available, build the asset/theme system first and use placeholders so I can add the real images later.

---

## 20. Initial Knowledge Content

Add the following initial knowledge categories.

### AWS
- S3
  - Bucket
  - Object
  - Static Website Hosting
- EC2
- Lambda
- CloudFront

### HPC / Parallel Computing
- OpenMP
- MPI
- Slurm
- Parallel Reduction
- Race Conditions

### Machine Learning
- KNN
- Logistic Regression
- Decision Tree
- Neural Networks
- Softmax
- Cross Validation

### Haskell
- Pattern Matching
- Higher-order Functions
- Recursion
- Algebraic Data Types
- Type Classes

### Database
- Indexes
- Transactions
- Concurrency
- PostgreSQL

### Distributed Systems
- Kubernetes
- Redis
- Elasticsearch
- Event-driven Systems
- Message Queues

Only AWS / S3 needs detailed content initially.

The other sections may use short placeholder descriptions.

---

## 21. AWS / S3 Content

Include at least the following concepts.

### Static Website

A static website does not require server-side scripts and consists mainly of HTML, CSS, and client-side JavaScript.

### S3 Website Hosting

Amazon S3 can host static website files and provide a dedicated website URL.

When a user accesses that URL, S3 serves the configured root document, usually:

```text
index.html
```

### S3 URL vs API

An S3 static website URL is an HTTP endpoint, but it is not necessarily what we normally mean by an API.

An API usually exposes operations or structured data.

The S3 static website endpoint mainly serves files such as:

- HTML
- CSS
- JavaScript
- images

Also explain:

> All API endpoints use URLs, but not every URL is an API.

---

## 22. Layout

Desktop layout:

```text
---------------------------------------------------------
Header
---------------------------------------------------------
               Main Knowledge Map       Detail Panel

               Animated Nodes           Topic information
               Knowledge Tree           Questions
                                        Answers
                                        Key points
---------------------------------------------------------
```

The main knowledge map should take roughly 65-70% of the screen.

The detail panel should take roughly 30-35%.

The detail panel may be collapsible.

For mobile:

- stack vertically
- knowledge map first
- detail panel below

---

## 23. Header

Header title:

```text
My Learning Map
```

Subtitle:

```text
Explore what I have learned.
```

Optional smaller description:

```text
An interactive map of my computer science journey.
```

Include subtle decorative anime-inspired accents, but keep it clean.

---

## 24. Breadcrumb

Show the currently selected knowledge path.

Example:

```text
AWS > S3 > Static Website Hosting
```

Each parent item should be clickable.

Clicking AWS should return the focus to AWS.

Use smooth animations when navigating.

---

## 25. State Management

Use simple React state.

Possible state:

```text
selectedNodeId
expandedNodeIds
selectedPath
```

No Redux.

---

## 26. Recommended Project Structure

Use something close to:

```text
src/
├── components/
│   ├── Header.tsx
│   ├── KnowledgeMap.tsx
│   ├── KnowledgeNode.tsx
│   ├── DetailPanel.tsx
│   ├── Breadcrumb.tsx
│   ├── BackgroundDecorations.tsx
│   └── TopicCard.tsx
│
├── config/
│   └── themes.ts
│
├── data/
│   └── knowledge.ts
│
├── types/
│   └── knowledge.ts
│
├── utils/
│   └── knowledge.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

`KnowledgeNode` should preferably be recursive.

Do not create separate React components for every AWS service.

---

## 27. Responsive Design

Desktop is the primary target.

However, the website must also work properly on:

- tablet
- phone

On small screens:

- nodes can wrap
- detail panel should move below the knowledge map
- typography should scale appropriately
- avoid horizontal overflow
- decorative artwork may shrink, fade, reposition, or hide

---

## 28. Accessibility

Use:

- semantic HTML where appropriate
- visible focus states
- keyboard accessible buttons
- sufficient text contrast
- descriptive labels

Do not sacrifice usability for visual style.

---

## 29. Git Requirements

This project must use Git properly.

If the directory is not already a Git repository:

```bash
git init
```

Create a proper `.gitignore`.

At minimum ignore:

```text
node_modules/
dist/
.env
.env.local
.DS_Store
.vscode/
```

Do not commit generated dependencies or build output unless needed.

---

## 30. Git Workflow

Use meaningful incremental commits rather than putting the entire project into one initial commit.

Suggested commit history:

```text
chore: initialise Vite React TypeScript project
feat: add knowledge data model and initial topics
feat: implement recursive knowledge map navigation
feat: add animated topic nodes
feat: add knowledge detail panel and questions
feat: add breadcrumb navigation
style: add anime-inspired visual theme
style: integrate configurable anime assets
style: improve responsive layout and animations
docs: add setup and S3 deployment guide
fix: resolve build and TypeScript issues
```

You do not need to use these exact commit messages if a different sequence better reflects the work.

However:

- create multiple logical commits
- keep commit messages concise and meaningful
- avoid meaningless commit messages such as `update` or `fix stuff`

---

## 31. Git Status and History

Before finishing, run:

```bash
git status
```

The repository should be clean.

Also inspect:

```bash
git log --oneline
```

Ensure the commit history clearly reflects the development process.

---

## 32. README

Create a polished `README.md`.

The README should include:

### My Learning Map

Explain that this is an interactive animated knowledge map for organising computer science learning.

### Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion

### Features

- animated knowledge modules
- hierarchical navigation
- recursive node rendering
- question / answer cards
- breadcrumb navigation
- responsive design
- anime-inspired theme
- configurable local anime artwork
- theme transitions between learning domains

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Add New Knowledge

Explain how to edit:

```text
src/data/knowledge.ts
```

Show one short example.

### Add / Replace Anime Assets

Explain how to add images under:

```text
public/assets/
```

and configure them in:

```text
src/config/themes.ts
```

### Deployment to Amazon S3

Explain:

1. Create an S3 bucket.
2. Enable Static Website Hosting.
3. Set:

```text
Index document:
index.html
```

4. Run:

```bash
npm run build
```

5. Upload the contents of `dist/` to the bucket.

Explain briefly that the project is a static website and therefore does not require server-side scripts.

Optionally mention CloudFront as a future improvement.

---

## 33. Development Workflow

Follow this implementation order.

### Step 1
Inspect the existing repository.

### Step 2
Initialise Git if required.

### Step 3
Initialise the Vite React TypeScript project if required.

### Step 4
Configure Tailwind CSS.

### Step 5
Install and configure Framer Motion.

### Step 6
Create the knowledge TypeScript types.

### Step 7
Create the theme / asset configuration system.

### Step 8
Create the initial knowledge dataset.

### Step 9
Implement recursive `KnowledgeNode` rendering.

### Step 10
Implement expanded / selected node state.

### Step 11
Implement `DetailPanel`.

### Step 12
Implement `Breadcrumb`.

### Step 13
Add the anime-inspired visual theme.

### Step 14
Integrate local anime assets if they are available.

### Step 15
Add theme transitions and micro-interactions.

### Step 16
Improve responsive layout.

### Step 17
Run the app and inspect for visual or runtime problems.

### Step 18
Run:

```bash
npm run build
```

### Step 19
Fix every TypeScript, Vite, dependency, or build error.

### Step 20
Finish `README.md`.

### Step 21
Review `git status` and commit history.

---

## 34. Quality Requirements

Prioritise:

1. The application must work.
2. The UI should feel polished.
3. The knowledge hierarchy must be easy to understand.
4. The code must be reusable.
5. Knowledge content must be data-driven.
6. Adding new knowledge should be easy.
7. Animations should feel smooth.
8. The site must remain static and S3-deployable.
9. Anime visuals should feel integrated into the UI rather than added as an afterthought.
10. The repository should have a clean Git history.

---

## 35. Do Not Overengineer

This is the MVP.

Do not introduce:

- backend infrastructure
- user login
- databases
- complex graph databases
- Redux
- WebSockets
- microservices
- unnecessary AWS infrastructure
- unnecessary dependencies

Prefer simple, understandable code.

---

## 36. Optional Polish

If the core implementation is already complete and stable, optionally add:

- subtle floating background particles
- category icons
- animated connecting lines
- node completion indicators
- "Learned / Reviewing / To Learn" badges
- localStorage to remember expanded topics
- a simple search field
- dark mode

Do not implement these optional features until the main MVP is stable.

---

## 37. Final Validation

Before you finish:

Run:

```bash
npm install
```

Then run:

```bash
npm run build
```

Ensure the build succeeds.

Inspect for:

- TypeScript errors
- console errors
- broken imports
- layout overflow
- inaccessible text
- broken mobile layout
- animation problems
- missing asset fallbacks

Then run:

```bash
git status
```

and:

```bash
git log --oneline
```

The repository should be clean and the commit history should be meaningful.

---

## 38. Final Expectation

Do not stop after generating code.

Actually implement the application in the repository.

Create all required files.

Install dependencies.

Run the build.

Fix problems.

Use Git throughout development.

If anime assets already exist under `public/assets`, inspect them and actively incorporate them into the visual composition.

If no anime assets exist yet, build the asset/theme system with placeholders so I can add them later without changing the main React components.

Leave the repository in a state where I can immediately run:

```bash
npm install
npm run dev
```

or:

```bash
npm run build
```

and deploy the resulting `dist/` folder to Amazon S3 Static Website Hosting.
