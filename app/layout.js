import { Inter } from "next/font/google";
import "../styles/main.scss";
import Providers from "@/context/Providers";
import { AuthProvider } from "@/context/AuthProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Limi E-commerce",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          <Providers>{children}</Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
