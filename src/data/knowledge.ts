import type { KnowledgeNode } from "../types/knowledge";

export const knowledge: KnowledgeNode[] = [
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
