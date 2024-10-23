import './globals.css';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode; //define layoutProps to be considred 'children'
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
