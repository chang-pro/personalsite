export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'University of Central Florida',
    degree: 'Bachelor of Science in Computer Science',
    link: 'https://ucf.edu',
    year: 2026,
  },
];

export default degrees;
