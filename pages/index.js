import React from 'react';

class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>Index page</h1>
        <ul>
          <li><a href="/blogs">Blogs</a></li>
          <li><a href="/cv">CV</a></li>
          <li><a href="/portfolios">Portfolios</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </div>
    )
  }
}

export default Index;