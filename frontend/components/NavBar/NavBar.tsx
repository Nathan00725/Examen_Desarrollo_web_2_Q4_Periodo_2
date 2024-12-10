import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
        <a className="navbar-brand" href="/categorycode">Graficos </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="nav">
            
            <li className="nav-item">
                <Link className="nav-link active" href="/categorycode">Category Code</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" href="/count_brandcode">count brandcode</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" href="/sumar_categorycode">suma categorycode</Link>
            </li>
         
            <li className="nav-item">
                <Link className="nav-link" href="/">Inicio</Link>
            </li>
          
        </ul>

    </div>
</nav>
  )
}