import type { Metadata, Viewport } from 'next';

// initial metadata
export const initialMetadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_APP_URL}`),
  title: {
    default: 'Earthquakes manager',
    template: '%s | Earthquakes manager',
  },
  description: 'Earthquakes manager',
  keywords: ['Earthquakes manager'],
  applicationName: 'JT',
  openGraph: {
    title: {
      default: 'Earthquakes manager',
      template: '%s | Earthquakes manager',
    },
    description: 'Earthquakes manager',
    siteName: 'Earthquakes manager',
    locale: 'en',
    images: '/logo.png',
    type: 'website',
  },
};

// initial viewport
export const initialViewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#fff',
};
