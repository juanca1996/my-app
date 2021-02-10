import React from 'react';

class Header extends React.Component{
    
    state = {
        options: [{nombre: "Agenda", id: "agenda_id"},
        {nombre: "Paciente", id: "Paciente_id"},
        {nombre: "Cajas", id: "Cajas_id"},
        {nombre: "Administracion", id: "Administracion_id"}]
    }

    administracion = {
        name: "Administracion",
        options:["Facturacion",
        "Convenios",
        "Gestion",
        "Terceros",
        "Campañas"]
    }

    render(){
        return <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">SaludDrive</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" key="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {this.state.options.map(({nombre,id}) => <li className="nav-item" key={id}>
                            <a className="nav-link" href="#">{nombre}</a>
                        </li>)}
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </nav>
    }
}

export default Header;