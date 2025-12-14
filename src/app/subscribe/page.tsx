import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import SubscribeBox from "../components/landing-page/subscribe-box";

export const metadata = {
    title: "Subscribe | Law Journal",
    description: "Join our newsletter to get the latest legal insights and updates.",
};

export default function SubscribePage() {
    return (
        <div className="bg-[#EAE8E4] min-h-screen flex flex-col">
            <Navbar />
            <main className="grow flex items-center justify-center p-8">
                <div className="max-w-xl w-full">
                    <SubscribeBox />
                </div>
            </main>
            <Footer />
        </div>
    );
}
