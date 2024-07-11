import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import dynamic from "next/dynamic";

const Layout = dynamic(() => import("components/Layout"), { ssr: false });

const montreal = localFont({
  src: [
    {
      path: "../typos/pp_neue_montreal_regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../typos/pp_neue_montreal_medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../typos/pp_neue_montreal_semibold.otf",
      weight: "600",
      style: "semibold",
    },
  ],
  variable: "--font-montreal",
});

const bradford = localFont({
  src: [
    {
      path: "../typos/bradford_ll_regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../typos/bradford_ll_medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../typos/bradford_ll_regular_italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-bradford",
});

export const metadata: Metadata = {
  title: "R E V E R I - The World's Most Trusted Self-Hypnosis App",
  description:
    "Self-hypnosis for sleep, stress, addiction, pain and more. Start your journey today to harness Reveri's decades of clinical research, and improve your life.",
  icons: { icon: "/favicon.ico", apple: "/apple-icon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montreal.variable} ${bradford.variable} font-montreal bg-lightGrey-10 text-grey-70 font-medium`}
    >
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
