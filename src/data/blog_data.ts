// Blog posts. Content is HTML (rendered with the .prose-site styles).
// `date` is the original publish date; `updated` is when the article was last revised.
// TODO: replace the generic stock images with real photos or simple illustrations.

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  updated?: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  slug: string;
  image: string;
}

const AUTHOR = "Xyvin Technologies";

const readTime = (html: string) =>
  `${Math.max(1, Math.round(html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length / 220))} min read`;

const posts: Omit<BlogPost, "readTime">[] = [
  {
    id: 1,
    title: "Where AI actually helps in business software, and where it doesn't",
    excerpt:
      "AI can take real work off your team, but only when it's pointed at the right problems. A practical guide to choosing your first AI project and avoiding expensive experiments.",
    category: "AI & Automation",
    author: AUTHOR,
    date: "2024-12-10",
    updated: "2026-10-31",
    tags: ["AI", "Automation", "Strategy"],
    featured: true,
    slug: "future-of-ai-enterprise-software",
    image: "/assets/img/post_3.jpg",
    content: `
      <p>Almost every business we speak to wants to "add AI". Far fewer have a clear idea of which problem it should solve. That gap is where budgets disappear: a chatbot nobody uses, a pilot that never reaches production, a demo that impressed the board and then quietly died.</p>
      <p>The good news is that the projects that work tend to look alike. If you know the pattern, you can pick a first project with a high chance of paying for itself.</p>

      <h2>What good AI projects have in common</h2>
      <p>The AI work that earns its keep usually has four traits:</p>
      <ul>
        <li><strong>High volume.</strong> The task happens hundreds or thousands of times a month, so small time savings add up.</li>
        <li><strong>Repetitive, but not rigid.</strong> If a task follows exact rules, ordinary software does it better and cheaper. AI shines when inputs vary: emails written differently, documents in different layouts, questions phrased a hundred ways.</li>
        <li><strong>Tolerant of the occasional mistake.</strong> Either a person reviews the output, or an error is cheap to fix.</li>
        <li><strong>Measurable.</strong> You can count the hours, tickets or errors before and after.</li>
      </ul>

      <h2>Where AI tends to pay off</h2>
      <h3>Customer support triage and answers</h3>
      <p>Most support teams answer the same few dozen questions over and over. An assistant connected to your help articles, order system and policies can answer the routine ones on your website or WhatsApp, and pass anything unusual to a person with the conversation already summarised.</p>
      <h3>Reading documents</h3>
      <p>Invoices, purchase orders, applications, contracts and ID documents arrive in every format imaginable. Extracting the fields you need and checking them against your records is slow, error-prone work for people and a strong fit for modern AI models, especially with a person approving anything below a confidence threshold.</p>
      <h3>Drafting, not deciding</h3>
      <p>First drafts of quotes, proposals, product descriptions or replies save real time. The person stays responsible for the final version, which keeps quality high and risk low.</p>
      <h3>Searching your own knowledge</h3>
      <p>Policies, manuals, past projects and meeting notes are often spread across drives nobody can search well. An internal assistant that answers questions from those sources, and shows where each answer came from, helps new staff get up to speed and saves experienced staff from repeating themselves.</p>

      <h2>Where AI is usually the wrong tool</h2>
      <ul>
        <li><strong>Exact calculations and rules.</strong> Tax, payroll, pricing and stock levels need deterministic logic. Use regular code.</li>
        <li><strong>Decisions with serious consequences and no review.</strong> Credit decisions, medical advice or anything legally sensitive should not run unattended.</li>
        <li><strong>Problems caused by messy processes.</strong> If nobody agrees how a process should work, automating it with AI just produces confusion faster. Fix the process first.</li>
        <li><strong>Low-volume tasks.</strong> If something happens ten times a month, the setup and maintenance cost rarely makes sense.</li>
      </ul>

      <h2>How to run a first project</h2>
      <ol>
        <li><strong>Pick one task.</strong> Not "AI for customer service", but "answer order-status questions on WhatsApp".</li>
        <li><strong>Measure today.</strong> How many times does it happen, how long does it take, what does an error cost?</li>
        <li><strong>Build a small version against real data.</strong> Two to six weeks is typical for a focused first release.</li>
        <li><strong>Keep a person in the loop at first.</strong> Review outputs, collect the failures, and improve.</li>
        <li><strong>Compare against your baseline.</strong> Expand only if the numbers justify it.</li>
      </ol>

      <h2>Practical questions to settle early</h2>
      <p><strong>Data privacy.</strong> Know where your data goes, which provider processes it, and whether it is used for training. Most business-grade AI services let you opt out, and some workloads can run on infrastructure you control.</p>
      <p><strong>Running costs.</strong> AI services are usually billed per use. Estimate monthly volume early so there are no surprises when usage grows.</p>
      <p><strong>Ownership.</strong> Prompts, workflows and integrations are part of your product. Make sure they are documented and that you own them, not just the vendor.</p>

      <h2>The bottom line</h2>
      <p>The most useful AI in business software is rarely the flashiest. It quietly removes a repetitive task, saves a measurable number of hours, and leaves people to handle the work that needs judgement. Start there, prove it, then grow.</p>
      <p>If you have a task in mind and want an honest view on whether AI is the right fit, <a href="/contact">tell us about it</a>.</p>
    `,
  },
  {
    id: 2,
    title: "Building web apps that scale: lessons from Next.js and TypeScript projects",
    excerpt:
      "Scaling is less about handling millions of users and more about a codebase that stays fast and easy to change as it grows. The practices we rely on in every Next.js project.",
    category: "Web Development",
    author: AUTHOR,
    date: "2024-12-08",
    updated: "2026-10-31",
    tags: ["Next.js", "TypeScript", "Web Development", "Performance"],
    featured: false,
    slug: "scalable-web-apps-nextjs-typescript",
    image: "/assets/img/post_6.jpg",
    content: `
      <p>When people talk about scalable web apps they usually mean traffic. In practice, most business applications hit a different wall first: the codebase becomes slow to change. Features that took a day now take a week, every release breaks something, and nobody wants to touch the checkout code.</p>
      <p>Next.js and TypeScript are a strong foundation for avoiding that, but they don't guarantee it. These are the practices that make the difference on our projects.</p>

      <h2>1. Let types describe your business</h2>
      <p>TypeScript is most valuable when your types mirror real concepts: an Order, a Member, an Invoice with a clear set of statuses. Define them once, share them between the frontend and the API, and the compiler will point out every place that needs updating when the business changes.</p>
      <ul>
        <li>Turn on strict mode from day one. Retrofitting it later is painful.</li>
        <li>Validate data at the edges, where it enters from forms, APIs and databases, so the types inside your app can be trusted.</li>
        <li>Avoid "any". Each one is a small hole in your safety net.</li>
      </ul>

      <h2>2. Render on the server by default</h2>
      <p>With the App Router, components render on the server unless you opt out. Keep it that way for content and data display, and mark only interactive pieces such as forms, filters and menus as client components. The result is less JavaScript in the browser, faster pages and better search visibility.</p>

      <h2>3. Organise code by feature</h2>
      <p>A folder of 200 components sorted alphabetically doesn't scale. Group code by what it does for the business, such as billing, members or catalogue, with shared design-system components kept separately. New team members find their way faster, and changes stay contained.</p>

      <h2>4. Treat performance as a feature</h2>
      <ul>
        <li>Use the built-in image component for responsive sizes and modern formats.</li>
        <li>Self-host fonts and load only the weights you use.</li>
        <li>Watch your Core Web Vitals in production, not just on your own fast laptop.</li>
        <li>Be suspicious of large client-side libraries. Each one costs every visitor load time.</li>
      </ul>

      <h2>5. Cache deliberately</h2>
      <p>Most pages don't need to be generated on every request. Product listings, articles and marketing pages can be generated ahead of time and refreshed when content changes. Reserve per-request rendering for what is truly personal or real-time, like dashboards and carts.</p>

      <h2>6. Build a small design system early</h2>
      <p>Buttons, form fields, cards and page sections should exist once and be reused everywhere. It keeps the interface consistent, makes redesigns cheap, and stops the slow drift where every page looks slightly different.</p>

      <h2>7. Automate the boring safety checks</h2>
      <p>Type checks, linting and a handful of tests on the flows that make you money (sign-up, checkout, enquiry forms) should run on every change. Preview deployments for every branch let non-developers review work before it goes live.</p>

      <h2>8. Plan for the second year</h2>
      <p>Frameworks move quickly. Keep dependencies few and current, upgrade regularly in small steps rather than one big leap, and write down the decisions that aren't obvious from the code. Future you, or the next team, will be grateful.</p>

      <h2>Summary</h2>
      <p>A scalable web app is one that is still pleasant to work on after two years and twenty releases. Strong types, server-first rendering, clear structure and a few automated checks get you most of the way there.</p>
      <p>Planning a new web application or struggling with an existing one? <a href="/contact">We're happy to take a look</a>.</p>
    `,
  },
  {
    id: 3,
    title: "API design practices that save you pain later",
    excerpt:
      "An API is a promise to every app and partner that uses it. Design decisions made in week one are expensive to undo in year two. Here's what to get right early.",
    category: "Engineering",
    author: AUTHOR,
    date: "2024-12-05",
    updated: "2026-10-31",
    tags: ["API", "REST", "Integration", "Backend"],
    featured: false,
    slug: "api-design-best-practices",
    image: "/assets/img/post_2.jpg",
    content: `
      <p>Once an API is in use by your mobile app, your website and perhaps a few partners, every change becomes a negotiation. That's why the decisions you make before the first release matter so much. The following practices keep APIs easy to use, safe to change and cheap to support.</p>

      <h2>Design the API before writing the code</h2>
      <p>Write the API description first, typically as an OpenAPI document, and review it with the people who will use it: frontend developers, mobile developers, integration partners. Changing a document takes minutes. Changing a live API takes months.</p>

      <h2>Name things the way your business does</h2>
      <p>Resources should match real concepts and use plural nouns: <code>/orders</code>, <code>/members</code>, <code>/invoices</code>. Use HTTP methods for actions (GET to read, POST to create, PATCH to update, DELETE to remove) rather than verbs in URLs. Consistency matters more than any single convention, so pick one style and stick to it.</p>

      <h2>Return errors people can act on</h2>
      <p>A bare "400 Bad Request" helps nobody. Use the right status code and a consistent error body that says what went wrong and which field caused it:</p>
      <ul>
        <li><strong>400</strong> for invalid input, with field-level messages</li>
        <li><strong>401 / 403</strong> for missing or insufficient permissions</li>
        <li><strong>404</strong> when something doesn't exist</li>
        <li><strong>409</strong> for conflicts, such as a duplicate booking</li>
        <li><strong>429</strong> when a client is sending too many requests</li>
      </ul>

      <h2>Version from the start</h2>
      <p>Put a version in the path or a header from the first release. When you need a breaking change, release a new version, give clients a clear deprecation date, and keep the old version running until then. Non-breaking additions, such as a new optional field, don't need a new version.</p>

      <h2>Paginate every list</h2>
      <p>Any endpoint that returns a list will eventually return a very long one. Paginate from day one, and for large or fast-changing data use cursor-based pagination, which stays reliable when records are added while someone is paging through.</p>

      <h2>Make retries safe</h2>
      <p>Networks fail, and clients retry. If a payment or order request is retried, it must not create a duplicate. Support an idempotency key on create operations so the same request can safely be sent twice.</p>

      <h2>Secure it properly</h2>
      <ul>
        <li>HTTPS everywhere, with no exceptions.</li>
        <li>Short-lived access tokens, and scopes that limit what each client can do.</li>
        <li>Validate every input on the server, even if the app already did.</li>
        <li>Rate-limit by client to protect against abuse and runaway scripts.</li>
        <li>Never return more data than the client needs, especially personal data.</li>
      </ul>

      <h2>Use webhooks instead of constant polling</h2>
      <p>If partners need to know when something changes, such as a payment succeeding or an order shipping, send them a signed webhook rather than making them ask every minute. It's faster for them and cheaper for you.</p>

      <h2>Document and monitor</h2>
      <p>Good documentation includes working examples, not just field lists. Once live, track response times, error rates and which endpoints and versions are used, so you know who will be affected by a change before you make it.</p>

      <h2>REST or GraphQL?</h2>
      <p>Both work well. REST is simpler to cache, secure and explain to partners. GraphQL helps when many different screens need different slices of complex, related data. For most business systems, a well-designed REST API is the pragmatic default.</p>

      <p>Need an API for your product, or need your existing systems connected? <a href="/services/api-integration">See how we approach integrations</a>.</p>
    `,
  },
  {
    id: 4,
    title: "Moving to the cloud: a practical plan for small and mid-sized businesses",
    excerpt:
      "Cloud migration doesn't have to be a big-bang project. A step-by-step plan for moving systems safely, keeping costs under control and avoiding the common traps.",
    category: "Cloud",
    author: AUTHOR,
    date: "2024-12-03",
    updated: "2026-10-31",
    tags: ["Cloud", "Migration", "AWS", "Azure", "DevOps"],
    featured: true,
    slug: "cloud-migration-strategies-smb",
    image: "/assets/img/post_4.jpg",
    content: `
      <p>For many small and mid-sized businesses, the move to the cloud starts with a problem: an ageing server in the office, a hosting provider that keeps going down, or software that's hard to reach for people working remotely. Done well, migration solves those problems and makes the next few years easier. Done in a rush, it can raise costs and introduce new risks.</p>

      <h2>Step 1: Know what you have</h2>
      <p>Start with an honest inventory. For each system, note:</p>
      <ul>
        <li>What it does and who relies on it</li>
        <li>Where it runs today and what it connects to</li>
        <li>How much downtime the business can tolerate</li>
        <li>Any rules about where its data must be stored</li>
      </ul>
      <p>This list alone often reveals forgotten systems, duplicate tools and quick wins.</p>

      <h2>Step 2: Choose an approach per system</h2>
      <p>Not everything should move the same way. Typical options are:</p>
      <ul>
        <li><strong>Replace</strong> it with a SaaS product, which is often right for email, file storage and accounting.</li>
        <li><strong>Move as-is</strong> ("lift and shift") to cloud servers. Fast, but it carries over existing inefficiencies.</li>
        <li><strong>Adjust</strong> during the move, for example by switching to a managed database so someone else handles backups and patches.</li>
        <li><strong>Rebuild</strong> for the cloud when a system is central to the business and holding it back.</li>
        <li><strong>Retire</strong> what nobody really uses.</li>
      </ul>

      <h2>Step 3: Pick a provider and a region</h2>
      <p>AWS, Microsoft Azure and Google Cloud all cover typical business needs well. Let existing skills and tools guide you: Microsoft-heavy companies often find Azure smoother. Choose a region close to your users, and check data residency requirements for your industry and country before you commit.</p>

      <h2>Step 4: Set up the foundations first</h2>
      <ul>
        <li>Separate accounts or projects for production and testing</li>
        <li>Single sign-on and multi-factor authentication for everyone with access</li>
        <li>Automated, tested backups, kept separately from the systems they protect</li>
        <li>Monitoring and alerts that reach a person, not an unread inbox</li>
        <li>Budgets and cost alerts from day one</li>
      </ul>

      <h2>Step 5: Migrate in waves</h2>
      <p>Start with something low-risk to learn the process, then move more important systems. For each wave, rehearse the move, agree a rollback plan, schedule it for a quiet period and tell users what to expect. Keep the old environment available until the new one has proved itself.</p>

      <h2>Step 6: Control costs after the move</h2>
      <p>Cloud bills grow quietly. The usual culprits are oversized servers, forgotten test environments and data stored forever. Review costs monthly, right-size resources, switch off what isn't needed outside business hours, and use reserved or committed pricing for steady workloads once you know your baseline.</p>

      <h2>Common mistakes to avoid</h2>
      <ul>
        <li>Moving everything at once with no rollback plan</li>
        <li>Assuming the cloud provider handles your backups and security for you. Many responsibilities stay with you.</li>
        <li>Skipping the testing of restores until the day you need one</li>
        <li>Leaving one person as the only one who knows how everything works</li>
      </ul>

      <h2>Summary</h2>
      <p>A good migration is boring: planned in waves, rehearsed, monitored and reversible. The reward is infrastructure that's more reliable, easier to scale and accessible from anywhere.</p>
      <p>Planning a move, or unhappy with your current setup? <a href="/contact">Talk to us</a> and we'll help you work out the right first step.</p>
    `,
  },
  {
    id: 5,
    title: "Mobile app security: the essentials every business should insist on",
    excerpt:
      "You don't need to be a security expert to ask the right questions. The protections every business app should have, and what to check before launch.",
    category: "Mobile",
    author: AUTHOR,
    date: "2024-12-01",
    updated: "2026-10-31",
    tags: ["Mobile Security", "App Development", "Privacy"],
    featured: false,
    slug: "mobile-app-security-2024",
    image: "/assets/img/post_1.jpg",
    content: `
      <p>A mobile app carries your brand into your customers' pockets, and often their personal data, payment details and account access too. A single security lapse can cost far more than the app itself, in lost trust as much as in money. The good news is that most problems are prevented by a handful of well-understood practices.</p>
      <p>Here is what to expect from any team building an app for you, whether you have a security background or not.</p>

      <h2>1. Keep secrets off the device</h2>
      <p>Anything shipped inside an app can be extracted. API keys with broad permissions, database passwords and admin credentials must never be built into the app. Sensitive operations belong on your server, where you control access.</p>

      <h2>2. Store data on the phone carefully</h2>
      <ul>
        <li>Store only what the app genuinely needs on the device.</li>
        <li>Use the platform's secure storage (Keychain on iOS, Keystore on Android) for tokens and sensitive values.</li>
        <li>Don't write personal data to logs, caches or screenshots.</li>
      </ul>

      <h2>3. Protect data in transit</h2>
      <p>All traffic should use HTTPS with modern settings. For apps handling payments or sensitive records, certificate pinning makes it much harder for an attacker on the same network to intercept traffic.</p>

      <h2>4. Get authentication right</h2>
      <ul>
        <li>Use short-lived access tokens that refresh automatically, so a stolen token expires quickly.</li>
        <li>Offer biometric login for convenience, backed by proper server-side sessions.</li>
        <li>Support multi-factor authentication for admin accounts and sensitive actions.</li>
        <li>Let users see and end their active sessions.</li>
      </ul>

      <h2>5. Never trust the app alone</h2>
      <p>The server must check every request: is this user allowed to see this record, change this order, use this discount? Checks that only happen inside the app can be bypassed. This single principle prevents a large share of real-world breaches.</p>

      <h2>6. Keep dependencies up to date</h2>
      <p>Most apps include dozens of third-party libraries. Each one can contain vulnerabilities. Track them, update regularly, and remove what you no longer use. Be particularly careful with analytics and advertising SDKs, which may collect more data than you expect.</p>

      <h2>7. Ask only for permissions you need</h2>
      <p>Location, contacts, camera and microphone access should be requested only when a feature needs them, with a clear explanation. App stores increasingly reject apps that over-ask, and users notice.</p>

      <h2>8. Respect privacy rules</h2>
      <p>Depending on where your users are, laws such as India's DPDP Act, the EU's GDPR or the UAE's data protection law apply. In practice that means a clear privacy policy, collecting the minimum data, letting users delete their account and data, and filling in the App Store and Google Play privacy declarations accurately.</p>

      <h2>A pre-launch checklist</h2>
      <ol>
        <li>No secrets in the app bundle</li>
        <li>Sensitive data in secure storage only</li>
        <li>HTTPS everywhere, pinning where it matters</li>
        <li>Server-side permission checks on every endpoint</li>
        <li>Dependencies reviewed and updated</li>
        <li>Minimum permissions, each clearly explained</li>
        <li>Privacy policy, account deletion and store declarations in place</li>
        <li>An independent security test for apps handling payments or personal data</li>
      </ol>

      <h2>After launch</h2>
      <p>Security isn't a one-off task. Plan for regular updates, monitor for unusual activity, and have a simple plan for what to do and who to tell if something goes wrong.</p>
      <p>Building an app, or want a second opinion on an existing one? <a href="/services/mobile-apps">See how we build mobile apps</a> or <a href="/contact">get in touch</a>.</p>
    `,
  },
  {
    id: 6,
    title: "Low-code or custom development? How to choose",
    excerpt:
      "Low-code tools can get you live in days, and custom software can do things no platform allows. A straightforward way to decide which fits your project, and when to switch.",
    category: "Strategy",
    author: AUTHOR,
    date: "2024-11-28",
    updated: "2026-10-31",
    tags: ["Low-Code", "No-Code", "Custom Software", "Strategy"],
    featured: false,
    slug: "rise-of-low-code-no-code",
    image: "/assets/img/post_5.jpg",
    content: `
      <p>Low-code and no-code platforms have matured a lot. Tools for building internal apps, websites, workflows and databases now let non-developers create things that once needed a software team. So when does it still make sense to build custom software? The honest answer: it depends on what you're building, how central it is to your business, and where it's heading.</p>

      <h2>Where low-code is a great choice</h2>
      <ul>
        <li><strong>Internal tools for a small team.</strong> Request forms, simple trackers and approval flows.</li>
        <li><strong>Prototypes and experiments.</strong> Testing an idea with real users before investing in a full build.</li>
        <li><strong>Standard business processes.</strong> If your process looks like everyone else's, a platform designed for it is usually faster and cheaper.</li>
        <li><strong>Marketing websites.</strong> Modern website builders handle brochure sites well, and your team can edit them easily.</li>
      </ul>

      <h2>Where custom development wins</h2>
      <ul>
        <li><strong>Software that sets you apart.</strong> If the way you work is your competitive advantage, a generic platform will flatten it.</li>
        <li><strong>Complex rules and integrations.</strong> Pricing logic, multi-step workflows and connections to several other systems quickly hit platform limits.</li>
        <li><strong>Customer-facing products.</strong> Performance, branding, accessibility and user experience matter more, and platforms constrain all four.</li>
        <li><strong>Scale.</strong> Per-user or per-transaction platform pricing can overtake the cost of custom software as you grow.</li>
        <li><strong>Strict data requirements.</strong> When you must control exactly where data lives and who can access it.</li>
      </ul>

      <h2>Five questions to decide</h2>
      <ol>
        <li><strong>Is this core to how we make money?</strong> The more central it is, the stronger the case for owning it.</li>
        <li><strong>How unusual is our process?</strong> Standard processes suit platforms; unusual ones fight them.</li>
        <li><strong>What will this cost in three years?</strong> Compare platform fees at your expected size, not today's.</li>
        <li><strong>Can we leave?</strong> Check whether you can export your data and logic if the platform changes its pricing or shuts down.</li>
        <li><strong>Who will maintain it?</strong> Low-code apps still need an owner. Without one, they become tomorrow's legacy system.</li>
      </ol>

      <h2>The hybrid approach</h2>
      <p>It doesn't have to be one or the other. Many businesses run on a sensible mix: off-the-shelf tools for accounting, email and HR; low-code for quick internal workflows; and custom software for the systems that are core to the business, connected to everything else through APIs.</p>

      <h2>Signs it's time to move from low-code to custom</h2>
      <ul>
        <li>The team spends more time working around the platform than working in it</li>
        <li>Monthly platform fees keep climbing with every new user</li>
        <li>Pages are slow, or the platform can't integrate with a system you depend on</li>
        <li>You can't build a feature your customers keep asking for</li>
      </ul>
      <p>When that happens, your low-code app hasn't failed. It has proved the idea and shown exactly what the custom version needs to do, which makes the next step faster and less risky.</p>

      <h2>Summary</h2>
      <p>Use low-code to move fast on standard and experimental work. Invest in custom software where it gives you an edge, needs to scale, or must fit the way you uniquely operate.</p>
      <p>Not sure which side of the line your project falls on? <a href="/contact">Ask us</a>. We'll tell you honestly, even if the answer is a platform rather than custom work.</p>
    `,
  },
];

const blogPosts: BlogPost[] = posts.map((post) => ({ ...post, readTime: readTime(post.content) }));

// Helper functions
export const getAllBlogSlugs = (): string[] => blogPosts.map((post) => post.slug);

export const getBlogPost = (slug: string): BlogPost | undefined => blogPosts.find((post) => post.slug === slug);

export const getAllBlogPosts = (): BlogPost[] => blogPosts;

export const getFeaturedPosts = (): BlogPost[] => blogPosts.filter((post) => post.featured);

export const getRelatedPosts = (currentSlug: string, limit: number = 3): BlogPost[] => {
  const currentPost = getBlogPost(currentSlug);
  if (!currentPost) return [];
  const tags = new Set(currentPost.tags.map((t) => t.toLowerCase()));

  // Rank other posts by shared tags (then same category), falling back to the newest posts.
  return blogPosts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => ({
      post,
      score:
        post.tags.filter((t) => tags.has(t.toLowerCase())).length * 2 +
        (post.category === currentPost.category ? 1 : 0),
    }))
    .sort((a, b) => b.score - a.score || b.post.date.localeCompare(a.post.date))
    .slice(0, limit)
    .map(({ post }) => post);
};

export const formatPostDate = (date: string) =>
  new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(
    new Date(date)
  );

export default blogPosts;
