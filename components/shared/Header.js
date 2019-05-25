import React from 'react';
import Link from 'next/link';

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/blogs"><a>Blogs</a></Link></li>
          <li><Link href="/cv"><a>CV</a></Link></li>
          <li><Link href="/portfolios"><a>Portfolios</a></Link></li>
          <li><Link href="/about"><a>About</a></Link></li>
        </ul>
      </React.Fragment>
    )
  }
}

export default Header;
