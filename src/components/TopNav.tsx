import { Link } from "react-router-dom";

function TopNav() {
  return (
    <div className="w-full py-6 bg-blue-500 text-white flex items-center gap-x-3 justify-center">
      <Link to="/" className="border rounded-md p-3">
        Home
      </Link>
      <Link to="/stagger" className="border rounded-md p-3">
        Stagger
      </Link>
    </div>
  );
}

export default TopNav;
