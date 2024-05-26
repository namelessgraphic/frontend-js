"use client";

import Link from "next/link";

export default function AuthenticatedLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
        <div>
            <Link className="text-black" href="/">
                APP LOGO
            </Link>
        </div>
        {children}
      </section>
    )
  }