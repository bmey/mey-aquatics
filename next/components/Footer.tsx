import { SOCIAL_MEDIA } from '../utility/constants'
import { email } from '../service/contact'
import Link from 'next/link'

interface IProps {
  routes: {
    path: string
    name: string
  }[]
}

const Footer = ({ routes }: IProps): JSX.Element => (
  <footer className="body-footer bg-dark navbar-dark">
    <div className="footer-content">
      <div>
        <h5>Follow us</h5>
        <div className="d-flex flex-column navbar-nav">
          {SOCIAL_MEDIA.map((route) => (
            <a className="nav-link" href={route.href} key={route.id}>
              {route.id}
            </a>
          ))}
        </div>
      </div>
      <div>
        <h5>Contact us</h5>
        <div className="navbar-nav">
          <a className="nav-link" href={`mailto:${email}`}>
            {email}
          </a>
        </div>
      </div>
      <div>
        <h5>Sitemap</h5>
        <nav className="d-flex flex-column navbar-nav">
          {routes.map((route) => (
            <Link href={route.path} key={route.path}>
              <a className="nav-link">{route.name}</a>
            </Link>
          ))}
        </nav>
      </div>
      <div>
        <h5>Affiliates</h5>
        <div className="navbar-nav">
          <a className="nav-link" href="https://dsas.online/">
            DSAS
          </a>
        </div>
      </div>
    </div>
    <br />
    <p className="text-center">Only available within continental U.S.</p>
    <nav className="navbar-nav navbar-legal">
      <Link href="/termsofuse">
        <a className="nav-link">Terms of Use</a>
      </Link>
      <Link href="/privacy">
        <a className="nav-link">Privacy</a>
      </Link>
      <span>&copy;&nbsp;2019, MeysAquatics.com</span>
    </nav>
  </footer>
)

export default Footer
