import localFont from 'next/font/local';

export const gilroy = localFont({
  src: [
    {
      path: '../fonts/Gilroy/Gilroy-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/Gilroy/Gilroy-ThinItalic.ttf',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../fonts/Gilroy/Gilroy-UltraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../fonts/Gilroy/Gilroy-UltraLightItalic.ttf',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../fonts/Gilroy/Gilroy-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/Gilroy/Gilroy-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../fonts/Gilroy/Gilroy-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Gilroy/Gilroy-RegularItalic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/Gilroy/Gilroy-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Gilroy/Gilroy-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../fonts/Gilroy/Gilroy-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/Gilroy/Gilroy-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../fonts/Gilroy/Gilroy-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/Gilroy/Gilroy-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../fonts/Gilroy/Gilroy-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../fonts/Gilroy/Gilroy-ExtraBoldItalic.ttf',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../fonts/Gilroy/Gilroy-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../fonts/Gilroy/Gilroy-BlackItalic.ttf',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-gilroy', // Custom variable for use in Tailwind
});
