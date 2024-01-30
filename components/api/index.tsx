interface API {
  REPO_INSPECTOR: string;
  REACT_SNIPPET: string;
}

const API = {
  REPO_INSPECTOR: process.env.NEXT_PUBLIC_REPO_INSPECTOR,
  REACT_SNIPPET: process.env.NEXT_PUBLIC_API_REACT,
  REACT_NATIVE_SNIPPET: process.env.NEXT_PUBLIC_API_REACT_NATIVE,
  PHP_SNIPPET: process.env.NEXT_PUBLIC_API_PHP,
  BLOG_ALL_POSTS: process.env.NEXT_PUBLIC_BLOG_ALL_POSTS,
  AUTHORIZATION_KEY: process.env.NEXT_PUBLIC_AUTHORIZATION_KEY,
};

export default API;
