import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ children }) => (
  <div className="flex min-h-svh flex-col bg-[#08090c]">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);
