import '../styles/styles.css'

export const Footer = ({ name, ...props }) => {
  return (
    <footer>
      <section className='footer-header'>{name} is mounted!</section>
      <section className='footer-main'>
        <div className='contacts'>
          <ul>
            <li className='phone'>Phone: +1-543-123-4567</li>
            <li className='e-mail'>example@fylo.com</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>About Us</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>
        {/* <div className='social'>
          <div className='facebook'>
            <i className='fa-brands fa-facebook-f'></i>
          </div>
          <div className='twitter'>
            <i className='fa-brands fa-twitter'></i>
          </div>
          <div className='instagram'>
            <i className='fa-brands fa-instagram'></i>
          </div>
        </div> */}
      </section>
    </footer>
  )
}
