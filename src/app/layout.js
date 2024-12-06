import { DM_Sans, DM_Serif_Display } from 'next/font/google';
import Global from '@/components/Global';
import './globals.css';
import { gilroy } from './fonts';

export const metadata = {
  title: 'Johan Naizu',
  description: 'A Software Developer',
};

const fontHeading = DM_Serif_Display({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

const fontBody = DM_Sans({
  weight: ['300', '500'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='hide-scrollbar'>
      <head>
        <link
          href='https://cdn.lineicons.com/5.0/lineicons.css'
          rel='stylesheet'
        />
      </head>
      <body
        className={`${fontHeading.variable} ${fontBody.variable} ${gilroy.variable} antialiased`}
      >
        <Global />
        {children}
      </body>
    </html>
  );
}
