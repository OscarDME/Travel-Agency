import React from 'react';
import Navbar from '../components/Navbar';
import './globals.css';
import { NextUIProvider } from '@nextui-org/react';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
        <body>
          <NextUIProvider>
            <Navbar />
            {children}
          </NextUIProvider>
        </body>
    </html>
  );
};

export default RootLayout;
