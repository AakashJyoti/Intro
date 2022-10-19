import Head from "next/head";

const Post = ({ id, title }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <>
        <h2>Look what i got here</h2>
        <p>{title}</p>
        <p>{id}</p>
      </>
    </div>
  );
};

export async function getServerSideProps(context) {
  console.log(context.query);
  const title = context.query.title;
  const id = context.query.post;
  return {
    props: { id, title },
  };
}

export default Post;
