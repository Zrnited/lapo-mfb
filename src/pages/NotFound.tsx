import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-black px-10">
      <h1 className="text-4xl font-bold text-white">404 - Page Not Found</h1>
      <p className="text-gray-500 mt-2">Oops! The page you're looking for doesn't exist or is in development.</p>
      <div className="flex flex-col gap-3 md:flex-row my-3">
        <Link to="/" className="bg-[#014DAF] rounded-md text-white capitalize cursor-pointer p-2 text-xs">
            go home
        </Link>
        <Link to="/dashboard" className="bg-[#014DAF] rounded-md text-white capitalize cursor-pointer px-3 py-2 text-xs">
            return to dashboard
        </Link>
      </div>
    </div>
  );
}
