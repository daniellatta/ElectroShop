import 'tailwindcss/tailwind.css';
import { Inter } from 'next/font/google';
import Pagination from '@/components/Pagination';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ElectroShop',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
        <footer>
          <Pagination />
        </footer>
      </body>
    </html>
  );
}
