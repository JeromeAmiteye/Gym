import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="w-[100%]">
        <div className="flex p-3">
          <h2>Fitness App</h2>
          <div className="absolute flex space-x-4 right-2">
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/dashboard">Dashboard</Link>
            </div>
            <div>
              <Link to="/profile">Profile</Link>
            </div>
            <div>
              <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
