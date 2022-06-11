import { Navbar,Footer } from "@components/ui/common";


export default function BaseLayout({children}){
    return(
        <>
            <Navbar/>
                {children}
            <Footer/>
        </>
    )
}