import Menu from 'src/components/Menu';
import PhotoCarousel from 'src/components/ui/PhotoCarousel';
import { useRouter } from 'next/router';

export default function Apartment() {
  const router = useRouter();
  const propertyId = router.asPath.split('/')[2];

  return (
    <div className="flex flex-col items-center">
      <div className="2xl:w-3/4 w-full space-y-10 mb-24">
        <div className="lg:mt-12 lg:mx-20 mt-6 mx-4">
          <Menu />
        </div>
        <PhotoCarousel />
      </div>
    </div>
  );
}
