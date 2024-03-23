// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
// Navbar Logo image (uncomment below and import your image)
// import newLogo from "./images/yourFileName"

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
import { Card } from "react-bootstrap";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "Jong1Han";

// Navbar Logo image
export const navLogo = undefined;

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "Hi, I'm Jongwon Han. Hi, I'm Jongwon Han.Hi, I'm Jongwon Han.Hi, I'm Jongwon Han.Hi, I'm Jongwon Han.Hi, I'm Jongwon Han.Hi, I'm Jongwon Han.Hi, I'm Jongwon Han.Hi, I'm Jongwon Han.Hi, I'm Jongwon Han.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
function SkillItem(props) {
  return <OverlayTrigger placement="right" overlay={
    <Tooltip id="button-tooltip" {...props}>
      {props.text}
    </Tooltip>
  }>
    <Icon icon={props.icon} className="display-4" />
  </OverlayTrigger>;
}
export const skillData = [
  {
    id: 1,
    skill: <SkillItem
      text="organ culture \n hihihaha"
      icon="mdi:language-html5" ></SkillItem >,
    name: "In vitro Culture",
  },

  {
    id: 2,
    skill: <SkillItem
      text="adad"
      icon="mdi:language-html5"></SkillItem>,
    name: "adad",
  },

  {
    id: 3,
    skill: <SkillItem
      text="3333"
      icon="mdi:language-html5"></SkillItem>,
    name: "33333",
  },

  {
    id: 4,
    skill: <SkillItem
      text="44444"
      icon="mdi:language-html5"></SkillItem>,
    name: "a444444",
  },

  {
    id: 5,
    skill: <SkillItem
      text="a5555"
      icon="mdi:language-html5"></SkillItem>,
    name: "ad555555",
  },

  {
    id: 6,
    skill: <SkillItem
      text="ad66666"
      icon="mdi:language-html5"></SkillItem>,
    name: "ad666666",
  },

];


// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/YourEndpoint";
