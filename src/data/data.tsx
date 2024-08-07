import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import githubIcon from '../components/Icon/GithubIcon';
import linkedInIcon from '../components/Icon/LinkedInIcon';
import easierExcel from '../images/portfolio/easier-excel.png';
import feedler from '../images/portfolio/feedler.png';
import gameSaveManager from '../images/portfolio/game-save-manager.png';
import gameTracker from '../images/portfolio/game-tracker.png';
import webControl from '../images/portfolio/web-control.png';
import profilepic from '../images/profilepic.jpg';
import heroImage from '../images/steel-wool1.jpg'; // TODO make file smaller
import testimonialImage from '../images/testimonial.webp'; // TODO replace this once it is used
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Michael\'s Personal Site',
  description: "Michael Ericson's personal site filled with his projects and interests.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Michael Ericson.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Georgia <strong className="text-stone-100">Full Stack Software Engineer</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, I love to learn new <strong className="text-stone-100">Technology</strong>,
        play <strong className="text-stone-100">Video Games</strong> and enjoy some fantastic
        <strong className="text-stone-100"> Shows</strong> and <strong className="text-stone-100">Movies</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '../assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  // TODO make this more personal
  description: `I am a full stack software engineer, I have a passion for creating innovative and user-friendly web applications using
  Python and JavaScript/Typscript. I graduated from App Academy, a rigorous and selective coding bootcamp, where I learned how to build full
  stack web applications using React, Redux, Express, Flask, SQLAlchemy, and PostgreSQL.
  `,
  aboutItems: [
    {label: 'Location', text: 'Georgia, US', Icon: MapIcon},
    {label: 'Interests', text: 'Coding, Technology, Video Games', Icon: SparklesIcon},
    {label: 'Study', text: 'Georgia College & State University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Freelancing', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'JavaScript',
        level: 8,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'Flask',
        level: 6,
      },
      {
        name: 'PostgreSQL',
        level: 6,
      },
      {
        name: 'AWS',
        level: 5,
      },
      {
        name: 'Rust',
        level: 4,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 8,
      },
      {
        name: 'HTML',
        level: 8,
      },
      {
        name: 'CSS',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Feedler',
    description: 'Clone of Feedly with User customizable feeds and sources. Articles auto populate via live RSS feeds',
    url: 'https://github.com/Concrete18/Feedly-Clone',
    image: feedler,
  },
  {
    title: 'EasierExcel',
    description: 'Allows for simpler reading and editing of Excel files within Python. This simplifies OpenPyXL',
    url: 'https://github.com/Concrete18/easierexcel',
    image: easierExcel,
  },
  {
    title: 'Web Control',
    description: 'Typscript and React frontend with Python and Flask backend local only web server that allows control of PC it runs on.',
    url: 'https://github.com/Concrete18/Web-Control',
    image: webControl,
  },
  {
    title: 'Game Save Manager',
    description: 'Tkinter Interface for running through a SQLite Database that allows backing up game saves easily',
    url: 'https://github.com/Concrete18/Game-Save-Manager',
    image: gameSaveManager,
  },
  {
    title: 'Game Library Tracker',
    description: "Steam Library Tracker made easy by keeping up with what you have played and want to play",
    url: 'https://github.com/Concrete18/Game-Library-Tracker',
    image: gameTracker,
  },
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: 'December 2021',
    location: 'App Academy',
    title: 'Online 24 Week Javascript/Python',
    content: <p>I learned how to build full stack web applications using Python, JavaScript, React, Redux, Express, Flask, SQLAlchemy, and PostgreSQL.</p>,
  },
  {
    date: '2014',
    location: 'Georgia College & State University',
    title: 'Bachelors of Business Administration',
    content: <p>My time at Georgia College & State University was a transformative period of personal and professional growth.
      Immersed in the dynamic environment of the college. Overall, my tenure at Georgia College & State University not only equipped me with the
      academic credentials but also instilled in me a passion for continuous learning and a drive for excellence in all endeavors.</p>,
  },
];

/**
 * Experience section
 */
export const experience: TimelineItem[] = [
  {
    date: 'December 2022 - November 2023',
    location: 'Claraprice',
    title: 'Software Engineer',
    content: (
      <div>
        <ul className="list-disc ml-4">
          <li>Developed a comprehensive system to facilitate the seamless upload and conversion of Excel files into standardized formats, enhancing data usability across the user portal</li>
          <li>Conducted rigorous quality testing on the user portal, proactively identifying areas for improvement and generating enhancement tickets to enhance the site's usability for both administrators and end-users</li>
          <li>Designed and implemented robust test suites for new code, contributing to the continual improvement of production pipelines and bolstering overall site stability</li>
          <li>Successfully deployed code changes to the production environment using AWS Elastic Beanstalk, following meticulous testing and adhering to established production release procedures</li>
        </ul>

      </div>
    ),
  },
  // TODO add additional job
  // {
  //   date: 'March 2007 - February 2010',
  //   location: 'Garage Startup Studio',
  //   title: 'Junior bug fixer',
  //   content: (
  //     <p>
  //       Describe work, special projects, notable achievements, what technologies you have been working with, and
  //       anything else that would be useful for an employer to know.
  //     </p>
  //   ),
  // },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    // TODO add testimonials
    // {
    //   name: 'Michael Sanford',
    //   text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    // },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: "I'm excited to connect with you and explore potential collaborations. Whether it's a project idea or just to exchange ideas, I'm eager to hear from you.",
  items: [
    {
      type: ContactType.Email,
      text: 'michaelericson30@gmail.com',
      href: 'mailto:michaelericson30@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Georgia, US',
      href: 'https://maps.app.goo.gl/VigTyG7e8N4dbzUP6',
    },
    {
      type: ContactType.Github,
      text: 'Concrete18',
      href: 'https://github.com/Concrete18',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: githubIcon, href: 'https://github.com/Concrete18'},
  {label: 'LinkedIn', Icon: linkedInIcon, href: 'https://www.linkedin.com/in/michaelericson1'},
];
