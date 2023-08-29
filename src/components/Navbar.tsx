import React from "react";
import Link from "next/link";

import Container from "@/components/ui/Container";
import MainNav from "@/components/MainNav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/components/NavbarActions";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <nav className="border-b shadow-md ">
      <Container>
        <div className="relative px-4 sm:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="text-xl font-bold text-slate-900">Roi D Store</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
