"use client";

import { NavbarAuth } from "../ui/NavbarAuth";

export default function AuthenticatedLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        <NavbarAuth />
        {children}
      </section>
    )
  }