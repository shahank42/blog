import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
    return (
        <div className="bg-black flex flex-col h-screen justify-between">
            <Header />

            <div className="mb-auto">
                {children}
            </div>

            <Footer />
        </div>
    );
}