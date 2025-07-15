import Head from 'next/head';

export default function SeoHead({ title, description }) {
  return (
    <Head>
      <title>{title} | Stackria</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
