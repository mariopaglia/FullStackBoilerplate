import { createUser } from '@/services';
import { AxiosError } from 'axios';
import React, { useState } from 'react';
import { UserRegisterWrapper } from './styles';

interface IUser {
  name: string;
  email: string;
  password: string;
}

const UserRegister = (): JSX.Element => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [user, setUser] = useState({} as IUser);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (password !== passwordConfirmation) {
      setErrorMessage('As senhas não coincidem');
      return;
    }

    try {
      const response = await createUser(name, email, password);
      setSuccessMessage('Usuário cadastrado com sucesso');
      setUser(response.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        setErrorMessage(error.response?.data.message);
      }
      setUser({} as IUser);
    }
  };

  return (
    <UserRegisterWrapper>
      <h1>Cadastrar novo usuário</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Nome</label>
        <input
          type='text'
          id='name'
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value); // Atualiza o estado quando o valor do input muda
          }}
        />

        <label htmlFor='email'>E-mail</label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          }}
        />

        <label htmlFor='password'>Senha</label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPassowrd(e.target.value);
          }}
        />

        <label htmlFor='password_confirmation'>Confirmação de senha</label>
        <input
          type='password'
          id='password_confirmation'
          value={passwordConfirmation}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPasswordConfirmation(e.target.value);
          }}
        />

        <button type='submit'>Cadastrar</button>
        <div>
          <p>{successMessage}</p>
          <p>{errorMessage}</p>
          <p>{JSON.stringify(user)}</p>
        </div>
      </form>
    </UserRegisterWrapper>
  );
};

export default UserRegister;
