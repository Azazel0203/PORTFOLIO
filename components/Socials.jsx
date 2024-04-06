import Link from "next/link";

import {
  // RiYoutubeLine,
  // RiInstagramLine,
  // RiFacebookLine,
  // RiDribbbleLine,
  RiGithubLine,
  // RiPinterestLine,
  RiLinkedinLine,
  RiMailLine,
} from "react-icons/ri";
import { FaDiscord } from "react-icons/fa";

export const socialData = [
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com",
  //   Icon: RiYoutubeLine,
  // },
  // {
  //   name: "Instagram",
  //   link: "https://instagram.com",
  //   Icon: RiInstagramLine,
  // },
  {
    name: "Discord",
    link: "https://discordapp.com/users/776514582234791987",
    Icon: FaDiscord,
  },
  {
    name: "Mail",
    link: "mailto: aadarshkr.singh.cd.ece21@itbhu.ac.in",
    Icon: RiMailLine,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/aadarsh-singh-mlai",
    Icon: RiLinkedinLine,
  },
  // {
  //   name: "Facebook",
  //   link: "https://facebook.com",
  //   Icon: RiFacebookLine,
  // },
  // {
  //   name: "Dribbble",
  //   link: "https://dribbble.com",
  //   Icon: RiDribbbleLine,
  // },
  // {
  //   name: "Pinterest",
  //   link: "https://pinterest.com",
  //   Icon: RiPinterestLine,
  // },
  {
    name: "Github",
    link: "https://github.com/Azazel0203",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
