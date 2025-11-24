import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  const active = "pb-[2px] border-b-2 border-white";
  const inactive = "pb-[2px] border-b-2 border-transparent hover:border-white";

  return (
    <div className="w-full fixed top-0 left-0 bg-black py-4 z-50">
      <div className="flex items-center justify-center gap-3 text-white">
        <Link className={pathname === "/" ? active : inactive} to="/">
          HOME
        </Link>

        <div className="bg-white w-px h-4"></div>

        <Link
          className={pathname === "/contact" ? active : inactive}
          to="/contact"
        >
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
