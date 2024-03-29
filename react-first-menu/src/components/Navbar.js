import React from 'react'
    function Navbar() {
        return (
            <nav className="navbar navbar-expand-lg navbar navbar-light bg-light">
                <nav className="navbar navbar-light bg-light">
                    <a class="navbar-brand" href="#">
                        <img src="/img/lagora.jpg" width="150" height="80" alt="lagora" />
                    </a>
                </nav>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">One <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Two</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Three</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Four</a>
                            </li>
                        </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <button type="button" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </nav>
        );
    }
export default Navbar;
