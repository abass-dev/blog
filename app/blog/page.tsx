import BlogNav from "@/components/blog/BlogNav";
import localFont from "next/font/local";
import MainPostAction from "@/components/blog/MainPostAction";
import AllTagsLayout from "@/components/blog/AllTagsLayout";
import getTags from "@/components/blog/utils/getTags";
import getPosts from "@/components/blog/utils/getPosts";

const Orbitron = localFont({
  src: "../../fonts/Orbitron/static/Orbitron-Black.ttf",
});

const Blog = async () => {
  const posts = await getPosts();
  const tags = await getTags();

  return (
    <>
      <BlogNav>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          <div className="flex justify-center items-center min-h-[20vh] md:min-h-[40vh]">
            <h1
              className={`${Orbitron.className} text-2xl text-gray-600 md:text-5xl font-bold text-center`}
            >
              Devs Blog
            </h1>
          </div>
          <div className="flex sm:space-x-24">
            <div className="hidden h-full max-h-screen flex-col min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-gray-100 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex">
              <div className="pb-2 ml-2">
                <h1 className="font-bold text-xl uppercase text-gray-700">
                  All Tags
                </h1>
              </div>
              <AllTagsLayout tags={tags} />
            </div>
            <div>
              <MainPostAction posts={posts} />
            </div>
          </div>
        </div>
      </BlogNav>
    </>
  );
};

export default Blog;