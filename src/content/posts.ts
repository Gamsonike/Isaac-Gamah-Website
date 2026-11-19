export type PostCategory =
  | "Software Development"
  | "Cybersecurity"
  | "Networking"
  | "Technology Tutorials"
  | "IT Infrastructure"
  | "Personal Learning Journey";

export const postCategories: PostCategory[] = [
  "Software Development",
  "Cybersecurity",
  "Networking",
  "Technology Tutorials",
  "IT Infrastructure",
  "Personal Learning Journey",
];

export type Post = {
  slug: string;
  category: PostCategory;
  title: string;
  description: string;
  /** ISO date, e.g. "2026-01-31". Use real publication dates only. */
  date: string;
  readingTime: string;
  /**
   * Body blocks. "## " = subheading; lines starting "- " = bullet list; lines starting "1. " = numbered list;
   * "**bold**" and "*italic*" work inline; "\n" inside a paragraph = line break.
   */
  body: string[];
};

/**
 * Add real articles here. They appear automatically on /insights and the home page,
 * each with its own page at /insights/<slug>.
 */
export const posts: Post[] = [
  {
    slug: "building-software-that-solves-real-world-problems",
    category: "Software Development",
    title: "Building Software That Solves Real-World Problems: Beyond Writing Code",
    description:
      "Software is most valuable when it solves a real problem. How I approach building practical applications: understand the problem, build, secure and improve.",
    date: "2026-11-19",
    readingTime: "4 min read",
    body: [
      "Technology is most valuable when it solves a real problem. In today's digital environment, software development is no longer just about writing code or creating attractive interfaces. It is about understanding people's challenges, designing practical solutions and building systems that make everyday activities easier, faster and more efficient.",
      "My interest in technology has grown from a combination of IT support, systems administration, software development and cybersecurity. These experiences have shaped how I approach building digital solutions: start with the problem, understand the user and develop something that delivers practical value.",
      "## Understanding the Problem Before Writing Code",
      "One mistake developers can make is becoming too focused on the technology before understanding the problem they are trying to solve.",
      "A good application should begin with questions:",
      "- Who will use this solution?\n- What problem are they experiencing?\n- How do they currently handle that problem?\n- Can technology make the process simpler?\n- How can the solution remain reliable as it grows?",
      "These questions influence the architecture, user experience, functionality and security of the final product.",
      "## Turning Ideas into Practical Applications",
      "My development projects reflect different areas where technology can improve everyday operations.",
      "**Gamiphil Toolkit Enterprise**",
      "This project explores how a desktop application can bring system intelligence and device management tools together in one environment. Its development includes system health monitoring, hardware diagnostics, performance monitoring, security features and optimization opportunities.",
      "The goal is to make important system information easier to understand and manage through a unified interface.",
      "**Sikaly**",
      "Sikaly focuses on helping individuals, traders and small businesses understand their money better. The application is designed around recording financial transactions, tracking income and expenses, monitoring balances and understanding daily profit.",
      "The idea is straightforward: financial awareness should not require complicated systems.",
      "**Gamiphil IT Shop**",
      "The Gamiphil IT Shop project explores how an online store can simplify product discovery and purchasing. It incorporates product categories, search, product details, shopping cart functionality and WhatsApp checkout.",
      "It demonstrates how a digital storefront can connect product presentation with a practical purchasing process.",
      "Each project presents a different technical challenge, but they share one principle: technology should serve a clear purpose.",
      "## Why User Experience Matters",
      "An application can have powerful functionality and still fail if people find it difficult to use.",
      "Good user experience involves clear navigation, understandable information, consistent design and predictable interactions.",
      "Developers must think beyond whether a feature works. They must also consider whether users can discover it, understand it and use it without unnecessary frustration.",
      "This is particularly important when developing solutions for individuals and small businesses, where simplicity can make the difference between adopting a tool and abandoning it.",
      "## Building with Reliability and Security in Mind",
      "Functionality alone is not enough. Software should also be dependable and designed with security considerations from the beginning.",
      "Data protection, access control, input validation, error handling and secure communication are important considerations when designing modern applications.",
      "Security should not be treated as an optional feature added after development. It should influence technical decisions throughout the development process.",
      "## My Approach to Software Development",
      "I approach software development through four important stages:",
      "1. **Understand:** Identify the problem, requirements and people who will use the solution.\n2. **Build:** Develop the application with suitable technologies and a clear structure.\n3. **Secure:** Consider security, data protection and reliability throughout development.\n4. **Improve:** Test, evaluate and refine the solution as requirements evolve.",
      "This approach reflects my belief that good software is not simply software that runs. It is software that solves a problem, supports its users and can continue to evolve.",
      "## Final Thoughts",
      "The future of software development belongs not only to people who can write code, but also to people who can understand problems and translate them into useful digital solutions.",
      "My journey across IT operations, software development and cybersecurity continues to reinforce this perspective.",
      "I remain interested in building practical technology that improves how people work, manage information and interact with digital systems.",
      "**Build. Secure. Innovate.**",
      "*Isaac Gamah*\nFull-Stack Developer | Cybersecurity Professional | IT Solutions",
    ],
  },
  {
    slug: "why-cybersecurity-must-be-part-of-every-developers-mindset",
    category: "Cybersecurity",
    title: "Why Cybersecurity Must Be Part of Every Developer's Mindset",
    description:
      "Cybersecurity is not only for security specialists. Why developers should consider security from the start of every project.",
    date: "2026-11-19",
    readingTime: "5 min read",
    body: [
      "As technology becomes increasingly integrated into everyday life and business operations, cybersecurity has become more important than ever.",
      "Businesses depend on digital platforms to communicate, store information, process transactions and manage operations. Individuals also rely on applications and online services to handle increasingly sensitive aspects of their lives.",
      "But every digital system introduces potential risks.",
      "This is why I believe cybersecurity should not be viewed as a responsibility reserved exclusively for security specialists. It should be part of the mindset of everyone involved in building, managing and maintaining technology.",
      "## Security Is More Than Installing Antivirus Software",
      "There is a common misconception that cybersecurity begins and ends with antivirus software, firewalls or passwords.",
      "While these tools are important, effective cybersecurity requires a broader approach.",
      "It involves understanding how systems work, identifying weaknesses, controlling access, protecting information and preparing for potential incidents.",
      "A system may look professional and function perfectly while still containing security weaknesses that expose users or business information to unnecessary risks.",
      "Security must therefore be considered at different levels, including:",
      "- Application security.\n- Network security.\n- Data protection.\n- Identity and access management.\n- Endpoint security.\n- Vulnerability assessment.\n- Security awareness and user behaviour.",
      "Understanding how these areas interact is essential to building and maintaining safer digital environments.",
      "## Why Developers Must Think About Security",
      "Developers make decisions that directly influence the security of applications.",
      "How user information is collected, how passwords are handled, how permissions are assigned and how an application communicates with external services can all affect its security.",
      "Consider a simple financial application. It may allow users to record income and expenses, view balances and monitor transactions.",
      "However, beyond the visible features, important questions must be considered:",
      "- Who can access the information?\n- How is sensitive data protected?\n- Can unauthorized users manipulate records?\n- What happens if a device is lost?\n- How does the application handle invalid or unexpected input?",
      "These questions demonstrate why security cannot be separated from software development.",
      "A developer who understands security is better positioned to identify risks before they become problems.",
      "## Learning to Think Like a Security Professional",
      "My interest in cybersecurity has developed through structured learning and practical exposure.",
      "Through cybersecurity training, including ISC2 Certified in Cybersecurity (CC), Cisco cybersecurity courses and learning experiences with Thrive Africa, I have developed an interest in areas such as networking, vulnerability assessment, IT support and security awareness.",
      "These experiences have strengthened my understanding that cybersecurity is not simply about finding vulnerabilities. It is also about understanding systems, assessing risks and recommending appropriate improvements.",
      "Working with environments involving Windows, Linux and virtual machines also provides an opportunity to explore how different systems interact and how security weaknesses can emerge.",
      "Practical learning is particularly important because cybersecurity requires more than theoretical knowledge. It requires the ability to investigate, analyse and respond to real technical situations.",
      "## The Importance of Security Awareness",
      "Technology alone cannot eliminate every security risk.",
      "People remain an important part of an organization's security environment.",
      "Weak passwords, suspicious email attachments, unsafe downloads, unauthorized software installations and poor information-handling practices can expose systems to attacks.",
      "Organizations should therefore invest in continuous security awareness.",
      "Employees should understand how to recognize suspicious activity, protect their credentials, handle sensitive information and report potential security incidents.",
      "Cybersecurity is a shared responsibility.",
      "## Building a Security-First Development Culture",
      "For developers and technology teams, adopting a security-first mindset means considering security throughout the software development lifecycle.",
      "Some important practices include:",
      "1. **Secure design:** Consider security requirements before implementation begins.\n2. **Input validation:** Ensure applications handle user input safely.\n3. **Access control:** Give users only the permissions they need.\n4. **Dependency management:** Monitor third-party libraries and components for known vulnerabilities.\n5. **Testing:** Evaluate applications for weaknesses before deployment and as they evolve.\n6. **Continuous improvement:** Review security practices as technologies and threats change.",
      "These practices do not guarantee that a system will never be compromised, but they help reduce avoidable risks and improve resilience.",
      "## Where Software Development and Cybersecurity Meet",
      "I find the relationship between software development and cybersecurity particularly interesting.",
      "Software development focuses on creating solutions that work. Cybersecurity focuses on ensuring that the systems, information and people relying on those solutions are protected.",
      "Bringing these disciplines together creates a more complete approach to technology.",
      "My goal is to continue developing my capabilities across both areas: building practical applications, understanding the infrastructure behind them and strengthening the security of digital environments.",
      "## Final Thoughts",
      "Cybersecurity should not be an afterthought. It should be part of how we think about technology from the beginning.",
      "Whether developing a mobile application, managing a business network or maintaining an organization's computer systems, security considerations influence the reliability and trustworthiness of the solution.",
      "As I continue my journey in software development and cybersecurity, one principle remains central to my work:",
      "**Build with purpose. Secure with intention. Innovate responsibly.**",
      "*Isaac Gamah*\nFull-Stack Developer | Cybersecurity Professional | IT Solutions",
    ],
  },
];
