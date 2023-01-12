import Layout from "../../components/Layout";
import { getPostData, getAllPostIds } from "../../lib/posts";
import matter from "gray-matter";
import Head from "next/head";


export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);

    return {
        props: {
            postData,
        },
    }
}

export async function getStaticPaths() {
    const paths = getAllPostIds();

    return {
        paths,
        fallback: false,
    };
}

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{`shahanknet/posts/${postData.id}`}</title>
            </Head>

            <div className="flex flex-col prose prose-invert max-w-none p-3">
                <span className="text-gray-300 text-sm pb-3 font-date-text">
                    Published on <date>{postData.date}</date> at <time>{postData.time}</time>
                </span>
                <h1 className="text-gray-100 text-5xl underline font-title-text">{postData.id}: {postData.title}</h1>
                <div className="text-gray-100 font-prose-text" dangerouslySetInnerHTML={{__html: postData.contentHTML}}></div>
            </div>
        </Layout>
    );
}