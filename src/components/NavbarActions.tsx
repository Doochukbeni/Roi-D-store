"use client";

import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";

import { Button } from "./ui/Button";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <nav className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center bg-slate-900 rounded-full px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2  text-sm font-medium text-slate-100">
          {cart.items.length}
        </span>
      </Button>
    </nav>
  );
};

export default NavbarActions;
