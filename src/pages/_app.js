import Footer from 'src/components/Footer';
import '../../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
