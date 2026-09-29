import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dimas Putra | Portfolio Developer Full-Stack & UI/UX",
  description: "Portfolio web developer full-stack yang menghadirkan pengalaman digital spatial glassmorphism, aplikasi web performa tinggi, dan arsitektur cloud yang tangguh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var savedTheme = localStorage.getItem('portfolio_theme');
                if (savedTheme === 'light' || savedTheme === 'dark') {
                  document.documentElement.setAttribute('data-theme', savedTheme);
                } else {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
