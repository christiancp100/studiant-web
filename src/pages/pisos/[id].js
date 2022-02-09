import Menu from 'src/components/Menu';
import Carousel from 'src/components/ui/Carousel';

export default function Home() {
  return (
    <div className="flex flex-col items-center lg:mt-12 lg:mx-20 mt-6 mx-4">
      <div className=" 2xl:w-3/4 h-screen">
        <Menu />
        <Carousel />
      </div>
    </div>
  );
}
