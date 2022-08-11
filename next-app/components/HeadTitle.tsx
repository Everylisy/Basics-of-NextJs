import Head from "next/head";

interface titleProps {
  title: string;
}

function HeadTitle({ title }: titleProps) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}

export default HeadTitle;
