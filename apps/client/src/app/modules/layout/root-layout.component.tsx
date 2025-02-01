'use client';

import dynamic from 'next/dynamic';

import { FC, ReactNode } from 'react';

import styles from './root-layout.module.scss';

const Toaster = dynamic(() => import('react-hot-toast').then((c) => c.Toaster), {
  ssr: false,
});

const ProgressBar = dynamic(() => import('next-nprogress-bar').then((c) => c.AppProgressBar), {
  ssr: false,
});

interface IRootLayoutComponent {
  children: ReactNode;
}

const RootLayoutComponent: FC<Readonly<IRootLayoutComponent>> = ({ children }) => {
  return (
    <>
      <body className={styles.root_layout}>
        <>
          <div className={styles.root_layout__inner}>
            <main className={styles.root_layout__main}>{children}</main>
          </div>
        </>

        <Toaster />

        <ProgressBar
          height={'3px'}
          color={'var(--font-color-primary)'}
          shallowRouting
          options={{ showSpinner: false }}
        />
      </body>
    </>
  );
};

export default RootLayoutComponent;
