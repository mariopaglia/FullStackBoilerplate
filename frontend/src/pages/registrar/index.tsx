import UserRegister from '@/components/UserRegister';
import Head from 'next/head';

const RegisterPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Registrar</title>
      </Head>
      <UserRegister />
    </>
  );
};

export default RegisterPage;
