import { QueryClientProvider, QueryClient } from 'react-query';
import Footer from 'src/components/Footer';
import '../../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <div className="flex flex-col h-screen justify-between">
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
        <Footer />
    </div>
  );
}

export default MyApp;
