import RegisterForm from '@/components/auth/register-form';
import Container from '@/components/ui/container';
import { authOptions } from '@/libs/next-auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const Register = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user.usreId) {
    redirect('/');
  } else {
    console.log('session: ', session);
  }
  return (
    <div className='mt-20'>
      <Container>
        <RegisterForm />
      </Container>
    </div>
  );
};

export default Register;
