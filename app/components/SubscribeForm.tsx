import { useState, useEffect } from "react";
import { Typography } from "../types";

interface SubscribeFormProps {
  typography: Typography;
}

export const SubscribeForm = ({ typography }: SubscribeFormProps) => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
  };

  useEffect(() => {
    if (subscribed) {
      const timer = setTimeout(() => {
        setSubscribed(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [subscribed]);

  return (
    <div
      id="subscribe"
      className="bg-gray-900 border border-gray-800 rounded-sm shadow-xl mt-10"
      style={{
        fontFamily: typography.fontFamily,
      }}
    >
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated on AI Trends
          </h2>
          <p className="text-gray-300 mb-10 text-lg">
            Get the latest AI news, tutorials, and insights delivered straight
            to your inbox. No spam, unsubscribe anytime.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-grow bg-gray-800 text-white border border-gray-700 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-gray-500"
            />
            <button
              type="submit"
              className="cursor-pointer bg-teal-500 hover:bg-teal-600 text-white py-3 px-8 rounded-sm transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>

          {subscribed && (
            <div className="mt-6 border border-teal-500 bg-gray-800 text-teal-400 px-4 py-3 rounded-sm">
              Thank you for subscribing! Check your email to confirm.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
