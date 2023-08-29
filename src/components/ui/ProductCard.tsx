"use client";

import Image from "next/image";
import { Expand, ShoppingCart } from "lucide-react";

import { Product } from "@/types";
import Icons from "./Icons";
import Currency from "./Currency";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import usePreviewModalStore from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

interface ProductCardProps {
  data: Product;
}

const ProductCard = ({ data }: ProductCardProps) => {
  const router = useRouter();
  const previewModal = usePreviewModalStore();
  const cart = useCart();

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };

  const handleClick = () => {
    router.push(`/products/${data?.id}`);
  };
  return (
    <div
      onClick={handleClick}
      className="bg-gray-100 group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      <div className="aspect-square rounded-xl bg-gray-50 relative">
        {/* images and action button  */}
        <Image
          src={data?.images?.[0]?.url}
          alt="Product Image"
          fill
          className="aspect-square rounded-md  object-cover"
        />

        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex justify-center gap-x-6">
            <Icons
              Icon={<Expand size={20} className="text-gray-600" />}
              onClick={onPreview}
            />
            <Icons
              Icon={<ShoppingCart size={20} className="text-gray-600" />}
              onClick={onAddToCart}
            />
          </div>
        </div>
      </div>
      {/* descriptions */}
      <div>
        <p className="font-semibold text-lg text-slate-900">{data.name}</p>
        <p className="sm text-slate-600">{data.category?.name}</p>
      </div>
      {/* price */}

      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
