export default function Footer() {
    return (
        <footer>
            <div className="mt-16 flex flex-col items-center text-sm text-gray-500">
                <div className="mb-2 flex space-x-2">
                    <div>shahank@shahanknet</div>
                    <div>{` • `}</div>
                    <div>{`© ${new Date().getFullYear()}`}</div>
                </div>
            </div> 
        </footer>
    );
}