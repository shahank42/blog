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

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <h2 className="text-gray-100 text-5xl mt-4 mb-6">~/posts/</h2>
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