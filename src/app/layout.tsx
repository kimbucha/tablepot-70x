import '../globals.css'; // Ensure you have a global CSS file for Tailwind
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-sky-500">
        {children}
      </body>
    </html>
  );
}