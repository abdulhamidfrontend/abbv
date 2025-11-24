import Navbar from "@/components/navbar";

const Home = () => {
  return (
    <div className="w-full h-screen bg-black relative flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full">
        <Navbar />
      </div>

      <div className="text-center">
        <h1 className="text-white text-5xl font-semibold">ABBV</h1>
        <h2 className="text-white mt-2">soon</h2>
      </div>
    </div>
  );
};

export default Home;
