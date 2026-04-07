import { Plus_Jakarta_Sans, Syne } from 'next/font/google';
import './globals.css';

const bodyFont = Plus_Jakarta_Sans({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

const displayFont = Syne({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
});

export const metadata = {
  title: 'EduBridge | Company, Authentication, Student Portal',
  description:
    'Company landing page with authentication flow leading to a protected student portal for purchasing institute batches.',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
