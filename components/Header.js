import Link from "next/link";

export default function Header() {
    return (
        <header className="flex flex-col p-5 bg-gray-700 ">
            <nav className="flex justify-between">
                <div>
                    <Link href="/" className="text-gray-100 text-lg font-bold">shahanknet</Link>
                </div>
                <ul className="flex flex-row space-x-3">
                    <li className="text-gray-100">GitHub</li>
                    <li className="text-gray-100">LinkedIn</li>
                </ul>
            </nav>
        </header>
    );
}