import Image from "next/image";
import {
  BsGlobeCentralSouthAsia,
  BsGithub,
  BsFacebook,
  BsTwitter,
} from "react-icons/bs";

import Item from "./Item";
import localFont from "next/font/local";
const Orbitron = localFont({
  src: "../../fonts/Orbitron/static/Orbitron-Black.ttf",
});

const Friends = () => {
  return (
    <div className="`dark:bg-gray-900  py-20 flex items-center flex-col justify-center">
      <h1
        className={`${Orbitron.className} text-center font-bold  dark:text-white text-4xl pb-20 my-4 text-blue-950`}
      >
        Friends
      </h1>
      <div className="grid mx-auto px-10 md:px-36 md:grid-cols-3">
        <Item
          name="Benaiah Alumona"
          avatar="https://avatars.githubusercontent.com/u/65370456?v=4"
          about="is a Self-taught Software Enigineer with a passion for thoughtful UI design, collaboration, and building."
          links={{
            website: "https://www.benrobo.co",
            x: "https://x.com/benaiah_al",
            github: "https://github.com/benrobo",
          }}
        />

        <Item
          name="Melvin Jones"
          avatar="https://avatars.githubusercontent.com/u/62317165?v=4"
          about="is a self-taught Freelance Software Engineer with experience in web development, seo, computer hardware & software and currently pursuing arduino programming. Committed to make the world a better place to live."
          links={{
            website: "https://mrepol742.github.io",
            x: "https://x.com/mrepol742",
            github: "https://github.com/mrepol742",
          }}
        />

        <Item
          name="Franck DAKIA (Papac)"
          avatar="https://avatars.githubusercontent.com/u/9353811?v=4"
          about="is a code Learning Club Animator and Creator of Bow Framework, DevOps Lover ❤️"
          links={{
            website: "https://papac.dev",
            x: "https://twitter.com/papacdev",
            github: "https://github.com/papac",
          }}
        />

        <Item
          name="Melvin Chia"
          avatar="https://avatars.githubusercontent.com/u/64565584?v=4"
          about="is a teenage full-stack web developer and a UI designer with a vision of creativity"
          links={{
            website: "https://thecodeblog.net",
            github: "https://github.com/melvinchia3636",
          }}
        />

        <Item
          name="Emichel Dev"
          avatar="https://avatars.githubusercontent.com/u/57678715?v=4"
          about="is a freelance web developer"
          links={{
            x: "https://x.com/emichel_dev",
            github: "https://github.com/emicheldev",
          }}
        />
      </div>
    </div>
  );
};

export default Friends;
