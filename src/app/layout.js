import SiteLayout from "@/components/SiteLayout";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
