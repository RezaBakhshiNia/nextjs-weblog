'use client';

// utils
import registerFormSchema from '@/libs/validations/registerForm';
import { CreateUserAction } from '@/actions/auth-action';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';

// component
import LabeledInput from '../ui/LabeledInput';
import SubmitButton from '../ui/submit-button';

const RegisterForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(registerFormSchema),
    mode: 'onChange',
  });

  const submit = async (data: {
    name?: string | undefined;
    email: string;
    password: string;
  }) => {
    console.log('submitting: ', data);
    const email = data.email;
    const password = data.password;
    const res = await CreateUserAction(data);

    if (res?.success) {
      console.log('submitting succied: ', res);
      await signIn('credentials', {
        email,
        password,
        callbackUrl: '/',
      });
    }
    console.log('submitting error: ', res);
  };
  return (
    <form
      onSubmit={handleSubmit(submit)}
      className='mx-auto flex w-96 flex-col gap-y-5'
    >
      <h2 className='text-3xl font-bold'>نام نویسی</h2>
      <LabeledInput
        name='name'
        label='نام'
        register={register}
        error={errors.name}
        placeholder='نام'
        type='text'
        delay={0.1}
      />
      <LabeledInput
        name='email'
        label='ایمیل'
        register={register}
        error={errors.email}
        placeholder='ایمیل'
        type='email'
        delay={0.2}
      />
      <LabeledInput
        name='password'
        label='رمز عبور'
        register={register}
        error={errors.password}
        placeholder='رمز عبور'
        type='password'
        delay={0.3}
      />
      <SubmitButton delay={0.4} />
    </form>
  );
};

export default RegisterForm;
