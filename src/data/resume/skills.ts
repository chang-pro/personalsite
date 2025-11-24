export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
}

const skills: Skill[] = [
  {
    title: 'JavaScript',
    competency: 5,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'TypeScript',
    competency: 5,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Languages', 'Python', 'ML Engineering'],
  },
  {
    title: 'Java',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'C',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'HTML5',
    competency: 5,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'CSS3',
    competency: 5,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'SQL',
    competency: 4,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'React.js',
    competency: 5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Node.js',
    competency: 5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Express.js',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Flask',
    competency: 4,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Material UI',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'NumPy',
    competency: 3,
    category: ['Data Science', 'Data Engineering', 'Python', 'ML Engineering'],
  },
  {
    title: 'Scikit-learn',
    competency: 3,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'MongoDB',
    competency: 4,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'MySQL',
    competency: 4,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'REST API',
    competency: 5,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'AWS',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Postman',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Leaflet.js',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Twilio',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Netlify',
    competency: 4,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'AJAX',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors: string[] = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories: Category[] = Array.from(new Set(skills.flatMap(({ category }) => category)))
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
