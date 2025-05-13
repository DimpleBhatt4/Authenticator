import "./globals.css";
import { Roboto, Roboto_Mono } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'], // or use ['100', '300', '400', '500', '700', '900']
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
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${roboto.className} ${robotoMono.className}`}>
      <body>{children}</body>
    </html>
  );
}