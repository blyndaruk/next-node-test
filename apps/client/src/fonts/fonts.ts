import { Exo_2, Oswald, Work_Sans } from 'next/font/google';

// main font
export const mainFont = Exo_2({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const secondaryFont = Oswald({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const thirdFont = Work_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});
