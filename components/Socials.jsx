import Link from "next/link";

import {
  RiGithubLine,
  RiLinkedinLine,
  RiMailLine,
} from "react-icons/ri";
import { FaDiscord } from "react-icons/fa";

export const socialData = [
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
