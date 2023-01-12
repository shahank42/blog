import Link from "next/link";
import Layout from "../components/Layout";
import PostPreview from "../components/PostPreview";
import { getSortedPostsData } from "../lib/posts";


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
} 

export default function Posts({ allPostsData }) {
  return (
    <Layout>
      <h2 className="text-gray-100 text-5xl"><Link href="/posts">~/posts/</Link></h2>
      <br />
      <br />
      <div className="my-3">
        {allPostsData.map(({ id, title, date, time, summary }) => (
          <PostPreview
            key={id}
            id={id}
            title={title}
            date={date}
            time={time}
            summary={summary}
          />
        ))}
      </div>
    </Layout>
  );
}