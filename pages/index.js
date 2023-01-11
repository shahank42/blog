import Link from "next/link";
import Layout from "../components/Layout";
import { getSortedPostsData } from "../lib/posts";


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
} 

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <div className="p-1">
        <h2 className="text-gray-100 text-5xl mb-8">Blog Directory</h2>
        <ul className="my-3">
          {allPostsData.map(({ id, title, date }) => (
            <li key={id} className="text-gray-100 mb-5">
              <h3 className="text-2xl">{id}: {title}</h3>
              <br />
              <p className="text-sm">Published on: {date}</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}