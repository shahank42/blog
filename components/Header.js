import Link from "next/link";

export default function Header() {
    return (
        <header className="flex flex-col py-9 px-4 bg-gray-700 ">
            <nav className="flex justify-between">
                <div>
                    <Link href="/" className="text-gray-100 text-2xl font-bold ml-3">shahanknet</Link>
                </div>
                <ul className="flex flex-row space-x-4">
                    <li className="text-gray-100"><Link href="/posts">~/posts/</Link></li>
                    <li className="text-gray-100"><Link href="/about-me">~/about-me</Link></li>
                </ul>
            </nav>
        </header>
    );
}