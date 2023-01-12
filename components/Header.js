import Link from "next/link";

export default function Header() {
    return (
        <header className="flex flex-col p-5 bg-gray-700 ">
            <nav className="flex justify-between">
                <div>
                    <Link href="/" className="text-gray-100 text-lg font-bold">shahanknet</Link>
                </div>
                <ul className="flex flex-row space-x-3">
                    <li className="text-gray-100"><Link href="/about-me">~/about-me</Link></li>
                    <li className="text-gray-100"><Link href="/posts">~/posts/</Link></li>
                    <li className="text-gray-100"><a href="https://github.com/shahank42">~/github</a></li>
                </ul>
            </nav>
        </header>
    );
}