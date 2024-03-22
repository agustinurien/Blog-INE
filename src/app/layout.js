import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Digital Blog",
  description: "Discover and Boost Your Creativity and Productivity",
  canonicalUrl: 'URL_DE_TU_PAGINA_ACTUAL',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
