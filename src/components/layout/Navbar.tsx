import { BiLogoGithub } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="py-6 shadow">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        <a href="/" className="font-bold text-xl capitalize">
          TECHNEXT ASSIGNMENT
        </a>
        <a href="" target="_blank">
          <BiLogoGithub size={26} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
