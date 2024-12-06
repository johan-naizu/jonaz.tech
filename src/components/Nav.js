import Box from './Box';

export default function Nav({ data, timeline }) {
  const contentAnimation = delay => {
    timeline
      .from('.logo', { x: -30, opacity: 0 }, delay + 0.3)
      .from('.cta', { x: 30, opacity: 0 }, delay + 0.3);
  };

  return (
    <Box
      timeline={timeline}
      className='translate-y-full scale-0 opacity-0'
      callbackAnimation={contentAnimation}
    >
      <nav className='flex size-full items-center justify-between max-lg:gap-4 max-md:flex-col max-md:justify-center'>
        <div className='logo font-gilroy overflow-hidden text-2xl font-medium'>
          <span className='block'>
            {' '}
            <span className='font-gilroy font-light italic'>Johan</span> Naizu
          </span>
        </div>
        <div className='cta flex items-center gap-4'>
          {data?.links?.map(link => (
            <a
              key={link.title}
              href={link.url}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block'
            >
              <button className='rounded-2xl border border-secondary bg-secondary px-4 py-3 pt-3.5 font-medium uppercase text-background'>
                {link.title}
              </button>
            </a>
          ))}
        </div>
      </nav>
    </Box>
  );
}
