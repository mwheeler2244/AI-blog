import { BlogPost, Typography } from "../types";

interface BlogPostCardProps {
  post: BlogPost;
  typography: Typography;
}

export const BlogPostCard = ({ post, typography }: BlogPostCardProps) => {
  return (
    <div
      id="blogs"
      className="bg-gray-900 border border-gray-800 rounded-sm overflow-hidden shadow-lg transition-all hover:shadow-2xl hover:translate-y-px group"
      style={{
        fontFamily: typography.fontFamily,
      }}
    >
      <div className="h-48 bg-gray-800 relative overflow-hidden">
        <div className="w-full h-full flex items-center justify-center bg-gray-800">
          <div className="text-white text-opacity-30 text-sm">
            <img src={post.image} alt="" />
          </div>
        </div>
        <div className="absolute top-0 left-0 m-4">
          <span className="bg-teal-500 text-black text-xs font-semibold px-3 py-1 rounded-sm">
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold text-white mb-3 line-clamp-2">
          {post.title}
        </h2>
        <p className="text-gray-400 mb-5 line-clamp-3">{post.excerpt}</p>
        <a href="#subscribe">
          <span className="text-teal-500 hover:text-teal-200 font-medium text-sm inline-flex items-center transition-colors">
            Continue Reading
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
};
