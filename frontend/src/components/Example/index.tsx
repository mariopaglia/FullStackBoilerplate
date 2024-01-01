import Head from 'next/head';
import Image from 'next/image';
import { Container } from './styles';

const Example = (): JSX.Element => {
  return (
    <Container>
      <Head>
        <title>NextJS Structure by Mario Paglia</title>
      </Head>

      <Image src='https://github.com/mariopaglia.png' alt='Mario Paglia' width={200} height={200} />

      <h1>NextJS Structure</h1>
      <p>
        A ReactJS + NextJS structure developed by{' '}
        <a href='https://github.com/mariopaglia/nextjs-structure' target='_blank' rel='noreferrer'>
          {' '}
          Mario Paglia
        </a>
      </p>
    </Container>
  );
};

export default Example;
