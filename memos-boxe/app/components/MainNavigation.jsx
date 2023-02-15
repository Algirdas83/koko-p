import { NavLink } from "@remix-run/react";

function MainNavigation() {
  return (
    <nav className=" bg-gray-300 p-4">
      <ul className="flex justify-center text-gray-800 text-2xl font-semibold	">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;
