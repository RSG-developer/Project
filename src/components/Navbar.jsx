import React from 'react'

export default function Navbar({searchQuery, setSearchQuery}) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand text-danger fs-3" href="/">NETFLIX</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active fs-5" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fs-5" aria-current="page" href='/bollywood'>Bollywood</a>
              </li>

              <li className="nav-item">
                <a className="nav-link active fs-5" aria-current="page" href='/news'>News</a>
              </li>


            </ul>
            <form className="d-flex" role="search" action=''>
              <input className="form-control me-2" 
              type="search" 
              placeholder="Search" 
              aria-label="Search"  
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)}
              />
              {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}
