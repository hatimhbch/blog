import Head from 'next/head';

interface Props {
  seoTitle: string;
  seoDescription: string;
}

export default function Metadata({ seoTitle, seoDescription }: Props) {
  return (
    <Head>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content="/favicon.ico" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:image" content="/favicon.ico" />
      <link rel="canonical" href="https://eleven.co" />
    </Head>
  );
}
