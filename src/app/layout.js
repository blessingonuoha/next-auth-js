import "./globals.css";
import AuthProvider from "../../context/AuthProvider";

export const metadata = {
  title: "Backstage",
  description: "Managed by Jamit Organization",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="bg-[#F8F7F4] dark:bg-[#000000f5]">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
