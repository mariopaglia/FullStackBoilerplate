'use client';

import { displayError } from '@/lib/helpers/error';
import { formatDateAndHours } from '@/lib/utils/date';
import { usersList } from '@/services';
import { useEffect, useState } from 'react';
import { ToogleTheme } from '../Shared/ToogleTheme';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

const UsersList = (): JSX.Element => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsersList = async () => {
      try {
        const response = await usersList();
        setUsers(response.data.users);
      } catch (error) {
        displayError(error);
      }
    };

    getUsersList();
  }, []);

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='absolute top-5 right-5'>
        <ToogleTheme />
      </div>
      <div className='w-auto'>
        <Table>
          <TableCaption>Lista de usuários.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className=''>Nome</TableHead>
              <TableHead>E-mail</TableHead>
              <TableHead>Criado em</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.length > 0 &&
              users.map((user) => (
                <TableRow key={user.email}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{formatDateAndHours(user.createdAt)}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UsersList;
