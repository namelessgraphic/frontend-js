"use client";

import { NavbarLanding } from "../ui/NavbarLanding";

export default function AuthenticatedLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        <NavbarLanding />
        {children}
      </section>
    )
  }