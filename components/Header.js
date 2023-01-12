import Link from "next/link";

export default function Header() {
    return (
        <header className="flex flex-col px-4 bg-gray-700 py-9 ">
            <nav className="flex justify-between">
                <div>
                    <Link href="/" className="ml-3 text-2xl font-bold text-gray-100">shahankNet</Link>
                </div>
                <ul className="flex flex-row space-x-4">
                    <li className="text-gray-100"><Link href="/posts">~/posts/</Link></li>
                    <li className="text-gray-100"><Link href="/about-me">~/about-me</Link></li>
                </ul>
            </nav>
        </header>
    );
}