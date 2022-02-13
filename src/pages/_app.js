import { QueryClientProvider, QueryClient } from 'react-query';
import Footer from 'src/components/Footer';
import '../../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>

      <Footer />
    </>
  );
}

export default MyApp;
