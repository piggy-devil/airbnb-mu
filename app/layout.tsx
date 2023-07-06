import ClientOnly from './components/ClientOnly';

import LoginModal from './components/modals/LoginModal';
import RegisterModal from './components/modals/RegisterModal';
import RentModel from './components/modals/RentModal';

import Navbar from './components/navbar/Navbar';
import './globals.css';
import { Nunito } from 'next/font/google';
import ToasterProvider from './providers/ToasterProvider';
import getCurrentUser from './actions/getCurrentUser';

const font = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RentModel />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
