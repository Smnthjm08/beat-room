import { Plus_Jakarta_Sans } from "next/font/google";

import "@workspace/ui/globals.css";
import { Providers } from "@/components/providers/providers";
import { Appbar } from "@/components/appbar";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning suppressContentEditableWarning>
      <body className={`${font.className} font-sans antialiased `}>
        <Providers>
          <Appbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
