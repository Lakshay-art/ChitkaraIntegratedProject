import Link from 'next/link'
import headerStyles from '../styles/Header.module.css'
import About from '../pages/about'
const Header = () => {
  return (
    <header className={headerStyles.mainheader}>
      <h1>Gif<span>It</span></h1>
      <nav className={headerStyles.nav}>
        <Link href="#" >
          <a className={headerStyles.a}>
            Home
          </a></Link>
        <Link className={headerStyles.Link} href='/about' target="as_blank">
          <a className={headerStyles.a} >
            About
          </a>
        </Link>
      </nav>
    </header>
  )
}

export default Header
