"use client";

import { FC, ReactNode, Suspense, useEffect } from "react";

import Providers from "components/Providers";
import { useWindowSize } from "@uidotdev/usehooks";
import { WIDTH_LG, WIDTH_MD, WIDTH_XL } from "settings/constants";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const isSm = (useWindowSize()?.width || 0) > WIDTH_MD;
  const isMd = (useWindowSize()?.width || 0) > WIDTH_LG;
  const isLg = (useWindowSize()?.width || 0) > WIDTH_XL;

  return (
    <Providers>
      <div
        className="min-h-screen flex flex-col items-center pt-4 lg:pt-8 relative"
        style={{
          backgroundImage: isMd
            ? 'url("/images/gradients/bg-desktop.png")'
            : 'url("/images/gradients/bg-mobile.png")',
          backgroundPosition: isLg
            ? "center bottom -42%"
            : isMd
            ? "center bottom 20%"
            : isSm
            ? "center bottom -496px"
            : "center bottom -324px",
          backgroundRepeat: "no-repeat",
          backgroundSize: isLg
            ? "100% 1230px"
            : isMd
            ? "100%"
            : "1086px 1453px",
        }}
      >
        <div className="w-full max-w-5xl flex-grow h-full lg:px-base">
          {children}
        </div>
      </div>
    </Providers>
  );
};

export default Layout;
