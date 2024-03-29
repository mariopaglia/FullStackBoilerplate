import { displayError } from '@/lib/helpers/error';
import { userLogin } from '@/services';
import { LogIn, UserPlus } from 'lucide-react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { toast } from 'sonner';
import { ToogleTheme } from '../Shared/ToogleTheme';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

const UserLogin = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      localStorage.removeItem('jwt');

      const response = await userLogin(email, password);
      toast.success(response.data.message);

      const jwtLocalStorage = localStorage.getItem('jwt');

      if (!jwtLocalStorage) {
        localStorage.setItem('jwt', response.data.jwt);
        router.push('/usuarios');
      }
    } catch (error) {
      displayError(error);
    }
  };

  const handleRegister = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    router.push('/registrar');
  };

  return (
    <div className='flex justify-center items-center flex-col w-screen h-screen px-8'>
      <div className='absolute top-5 right-5'>
        <ToogleTheme />
      </div>
      <Card className='w-80 md:w-96 shadow'>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Insira os dados abaixo para fazer login no sistema.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className={`flex flex-col gap-2`} onSubmit={handleSubmit}>
            <Label htmlFor='email'>E-mail</Label>
            <Input
              type='email'
              id='email'
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
              }}
            />

            <Label htmlFor='password'>Senha</Label>
            <Input
              type='password'
              id='password'
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPassowrd(e.target.value);
              }}
            />

            <Button
              className='mt-2'
              type='submit'
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSubmit;
                }
              }}
            >
              <LogIn className='mr-2' type='submit' /> Entrar
            </Button>
            <span className='text-sm text-center'>Não tem uma conta?</span>
            <Button variant={'outline'} onClick={handleRegister}>
              <UserPlus className='mr-2' /> Registre-se
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserLogin;
