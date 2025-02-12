import { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar/page";
// import { Quicksand } from "next/font/google";
export const metadata: Metadata = {
  title: "Real Estate Market",
  description: "Real Estate Market",
};
import Footer from "src/components/Footer/page";
import Providers from "src/components/Providers/page";
import { GoogleAnalytics } from "@next/third-parties/google";
import { UserProvider } from "@/contexts/user-context";

// const quicksand = Quicksand({
//   subsets: ["latin"],
//   display: "swap",
// });

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  const APIKEY = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_API_KEY;
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-200 dark:bg-slate-800">
        <GoogleAnalytics gaId={APIKEY as string} />
        <UserProvider>
          <Providers>
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </UserProvider>
      </body>
    </html>
  );
}
