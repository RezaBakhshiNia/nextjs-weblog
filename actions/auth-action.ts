'use server';

import prismadb from '@/libs/prismadb';
import { hash } from 'bcrypt';

export const CreateUserAction = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  console.log('CreateUsreAction', data);
  try {
    const { name, email, password } = data;

    const existingUser = await prismadb.user.findUnique({
      where: { email: email },
    });

    if (existingUser) {
      return {
        success: false,
        message: 'این ایمیل از قبل در سامانه ثبت شده است.',
      };
    }

    const hashedPassword = await hash(password as string, 12);

    const user = await prismadb.user.create({
      data: {
        name: name as string,
        email: email as string,
        hashedPassword,
      },
    });

    console.log('database response: ', user);
    if (!user) return { success: false };

    return { success: true };
  } catch (error) {
    console.log('CreateUsreAction', error);
  }
};

export const CheckUserEmail = async (formdata: FormData) => {
  try {
    const { email } = Object.fromEntries(formdata);

    const user = await prismadb.user.findUnique({
      where: {
        email: email as string,
      },
    });

    if (!user) return { success: false };

    return { success: true };
  } catch (error) {
    console.log('CheckUserEmail', error);
  }
};
