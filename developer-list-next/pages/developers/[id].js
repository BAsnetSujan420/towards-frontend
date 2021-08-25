export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();

  const paths = data.map((developer) => {
    return {
      params: { id: developer.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  return {
    props: {
      developer: data,
    },
  };
};

const Details = ({ developer }) => {
  return (
    <div>
      <h1>{developer.name}</h1>
      <p>{developer.email}</p>
      <p>{developer.website}</p>
      <p>{developer.address.city}</p>
    </div>
  );
};

export default Details;
