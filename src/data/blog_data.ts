import blog_img_1 from "@/assets/img/post_1.jpg";
import blog_img_2 from "@/assets/img/post_2.jpg";
import blog_img_3 from "@/assets/img/post_3.jpg";
import { StaticImageData } from "next/image";


interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  slug: string;
  image: string;
  authorImage?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of AI in Enterprise Software Development",
    excerpt:
      "Discover how artificial intelligence is revolutionizing enterprise software development, from automated code generation to intelligent testing and deployment.",
    content: `
      <h2>Introduction</h2>
      <p>Artificial Intelligence is transforming how we build enterprise software. From automated code generation to intelligent testing frameworks, AI is reshaping the entire software development lifecycle.</p>
      
      <h2>Key AI Applications in Enterprise Development</h2>
      <p>Modern enterprises are leveraging AI in several critical areas:</p>
      
      <h3>1. Automated Code Generation</h3>
      <p>AI-powered tools like GitHub Copilot and OpenAI Codex are helping developers write code faster and with fewer errors. These tools can generate entire functions, classes, and even complete modules based on natural language descriptions.</p>
      
      <h3>2. Intelligent Testing and Quality Assurance</h3>
      <p>AI-driven testing frameworks can automatically generate test cases, identify potential bugs, and predict areas of code that are likely to fail. This proactive approach to quality assurance significantly reduces the time and cost associated with bug fixes.</p>
      
      <h3>3. Predictive Analytics for Performance Optimization</h3>
      <p>Machine learning algorithms can analyze application performance patterns and predict potential bottlenecks before they impact users. This enables proactive optimization and improved user experience.</p>
      
      <h2>Implementation Strategies</h2>
      <p>Successfully integrating AI into your development workflow requires careful planning:</p>
      
      <ul>
        <li>Start with pilot projects to understand AI tool capabilities</li>
        <li>Train your development team on AI-assisted coding practices</li>
        <li>Establish guidelines for AI code review and validation</li>
        <li>Implement monitoring systems to track AI tool effectiveness</li>
      </ul>
      
      <h2>Future Outlook</h2>
      <p>The future of AI in enterprise software development looks promising. We can expect to see more sophisticated AI models that can understand business requirements and generate complete applications with minimal human intervention.</p>
      
      <h2>Conclusion</h2>
      <p>AI is not replacing developers but augmenting their capabilities. By embracing AI tools and methodologies, enterprises can build better software faster while maintaining high quality standards.</p>
    `,
    category: "AI & Technology",
    author: "Xyvin Tech Team",
    date: "2024-12-10",
    readTime: "8 min read",
    tags: ["AI", "Enterprise", "Software Development", "Automation"],
    featured: true,
    slug: "future-of-ai-enterprise-software",
    image: "/assets/img/post_1.jpg",
    authorImage: "/assets/img/team/Team_1.png"
  },
  {
    id: 2,
    title: "Building Scalable Web Applications with Next.js and TypeScript",
    excerpt:
      "Learn the best practices for creating high-performance, scalable web applications using Next.js, TypeScript, and modern development patterns.",
    content: `
      <h2>Why Next.js and TypeScript?</h2>
      <p>Next.js has become the go-to framework for building modern web applications, offering server-side rendering, static site generation, and excellent developer experience. When combined with TypeScript, it provides type safety and better code maintainability.</p>
      
      <h2>Setting Up Your Development Environment</h2>
      <p>Starting a new Next.js project with TypeScript is straightforward:</p>
      
      <pre><code>npx create-next-app@latest my-app --typescript
cd my-app
npm run dev</code></pre>
      
      <h2>Essential Architecture Patterns</h2>
      
      <h3>1. Component Organization</h3>
      <p>Organize your components in a hierarchical structure that reflects your application's UI architecture:</p>
      
      <ul>
        <li>Atomic components for basic UI elements</li>
        <li>Molecule components for simple UI groups</li>
        <li>Organism components for complex UI sections</li>
        <li>Template components for page layouts</li>
      </ul>
      
      <h3>2. State Management</h3>
      <p>Choose the right state management solution based on your application's complexity:</p>
      
      <ul>
        <li>React Context for simple global state</li>
        <li>Zustand for medium complexity applications</li>
        <li>Redux Toolkit for complex state management needs</li>
      </ul>
      
      <h2>Performance Optimization Techniques</h2>
      
      <h3>Image Optimization</h3>
      <p>Use Next.js Image component for automatic image optimization.</p>
      
      <h3>Code Splitting</h3>
      <p>Implement dynamic imports for better bundle optimization.</p>
      
      <h2>TypeScript Best Practices</h2>
      
      <p>Leverage TypeScript's powerful type system to catch errors early and improve code quality:</p>
      
      <ul>
        <li>Use strict TypeScript configuration</li>
        <li>Define proper interfaces for props and state</li>
        <li>Utilize generic types for reusable components</li>
        <li>Implement proper error boundaries with TypeScript</li>
      </ul>
      
      <h2>Deployment and Monitoring</h2>
      
      <p>Deploy your Next.js application using platforms like Vercel or Netlify for optimal performance. Implement monitoring with tools like Sentry for error tracking and analytics.</p>
      
      <h2>Conclusion</h2>
      <p>Next.js and TypeScript provide a powerful foundation for building scalable web applications. By following these best practices and leveraging the framework's built-in optimizations, you can create fast, maintainable, and type-safe applications.</p>
    `,
    category: "Web Development",
    author: "Xyvin Development Team",
    date: "2024-12-08",
    readTime: "12 min read",
    tags: ["Next.js", "TypeScript", "Web Development", "React"],
    featured: false,
    slug: "scalable-web-apps-nextjs-typescript",
    image: "/assets/img/post_2.jpg",
    authorImage: "/assets/img/team/Team_2.png"
  },
  {
    id: 3,
    title: "API Design Best Practices for Modern Applications",
    excerpt:
      "Essential guidelines for designing robust, secure, and developer-friendly APIs that scale with your business needs.",
    content: `
      <h2>Introduction to Modern API Design</h2>
      <p>Well-designed APIs are the backbone of modern applications. They enable seamless communication between different services and provide the foundation for scalable, maintainable software architectures.</p>
      
      <h2>RESTful API Design Principles</h2>
      
      <h3>1. Resource-Based URLs</h3>
      <p>Design your URLs around resources, not actions.</p>
      
      <h3>2. Use Appropriate HTTP Methods</h3>
      <p>Each HTTP method has a specific purpose:</p>
      
      <ul>
        <li><strong>GET</strong>: Retrieve data (idempotent)</li>
        <li><strong>POST</strong>: Create new resources</li>
        <li><strong>PUT</strong>: Update entire resources (idempotent)</li>
        <li><strong>PATCH</strong>: Partial updates</li>
        <li><strong>DELETE</strong>: Remove resources (idempotent)</li>
      </ul>
      
      <h2>Response Structure and Status Codes</h2>
      
      <h3>Consistent Response Format</h3>
      <p>Maintain a consistent response structure across your API.</p>
      
      <h3>Proper HTTP Status Codes</h3>
      <p>Use appropriate status codes to communicate the result of API operations.</p>
      
      <h2>Security Best Practices</h2>
      
      <h3>Authentication and Authorization</h3>
      <p>Implement robust authentication mechanisms:</p>
      
      <ul>
        <li>Use JWT tokens for stateless authentication</li>
        <li>Implement refresh token rotation</li>
        <li>Use HTTPS for all API communications</li>
        <li>Implement rate limiting to prevent abuse</li>
      </ul>
      
      <h2>Documentation and Versioning</h2>
      
      <p>Provide comprehensive documentation using tools like Swagger/OpenAPI.</p>
      
      <h2>Performance Optimization</h2>
      
      <p>Implement pagination for large datasets and appropriate caching mechanisms.</p>
      
      <h2>Conclusion</h2>
      <p>Following these API design best practices will help you create robust, scalable, and developer-friendly APIs. Remember to continuously gather feedback from API consumers and iterate on your design to meet evolving needs.</p>
    `,
    category: "API Development",
    author: "Xyvin Backend Team",
    date: "2024-12-05",
    readTime: "10 min read",
    tags: ["API", "REST", "GraphQL", "Backend Development"],
    featured: false,
    slug: "api-design-best-practices",
    image: "/assets/img/post_3.jpg",
    authorImage: "/assets/img/team/Team_3.png"
  },
  {
    id: 4,
    title: "Cloud Migration Strategies for Small to Medium Businesses",
    excerpt:
      "A comprehensive guide to migrating your business applications to the cloud, including cost optimization and security considerations.",
    content: `
      <h2>Why Cloud Migration Matters</h2>
      <p>Cloud migration is no longer optional for businesses looking to scale efficiently. It offers cost savings, improved scalability, enhanced security, and better disaster recovery capabilities.</p>
      
      <h2>Assessment and Planning Phase</h2>
      
      <h3>Current Infrastructure Audit</h3>
      <p>Before migrating, conduct a thorough assessment of your current infrastructure.</p>
      
      <h3>Migration Strategy Selection</h3>
      <p>Choose the right migration approach based on your needs.</p>
      
      <h2>Choosing the Right Cloud Provider</h2>
      
      <p>Consider major cloud platforms like AWS, Azure, and Google Cloud Platform based on your specific requirements.</p>
      
      <h2>Cost Optimization Strategies</h2>
      
      <p>Optimize your cloud spending through right-sizing resources and using reserved instances.</p>
      
      <h2>Security and Compliance</h2>
      
      <p>Ensure your cloud migration maintains security standards and meets regulatory requirements.</p>
      
      <h2>Migration Execution</h2>
      
      <p>Execute migration in phases to minimize risk.</p>
      
      <h2>Post-Migration Optimization</h2>
      
      <p>Set up comprehensive monitoring and continuously optimize your cloud setup.</p>
      
      <h2>Conclusion</h2>
      <p>Cloud migration for SMBs requires careful planning, proper execution, and ongoing optimization. By following these strategies and best practices, businesses can successfully leverage cloud computing to drive growth and innovation while maintaining security and controlling costs.</p>
    `,
    category: "Cloud Computing",
    author: "Xyvin Cloud Experts",
    date: "2024-12-03",
    readTime: "15 min read",
    tags: ["Cloud", "Migration", "AWS", "Azure", "SMB"],
    featured: true,
    slug: "cloud-migration-strategies-smb",
    image: "/assets/img/post_4.jpg",
    authorImage: "/assets/img/team/Team_4.png"
  },
  {
    id: 5,
    title: "Mobile App Security: Essential Practices for 2024",
    excerpt:
      "Protect your mobile applications and user data with these essential security practices and emerging threat mitigation strategies.",
    content: `
      <h2>The Mobile Security Landscape</h2>
      <p>Mobile app security has never been more critical. With increasing cyber threats and stringent data protection regulations, developers must implement comprehensive security measures from the ground up.</p>
      
      <h2>Common Mobile Security Threats</h2>
      
      <h3>1. Data Breaches</h3>
      <p>Unauthorized access to sensitive user data through various vulnerabilities.</p>
      
      <h3>2. Malicious Apps</h3>
      <p>Fake apps that steal data or install malware</p>
      
      <h3>3. Network-Based Attacks</h3>
      <p>Attacks on unsecured Wi-Fi networks</p>
      
      <h3>4. Platform Vulnerabilities</h3>
      <p>Exploitation of OS-level security flaws</p>
      
      <h2>Essential Security Practices</h2>
      
      <h3>Secure Code Development</h3>
      <p>Always validate and sanitize user input and implement robust authentication mechanisms.</p>
      
      <h3>Data Protection</h3>
      <p>Encrypt sensitive data stored on the device and use HTTPS/TLS for all network communications.</p>
      
      <h3>API Security</h3>
      <p>Secure your API endpoints and implement rate limiting to prevent abuse.</p>
      
      <h2>Platform-Specific Security</h2>
      
      <h3>iOS Security Features</h3>
      <p>Use iOS Keychain for secure storage and configure App Transport Security properly.</p>
      
      <h3>Android Security Features</h3>
      <p>Use Android Keystore for cryptographic operations and configure network security.</p>
      
      <h2>Testing and Monitoring</h2>
      
      <p>Implement comprehensive security testing and runtime monitoring for suspicious behavior.</p>
      
      <h2>Compliance and Privacy</h2>
      
      <p>Ensure compliance with relevant regulations like GDPR, CCPA, and others.</p>
      
      <h2>Emerging Security Trends</h2>
      
      <p>Implement zero trust principles and leverage AI for enhanced security.</p>
      
      <h2>Conclusion</h2>
      <p>Mobile app security requires a comprehensive approach that addresses threats at every level. By implementing these security practices and staying updated with emerging threats, developers can build robust, secure mobile applications that protect user data and maintain user trust.</p>
    `,
    category: "Mobile Development",
    author: "Xyvin Security Team",
    date: "2024-12-01",
    readTime: "9 min read",
    tags: ["Mobile Security", "App Development", "Cybersecurity"],
    featured: false,
    slug: "mobile-app-security-2024",
    image: "/assets/img/post_5.jpg",
    authorImage: "/assets/img/team/Team_5.png"
  },
  {
    id: 6,
    title: "The Rise of Low-Code/No-Code Development Platforms",
    excerpt:
      "Explore how low-code and no-code platforms are democratizing software development and accelerating digital transformation.",
    content: `
      <h2>Understanding Low-Code/No-Code</h2>
      <p>Low-code and no-code platforms are changing the development landscape by enabling rapid application development with minimal traditional coding. These platforms use visual development environments, drag-and-drop interfaces, and pre-built components to accelerate the development process.</p>
      
      <h2>The Difference Between Low-Code and No-Code</h2>
      
      <h3>Low-Code Platforms</h3>
      <p>Low-code platforms require some programming knowledge but significantly reduce the amount of hand-coding needed.</p>
      
      <h3>No-Code Platforms</h3>
      <p>No-code platforms allow users to build applications without any programming knowledge.</p>
      
      <h2>Benefits of Low-Code/No-Code Development</h2>
      
      <h3>Accelerated Development</h3>
      <p>Significantly faster time-to-market through rapid prototyping and pre-built components.</p>
      
      <h3>Democratization of Development</h3>
      <p>Enables non-technical users to create applications and reduces dependency on IT departments.</p>
      
      <h3>Cost Efficiency</h3>
      <p>Reduced development costs and resources through lower development time and effort.</p>
      
      <h2>Use Cases and Applications</h2>
      
      <h3>Business Process Automation</h3>
      <p>Automate repetitive business processes through workflow automation.</p>
      
      <h3>Customer Relationship Management</h3>
      <p>Build custom CRM solutions for lead tracking and management.</p>
      
      <h3>Data Management and Analytics</h3>
      <p>Create data-driven applications with custom dashboards and reports.</p>
      
      <h2>Popular Low-Code/No-Code Platforms</h2>
      
      <h3>Enterprise Low-Code Platforms</h3>
      <p>Microsoft Power Platform and OutSystems offer comprehensive business application platforms.</p>
      
      <h3>No-Code Platforms</h3>
      <p>Airtable and Zapier provide powerful integration and automation capabilities.</p>
      
      <h2>Implementation Best Practices</h2>
      
      <p>Choose the right platform based on your technical and business requirements.</p>
      
      <h2>Challenges and Limitations</h2>
      
      <p>Understanding platform constraints including technical limitations and security concerns.</p>
      
      <h2>Integration with Traditional Development</h2>
      
      <p>Combine low-code/no-code with traditional development for optimal results.</p>
      
      <h2>Future Trends and Outlook</h2>
      
      <p>AI-powered development and industry-specific solutions are emerging trends.</p>
      
      <h2>Getting Started</h2>
      
      <p>Begin your low-code/no-code journey through proper assessment and planning.</p>
      
      <h2>Conclusion</h2>
      <p>Low-code and no-code platforms are transforming software development by making it more accessible, faster, and cost-effective. While they're not a replacement for traditional development in all scenarios, they offer significant value for many business applications and processes.</p>
    `,
    category: "Development Tools",
    author: "Xyvin Innovation Team",
    date: "2024-11-28",
    readTime: "7 min read",
    tags: ["Low-Code", "No-Code", "Digital Transformation"],
    featured: false,
    slug: "rise-of-low-code-no-code",
    image: "/assets/img/post_6.jpg",
    authorImage: "/assets/img/team/Team_1.png"
  },
];

// Helper functions
export const getAllBlogSlugs = (): string[] => {
  return blogPosts.map(post => post.slug);
};

export const getBlogPost = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getAllBlogPosts = (): BlogPost[] => {
  return blogPosts;
};

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  if (category === "All") return blogPosts;
  return blogPosts.filter(post => post.category === category);
};

export const getRelatedPosts = (currentSlug: string, limit: number = 3): BlogPost[] => {
  const currentPost = getBlogPost(currentSlug);
  if (!currentPost) return [];

  return blogPosts
    .filter(post => post.slug !== currentSlug && post.category === currentPost.category)
    .slice(0, limit);
};

export default blogPosts;