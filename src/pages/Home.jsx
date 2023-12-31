import HeroDesktop from '../components/HeroDesktop';
import HeroMobile from '../components/HeroMobile';
import Marquee from '../components/Marquee';
import Swiper from '../components/Swiper';
import NewArrivals from '../components/NewArrivals';
import ShowcaseProducts from '../components/ShowcaseProducts';
import Banner from '../components/Banner';

function Home() {
  return (
    <>
      <div className="pt-12 text-primary-black-500">
        <div>
          <HeroMobile />
          <HeroDesktop />
        </div>
        <div className="py-8 lg:py-14">
          <Swiper
            slides={[
              {
                img: 'swiper-1.png',
                hashtag: '#outfitoftheday',
                title: 'Bunch Beach party collections',
              },
              {
                img: 'swiper-2.png',
                hashtag: '#femininestyle',
                title: 'Sunny day Outfit',
              },
              {
                img: 'swiper-3.png',
                hashtag: '#latestrelease',
                title: 'Beauty at its Peak',
              },
            ]}
          />
        </div>
        <Marquee />
      </div>
      <NewArrivals />
      <ShowcaseProducts />
      <Banner />
    </>
  );
}

export default Home;
