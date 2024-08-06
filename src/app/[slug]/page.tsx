import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import PageClient from "./PageClient"; // Import the client component

interface PageProps {
  params: {
    slug: string;
  };
}

async function getDocFromParams(slug: string) {
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);
  if (!doc) {
    notFound();
  }
  return doc;
}

const Page = async ({ params }: PageProps) => {
  const doc = await getDocFromParams(params.slug);
  if (!doc) {
    return <p>Not Found</p>;
  }

  return <PageClient doc={doc} />;
};

export default Page;
