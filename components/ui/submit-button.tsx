'use client';

import { motion } from 'framer-motion';
import { useFormStatus } from 'react-dom';

const SubmitButton = ({ delay = 0}) => {
  const { pending } = useFormStatus();

  return (
    <motion.button
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 1.8, type: 'spring', delay: delay }}
      type='submit'
      disabled={pending}
      className='rounded-md bg-black px-7 py-2 text-white hover:bg-gray-800 disabled:bg-gray-400'
    >
      ثبت
    </motion.button>
  );
};

export default SubmitButton;
