import type { KnowledgeNode } from "../types/knowledge";

// These branches extend the overview nodes in knowledge.ts without changing
// their stable IDs (which are also used by saved learning progress).
export const detailBranches: Record<string, KnowledgeNode[]> = {
  bucket: [
    {
      id: "s3-versioning",
      title: "Versioning",
      description: "Keep earlier versions of an object when it is overwritten or deleted.",
      keyPoints: ["Enable versioning before you need recovery.", "A delete marker can hide older versions without removing them."],
      questions: [{ question: "Does versioning replace backups?", answer: "No. It helps recover object versions, but a separate backup or replication plan protects against broader failures and access mistakes." }],
      children: [{
        id: "s3-delete-markers",
        title: "Delete Markers",
        description: "In a versioned bucket, a normal delete adds a marker that becomes the current version.",
        keyPoints: ["Older versions remain unless removed explicitly.", "Remove the marker to make the prior version current again."],
      }],
    },
    {
      id: "s3-bucket-policy",
      title: "Bucket Policies",
      description: "Use a resource policy to grant or deny access to a bucket and its objects.",
      keyPoints: ["Keep Block Public Access enabled for private content.", "Scope permissions to the required principals and actions."],
      questions: [{ question: "How does a bucket policy differ from IAM?", answer: "A bucket policy is attached to the S3 resource; an identity policy is attached to a user or role. AWS evaluates applicable policies together." }],
    },
  ],
  object: [
    {
      id: "s3-object-metadata",
      title: "Metadata & Content Type",
      description: "Object metadata tells clients how to handle stored bytes and can carry application information.",
      keyPoints: ["Set Content-Type correctly for browser assets.", "Use metadata for small descriptive values, not for secrets."],
      questions: [{ question: "Why does Content-Type matter?", answer: "It tells browsers whether bytes represent HTML, CSS, JavaScript, an image, or another format." }],
    },
    {
      id: "s3-storage-classes",
      title: "Storage Classes",
      description: "Choose a storage class based on access frequency, retrieval needs, and cost.",
      keyPoints: ["Less frequent access can reduce storage cost but may add retrieval cost or delay.", "Lifecycle rules can transition or expire objects."],
    },
  ],
  "static-website": [
    {
      id: "static-deploy",
      title: "Build & Deploy",
      description: "Build the frontend and upload its output with the expected index file at the site root.",
      keyPoints: ["Run the production build before upload.", "Upload the contents of dist/, including nested assets."],
      questions: [{ question: "Why upload dist/ rather than src/?", answer: "The browser needs the HTML and bundled assets produced by Vite, not the uncompiled TypeScript source." }],
    },
    {
      id: "static-https",
      title: "HTTPS Delivery",
      description: "Put CloudFront in front of S3 to provide an HTTPS URL and caching at the edge.",
      keyPoints: ["An S3 website endpoint serves HTTP.", "A private S3 origin with CloudFront origin access control keeps the bucket private."],
    },
  ],
  ec2: [
    {
      id: "ec2-instance-lifecycle",
      title: "Instance Lifecycle",
      description: "Launch, monitor, stop, and terminate virtual machines according to workload demand.",
      keyPoints: ["Choose an instance type for CPU, memory, and network needs.", "Stopping and terminating have different effects on attached resources and charges."],
      questions: [{ question: "What is an AMI?", answer: "An Amazon Machine Image is a template for the operating system and software used when launching an instance." }],
    },
    {
      id: "ec2-networking",
      title: "Networking & Security",
      description: "Place instances in a VPC and limit their traffic with security groups.",
      keyPoints: ["Allow only required inbound ports and sources.", "Use IAM roles for application access to AWS services instead of embedded credentials."],
    },
  ],
  lambda: [
    {
      id: "lambda-events",
      title: "Event Sources",
      description: "Invoke a function from an HTTP request, a schedule, a queue, or a service event.",
      keyPoints: ["Choose the invocation pattern for the source and failure mode.", "Make retried event processing safe for duplicates."],
      questions: [{ question: "Why should event handlers be idempotent?", answer: "Some event sources retry or redeliver work, so processing the same event twice should not create an unintended second effect." }],
    },
    {
      id: "lambda-runtime",
      title: "Runtime & Concurrency",
      description: "Understand execution environments, timeouts, memory, and concurrent invocations.",
      keyPoints: ["Keep initialization outside the handler when it can be reused safely.", "Set timeouts and concurrency limits to protect downstream systems."],
    },
  ],
  cloudfront: [
    {
      id: "cloudfront-cache",
      title: "Edge Caching",
      description: "Cache eligible responses near viewers to reduce origin requests and latency.",
      keyPoints: ["Use cache headers and policies deliberately.", "Version asset filenames so new deployments do not depend on broad invalidations."],
      questions: [{ question: "Why might users still see an old file?", answer: "An edge cache or browser cache may serve a fresh cached copy until its lifetime expires or it is invalidated." }],
    },
    {
      id: "cloudfront-origin",
      title: "Origins & Access",
      description: "An origin supplies content to CloudFront when a requested response is not cached.",
      keyPoints: ["S3 and HTTP servers can be origins.", "Origin access control can restrict direct access to an S3 bucket origin."],
    },
  ],
  openmp: [
    {
      id: "omp-loops",
      title: "Parallel Loops",
      description: "Divide independent loop iterations among threads in a shared-memory process.",
      keyPoints: ["Check that iterations do not write conflicting data.", "Choose scheduling that balances work without excessive overhead."],
      questions: [{ question: "When is a loop unsafe to parallelise?", answer: "When one iteration depends on a value produced by another, or iterations update shared state without a correct coordination strategy." }],
      children: [{
        id: "omp-scheduling",
        title: "Scheduling",
        description: "Static scheduling assigns chunks in advance; dynamic scheduling hands out work as threads finish.",
        keyPoints: ["Static scheduling is predictable for uniform work.", "Dynamic scheduling can improve balance when iteration costs vary."],
      }],
    },
    {
      id: "omp-data-sharing",
      title: "Data Sharing",
      description: "Decide which variables are shared across threads and which are private to each thread.",
      keyPoints: ["Private variables avoid accidental cross-thread updates.", "Use reduction clauses for supported associative combinations."],
    },
  ],
  mpi: [
    {
      id: "mpi-point-to-point",
      title: "Point-to-Point Messages",
      description: "Processes exchange data with matching send and receive operations.",
      keyPoints: ["Match communicator, source or destination, and tag correctly.", "Plan blocking communication order to avoid deadlock."],
      questions: [{ question: "What identifies a message?", answer: "A receive matches within a communicator using the sender rank and message tag, with wildcards available when appropriate." }],
    },
    {
      id: "mpi-collectives",
      title: "Collective Operations",
      description: "A group of processes participates in operations such as broadcast, gather, and all-reduce.",
      keyPoints: ["All required ranks must call compatible collective operations.", "Use a collective when its communication pattern matches the algorithm."],
    },
  ],
  slurm: [
    {
      id: "slurm-jobs",
      title: "Jobs & Allocations",
      description: "Submit work with resource requests so the scheduler can place it on available nodes.",
      keyPoints: ["Request realistic CPU, memory, and time limits.", "A batch script records how the job should run."],
      questions: [{ question: "Why not request every available core?", answer: "Oversized requests can wait longer in the queue and waste capacity if the program cannot use the resources." }],
    },
    {
      id: "slurm-monitoring",
      title: "Monitoring Jobs",
      description: "Inspect queued, running, and completed jobs to diagnose resource or program problems.",
      keyPoints: ["Review job state and exit status.", "Compare allocated resources with actual usage before changing requests."],
    },
  ],
  reduction: [
    {
      id: "reduction-tree",
      title: "Reduction Trees",
      description: "Combine partial values in stages instead of sending every value to one worker.",
      keyPoints: ["A tree shortens the dependency chain for associative operations.", "The combination operation must match the intended result."],
      questions: [{ question: "Why can parallel sums differ slightly?", answer: "Floating-point addition is not exactly associative, so changing the order of additions can change rounding." }],
    },
    {
      id: "reduction-identity",
      title: "Identity Values",
      description: "Start each partial result with an identity that leaves the reduction unchanged.",
      keyPoints: ["Use zero for addition and one for multiplication.", "For maximum, choose a suitable lowest starting value for the data type."],
    },
  ],
  race: [
    {
      id: "race-shared-state",
      title: "Shared State",
      description: "Concurrent reads and writes need a defined ordering or a safe synchronization strategy.",
      keyPoints: ["A shared counter increment is multiple operations, not automatically one atomic step.", "Minimise shared mutable state when possible."],
      questions: [{ question: "Why is a race hard to reproduce?", answer: "Thread scheduling varies between runs, so the unsafe interleaving may appear only occasionally." }],
    },
    {
      id: "race-synchronisation",
      title: "Synchronisation",
      description: "Use atomics, locks, barriers, or reductions according to the operation being protected.",
      keyPoints: ["Keep critical sections small but correct.", "A barrier orders phases; it does not make every earlier access race-free."],
    },
  ],
  knn: [
    {
      id: "knn-distance",
      title: "Distance & Scaling",
      description: "KNN compares examples with a distance measure, so feature scales affect which examples count as neighbours.",
      keyPoints: ["Standardise numeric features when their units differ.", "Choose a metric that fits the feature representation."],
      questions: [{ question: "Why can one feature dominate KNN?", answer: "A feature with much larger numeric values can dominate the distance calculation even when it is not more informative." }],
      children: [{
        id: "knn-preprocessing",
        title: "Fit Preprocessing on Training Data",
        description: "Learn scaling parameters from the training fold and apply them unchanged to validation data.",
        keyPoints: ["Keep validation data out of preprocessing fit steps.", "A pipeline helps repeat the same transformation during evaluation and prediction."],
      }],
    },
    {
      id: "knn-k-choice",
      title: "Choosing k",
      description: "The neighbour count controls how local and sensitive the prediction is.",
      keyPoints: ["Small k can be noisy.", "Large k can smooth away useful local structure."],
    },
  ],
  logistic: [
    {
      id: "logistic-probability",
      title: "Probabilities & Thresholds",
      description: "A logistic model converts a linear score to a probability for binary classification.",
      keyPoints: ["The decision threshold need not be 0.5.", "Evaluate precision and recall for the actual cost of errors."],
      questions: [{ question: "Does logistic regression predict a continuous target?", answer: "In its usual binary classification form it models class probability, then a threshold can turn that probability into a class label." }],
    },
    {
      id: "logistic-regularisation",
      title: "Regularisation",
      description: "Penalise overly large coefficients to improve stability and generalisation.",
      keyPoints: ["Tune penalty strength on validation data.", "Feature scaling helps make coefficient penalties comparable."],
    },
  ],
  "decision-tree": [
    {
      id: "tree-splits",
      title: "Splitting Features",
      description: "Choose tests that separate training examples into more useful groups.",
      keyPoints: ["Classification trees can use impurity measures such as Gini impurity.", "A split is evaluated using the examples reaching that node."],
      questions: [{ question: "Why can deep trees overfit?", answer: "They can keep splitting until leaves describe small quirks of the training set rather than patterns that generalise." }],
    },
    {
      id: "tree-pruning",
      title: "Pruning & Limits",
      description: "Limit tree complexity with depth, leaf-size, or pruning choices.",
      keyPoints: ["Use validation data to choose complexity.", "A simpler tree is often easier to explain."],
    },
  ],
  neural: [
    {
      id: "neural-forward",
      title: "Forward Pass",
      description: "Each layer transforms its inputs and passes activations to the next layer.",
      keyPoints: ["Weights and biases are learned parameters.", "Nonlinear activations let stacked layers model nonlinear relationships."],
      questions: [{ question: "Why are nonlinear activations useful?", answer: "Without them, a stack of linear layers collapses to one linear transformation and cannot express richer nonlinear functions." }],
    },
    {
      id: "neural-backprop",
      title: "Backpropagation",
      description: "Use the chain rule to compute how the loss changes with each parameter.",
      keyPoints: ["Gradients point to local changes in the loss.", "An optimiser uses gradients to update parameters."],
    },
  ],
  softmax: [
    {
      id: "softmax-scores",
      title: "Scores to Probabilities",
      description: "Exponentiate class scores and normalise them so the outputs sum to one.",
      keyPoints: ["Adding the same constant to every score leaves softmax unchanged.", "Use stable implementations rather than exponentiating large raw values."],
      questions: [{ question: "Why subtract the maximum score first?", answer: "It keeps exponentials in a safer numeric range while leaving the resulting probabilities unchanged." }],
    },
    {
      id: "softmax-loss",
      title: "Cross-Entropy Loss",
      description: "Measure how much probability a model assigns to the correct class.",
      keyPoints: ["Confident incorrect predictions receive a large penalty.", "Use logits-aware library functions for numerical stability."],
    },
  ],
  "cross-validation": [
    {
      id: "cv-kfold",
      title: "K-Fold Evaluation",
      description: "Rotate which fold is held out and summarise model performance across runs.",
      keyPoints: ["Train a fresh model for each fold.", "Use stratified folds when class balance matters."],
      questions: [{ question: "What does cross-validation estimate?", answer: "It estimates how a training procedure may perform on unseen data, subject to the sampling and split design." }],
    },
    {
      id: "cv-leakage",
      title: "Avoiding Leakage",
      description: "Keep information from validation or test examples out of model fitting and preprocessing.",
      keyPoints: ["Fit scalers and imputers within each training fold.", "Use time-aware splits for forecasting data."],
    },
  ],
  pattern: [
    {
      id: "pattern-constructors",
      title: "Constructor Patterns",
      description: "Match a value by the constructor that created it and bind its contained values.",
      keyPoints: ["Patterns can unpack lists, tuples, and custom data constructors.", "Order clauses so specific cases are handled deliberately."],
      questions: [{ question: "What happens if no pattern matches?", answer: "The evaluation fails at runtime, so handling every constructor is safer for total functions." }],
      children: [{
        id: "pattern-exhaustive",
        title: "Exhaustive Cases",
        description: "Cover every possible constructor or provide an appropriate fallback.",
        keyPoints: ["Compiler warnings can reveal missing patterns.", "Total functions are easier to reason about than partial ones."],
      }],
    },
    {
      id: "pattern-guards",
      title: "Guards",
      description: "Use Boolean conditions to choose among results after a function's arguments match.",
      keyPoints: ["Guards read like named cases.", "Include an otherwise branch when no earlier guard is guaranteed to hold."],
    },
  ],
  "higher-order": [
    {
      id: "higher-map-filter",
      title: "Map & Filter",
      description: "Transform each element with map or keep selected elements with filter.",
      keyPoints: ["Pass behaviour as a function instead of repeating traversal logic.", "Composition can build a processing pipeline from small functions."],
      questions: [{ question: "What makes a function higher-order?", answer: "It takes a function as an argument, returns one, or both." }],
    },
    {
      id: "higher-folds",
      title: "Folds",
      description: "Collapse a structure by repeatedly combining an accumulator with its elements.",
      keyPoints: ["Choose an accumulator type and identity that match the task.", "The fold direction matters for non-associative operations and lazy evaluation."],
    },
  ],
  recursion: [
    {
      id: "recursion-base",
      title: "Base Cases",
      description: "Give the smallest inputs a direct result so recursive calls can stop.",
      keyPoints: ["Each recursive step should move toward a base case.", "List functions often handle [] and (x:xs) separately."],
      questions: [{ question: "What causes infinite recursion?", answer: "A path that keeps calling the function without reaching a terminating case." }],
    },
    {
      id: "recursion-structure",
      title: "Structural Recursion",
      description: "Follow the shape of a recursive data type such as a list or tree.",
      keyPoints: ["Solve smaller substructures and combine their results.", "A fold can capture common list-recursion patterns."],
    },
  ],
  adt: [
    {
      id: "adt-sum-product",
      title: "Sum & Product Types",
      description: "A sum offers alternatives; a product groups values that occur together.",
      keyPoints: ["Maybe models a value that may be absent.", "A record groups named fields into one value."],
      questions: [{ question: "Why use Maybe instead of a null value?", answer: "Its type makes the missing case explicit, so callers must handle it through pattern matching or combinators." }],
    },
    {
      id: "adt-domain-model",
      title: "Model Valid States",
      description: "Choose constructors that represent allowed situations directly.",
      keyPoints: ["Separate alternatives instead of combining unrelated Boolean flags.", "A precise type can rule out invalid combinations."],
    },
  ],
  "type-classes": [
    {
      id: "classes-instances",
      title: "Classes & Instances",
      description: "A class describes operations; an instance provides them for a particular type.",
      keyPoints: ["Eq describes equality; Show describes a textual representation.", "An instance must give the required operations coherent behaviour."],
      questions: [{ question: "Is a type class an object-oriented class?", answer: "No. It groups operations over types; data representation is defined separately by each type." }],
    },
    {
      id: "classes-constraints",
      title: "Type Constraints",
      description: "A signature can require capabilities such as Eq a before using equality on values of type a.",
      keyPoints: ["Constraints document what an operation needs.", "Prefer the smallest useful constraint."],
    },
  ],
  "frontend-html": [
    {
      id: "html-structure",
      title: "Document Structure",
      description: "Use headings, landmarks, and lists to make a page understandable beyond its visual layout.",
      keyPoints: ["Choose elements for their meaning, not appearance.", "Use a logical heading hierarchy for navigation."],
      questions: [{ question: "Why use a button instead of a clickable div?", answer: "A native button already supports keyboard activation, focus, and an accessible role." }],
      children: [{
        id: "html-focus-order",
        title: "Focus Order",
        description: "Keyboard focus should follow the same useful reading and interaction order as the page.",
        keyPoints: ["Preserve visible focus indicators.", "Avoid positive tabindex values that create surprising jumps."],
      }],
    },
    {
      id: "html-forms",
      title: "Forms & Errors",
      description: "Associate labels, help text, and validation messages with their inputs.",
      keyPoints: ["Do not rely on placeholders as labels.", "Explain how to fix an error as well as where it occurred."],
    },
  ],
  "frontend-css": [
    {
      id: "css-layout-systems",
      title: "Flexbox & Grid",
      description: "Choose layout tools based on how elements should align and share space.",
      keyPoints: ["Flexbox arranges items along one main axis.", "Grid coordinates rows and columns together."],
      questions: [{ question: "Can Flexbox and Grid be used together?", answer: "Yes. A page can use Grid for larger regions and Flexbox inside individual components." }],
    },
    {
      id: "css-responsive",
      title: "Responsive Sizing",
      description: "Adapt to available space with fluid sizes, wrapping, and breakpoints where the design needs them.",
      keyPoints: ["Avoid fixed widths that overflow small screens.", "Test content growth and zoom, not only device presets."],
    },
  ],
  "frontend-javascript": [
    {
      id: "js-event-loop",
      title: "Tasks & Microtasks",
      description: "The browser runs synchronous code, then queued microtasks, before taking another task.",
      keyPoints: ["Promise reactions run as microtasks.", "Long synchronous work can delay input and rendering."],
      questions: [{ question: "Does setTimeout(fn, 0) run immediately?", answer: "No. It schedules a future task after the current stack and any queued microtasks have completed." }],
    },
    {
      id: "js-closures",
      title: "Closures",
      description: "A function can keep access to variables from the scope where it was created.",
      keyPoints: ["Closures make callbacks and private state possible.", "Understand captured values when handling asynchronous work."],
    },
  ],
  "frontend-react": [
    {
      id: "react-state-model",
      title: "State & Derived Values",
      description: "Keep the smallest state needed and calculate values that follow from props or state during rendering.",
      keyPoints: ["Avoid storing the same fact twice.", "Stable keys help React preserve the right item state."],
      questions: [{ question: "Should filtered items be separate state?", answer: "Usually no. If they can be calculated from the item list and filter, derive them during render rather than synchronising another state value." }],
    },
    {
      id: "react-effects",
      title: "Effects & Cleanup",
      description: "Use effects to synchronise with external systems such as timers, subscriptions, or browser APIs.",
      keyPoints: ["Clean up subscriptions and timers when dependencies change or the component unmounts.", "Keep event handling in event handlers when possible."],
    },
  ],
  "frontend-browser": [
    {
      id: "browser-rendering",
      title: "Rendering Pipeline",
      description: "The browser turns HTML and CSS into layout and pixels, then updates them as the page changes.",
      keyPoints: ["DOM and CSSOM contribute to what is rendered.", "Animating transforms can avoid repeated layout work."],
      questions: [{ question: "Why reserve image dimensions?", answer: "It gives the browser space before the image loads, reducing unexpected layout shifts." }],
    },
    {
      id: "browser-loading",
      title: "Loading & Caching",
      description: "Prioritise critical resources and cache reusable assets to make repeat visits faster.",
      keyPoints: ["Ship only the JavaScript needed for the initial view.", "Measure the result on realistic devices and networks."],
    },
  ],
  "api-http": [
    {
      id: "http-request-response",
      title: "Request & Response",
      description: "A client sends a method, URL, and headers; the server returns a status, headers, and often a body.",
      keyPoints: ["Check response.ok or status before trusting the body.", "Use Content-Type to describe the representation."],
      questions: [{ question: "Can a successful response have no body?", answer: "Yes. For example, a 204 No Content response deliberately has no response body." }],
    },
  ],
  indexes: [
    {
      id: "db-btree",
      title: "B-Tree Indexes",
      description: "A B-tree organises keys so many equality, range, and ordering queries can avoid scanning every row.",
      keyPoints: ["Index useful predicates and ordering patterns.", "Check the query plan rather than assuming an index will be used."],
      questions: [{ question: "Why not index every column?", answer: "Indexes consume space and must be maintained on writes, so each one needs a useful query benefit." }],
      children: [{
        id: "db-composite-index",
        title: "Composite Indexes",
        description: "Combine multiple columns in one index when query patterns benefit from their order.",
        keyPoints: ["Column order matters for efficient scans.", "Design from real WHERE and ORDER BY patterns."],
      }],
    },
    {
      id: "db-index-cost",
      title: "Index Trade-offs",
      description: "An index can improve reads while increasing storage and write work.",
      keyPoints: ["Measure representative queries before and after a change.", "Remove indexes that add cost without serving important queries."],
    },
  ],
  transactions: [
    {
      id: "db-acid",
      title: "ACID Guarantees",
      description: "Transactions group changes so they commit together under defined consistency and durability rules.",
      keyPoints: ["Atomicity prevents a partial commit of one transaction.", "Durability means committed changes survive according to the database's guarantees."],
      questions: [{ question: "What does rollback do?", answer: "It discards uncommitted changes made by the transaction." }],
    },
    {
      id: "db-isolation",
      title: "Isolation Levels",
      description: "Isolation rules control which effects concurrent transactions may observe.",
      keyPoints: ["Higher isolation can prevent more anomalies but may require more coordination.", "Choose based on the correctness needs of the operation."],
    },
  ],
  concurrency: [
    {
      id: "db-locks",
      title: "Locks & Deadlocks",
      description: "Locks coordinate conflicting work, but circular waits can stop transactions from progressing.",
      keyPoints: ["Keep transactions short.", "Use a consistent lock order when practical."],
      questions: [{ question: "What is a deadlock?", answer: "Two or more transactions each wait for a lock held by another, so the database must break the cycle, usually by aborting one transaction." }],
    },
    {
      id: "db-mvcc",
      title: "MVCC",
      description: "Multiversion concurrency control lets transactions read an appropriate version of data while updates continue.",
      keyPoints: ["A snapshot defines what a read can see.", "MVCC reduces some read-write blocking but does not remove every conflict."],
    },
  ],
  postgres: [
    {
      id: "pg-schema",
      title: "Schema & Constraints",
      description: "Define tables, types, keys, and constraints so the database can reject invalid data.",
      keyPoints: ["Use primary and foreign keys to express relationships.", "Add NOT NULL and CHECK constraints where the domain requires them."],
      questions: [{ question: "Why validate in the database too?", answer: "Multiple clients may write data, so database constraints protect invariants regardless of the application path." }],
    },
    {
      id: "pg-query-plans",
      title: "Query Plans",
      description: "Use EXPLAIN to see the planned scans, joins, and sorts; EXPLAIN ANALYZE also runs the query and reports actual work.",
      keyPoints: ["Compare estimated and actual row counts when diagnosing slow queries.", "Tune queries and indexes based on evidence."],
    },
  ],
  kubernetes: [
    {
      id: "k8s-controllers",
      title: "Desired State & Controllers",
      description: "Controllers observe cluster state and try to bring it toward the declared specification.",
      keyPoints: ["The API stores desired state in resources.", "Reconciliation repeats as the cluster changes."],
      questions: [{ question: "What happens if a managed Pod disappears?", answer: "A controller can notice that actual state no longer matches the desired replica count and create a replacement." }],
      children: [{
        id: "k8s-deployments",
        title: "Deployments",
        description: "A Deployment manages replica sets for a group of application Pods.",
        keyPoints: ["Declare the desired number of replicas.", "Rolling updates can replace Pods gradually."],
      }],
    },
    {
      id: "k8s-services",
      title: "Services",
      description: "A Service gives a stable way to reach a changing set of matching Pods.",
      keyPoints: ["Label selectors connect Services to Pods.", "Choose an exposure type that fits internal or external traffic."],
    },
  ],
  redis: [
    {
      id: "redis-cache",
      title: "Caching & TTL",
      description: "Store frequently needed values in memory and expire them when they become stale.",
      keyPoints: ["Set a time-to-live when cached data should age out.", "Plan invalidation when the source data changes."],
      questions: [{ question: "What is a cache miss?", answer: "The requested value is absent or expired, so the application must fetch or calculate it from the source." }],
    },
    {
      id: "redis-persistence",
      title: "Persistence Options",
      description: "Choose snapshots, append-only logging, both, or neither according to recovery needs.",
      keyPoints: ["Redis can be used as a disposable cache or as a data store with configured persistence.", "Understand the possible data-loss window of each option."],
    },
  ],
  elasticsearch: [
    {
      id: "search-inverted-index",
      title: "Inverted Index",
      description: "Map searchable terms to documents that contain them for fast text retrieval.",
      keyPoints: ["Text analysis affects which terms are indexed.", "Search relevance depends on both indexing and query design."],
      questions: [{ question: "Why can a search miss an exact-looking word?", answer: "The field's analyzer may tokenize or normalise text differently from the query, so mappings and analysis need to match the use case." }],
    },
    {
      id: "search-shards",
      title: "Shards & Replicas",
      description: "Split an index into primary shards and optionally keep replica copies for availability and search capacity.",
      keyPoints: ["Shard choices affect distribution and overhead.", "Replicas are copies, not independent backups."],
    },
  ],
  events: [
    {
      id: "event-contracts",
      title: "Event Contracts",
      description: "Define what an event means and which fields consumers may rely on.",
      keyPoints: ["Name events for facts that happened.", "Evolve schemas without surprising older consumers."],
      questions: [{ question: "What is the difference between an event and a command?", answer: "An event reports a past fact; a command asks a specific component to perform an action." }],
    },
    {
      id: "event-delivery",
      title: "Delivery & Ordering",
      description: "Consumers must account for delayed, duplicated, or out-of-order messages.",
      keyPoints: ["Design idempotent handlers where duplicates are possible.", "Use explicit ordering keys only when order is required."],
    },
  ],
  queues: [
    {
      id: "queue-acknowledgement",
      title: "Acknowledgement",
      description: "A consumer acknowledges completed work so the queue can stop offering that message.",
      keyPoints: ["A worker failure may cause redelivery.", "Acknowledge only after the intended side effect is safe."],
      questions: [{ question: "Why might a message be processed twice?", answer: "A worker may finish the work but fail before its acknowledgement is recorded, causing the queue to redeliver it." }],
    },
    {
      id: "queue-retries",
      title: "Retries & Dead Letters",
      description: "Retry temporary failures and move repeatedly failing messages aside for investigation.",
      keyPoints: ["Use bounded retries and backoff.", "A dead-letter queue preserves messages that need manual or separate handling."],
    },
  ],
};
