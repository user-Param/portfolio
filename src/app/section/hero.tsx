import Carousel from '../component/intro-card'

export const Hero = () => {
  return (
    <>
      <div className="h-[100%]">
        <div style={{ height: '100%', position: 'relative', border: '1px solid black' }}>
   <Carousel
     baseWidth={330}
     autoplay={false}
     autoplayDelay={3000}
     pauseOnHover={false}
     loop
     round={false}
   />
 </div>
      </div>
    </>
  );
};