import { motion } from 'framer-motion';

const slides = [
  { icon: <i className='lni lni-python'></i> },
  { icon: <i className='lni lni-nodejs'></i> },
  { icon: <i className='lni lni-react'></i> },
  { icon: <i className='lni lni-nextjs'></i> },
  { icon: <i className='lni lni-git'></i> },
  { icon: <i className='lni lni-github'></i> },
  { icon: <i className='lni lni-aws'></i> },
  { icon: <i className='lni lni-docker'></i> },
  { icon: <i className='lni lni-kubernetes'></i> },
  { icon: <i className='lni lni-ubuntu'></i> },
];

export default function Skills() {
  const duplicatedSlides = [...slides, ...slides];

  return (
    <div>
      <div className='before:blur-3 after:blur-3 absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:h-full before:w-1/4 after:absolute after:right-0 after:top-0 after:h-full after:w-1/4'></div>

      <motion.div
        className='flex'
        animate={{
          x: ['0%', '-100%'],
          transition: {
            ease: 'linear',
            duration: 15,
            repeat: Infinity,
          },
        }}
      >
        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className='flex-shrink-0'
            style={{ width: `${100 / slides.length}%` }}
          >
            <div className='flex size-full items-center justify-center gap-2 text-3xl'>
              {slide.icon}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
