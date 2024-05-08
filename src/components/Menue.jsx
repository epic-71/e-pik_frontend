import { Link } from "react-router-dom";

function Menue() {
  return (
    <ul className="md:hidden w-full flex justify-between px-10 border-solid border-2 text-md ">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="store">Store</Link>
      </li>
      <li>
        <Link to="contact">Contact</Link>
      </li>
    </ul>
  );
}

export default Menue;
