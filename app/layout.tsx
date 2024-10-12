import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

// Load local fonts
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

// Define metadata
export const metadata: Metadata = {
  title: 'Growthly - Empowering Business Growth',
  description: 'Helping businesses grow through strategic data utilization and process optimization.',
  icons: {
    icon: '/favicon.ico', // Link to the favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        {/* Optional: If you have a PNG favicon, uncomment this */}
        {/* <link rel="icon" href="/favicon.png" type="image/png" /> */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}


