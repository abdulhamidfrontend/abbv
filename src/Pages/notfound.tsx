import Navbar from "@/components/navbar";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 flex  flex-col justify-center items-center text-center">
        <h1 className="text-white text-7xl font-bold">404</h1>
        <h2 className="text-white mt-2">Page not found</h2>
      </div>
    </div>
  );
};

export default NotFound;
