import { Metadata } from "next";
import { Inspector } from "../../components";

export const metadata: Metadata = {
  title: "Abass Dev - Repo Inspector",
  description: "Inspect Github and GitLab repositories | Abass Dev",
};

const Page = () => {
  return <Inspector />;
};

export default Page;
