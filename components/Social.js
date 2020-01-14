import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDev,
  faGithub,
  faLinkedin,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const links = [
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/patrickcpilgrim/",
    icon: faLinkedin
  },
  { name: "Github", url: "https://github.com/ctrlaltpat", icon: faGithub },
  { name: "Main Website", url: "https://ctrlaltpat.com/", icon: faGlobe },
  { name: "Twitter", url: "https://twitter.com/ctrlaltpat", icon: faTwitter },
  { name: "Dev", url: "#", icon: faDev }
];

const Social = () => {
  return (
    <div className="flex items-center flex-row p-1">
      {links.map(({ name, url, icon }) => (
        <a href={url} target="_blank" key={name}>
          <FontAwesomeIcon className="social-icon" icon={icon} />
        </a>
      ))}
    </div>
  );
};

export default Social;
