import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Lora } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-inter' });
const lora = Lora({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Lumen',
  description: 'Login to Lumen, the modern school management platform.',
  icons: {
    icon: '/favicon.jpeg?v=4',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.jpeg?v=4" type="image/jpeg" />
      </head>
      <body className={`${jakarta.variable} ${lora.variable}`}>
        {children}
      </body>
    </html>
  );
}
