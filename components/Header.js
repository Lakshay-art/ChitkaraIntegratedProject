import Link from 'next/link'
import headerStyles from '../styles/Header.module.css'
import About from '../pages/About'
const Header = () => {
  return (
    <header className={headerStyles.mainheader}>
      <h1>Gif<span>It</span></h1>
      <nav className={headerStyles.nav}>
        <Link href="#" >
          <a className={headerStyles.a}>
            Home
          </a></Link>
        <Link className={headerStyles.Link} href='/Aboutus' target="as_blank">
          <a className={headerStyles.a} >
            About
          </a>
        </Link>
        <Link className={headerStyles.Link} href="#">
          <a className={headerStyles.a}>
            Docs
          </a></Link>
      </nav>
    </header>
  )
}

export default Header
