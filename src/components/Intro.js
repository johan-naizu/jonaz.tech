import Image from 'next/image';
import Box from './Box';

export default function Intro({ data, timeline }) {
  const contentAnimation = delay => {
    timeline
      .from('.intro-heading', { opacity: 0, y: 30, duration: 0.8 }, delay + 0.3)
      .from(
        '.intro-icon',
        { opacity: 0, rotate: -180, duration: 1, ease: 'slow.out' },
        delay + 0.3
      );
  };

  return (
    <Box
      timeline={timeline}
      className={'translate-x-full scale-0 opacity-0'}
      callbackAnimation={contentAnimation}
    >
      <div className='z-10 flex size-full flex-col justify-between gap-4'>
        {/* Icon */}
        <div className='ml-auto size-[8rem]'>
          {data?.icon && (
            <Image
              src={data.icon}
              width={100}
              height={100}
              alt='flower'
              className='intro-icon size-full'
            />
          )}
        </div>
        <h1 className='intro-heading font-gilroy max-w-[35rem] pb-8 text-[3.6rem] font-bold leading-[100%]'>
          <span className='font-light italic'>Crafting</span> Software{' '}
          <span className='font-light italic'>that</span> Solves{' '}
          <span className='font-light italic'>Real</span> Problems
        </h1>
      </div>
    </Box>
  );
}
