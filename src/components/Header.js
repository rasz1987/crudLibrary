import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
            <div className="container">
                <h3>
                    <Link to={'/'} className="text-dark">
                        CRUD - React, Redux Hooks, REST API y Axios
                    </Link>
                </h3>
                <Link to={'/productos/nuevo'} className="btn btn-danger nuevo-post d-block d-md-inline-block">
                    Agregar Producto &#43;
                </Link>
            </div>
        </nav>
    )
}

export default Header
