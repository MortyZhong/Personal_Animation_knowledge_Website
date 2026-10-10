import type { KnowledgeNode } from "../types/knowledge";
import { detailBranches } from "./detailBranches";
import { behaviorQuestions } from "./behaviorQuestions";

const overviewKnowledge: KnowledgeNode[] = [
  {
    id: "aws",
    title: "AWS",
    subtitle: "Build in the cloud",
    icon: "cloud",
    description:
      "From your first bucket to a world of possibilities. Explore the building blocks of the cloud.",
    keyPoints: [
      "Choose a service around the problem you want to solve.",
      "Understand security, cost, and availability together.",
      "Start small: this learning map can live in an S3 bucket.",
    ],
    children: [
      {
        id: "s3",
        title: "S3",
        subtitle: "Simple Storage Service",
        icon: "box",
        description:
          "Amazon Simple Storage Service is object storage for files of almost any kind, from images and backups to the files of a static website.",
        keyPoints: [
          "Organise objects in buckets.",
          "Identify each object with a unique key inside its bucket.",
          "Control access with IAM and bucket policies.",
        ],
        questions: [
          {
            question: "Is S3 a file system?",
            answer:
              "S3 is object storage. Keys can contain slashes that resemble folders, but objects are accessed through service endpoints rather than a conventional mounted file system.",
          },
        ],
        children: [
          {
            id: "bucket",
            title: "Bucket",
            icon: "box",
            description:
              "A bucket is a container for objects in Amazon S3. Each bucket belongs to an AWS Region.",
            keyPoints: [
              "General purpose bucket names are unique across accounts and Regions within an AWS partition.",
              "Permissions and versioning can be configured at the bucket level.",
              "Keep private content separate from public website files.",
            ],
            questions: [
              {
                question: "Can a bucket contain folders?",
                answer:
                  "The console displays folders, but S3 stores a flat collection of objects. A slash in an object key creates a familiar folder-like view.",
              },
            ],
            example:
              "my-learning-map/\n  index.html\n  assets/main.js\n  assets/character.webp",
          },
          {
            id: "object",
            title: "Object",
            icon: "file",
            description:
              "An object is a file plus its metadata. Its key identifies it within a bucket.",
            keyPoints: [
              "An object has data, a key, and metadata.",
              "Content-Type tells the browser how to handle a file.",
              "Versioning can preserve previous object versions.",
            ],
            questions: [
              {
                question: "What is an object key?",
                answer:
                  "It is the complete name identifying an object in its bucket, such as assets/character.webp. The prefix assets/ is part of the key.",
              },
            ],
            example:
              "Key: assets/main.js\nContent-Type: application/javascript",
          },
          {
            id: "static-website",
            title: "Static Website Hosting",
            icon: "globe",
            description:
              "Turn a collection of HTML, CSS, and JavaScript files into a website. S3 serves your files, and the browser brings them to life.",
            keyPoints: [
              "A static website does not require server-side scripts.",
              "Set index.html as the index document.",
              "Upload the contents of dist/, not the dist folder itself.",
              "S3 website endpoints use HTTP; use CloudFront for HTTPS.",
            ],
            questions: [
              {
                question: "What is a static website?",
                answer:
                  "A static website consists mainly of HTML, CSS, images, and client-side JavaScript. It can be interactive, like this map, without running server-side scripts.",
              },
              {
                question: "How does Amazon S3 host a static website?",
                answer:
                  "Enable static website hosting on a bucket, configure the index document (usually index.html), and make the intended website files readable. S3 provides a website endpoint that serves those files.",
              },
              {
                question: "Is an S3 website URL an API?",
                answer:
                  "It is an HTTP endpoint primarily for serving files. An API usually exposes operations or structured data. For web APIs, endpoints have URLs, but not every URL is an API. S3 also has separate REST API endpoints for object operations.",
              },
            ],
            example:
              "npm run build\n\n# Upload the contents of dist/ to your bucket.\n# Index document: index.html",
          },
        ],
      },
      {
        id: "ec2",
        title: "EC2",
        icon: "server",
        description:
          "Virtual servers in the cloud. Choose an instance, an operating system, and the capacity your application needs.",
      },
      {
        id: "lambda",
        title: "Lambda",
        icon: "zap",
        description:
          "Run functions in response to events without managing servers. Think triggers, short tasks, and automatic scaling.",
      },
      {
        id: "cloudfront",
        title: "CloudFront",
        icon: "globe",
        description:
          "A content delivery network that caches content near your users and can provide HTTPS for your website.",
      },
    ],
  },
  {
    id: "hpc",
    title: "HPC",
    subtitle: "Think in parallel",
    icon: "cpu",
    description:
      "Many cores. One shared goal. Explore how parallel programs make the most of modern computing.",
    children: [
      {
        id: "openmp",
        title: "OpenMP",
        description:
          "Use compiler directives to express shared-memory parallelism in C, C++, and Fortran.",
      },
      {
        id: "mpi",
        title: "MPI",
        description:
          "Coordinate processes through explicit messages, often across multiple machines.",
      },
      {
        id: "slurm",
        title: "Slurm",
        description:
          "Submit jobs and request compute resources through a cluster workload manager.",
      },
      {
        id: "reduction",
        title: "Parallel Reduction",
        description:
          "Combine partial results into a single result, such as the sum or maximum of an array.",
      },
      {
        id: "race",
        title: "Race Conditions",
        description:
          "Results can depend on execution timing when concurrent operations access shared state without suitable coordination.",
      },
    ],
  },
  {
    id: "ml",
    title: "Machine Learning",
    subtitle: "Find patterns, make possibilities",
    icon: "brain",
    description:
      "A journey from data to understanding. Discover models that learn patterns and turn them into predictions.",
    children: [
      {
        id: "knn",
        title: "KNN",
        description:
          "Predict using the labels or values of nearby examples. Feature scaling and the choice of k matter.",
      },
      {
        id: "logistic",
        title: "Logistic Regression",
        description:
          "Model the probability of a class using a weighted combination of input features and a logistic function.",
      },
      {
        id: "decision-tree",
        title: "Decision Tree",
        description:
          "Split data through a sequence of feature-based decisions to make a prediction.",
      },
      {
        id: "neural",
        title: "Neural Networks",
        description:
          "Learn representations through layers of weighted transformations and nonlinear activations.",
      },
      {
        id: "softmax",
        title: "Softmax",
        description:
          "Convert a vector of scores into positive values that sum to one, commonly used for multiclass predictions.",
      },
      {
        id: "cross-validation",
        title: "Cross Validation",
        description:
          "Evaluate a model across multiple training and validation splits to estimate generalisation.",
      },
    ],
  },
  {
    id: "haskell",
    title: "Haskell",
    subtitle: "A different way to think",
    icon: "code",
    description:
      "Small functions, expressive types, and beautiful composition. Explore the functional way of thinking.",
    children: [
      {
        id: "pattern",
        title: "Pattern Matching",
        description: "Define behaviour by matching the structure of a value.",
      },
      {
        id: "higher-order",
        title: "Higher-order Functions",
        description:
          "Functions can receive other functions as arguments or return them as results.",
      },
      {
        id: "recursion",
        title: "Recursion",
        description:
          "Solve a problem by reducing it to smaller instances, with base cases that stop the process.",
      },
      {
        id: "adt",
        title: "Algebraic Data Types",
        description:
          "Represent alternatives and combinations using sum and product types.",
      },
      {
        id: "type-classes",
        title: "Type Classes",
        description:
          "Describe shared behaviour through interfaces that different types can implement.",
      },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    subtitle: "Build for the browser",
    icon: "frontend",
    description:
      "Create accessible, responsive interfaces and connect them safely to the services behind them.",
    keyPoints: [
      "Start with semantic HTML, then add presentation and behaviour.",
      "Treat accessibility, performance, and security as product requirements.",
      "Design API calls for loading, success, empty, error, and retry states.",
    ],
    questions: [
      {
        question: "What happens after a user enters a URL?",
        answer:
          "The browser resolves DNS, establishes a connection (and TLS for HTTPS), sends an HTTP request, parses the response, builds the DOM and CSSOM, creates a render tree, performs layout and paint, and runs JavaScript that may update the page.",
      },
      {
        question: "What makes a frontend production-ready?",
        answer:
          "Correct behaviour is only the start. A production frontend should also be accessible, responsive, secure, observable, resilient to slow or failed requests, and fast enough on realistic devices and networks.",
      },
    ],
    children: [
      {
        id: "frontend-html",
        title: "HTML & Accessibility",
        icon: "file",
        description:
          "Use semantic elements and the browser's native controls to create a meaningful, keyboard-friendly document.",
        keyPoints: [
          "Prefer the correct native element before adding ARIA.",
          "Give controls accessible names and preserve visible focus.",
          "Associate form labels and errors with their fields.",
        ],
        questions: [
          {
            question: "Why is semantic HTML important?",
            answer:
              "It gives structure to browsers and assistive technology, improves keyboard behaviour and maintainability, and often provides accessibility features without extra JavaScript.",
          },
          {
            question: "When should ARIA be used?",
            answer:
              "Use ARIA when native HTML cannot express the required role, state, or relationship. ARIA changes accessibility semantics; it does not add keyboard behaviour by itself.",
          },
        ],
        example:
          "<form aria-describedby=\"email-help\">\n  <label for=\"email\">Email</label>\n  <input id=\"email\" name=\"email\" type=\"email\" required />\n  <p id=\"email-help\">We will only use this for your account.</p>\n  <button type=\"submit\">Create account</button>\n</form>",
      },
      {
        id: "frontend-css",
        title: "CSS Layout",
        icon: "palette",
        description:
          "Control layout, visual hierarchy, and responsive behaviour with the cascade, Flexbox, Grid, and modern sizing units.",
        keyPoints: [
          "Understand specificity, inheritance, and the box model.",
          "Use Flexbox for one-dimensional alignment and Grid for two-dimensional layout.",
          "Build mobile-first layouts that respond to available space.",
        ],
        questions: [
          {
            question: "Flexbox or Grid?",
            answer:
              "Flexbox is usually best when arranging items mainly along one axis. Grid is best when rows and columns must coordinate. They are complementary and are often nested together.",
          },
          {
            question: "What creates a stacking context?",
            answer:
              "Several properties can create one, including a positioned element with a non-auto z-index, opacity below 1, transform, filter, and isolation. A child's z-index cannot escape its stacking context.",
          },
        ],
        example:
          ".card-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(min(18rem, 100%), 1fr));\n  gap: clamp(1rem, 2vw, 2rem);\n}\n\n.card {\n  container-type: inline-size;\n}\n\n@container (min-width: 28rem) {\n  .card__body { display: grid; grid-template-columns: 1fr 2fr; }\n}",
      },
      {
        id: "frontend-javascript",
        title: "JavaScript Runtime",
        icon: "code",
        description:
          "Understand scope, closures, asynchronous work, and the event loop that coordinates browser tasks.",
        keyPoints: [
          "Closures retain access to the lexical environment where a function was created.",
          "Promise callbacks use the microtask queue; timers schedule tasks.",
          "Avoid blocking the main thread with long synchronous work.",
        ],
        questions: [
          {
            question: "What is the event loop?",
            answer:
              "It lets JavaScript coordinate work on a single main thread. After the current call stack finishes, queued microtasks run before the browser takes the next task and gets another opportunity to render.",
          },
          {
            question: "What is a closure?",
            answer:
              "A closure is a function together with access to variables from its lexical scope, even after the outer function has returned. It is useful for encapsulation and callbacks, but can also retain memory unexpectedly.",
          },
        ],
        example:
          "console.log('sync');\n\nsetTimeout(() => console.log('task'), 0);\nPromise.resolve().then(() => console.log('microtask'));\n\n// sync → microtask → task",
      },
      {
        id: "frontend-react",
        title: "React State & Rendering",
        icon: "frontend",
        description:
          "Model the interface as components, keep state minimal, and make effects synchronize with systems outside React.",
        keyPoints: [
          "Props are inputs; state is a component's changing memory.",
          "Use stable keys that identify data rather than array positions.",
          "Do not use an effect for a value that can be derived during rendering.",
        ],
        questions: [
          {
            question: "What causes a React component to render?",
            answer:
              "Its initial mount, a state update, a parent render, or a consumed context change can trigger rendering. React then compares the new output with the previous tree before committing necessary DOM changes.",
          },
          {
            question: "Why can an index be a bad list key?",
            answer:
              "When items are inserted, removed, or reordered, index keys can make React associate state and DOM with the wrong item. Use a stable identifier from the data when possible.",
          },
        ],
        example:
          "function SearchResults({ items, query }) {\n  const visibleItems = items.filter((item) =>\n    item.name.toLowerCase().includes(query.toLowerCase())\n  );\n\n  return (\n    <ul>\n      {visibleItems.map((item) => <li key={item.id}>{item.name}</li>)}\n    </ul>\n  );\n}",
      },
      {
        id: "frontend-browser",
        title: "Browser & Performance",
        icon: "globe",
        description:
          "Learn how the browser loads and renders a page, then measure real bottlenecks before optimising.",
        keyPoints: [
          "Reduce render-blocking work and ship only the JavaScript needed now.",
          "Reserve media dimensions to avoid layout shifts.",
          "Measure loading, responsiveness, and visual stability with user-centred metrics.",
        ],
        questions: [
          {
            question: "Reflow versus repaint?",
            answer:
              "Reflow, or layout, recalculates element geometry and can affect surrounding content. Repaint redraws pixels without necessarily changing layout. Compositor-only animations such as transform and opacity are often cheaper.",
          },
          {
            question: "How would you improve a slow first load?",
            answer:
              "Measure first, then consider smaller and cached assets, code splitting, fewer blocking resources, responsive images, font strategy, server compression, and preloading only truly critical resources.",
          },
        ],
      },
      {
        id: "frontend-api",
        title: "API",
        subtitle: "Connect the interface to data",
        icon: "network",
        description:
          "An API is a contract that lets software exchange data or request behaviour. In frontend work, that often means making HTTP requests and turning uncertain network results into clear UI states.",
        keyPoints: [
          "A request has a URL, method, headers, and sometimes a body; a response has a status, headers, and body.",
          "Always handle loading, success, empty, client-error, server-error, timeout, and cancellation paths.",
          "Validate at trust boundaries and never treat frontend code or embedded keys as secret.",
          "API design includes consistency, compatibility, observability, and failure behaviour—not only endpoint names.",
        ],
        questions: [
          {
            question: "What is an API?",
            answer:
              "An Application Programming Interface is a documented contract through which one software component uses another. A web API commonly exposes resources or operations over HTTP using structured representations such as JSON.",
          },
          {
            question: "What happens when fetch() is called?",
            answer:
              "The browser applies URL and security rules, may send a CORS preflight, performs the network request, and resolves the promise when response headers arrive. HTTP errors such as 404 do not reject fetch, so code must check response.ok; network failures and aborts do reject it.",
          },
          {
            question: "REST or GraphQL?",
            answer:
              "REST usually exposes multiple resource-oriented endpoints and benefits from familiar HTTP semantics and caching. GraphQL exposes a typed query interface that lets clients select fields, but adds schema, resolver, caching, and query-cost concerns. Choose around product and team constraints rather than fashion.",
          },
        ],
        example:
          "const controller = new AbortController();\n\ntry {\n  const response = await fetch('/api/users?limit=20', {\n    headers: { Accept: 'application/json' },\n    signal: controller.signal,\n  });\n\n  if (!response.ok) {\n    throw new Error(`Request failed: ${response.status}`);\n  }\n\n  const users = await response.json();\n  renderUsers(users);\n} catch (error) {\n  if (error instanceof DOMException && error.name === 'AbortError') return;\n  showRetryState(error);\n}",
        children: [
          {
            id: "api-http",
            title: "HTTP Fundamentals",
            icon: "globe",
            description:
              "HTTP is a stateless request-response protocol. HTTPS adds TLS so traffic is encrypted in transit and the server can be authenticated.",
            keyPoints: [
              "The URL identifies the target; the method describes the request's intent.",
              "Headers carry metadata such as content type, authorization, and caching rules.",
              "Content-Type describes the body being sent; Accept describes preferred response formats.",
            ],
            questions: [
              {
                question: "HTTP versus HTTPS?",
                answer:
                  "HTTPS is HTTP carried through TLS. TLS encrypts data in transit, detects tampering, and authenticates the server certificate. It does not make an unsafe application automatically secure.",
              },
              {
                question: "Are HTTP requests stateful?",
                answer:
                  "HTTP itself is stateless: each request contains the information needed to process it. Applications layer state on top with cookies, session identifiers, tokens, or server-side records.",
              },
            ],
            example:
              "GET /api/users/42 HTTP/1.1\nHost: example.com\nAccept: application/json\n\nHTTP/1.1 200 OK\nContent-Type: application/json\nCache-Control: private, max-age=60\n\n{\"id\":42,\"name\":\"Anna\"}",
          },
          {
            id: "api-rest",
            title: "REST & Resources",
            icon: "box",
            description:
              "Model important domain concepts as resources and use consistent HTTP semantics to manipulate their representations.",
            keyPoints: [
              "Prefer resource nouns such as /users/42/orders over action-heavy URLs.",
              "Keep requests self-contained and return links or identifiers for related resources.",
              "REST is an architectural style, not a synonym for every JSON-over-HTTP API.",
            ],
            questions: [
              {
                question: "What makes an API RESTful?",
                answer:
                  "REST emphasises resources identified by URIs, uniform interfaces, stateless requests, cacheable responses, and a layered system. Many practical APIs follow some of these constraints without implementing every part strictly.",
              },
              {
                question: "Why use nouns in endpoint paths?",
                answer:
                  "The path identifies a resource while the HTTP method expresses the operation. This keeps the interface predictable: GET /orders/7 reads it and DELETE /orders/7 removes it.",
              },
            ],
            example:
              "GET    /api/articles          # list\nPOST   /api/articles          # create\nGET    /api/articles/42       # read\nPATCH  /api/articles/42       # partial update\nDELETE /api/articles/42       # delete",
          },
          {
            id: "api-methods",
            title: "Methods & Idempotency",
            icon: "code",
            description:
              "Choose methods by intent and know whether repeating a request should have the same intended effect.",
            keyPoints: [
              "GET and HEAD are safe: they should not request a state change.",
              "PUT and DELETE are idempotent by specification; repeating them should have the same intended effect.",
              "POST is generally not idempotent; payment and job APIs often accept idempotency keys.",
            ],
            questions: [
              {
                question: "PUT versus PATCH?",
                answer:
                  "PUT commonly replaces the representation at a known URI and is idempotent. PATCH applies a partial change; whether a specific patch document is idempotent depends on its semantics.",
              },
              {
                question: "Why does idempotency matter?",
                answer:
                  "Networks fail ambiguously, so a client may retry without knowing whether the first request succeeded. Idempotent operations prevent a retry from unintentionally applying the same effect twice.",
              },
            ],
            example:
              "await fetch('/api/profile', {\n  method: 'PATCH',\n  headers: { 'Content-Type': 'application/json' },\n  body: JSON.stringify({ displayName: 'Anna' }),\n});\n\nawait fetch('/api/payments', {\n  method: 'POST',\n  headers: {\n    'Content-Type': 'application/json',\n    'Idempotency-Key': crypto.randomUUID(),\n  },\n  body: JSON.stringify({ amount: 1200, currency: 'JPY' }),\n});",
          },
          {
            id: "api-status-errors",
            title: "Status Codes & Errors",
            icon: "zap",
            description:
              "Use status codes for broad outcomes and a stable error body for details the client can act on.",
            keyPoints: [
              "2xx indicates success, 4xx a client-side problem, and 5xx a server-side failure.",
              "Return machine-readable error codes plus a safe human-readable message.",
              "Do not expose stack traces, secrets, or internal infrastructure details.",
            ],
            questions: [
              {
                question: "401 versus 403?",
                answer:
                  "401 means valid authentication credentials are missing or rejected. 403 means the server understood the identity or request but refuses the operation. Exact disclosure may be limited to avoid leaking sensitive resource information.",
              },
              {
                question: "200, 201, or 204?",
                answer:
                  "200 is a general successful response, 201 signals that a resource was created and should usually identify it, and 204 succeeds with no response body.",
              },
            ],
            example:
              "async function parseResponse(response) {\n  if (response.status === 204) return null;\n\n  const body = await response.json().catch(() => null);\n  if (!response.ok) {\n    throw new ApiError(response.status, body?.code, body?.message);\n  }\n  return body;\n}",
          },
          {
            id: "api-auth",
            title: "Authentication & Authorization",
            icon: "server",
            description:
              "Authentication establishes who the caller is; authorization decides what that identity may do.",
            keyPoints: [
              "A server session can be referenced by a Secure, HttpOnly, SameSite cookie.",
              "Bearer tokens must be protected because possession normally grants access.",
              "OAuth delegates access; OpenID Connect adds an identity layer for sign-in.",
            ],
            questions: [
              {
                question: "Authentication versus authorization?",
                answer:
                  "Authentication verifies identity. Authorization evaluates whether that identity is allowed to perform a specific action on a specific resource. A user can be authenticated but not authorized.",
              },
              {
                question: "Where should a browser store tokens?",
                answer:
                  "There is no universal answer. For many same-site web apps, a short-lived server session in a Secure, HttpOnly, SameSite cookie reduces JavaScript access to credentials, while the design must still address CSRF. Local storage is accessible to injected scripts and should not hold long-lived high-value secrets.",
              },
            ],
            example:
              "const response = await fetch('/api/me', {\n  credentials: 'include', // send same-site session cookie\n  headers: { Accept: 'application/json' },\n});\n\nif (response.status === 401) {\n  redirectToSignIn();\n}",
          },
          {
            id: "api-cors",
            title: "CORS & Same-Origin",
            icon: "network",
            description:
              "Browsers restrict script access across origins. CORS lets a server explicitly grant selected origins access to its responses.",
            keyPoints: [
              "An origin is the combination of scheme, host, and port.",
              "Some cross-origin requests require an OPTIONS preflight before the actual request.",
              "Credentialed requests require explicit origin handling and cannot use a wildcard origin.",
            ],
            questions: [
              {
                question: "Does CORS secure an API?",
                answer:
                  "No. CORS is primarily a browser response-reading policy. Non-browser clients can still call the server, so the API needs authentication, authorization, validation, and rate controls of its own.",
              },
              {
                question: "What triggers a preflight?",
                answer:
                  "A cross-origin request that is not considered simple—because of its method, headers, or content type—usually causes the browser to send OPTIONS and ask what the server permits.",
              },
            ],
            example:
              "fetch('https://api.example.com/profile', {\n  credentials: 'include',\n});\n\n// Example response headers from the API:\n// Access-Control-Allow-Origin: https://app.example.com\n// Access-Control-Allow-Credentials: true\n// Vary: Origin",
          },
          {
            id: "api-caching",
            title: "Caching",
            icon: "database",
            description:
              "HTTP caching avoids unnecessary transfers while validators let clients check whether stored data is still current.",
            keyPoints: [
              "Cache-Control defines freshness and who may store a response.",
              "ETag or Last-Modified enables conditional requests.",
              "Private user data needs deliberate cache rules and correct Vary headers.",
            ],
            questions: [
              {
                question: "How do ETag and 304 work?",
                answer:
                  "The server gives a representation an ETag. Later the client sends If-None-Match; if the representation is unchanged, the server can return 304 without resending the body.",
              },
              {
                question: "Browser cache versus application cache?",
                answer:
                  "The browser HTTP cache follows response headers below application code. An application cache, such as a query library's in-memory store, manages domain data, deduplication, invalidation, and UI state explicitly.",
              },
            ],
            example:
              "const cached = localStorage.getItem('users:etag');\nconst response = await fetch('/api/users', {\n  headers: cached ? { 'If-None-Match': cached } : {},\n});\n\nif (response.status !== 304) {\n  const users = await response.json();\n  const etag = response.headers.get('ETag');\n  if (etag) localStorage.setItem('users:etag', etag);\n}",
          },
          {
            id: "api-pagination",
            title: "Pagination & Queries",
            icon: "file",
            description:
              "Bound collection responses and define consistent filtering, sorting, and search parameters.",
            keyPoints: [
              "Offset pagination is simple but can drift when records change.",
              "Cursor pagination scales well and gives more stable traversal when based on a deterministic order.",
              "Enforce maximum page sizes and allow-list sortable or filterable fields.",
            ],
            questions: [
              {
                question: "Offset versus cursor pagination?",
                answer:
                  "Offset pagination supports direct page numbers but large offsets may be costly and concurrent inserts can shift results. Cursor pagination continues from a stable position and is often better for feeds, though arbitrary page jumps are harder.",
              },
              {
                question: "Why must sorting be deterministic?",
                answer:
                  "If multiple rows have the same primary sort value, their order can change between requests and cause duplicates or omissions. Add a unique tie-breaker such as an ID.",
              },
            ],
            example:
              "const params = new URLSearchParams({\n  limit: '20',\n  after: nextCursor,\n  sort: '-createdAt,id',\n  status: 'published',\n});\n\nconst page = await fetch('/api/articles?' + params).then(parseResponse);\n// { items: [...], nextCursor: 'eyJpZCI6NDJ9' }",
          },
          {
            id: "api-resilience",
            title: "Timeouts, Retries & Cancellation",
            icon: "zap",
            description:
              "Assume requests can be slow, fail temporarily, or finish after the user no longer needs them.",
            keyPoints: [
              "Set a timeout or cancellation policy instead of waiting forever.",
              "Retry only transient failures, with a limit, backoff, and jitter.",
              "Cancel stale requests and guard against out-of-order responses.",
            ],
            questions: [
              {
                question: "Which requests are safe to retry?",
                answer:
                  "Retry idempotent operations and explicitly retryable failures such as selected timeouts, 429, or temporary 5xx responses. A non-idempotent POST needs a server-supported idempotency key or other deduplication design.",
              },
              {
                question: "What is exponential backoff with jitter?",
                answer:
                  "Each retry waits progressively longer, while a random component prevents many clients from retrying at exactly the same moment and overwhelming a recovering service.",
              },
            ],
            example:
              "async function fetchWithTimeout(url, timeoutMs = 5000) {\n  const signal = AbortSignal.timeout(timeoutMs);\n  const response = await fetch(url, { signal });\n  if (!response.ok) throw new Error('HTTP ' + response.status);\n  return response.json();\n}",
          },
          {
            id: "api-security",
            title: "API Security",
            icon: "server",
            description:
              "Protect every trust boundary with transport security, validation, least privilege, and abuse controls.",
            keyPoints: [
              "Use HTTPS and validate input on the server even if the frontend validates it too.",
              "Encode untrusted output, use parameterised database queries, and protect cookie-based mutations from CSRF.",
              "Rate-limit costly operations and avoid logging credentials or sensitive personal data.",
            ],
            questions: [
              {
                question: "Why can an API key not be hidden in frontend code?",
                answer:
                  "Anything delivered to the browser can be inspected through source files, network tools, or runtime memory. Public-client credentials must be treated as public and restricted accordingly; privileged secrets belong on a trusted server.",
              },
              {
                question: "XSS versus CSRF?",
                answer:
                  "XSS runs attacker-controlled script in a trusted page. CSRF causes a browser to send an unwanted authenticated request. Output encoding and a strict content security policy help with XSS; SameSite cookies, CSRF tokens, and origin checks help with CSRF.",
              },
            ],
            example:
              "// Safe: the secret stays on your server.\napp.post('/api/summary', requireUser, async (request, response) => {\n  const text = validateText(request.body.text);\n  const result = await privateService.call({\n    apiKey: process.env.PRIVATE_API_KEY,\n    text,\n  });\n  response.json({ result });\n});",
          },
          {
            id: "api-versioning",
            title: "Versioning & Compatibility",
            icon: "book",
            description:
              "Evolve contracts deliberately so deployed clients have time to migrate.",
            keyPoints: [
              "Prefer additive changes: new optional fields are usually safer than renaming or removing fields.",
              "Version in the URL, header, or media type when a genuinely breaking contract is necessary.",
              "Publish deprecation timelines and observe actual client usage before removal.",
            ],
            questions: [
              {
                question: "How do you evolve an API without breaking clients?",
                answer:
                  "Make compatible additions, keep existing field meaning stable, use tolerant readers, document changes, test contracts, and run old and new versions together when a breaking change cannot be avoided.",
              },
              {
                question: "Should every change create a new API version?",
                answer:
                  "No. Compatible additions and bug fixes normally stay in the current version. Versions are most useful for intentional breaking changes, and too many active versions increase operational cost.",
              },
            ],
            example:
              "GET /api/v1/users/42\nAccept: application/json\n\n// Prefer compatible additions within v1.\n// Introduce /api/v2 only for a breaking contract.",
          },
          {
            id: "api-realtime",
            title: "Polling, SSE & WebSocket",
            icon: "network",
            description:
              "Choose a delivery pattern based on direction, latency, connection cost, and infrastructure support.",
            keyPoints: [
              "Polling is simple and works everywhere but can waste requests.",
              "Server-Sent Events stream server-to-client updates over HTTP and reconnect naturally.",
              "WebSocket provides a long-lived, bidirectional channel and requires connection lifecycle management.",
            ],
            questions: [
              {
                question: "When would you choose polling, SSE, or WebSocket?",
                answer:
                  "Use polling for infrequent updates and simplicity, SSE for one-way live streams such as notifications, and WebSocket when both client and server need frequent low-latency messages, such as collaborative editing or games.",
              },
              {
                question: "What must a realtime client handle?",
                answer:
                  "Connection loss, reconnection backoff, authentication renewal, duplicate or missed messages, ordering, stale state, and a fallback or resynchronisation path.",
              },
            ],
            example:
              "const stream = new EventSource('/api/notifications');\n\nstream.addEventListener('message', (event) => {\n  const notification = JSON.parse(event.data);\n  showNotification(notification);\n});\n\nstream.addEventListener('error', () => {\n  setConnectionState('reconnecting');\n});",
          },
        ],
      },
    ],
  },
  {
    id: "database",
    title: "Database",
    subtitle: "Give your data a home",
    icon: "database",
    description:
      "Organise, query, and protect information. Make sense of the systems behind reliable data.",
    children: [
      {
        id: "indexes",
        title: "Indexes",
        description:
          "Speed up selected queries with additional data structures, trading storage and write overhead for faster reads.",
      },
      {
        id: "transactions",
        title: "Transactions",
        description:
          "Group operations into a unit of work with atomicity, consistency, isolation, and durability guarantees.",
      },
      {
        id: "concurrency",
        title: "Concurrency",
        description:
          "Coordinate overlapping operations through techniques such as locks and multiversion concurrency control.",
      },
      {
        id: "postgres",
        title: "PostgreSQL",
        description:
          "An open-source relational database with expressive SQL, rich types, and extensibility.",
      },
    ],
  },
  {
    id: "distributed",
    title: "Distributed Systems",
    subtitle: "Connected, by design",
    icon: "network",
    description:
      "Independent machines, working together. Explore the trade-offs of building beyond a single computer.",
    children: [
      {
        id: "kubernetes",
        title: "Kubernetes",
        description:
          "Declare the desired state of containerised applications and let controllers reconcile it.",
      },
      {
        id: "redis",
        title: "Redis",
        description:
          "An in-memory data store used for caching and other workloads, with persistence and replication options.",
      },
      {
        id: "elasticsearch",
        title: "Elasticsearch",
        description:
          "Index documents to support distributed search and analytics.",
      },
      {
        id: "events",
        title: "Event-driven Systems",
        description:
          "Communicate changes through events, reducing direct coupling between producers and consumers.",
      },
      {
        id: "queues",
        title: "Message Queues",
        description:
          "Buffer work between producers and consumers. Consider retries, ordering, and duplicate delivery.",
      },
    ],
  },
];

function expand(node: KnowledgeNode): KnowledgeNode {
  const existing = node.children?.map(expand);
  const added = detailBranches[node.id];
  return existing || added
    ? { ...node, children: [...(existing ?? []), ...(added ?? [])] }
    : node;
}

export const knowledge: KnowledgeNode[] = [...overviewKnowledge.map(expand), behaviorQuestions];
