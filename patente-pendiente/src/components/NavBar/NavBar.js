function NavBar(){
    return(
            <nav className="navbar navbar-expand-md navbar-light bg-secondary shadow-sm">
                <div className="container">
                    <a className="navbar-brand ">PatentePendiente</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto text-white">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Ofertas Semanales</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Categorias</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Staff</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contacto</a>
                            </li>                                
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

export default NavBar;