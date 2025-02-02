import type { Metadata, Viewport } from 'next';

import { FC, ReactNode } from 'react';

import { RootLayoutComponent } from '@/app/modules';
import { mainFont } from '@/fonts';
import { initialMetadata, initialViewport } from '@/metadata';
import { ApolloClient } from '@/packages/apollo';
import { ThemeRegistry } from '@/packages/material-ui';

import '@/styles/globals.scss';

interface IRootLayout {
  children: ReactNode;
}

export const metadata: Metadata = initialMetadata;
export const viewport: Viewport = initialViewport;

const RootLayout: FC<Readonly<IRootLayout>> = ({ children }) => {
  return (
    <html lang={'en'} className={mainFont.className}>
      <ThemeRegistry>
        <ApolloClient>
          <RootLayoutComponent>{children}</RootLayoutComponent>
        </ApolloClient>
      </ThemeRegistry>
    </html>
  );
};

export default RootLayout;
