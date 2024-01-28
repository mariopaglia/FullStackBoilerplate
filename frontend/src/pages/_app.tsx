import type { AppProps } from 'next/app';

import { Toaster } from '@/components/ui/sonner';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}
