"use client";

import { Button } from "@/components/ui/Button";
import Icons from "@/components/ui/Icons";
import { Color, Size } from "@/types";
import { Dialog } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import Filters from "./Filters";

interface MobilFilterProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilter = ({ colors, sizes }: MobilFilterProps) => {
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <Plus size={20} />
      </Button>
      <Dialog
        open={open}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-slate-900 bg-opacity-25" />

        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-slate-100 py-4 pb-6 shadow-xl">
            <div className="flex items-center justify-end px-4">
              <Icons Icon={<X size={15} onClick={onClose} />} />
            </div>

            {/* render filters */}

            <div className="p-4">
              <Filters data={sizes} name="Sizes" valueKey="sideId" />
              <Filters data={colors} name="Colors" valueKey="colorId" />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilter;
