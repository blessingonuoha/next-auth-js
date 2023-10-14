import "./globals.css";
// import { Inter } from "next/font/google";
import AuthProvider from "../../context/AuthProvider";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard",
  description: "Managed by Jamit Organization",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#212121]">
        <AuthProvider>
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
