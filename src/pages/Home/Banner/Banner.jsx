import { useState, useEffect, useMemo } from 'react';

const Banner = () => {
  const img1 = '../../../assets/home/01.jpg'
  const img2 = '../../../assets/home/02.jpg'
  const img3 = '../../../assets/home/03.jpg'
  const img4 = '../../../assets/home/04.jpg'
  const img5 = '../../../assets/home/05.jpg'
  const img6 = '../../../assets/home/06.jpg'

  const slides = useMemo(() => [img1, img2, img3, img4, img5, img6], []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change banner every 3 seconds

    return () => clearInterval(interval);
  }, [slides]);

  return (
    <div className='max-w-screen-xl w-full py-6 relative' style={{ height: '500px' }}>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex]})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
          <div className='absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
            <div className='text-white space-y-7 pl-12 w-1/2'>
              <h2 className='text-6xl font-bold'>Discover Your Dream Car Today!</h2>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Banner;