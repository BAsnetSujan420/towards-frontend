import styles from "../../styles/Developers.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      developers: data,
    },
  };
};

const Developers = ({ developers }) => {
  return (
    <div>
      <h1>All Developers</h1>
      {developers.map((dev) => (
        <Link href={`/developers/${dev.id}`} key={dev.id}>
          <a className={styles.single}>
            <h3>{dev.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Developers;
