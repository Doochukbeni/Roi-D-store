"use client";

import { useEffect, useState } from "react";

import PreviewModal from "@/components/PreviewModal";

const ModalProviders = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <div>
      <PreviewModal />
    </div>
  );
};

export default ModalProviders;
