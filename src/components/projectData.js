const projects = [ 
   {
    title: 'SolePost',
    id:2,
    description: 'MultiMedia blog website for sneakerheads',
    techs: [
      ['/jslogo.png', 'javascript-logo'],
      ['/logoStrapi.svg', 'strapi-logo'],
      ['/logoNext.png', 'next.js-logo'],
    ],
    github: 'https://github.com/THEMELLIPSIS2',
  },
  {
    title: 'Webby',
    id:0,
    description: 'A hobby-centric social media application',
    techs: [
      ['/jslogo.png', 'javascript-logo'],
      ['/logo8.png', 'react.js-logo'],
      ['/logo1.png', 'Redux-logo'],
      ['/d3-black.png', 'D3-logo'],
      ['/firebase.png', 'firebase-logo'],
    ],
    github: 'https://github.com/THEM-exclamationpoint/Webby',
    live: 'https://webby-social.netlify.app',
    walkThrough: 'https://www.youtube.com/watch?v=aT0Iyc1XshI',
  },
  {
    title: 'Every Daisy of the Week',
    id:1,
    description: 'An e-commerce web application',
    techs: [
      ['/jslogo.png', 'javascript-logo'],
      ['/logo8.png', 'react.js-logo'],
      ['/logo1.png', 'Redux-logo'],
      [
        'https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png',
        'Express-logo',
      ],
      ['/logo7.png', 'PostgreSQL-logo'],
    ],
    github: 'https://github.com/Sassy-Software-Engineers/Grace-Shopper',
    live: 'https://every-daisy.onrender.com/',
  },

  {
    title: 'Campus Tracker',
    id:3,
    description: 'CRUD application for a database of students and campuses',
    techs: [
      ['/jslogo.png', 'javascript-logo'],
      ['/logo8.png', 'react.js-logo'],
      ['/logo1.png', 'Redux-logo'],
      [
        'https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png',
        'Express-logo',
      ],
      ['/logo7.png', 'PostgreSQL-logo'],
    ],
    walkThrough: 'https://youtu.be/VBvD4EOo9Xc',
  },
];
const descriptions = [
  {
    id:0,
    description:
      'For this project, we used Firebase in order to utilize their authentication, as well as their use of snapshot listeners in order to have a functional chat. I worked on the entire chat functionality and the majority of the styling, to create something usable and intuitive. We also integrated D3 as a data visualization tool for our web component. We worked hard within only a few weeks to create an application that is accessible, user-friendly, and responsive. Check out the walkthrough and live website!',
  },
  {
    id:1,
    description:
      'This e-commerce application has a Postgres backend, that was setup to handle a user, their cart, and their various orders. I also utilized tokens and local storage to track a users cart, whether logged in or not. Express was used for API calls, connected to the React front-end through Axios. Redux was implemented to handle complex state. This project was a great learning tool in arranging a successful database schema, as well as building something under a strict time limit. Take a look at this, as well as Webby to see the rapid front-end advancement in less than a month.',
  },
  {
    id:2,
    description:
      'This is a multimedia blog website built for a client alongside two other developers, where I acted as the lead developer. It is managed through Strapi, a headless CMS, with a Next.js front end. I built out a majority of the front end, including a playlist feature and a calendar feature.',
  },
  {
    id:3,
    description:
      'Built less than a month after learning how to work with these technologies, this is a React/Postgres CRUD application with a seed of (Avatar the Last Airbender themed) students and campuses. The front end uses React class components instead of functional components, and is able to instantly update the database and browser to add, remove, update, and delete student and campus information.',
  },
];
export {projects, descriptions};
