import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { config } from '@fortawesome/fontawesome-svg-core' //追加
import '@fortawesome/fontawesome-svg-core/styles.css' //追加
config.autoAddCss = false //追加

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
    <head>
      <title>Ucho-ten Bluesky App</title>
      <meta property="og:title" content="Ucho-ten Bluesky App" />
      <meta property="og:description" content="Ucho-ten is ZEN." />
      <meta property="og:image" content="/ogp.jpg" />
      <meta property="og:url" content="https://app.ucho-ten.net/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Ucho-ten Bluesky App" />
      <meta name="twitter:description" content="Ucho-ten is ZEN." />
      <meta name="twitter:image" content="/ogp.jpg" />
    </head>
    <body
      className={clsx(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}
    >
    <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
      <div className="relative flex flex-col h-screen">
        <Navbar />
        <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
          {children}
        </main>
        <footer className="w-full flex items-center justify-center py-3">
        <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                title="nextui.org homepage"
              >
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
