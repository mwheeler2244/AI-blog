"use client";
import { useState } from "react";
import { Titillium_Web } from "next/font/google";
import { Menu, X } from "lucide-react";
import { FeaturedArticle } from "./components/FeaturedArticle";
import { BlogPostCard } from "./components/BlogPostCard";
import { SubscribeForm } from "./components/SubscribeForm";
import { Footer } from "./components/Footer";
import { featuredPost, blogPosts } from "./data/blogPosts";

const urb = Titillium_Web({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const typography = {
  fontFamily: `${urb.style.fontFamily}, 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif`,
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <header className="fixed w-full bg-gray-950/80 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">AI Blog</div>
            <button
              className="md:hidden"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="hover:text-teal-400 transition-colors">
                Home
              </a>
              <a
                href="#blogs"
                className="hover:text-teal-400 transition-colors"
              >
                Articles
              </a>
              <a
                href="#subscribe"
                className="hover:text-teal-400 transition-colors"
              >
                Subscribe
              </a>
            </nav>
          </div>
        </div>
      </header>

      <FeaturedArticle post={featuredPost} typography={typography} />

      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} typography={typography} />
          ))}
        </div>
      </section>

      <SubscribeForm typography={typography} />
      <Footer typography={typography} />
    </main>
  );
}
