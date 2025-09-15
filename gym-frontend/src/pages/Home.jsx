import { Link } from "react-router-dom";
// import FeatureCards from "../components/FeatureCards";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center text-center">
      {/* Hero Section with Video */}
      <section className="w-full bg-gray-900 text-white py-12 px-6 flex flex-col items-center">
        <div className="w-full max-w-5xl aspect-video mb-6">
          <video
            className="w-full h-full rounded-xl shadow-lg"
            poster="/video-placeholder.jpg"
            controls
          >
            <source src="/sample-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Transform Your Fitness Journey 💪
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6 text-gray-300">
          Track workouts, log nutrition, and monitor progress — all in one
          simple dashboard.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/register"
            className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500"
          >
            Login
          </Link>
        </div>
      </section>
    </div>
  );
}
