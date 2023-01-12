import Layout from "../components/Layout";

export default function Custom404() {
    return (
        <Layout>
            <h1 className="text-gray-100 text-3xl">Error 404: page not found</h1>
            <br />
            <small className="text-gray-100 text-2xl">you ded lol.</small>
            <br />
            <p className="text-gray-100">Try going back? IDK, your move. I can only suggest.</p>
        </Layout>
    );
}