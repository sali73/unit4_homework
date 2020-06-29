import Nav from "./Nav";
import Head from 'next/head'
const Layout = (props) => {
    return (
        <>
            <Head>
                <title>HOMEWORK</title>
                <link rel="icon" href="https://cdn3.iconfinder.com/data/icons/hotel-10-1/48/452-512.png" />
            </Head>

            <div>
                <Nav/>
                <main style={{ backgroundColor:'pink' , paddingTop:'20px' , paddingBottom:'20px' , color:'white'}}>
                    {props.children}
                </main>  
            </div>
        </>
    )
}
export default Layout;