import { Navbar, NavbarBrand } from "@nextui-org/react";

function Header() {
  return (
    <Navbar className="bg-content">
      <NavbarBrand className="gap-2 justify-center">
        <a
          href="https://github.com/sapondanaisriwan/copy-instagram-image"
          target="_blank"
          className="flex items-center gap-2 justify-center"
        >
          <p className="select-none text-xl font-semibold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Copy Instagram Image</p>
        </a>
      </NavbarBrand>
    </Navbar>
  );
}

export default Header;