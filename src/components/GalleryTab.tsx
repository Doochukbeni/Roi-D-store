import Image from "next/image";
import { Tab } from "@headlessui/react";

import { Image as ImageType } from "@/types";
import { cn } from "@/lib/utils";

interface GalleryTabProps {
  image: ImageType;
}

const GalleryTab = ({ image }: GalleryTabProps) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer rounded-md bg-slate-50">
      {({ selected }) => (
        <div>
          <span className="absolute h-full w-full  aspect-square inset-0 overflow-hidden rounded-md ">
            <Image
              src={image.url}
              fill
              alt="Product Image"
              className="object-cover object-center"
            />
          </span>
          <span
            className={cn(
              "absolute inset-0 rounded-md ring-2 ring-offset-2",
              selected ? "ring-slate-900" : "ring-transparent"
            )}
          />
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;
