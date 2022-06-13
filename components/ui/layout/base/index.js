import { Web3Provider } from "@components/providers";
import { Navbar,Footer } from "@components/ui/common";


export default function BaseLayout({children}){
    return(
        <Web3Provider>
            <Navbar />
            <div className="fit">
                {children}
            </div>
            <Footer />
        </Web3Provider>
    )
}