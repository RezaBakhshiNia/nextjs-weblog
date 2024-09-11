/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion';
import { InputHTMLAttributes, ReactNode } from 'react';
import { FieldError, FieldErrorsImpl, Merge, UseFormRegister } from 'react-hook-form';

type Input = {
  name: string;
  label: string;
  register: UseFormRegister<{
    name?: string | undefined;
    email: string;
    password: string;
  }>;
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  placeholder: string;
  type: string;
  parentStyles?: string;
  delay?: number;
  children?: ReactNode;
  props?: InputHTMLAttributes<Input>;
};

const LabeledInput = ({
  name,
  register,
  label,
  error,
  children,
  parentStyles,
  delay = 0,
  ...props
}: Input) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 1.8, type: 'spring', delay: delay }}
    className={`border-none ${parentStyles}`}
  >
    <label
      htmlFor={name}
      className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
    >
      {label}
    </label>
    <input
      {...register(name as "name" || "email" || "password")}
      className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-gray-400 focus:bg-yellow-50 focus:shadow-inner focus:ring-gray-400 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400'
      {...props}
      id={name}
    />
    {error && <span className='text-rose-500'>{`${error.message}`}</span>}
    {children}
  </motion.div>
);

export default LabeledInput;
