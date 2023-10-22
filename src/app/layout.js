import "./globals.css";
import AuthProvider from "../../context/AuthProvider";

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
