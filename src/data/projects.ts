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
    title: 'Full-Stack Marketplace Platform',
    subtitle: 'TypeScript, React, Node.js, MongoDB, Express',
    image: '/images/projects/marketplace1.png',
    date: '2024-01-15',
    desc: 'Built secure classifieds platform with JWT authentication, bcrypt hashing, and session management for 50+ concurrent users. Implemented RESTful API with Express handling CRUD operations; designed responsive React UI with real-time search.',
  },
  {
    title: 'Public Safety Data Dashboard',
    subtitle: 'TypeScript, Leaflet.js, GIS, CSV Processing',
    link: 'https://opdshooting.netlify.app/',
    image: '/images/projects/harvest.jpg',
    date: '2023-11-20',
    desc: 'Created interactive map visualizing 500+ police incidents using Leaflet.js with dynamic date/location filtering. Deployed live dashboard using Netlify achieving 200+ monthly users; processed public datasets for transparency.',
  },
  {
    title: 'Municipal GIS Mapping System',
    subtitle: 'TypeScript, REST API, Leaflet.js, JSON',
    link: 'https://orlando.dmchang.xyz/',
    image: '/images/projects/spacepotato.jpg',
    date: '2023-09-10',
    desc: 'Developed mapping app integrating city APIs with 1,000+ waterway features; reduced load time 40% via data caching.',
  },
  {
    title: 'Video Streaming Interface',
    subtitle: 'React, Material UI, RapidAPI, React Router',
    image: '/images/projects/streaming.png',
    date: '2023-07-05',
    desc: 'Built responsive YouTube clone with React Router, real-time search, and adaptive playback for all screen sizes.',
  },
  {
    title: 'Webhook Alert System',
    subtitle: 'Python, Flask, Twilio API',
    image: '/images/projects/webook.png',
    date: '2023-05-15',
    desc: 'Automated notification system converting JSON webhooks to SMS/calls with 99% delivery rate and multi-recipient support.',
  },
];

export default data;
