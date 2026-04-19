import IntroCard from "../component/intro-card";

export const Hero = () => {
  return (
    <>
      <div className="h-[100%]">
        <div style={{ height: '100%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className='flex p-8 rounded-xl'>
              <IntroCard/>
          </div>
          
 </div>
      </div>
    </>
  );
};