import type { Metadata } from "next";
import "./globals.css";
import ConvexClientProvider from "@/providers/convex-client-provider";
import { Toaster } from "@/components/ui/toaster";
import localFont from 'next/font/local'
import { Inter } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter'
})

export const calsans = localFont({
  src: [{ path:'../public/fonts/Cal sans/CalSans-SemiBold.ttf' }]
})

export const sfPro = localFont({
  src: [
    /* Thai font*/
    {
      path:'../public/fonts/SF Pro/SFProTHDisplay_regular.woff2',
      weight: '400'
    },
    {
      path:'../public/fonts/SF Pro/SFProTHDisplay_semibold.woff2',
      weight: '600'
    }
  ],
  variable: '--font-sfpro'
})

export const metadata: Metadata = {
  title: "Miroproj",
  description: "A website builder that can design anything",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sfPro.variable}`}>
        <ConvexClientProvider>
          <Toaster />
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}