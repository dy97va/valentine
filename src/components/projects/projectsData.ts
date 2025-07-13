export interface Project {
  title: string;
  description: string;
  images: string[];
  tags: string[];
  links: {
    demo?: string;
    github?: string;
  };
}

const projects: Project[] = [
  {
    title: 'Nordcraft',
    description: 'Fully functioning online e-commerce platform, created for a small leather goods company Nordcraft. Written in React, it uses Firebase for data storage and authentication, and Stripe with Node for payment processing.',
    images: [
      '/assets/nordcraft1.png',
      '/assets/nordcraft2.png',
    ],
    tags: ['React', 'Firebase', 'Stripe', 'Node.js'],
    links: {
      demo: '#',
      github: '#',
    },
  },
  {
    title: 'Timeline',
    description: 'Web-based SAAS project for facility and communal areas management and scheduling in apartment complexes. Written in React, uses Firebase for authentication and data storage. Uses stripe for payment processing and subscription status tracking',
    images: [
      '/assets/timeline1.png',
      '/assets/timeline2.png',
      '/assets/timeline3.png',
    ],
    tags: ['React', 'Firebase', 'Stripe', 'Node.js', 'TypeScript'],
    links: {
      demo: '#',
      github: '#',
    },
  },
]

export default projects