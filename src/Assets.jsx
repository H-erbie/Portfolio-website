import {
  FaHome,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaUser,
  FaTools,
  FaBriefcase,
  FaMailBulk,
  FaHtml5,
  FaReact,
  FaJs,
  FaSass,
  FaCss3,
} from "react-icons/fa";
import p1 from './assets/images/p1.png'
import p2 from './assets/images/p2.png'
import p3 from './assets/images/p3.png'

export const navLinks = [
  {
    id: 1,
    url: "home",
    icon: <FaHome />,
  },
  {
    id: 2,
    url: "about",
    icon: <FaUser />,
  },
  {
    id: 3,
    url: "skills",

    icon: <FaTools />,
  },
  {
    id: 4,
    url: "projects",

    icon: <FaBriefcase />,
  },
  {
    id: 5,
    url: "contact",

    icon: <FaMailBulk />,
  },
];



export const socials = [
  {
    id: 1,
    url: "https://www.twitter.com/ansongherbie ",
    icon: <FaTwitter />,
  },
  {
    id: 2,
    url: "https://instagram.com/her_bie__",
    icon: <FaInstagram />,
  },
  {
    id: 3,
    url: "https://www.github.com/h-erbie",
    icon: <FaGithub />,
  },
  {
    id: 4,
    url: "",
    icon: <FaLinkedin />,
  },
  {
    id: 5,
    url: "https://www.facebook.com/profile.php?id=100058721127259",
    icon: <FaFacebook />,
  },
  {
    id: 5,
    url: "https://wa.me/233553187203",
    icon: <FaWhatsapp />,
  },
];
export const langs = [
  {
    id: 1,
    icon: <FaHtml5/>,
    level: 'Experienced',
  },
  {
    id: 2,
    icon: <FaCss3/>,
    level: 'Experienced',
  },
  {
    id: 3,
    icon: <FaJs/>,
    level: 'Experienced',
  },
  {
    id: 4,
    icon: <FaReact/>,
    level: 'Intermediate',
  },
  {
    id: 5,
    icon: <FaSass/>,
    level: 'Intermediate',
  },
  
];
export const projects = [
  {
    id: 1,
    name: 'shopping-cart',
    img: p1,
    code: 'https://github.com/H-erbie/React-Hoodie-Shopping-Cart',
    live: 'https://react-hoodie-shopping-cart.netlify.app',
  },
  {
    id: 2,
    name: 'music-player',
    img: p2,
    code: 'https://github.com/H-erbie/React-music-player-Cart',
    live: 'https://react-music-player.netlify.app',
  },
  {
    id: 2,
    name: 'blog-app',
    img: p3,
    code: 'https://github.com/H-erbie/geekBlog',
    live: 'https://geekBlog.netlify.app',
  },
]
