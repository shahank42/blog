export default function Footer() {
    return (
        <footer>
            <div className="mt-16 flex flex-col items-center text-sm text-gray-400">
                <div className="mb-2 flex space-x-2">
                    <div>{`© ${new Date().getFullYear()}`}</div>
                    <div>shahank</div>
                    <div>{` • `}</div>
                    <div><a href="https://github.com/shahank42">GitHub</a></div>
                    <div>{` • `}</div>
                    <div><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">~/secret-link</a></div>
                </div>
            </div> 
        </footer>
    );
}