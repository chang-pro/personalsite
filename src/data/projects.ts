export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
}

const data: Project[] = [
  {
    title: 'Twilio SMS Dashboard with WebRTC Softphone',
    subtitle: 'Next.js, Twilio SDK, WebRTC, Tailwind CSS',
    link: 'https://dialer.techhelpfl.com',
    image: '/images/projects/twilio-dialer.png',
    date: '2024-01-01',
    desc: 'A comprehensive Next.js application for sending SMS messages and making real voice calls via Twilio. Features three main modes: single message, mass CSV upload, and full WebRTC softphone with in-browser calling.',
  },
  {
    title: 'Full-Stack Marketplace Platform',
    subtitle: 'TypeScript, React, Node.js, MongoDB, Express',
    image: '/images/projects/marketplace.png',
    date: '2024-01-01',
    desc: 'Built secure classifieds platform with JWT authentication and bcrypt hashing supporting 50+ concurrent users. Developed RESTful API with full CRUD operations and implemented responsive React UI with real-time search.',
  },
  {
    title: 'Public Safety Data Dashboard',
    subtitle: 'TypeScript, Leaflet.js, GIS',
    image: '/images/projects/safety-dashboard.png',
    date: '2024-01-01',
    desc: 'Created interactive map visualizing 500+ police incidents with dynamic filtering, deployed on Netlify with 200+ monthly users.',
  },
  {
    title: 'Municipal GIS Mapping System',
    subtitle: 'TypeScript, REST API, Leaflet.js',
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
    image: '/images/projects/webhook-system.png',
    date: '2023-01-01',
    desc: 'Created automation system converting webhooks into SMS/voice alerts with 99% delivery reliability.',
  },
];

export default data;
