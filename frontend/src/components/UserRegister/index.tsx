import { createUser } from '@/services';
import { AxiosError } from 'axios';
import { LogIn, UserPlus } from 'lucide-react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

const UserRegister = (): JSX.Element => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== passwordConfirmation) {
      toast.error('As senhas não coincidem.');
      return;
    }

    try {
      const response = await createUser(name, email, password);
      toast.success(response.data.message);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
      }
    }
  };

  const handleLogin = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    router.push('/login');
  };

  return (
    <div className='flex justify-center items-center flex-col w-screen h-screen bg-gray-900 px-8'>
      <Card className='w-96 shadow'>
        <CardHeader>
          <CardTitle>Cadastro de usuário</CardTitle>
          <CardDescription>Insira os dados abaixo para cadastrar um novo usuário no sistema.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className={`flex flex-col gap-2`} onSubmit={handleSubmit}>
            <Label htmlFor='name'>Nome</Label>
            <Input
              type='text'
              id='name'
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setName(e.target.value);
              }}
            />

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

            <Label htmlFor='password_confirmation'>Confirmação de senha</Label>
            <Input
              type='password'
              id='password_confirmation'
              value={passwordConfirmation}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPasswordConfirmation(e.target.value);
              }}
            />

            <Button className='mt-2' type='submit'>
              <UserPlus className='mr-2' /> Registrar
            </Button>
            <span className='text-center text-sm'>Já possui uma conta?</span>
            <Button variant={'outline'} onClick={handleLogin}>
              <LogIn className='mr-2' /> Fazer login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserRegister;
