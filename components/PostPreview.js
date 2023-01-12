import Link from "next/link";


export default function PostPreview({ id, title, date, time, summary }) {
    return (
        <div className="">
            <h3 className="text-2xl text-gray-100"><Link href={`/posts/${id}`}>{id}: {title}</Link></h3>
            <p className="text-sm text-gray-100">Published on: {date} at {time}</p>
            <p className="text-gray-100">{summary}</p>
            <br />
        </div>
    );
}