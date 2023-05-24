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
    url: "https://www.linkedin.com/in/herbert-koranteng-1661231b2?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BaoFVc63KT%2FSlqRbBwW2v0A%3D%3D",
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
    code: 'https://github.com/H-erbie/React-Hoodie-shopping-c\Cart',
    live: 'https://herbies-hoodies.netlify.app',
  },
  {
    id: 2,
    name: 'music-player',
    img: p2,
    code: 'https://github.com/H-erbie/React-music-player',
    live: 'https://herbies-react-music-player.netlify.app',
  },
  {
    id: 2,
    name: 'blog-app',
    img: p3,
    code: 'https://github.com/H-erbie/blog-app',
    live: 'https://geekbloggeek.netlify.app',
  },
]
