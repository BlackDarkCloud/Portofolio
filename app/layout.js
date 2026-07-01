import "./globals.css";

export const metadata = {
  title: "Quam Gbedjeha — Full-Stack Developer",
  description:
    "Full-stack developer in Ghana building production web platforms, e-commerce systems, and game server infrastructure.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-body bg-ink text-paper bg-noise">{children}</body>
    </html>
  );
}
