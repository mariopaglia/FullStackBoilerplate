import UsersList from '@/components/UsersList';
import Head from 'next/head';

const UsersPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Lista de Usuários</title>
      </Head>
      <UsersList />
    </>
  );
};

export default UsersPage;
