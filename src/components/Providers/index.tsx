"use client";

import { NextUIProvider } from "@nextui-org/react";

import { FC, ReactNode, useEffect } from "react";

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default Providers;
