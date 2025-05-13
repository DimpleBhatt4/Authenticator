import "./globals.css";
import { Roboto, Roboto_Mono } from 'next/font/google';
import Body from "@/components/Body/Body"; // You'll create this

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto-mono',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.className} ${robotoMono.className}`}>
      {/* <Body /> will handle layout and conditional NavBar */}
      <Body>{children}</Body>
    </html>
  );
}
