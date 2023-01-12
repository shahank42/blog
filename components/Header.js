import Link from "next/link";

export default function Header() {
    return (
        <header className="flex flex-col py-8 px-2 bg-gray-700 ">
            <nav className="flex justify-between">
                <div>
                    <Link href="/" className="text-gray-100 text-lg font-bold">shahanknet</Link>
                </div>
                <ul className="flex flex-row space-x-2.5">
                    <li className="text-gray-100"><Link href="/about-me">~/about-me</Link></li>
                    <li className="text-gray-100"><Link href="/posts">~/posts/</Link></li>
                </ul>
            </nav>
        </header>
    );
}