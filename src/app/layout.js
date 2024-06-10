import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My Movie Watchlist',
  description: 'A list movies I plan to watch',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="w-100 text-center">Movie Watchlist</header>
        {children}
        <footer className="text-center">&copy; Brought to you by Louis</footer>
      </body>
    </html>
  );
}
