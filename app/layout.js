import "./globals.css";

export const metadata = {
  title: "Komi Julio - Entrepreneur and Full-Stack Developer",
  description:
    "Professional portfolio of Komi Julio, entrepreneur, full-stack developer, and founder of MJ Portal and AfriConnect GH in Accra, Ghana.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-body bg-ink text-paper bg-noise">{children}</body>
    </html>
  );
}
