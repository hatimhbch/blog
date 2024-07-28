interface Props {
    seoTitle: string;
    seoDescription: string;
  }
  
  export default function Metadata({ seoTitle, seoDescription }: Props) {
    return (
      <>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content="@/app/favicon.ico" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="@/app/favicon.ico" />
      </>
    );
  }