"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";

export function NavbarLanding() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link as={Link} href="/" active>Home</Navbar.Link>
        <Navbar.Link as={Link} href="/users" className="hover:underline">Users</Navbar.Link>
        <Navbar.Link as={Link} href="/login" className="hover:underline">Login</Navbar.Link>
        <Navbar.Link as={Link} href="#" className="hover:underline">Register</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
