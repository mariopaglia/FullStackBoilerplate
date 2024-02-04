import type { AppProps } from 'next/app';

import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/styles/theme-provider';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider attribute='class' defaultTheme='light' enableSystem disableTransitionOnChange>
      <Component {...pageProps} />
      <Toaster />
    </ThemeProvider>
  );
}
