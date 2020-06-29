import Link from "next/link";
const Nav = () => {
    return (
        <nav style={{ backgroundColor:'gray' , padding:'20px 20px ' }}>
        <Link  href={'/'}><a style={{textDecoration:'none' , color:'pink'}}>USERS </a></Link>
        <Link href={'/skills'}><a style={{textDecoration:'none', color:'pink' , paddingLeft:'20px'}}>SKILS</a></Link>
    </nav>
    )
}
export default Nav;