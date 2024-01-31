import Head from 'next/head';
import Image from 'next/image';

const Example = (): JSX.Element => {
  return (
    <div className='h-screen w-screen flex justify-center items-center flex-col'>
      <Head>
        <title>NextJS Structure by Mario Paglia</title>
      </Head>

      <Image src='https://github.com/mariopaglia.png' alt='Mario Paglia' width={200} height={200} />

      <h1 className='font-bold text-4xl mt-4'>NextJS Structure</h1>
      <p className='mt-2'>
        A ReactJS + NextJS structure developed by{' '}
        <a href='https://github.com/mariopaglia/nextjs-structure' target='_blank' rel='noreferrer'>
          {' '}
          Mario Paglia
        </a>
      </p>
    </div>
  );
};

export default Example;
