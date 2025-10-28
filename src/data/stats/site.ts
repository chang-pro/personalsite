import dayjs from 'dayjs';

import { StatData } from '../../components/Stats/types';

/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://api.github.com/repos/chang-pro/openai-chart-data-analyzer
 */
const data: StatData[] = [
  {
    label: 'Stars this repository has on github',
    key: 'stargazers_count',
    link: 'https://github.com/chang-pro/openai-chart-data-analyzer/stargazers',
  },
  {
    label: 'Number of people watching this repository',
    key: 'subscribers_count',
    link: 'https://github.com/chang-pro/openai-chart-data-analyzer/watchers',
  },
  {
    label: 'Number of forks',
    key: 'forks',
    link: 'https://github.com/chang-pro/openai-chart-data-analyzer/network/members',
  },
  {
    label: 'Number of spoons',
    value: '0',
  },
  {
    label: 'Number of linter warnings',
    value: '0', // enforced via github workflow
  },
  {
    label: 'Open github issues',
    key: 'open_issues_count',
    link: 'https://github.com/chang-pro/openai-chart-data-analyzer/issues',
  },
  {
    label: 'Last updated at',
    key: 'pushed_at',
    link: 'https://github.com/chang-pro/openai-chart-data-analyzer/commits',
    format: (x: unknown) => dayjs(x as string).format('MMMM DD, YYYY'),
  },
  {
    // TODO update this with a pre-commit hook
    /* find . | grep ".js" | grep -vE ".min.js|node_modules|.git|.json" |
    xargs -I file cat file | wc -l */
    label: 'Lines of TypeScript powering this website',
    value: '2150',
    link: 'https://github.com/chang-pro/openai-chart-data-analyzer/graphs/contributors',
  },
];

export default data;
