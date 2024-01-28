import UserLogin from '@/components/Login';
import Head from 'next/head';

const LoginPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <UserLogin />
    </>
  );
};

export default LoginPage;
