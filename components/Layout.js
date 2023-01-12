import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
    return (
        <div className="bg-black justify-between flex flex-col h-screen">
            <Header />

            <div className="mb-auto p-3">
                {children}
            </div>

            <Footer />
        </div>
    );
}