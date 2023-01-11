import Link from "next/link";
import Layout from "../../components/Layout";

export default function FirstPost() {
    return (
        <Layout>
            <h1 className="font-bold text-gray-100 text-4xl my-2 mx-3">This is the first post!!!</h1>
            <p className="mx-3 text-gray-100 my-2">It's pretty dang basic.</p>
            <Link href="/"  className="text-sm underline text-blue-600 mx-3">← Go back home</Link>
        </Layout>
    );
}