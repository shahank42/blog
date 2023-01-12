import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
    return (
        <div className="bg-black justify-between flex flex-col h-screen">
            <Header />

            <div className="mb-auto">
                {children}
            </div>

            <Footer />
        </div>
    );
}