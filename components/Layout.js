import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
    return (
        <div className="bg-gray-800 justify-between flex flex-col h-screen">
            <Header />

            <div className="mb-auto px-5 flex flex-col items-center max-w-3xl mx-auto pt-5">
                {children}
            </div>

            <Footer />
        </div>
    );
}