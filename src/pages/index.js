import SearchForm from 'src/components/forms/SearchForm';
import Header from 'src/components/Header';

export default function Home() {
  return (
    <div className="flex flex-col items-center lg:mt-12 lg:mx-20 mt-6 mx-4">
      <Header />
      <SearchForm />
    </div>
  );
}
