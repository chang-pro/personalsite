export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  video?: string;
  date: string;
  desc: string;
}

const data: Project[] = [
  {
    title: 'Twilio SMS Dashboard with WebRTC Softphone',
    subtitle: 'Next.js, Twilio SDK, WebRTC, Tailwind CSS',
    link: 'https://dialer.techhelpfl.com',
    image: '/images/projects/twilio-dialer.png',
    video: 'https://drive.google.com/file/d/1py7Bb4PCfSfQHjSGjWzIeHFzLoZTCaqd/preview',
    date: '2024-01-01',
    desc: 'A comprehensive Next.js application for sending SMS messages and making real voice calls via Twilio. Features three main modes: single message, mass CSV upload, and full WebRTC softphone with in-browser calling.',
  },
  {
    title: 'AI Appointment Bot',
    subtitle: 'Vapi, Docker, n8n, LLM',
    link: 'https://techhelpfl.com',
    image: '/images/projects/appointment-bot.png',
    video: 'https://drive.google.com/file/d/1iT-J71MNgcffsgMAAiKD_k14tsWesCuP/preview',
    date: '2024-12-01',
    desc: 'An intelligent appointment booking bot powered by Vapi, Docker, n8n, and LLMs. Capable of natural voice conversations to confirm and schedule appointments automatically.',
  },
  {
    title: 'Full-Stack Marketplace Platform',
    subtitle: 'TypeScript, React, Node.js, MongoDB, Express',
    link: 'https://github.com/chang-pro/Craiglist-clone-project',
    image: '/images/projects/marketplace.png',
    date: '2024-01-01',
    desc: 'Built secure classifieds platform with JWT authentication and bcrypt hashing supporting 50+ concurrent users. Developed RESTful API with full CRUD operations and implemented responsive React UI with real-time search.',
  },
  {
    title: 'Public Safety Data Dashboard',
    subtitle: 'TypeScript, Leaflet.js, GIS',
    link: 'https://github.com/chang-pro/OPD-Officer-Involved-Shootings',
    image: '/images/projects/safety-dashboard.png',
    date: '2024-01-01',
    desc: 'Created interactive map visualizing 500+ police incidents with dynamic filtering, deployed on Netlify with 200+ monthly users.',
  },
  {
    title: 'Municipal GIS Mapping System',
    subtitle: 'TypeScript, REST API, Leaflet.js',
    link: 'https://github.com/chang-pro/Orlando-Hydrology',
    image: '/images/projects/gis-mapping.png',
    date: '2023-01-01',
    desc: 'Developed mapping application integrating city APIs with 1,000+ waterway features; reduced load time by 40% via data caching.',
  },
  {
    title: 'Video Streaming Interface',
    subtitle: 'React, Material UI, RapidAPI',
    image: '/images/projects/video-streaming.png',
    date: '2023-01-01',
    desc: 'Built responsive YouTube-style application with React Router, real-time search, and adaptive video playback.',
  },
  {
    title: 'Webhook Alert System',
    subtitle: 'Python, Flask, Twilio API',
    link: 'https://github.com/chang-pro/Trading-Alert-Notification-System',
    image: '/images/projects/webhook-system.png',
    date: '2023-01-01',
    desc: 'Created automation system converting webhooks into SMS/voice alerts with 99% delivery reliability.',
  },
];

export default data;
