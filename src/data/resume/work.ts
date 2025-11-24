/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'Freelance Developer',
    position: 'Freelance Developer',
    url: 'https://techhelpfl.com',
    startDate: '2021-09-01',
    summary:
      'Developed custom websites and trading automation bots for 10+ clients using JavaScript, Python, and API integrations. Provided technical support and troubleshooting for small business computers, networks, and software systems.',
    highlights: [
      'Developed custom websites and trading automation bots for 10+ clients using JavaScript, Python, and API integrations',
      'Provided technical support and troubleshooting for small business computers, networks, and software systems',
    ],
  },
  {
    name: 'Amazon',
    position: 'Technical Support Specialist',
    url: 'https://amazon.com',
    startDate: '2018-05-01',
    endDate: '2021-08-01',
    summary:
      'Resolved 30+ daily technical issues for AWS-connected devices maintaining 95% customer satisfaction rating. Documented 200+ solutions in knowledge base; collaborated with engineering teams on bug escalation.',
    highlights: [
      'Resolved 30+ daily technical issues for AWS-connected devices maintaining 95% customer satisfaction rating',
      'Documented 200+ solutions in knowledge base; collaborated with engineering teams on bug escalation',
    ],
  },
];

export default work;
