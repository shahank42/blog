import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
    return (
        <Layout>
            <h1 className="text-gray-100 text-5xl">Hello, internet traveller.</h1>
            <br />
            <h3 className="text-gray-100 text-3xl">Welcome to my blog.</h3>
            <br />
            <p className="text-gray-100">I am shahank.</p>
            <p className="text-gray-100">While you're here, you should really check out my <Link href="/posts" className="underline font-semibold">posts</Link>.</p>
            <p className="text-gray-100">I swear they're not <i>that</i> boring :-)</p>
        </Layout>
    );
}