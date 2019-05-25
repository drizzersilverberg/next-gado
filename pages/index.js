import React from 'react';
import Link from 'next/link';

class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>Index page</h1>
        <ul>
          <li><Link href="/blogs"><a>Blogs</a></Link></li>
          <li><Link href="/cv"><a>CV</a></Link></li>
          <li><Link href="/portfolios"><a>Portfolios</a></Link></li>
          <li><Link href="/about"><a>About</a></Link></li>
        </ul>
      </div>
    )
  }
}

export default Index;