import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'My Next App',
  description: 'Home, About, and Blog demo with client-side navigation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
