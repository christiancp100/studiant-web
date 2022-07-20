import { useQuery } from 'react-query';
import Menu from 'src/components/Menu';
import PhotoCarousel from 'src/components/ui/PhotoCarousel';
import { useRouter } from 'next/router';
import { getApartment } from 'src/api/apartments';
import SafeRequest from 'src/components/ui/SafeRequest';

export default function Apartment() {
  const router = useRouter();
  const id = router.query?.id;
  const { status } = useQuery(['apartment', { id }], getApartment);

  return (
    <SafeRequest status={status}>
      <div className="flex flex-col items-center">
        <div className="w-full space-y-10 mb-24">
          <div className="lg:mt-12 lg:mx-20 mt-6 mx-4">
            <Menu />
          </div>
          <PhotoCarousel />
        </div>
      </div>
    </SafeRequest>
  );
}
