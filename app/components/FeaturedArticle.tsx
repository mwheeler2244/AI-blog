import { BlogPost, Typography } from "../types";

interface FeaturedArticleProps {
  post: BlogPost;
  typography: Typography;
}

export const FeaturedArticle = ({ post, typography }: FeaturedArticleProps) => {
  return (
    <div
      className="relative w-full min-h-screen"
      style={{
        fontFamily: typography.fontFamily,
      }}
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="AI Background"
          className="object-cover opacity-70"
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 pt-50 flex flex-col items-start justify-center h-full">
        <div className="max-w-3xl">
          <div className="inline-block bg-teal-600 text-grey-800 px-4 py-1 text-sm font-md mb-6 rounded-sm">
            FEATURED
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            {post.title}
          </h1>
          <p className="text-gray-200 text-xl mb-8 leading-relaxed max-w-2xl">
            {post.excerpt}
          </p>
          <a href="#subscribe">
            <span className="text-grey-800 inline-block border-1 border-teal bg-transparent hover:bg-teal-700 hover:border-none font-medium py-3 px-8 rounded-sm transition-colors text-lg">
              Read Article
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
