import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
    return (
        <Layout>
            <div className="flex flex-col items-center">
                <h1 className="text-gray-100 text-5xl font-title-text">Hello, internet traveller.</h1>
                <br />
                <h3 className="text-gray-100 text-3xl font-title-text">Welcome to my blog.</h3>
                <br />
            </div>
            <br />
            <div>
                <p className="text-gray-100 font-prose-text">I am shahank.</p>
                <p className="text-gray-100 font-prose-text">While you&apos;re here, you should really check out my <Link href="/posts" className="underline font-semibold">posts</Link>.</p>
                <p className="text-gray-100 font-prose-text">I swear they&apos;re not <i>that</i> boring :-)</p>
                <br />
                <p className="text-gray-100 font-prose-text">Anyways, this site is still under construction, so you should come back here often to see all the cool new stuff I put here.</p>
                <p className="text-gray-100 font-prose-text">After all, it is <i>my</i> site. Hehehe.</p>
            </div>
        </Layout>
    );
}