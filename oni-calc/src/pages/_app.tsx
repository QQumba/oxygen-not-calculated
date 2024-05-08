import 'tailwindcss/tailwind.css';
import '../app/globals.css';
import LayoutMain from '@/components/layout-main';

export default function MyApp({ Component, pageProps }: any) {
  return (
    <LayoutMain>
      <Component {...pageProps} />
    </LayoutMain>
  );
}
