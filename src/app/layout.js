import "./globals.css";
// import { Inter } from "next/font/google";
import AuthProvider from "../../context/AuthProvider";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Backstage",
  description: "Managed by Jamit Organization",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#000000f5]">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
