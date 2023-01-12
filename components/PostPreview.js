import Link from "next/link";


export default function PostPreview({ id, title, date, time, summary }) {
    return (
        <div className="bg-gray-600 pt-5 pb-2 px-9">
            <h3 className="text-3xl text-gray-100 font-title-text mb-1"><Link href={`/posts/${id}`}>{id}: {title}</Link></h3>
            <p className="text-sm text-gray-100 font-date-text mb-4">Published on {date} at {time}</p>
            <p className="text-gray-100 font-prose-text">{summary}</p>
            <br />
        </div>
    );
}