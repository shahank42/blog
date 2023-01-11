import Link from "next/link";
import Layout from "../components/Layout";

export default function App() {
  return (
    <Layout>
      <h1 className="font-bold text-5xl my-2 mx-3 text-gray-100">welcome to my blog.</h1>
      <p><Link href="test-posts/first-post" className="text-sm underline text-blue-600 mx-3">Read the first test post!</Link></p>
    </Layout>
  );
}