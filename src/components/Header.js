import React from 'react';




class Header extends React.Component{

    
    
    state = {
        options: [{nombre: "Agenda", id: "agenda_id", subArea:[]},
        {nombre: "Paciente", id: "Paciente_id",subArea:[]},
        {nombre: "Cajas", id: "Cajas_id",subArea:[]},
        {nombre: "Administracion", id: "Administracion_id", subArea:["Convenios","Gestion","Terceros","Campañas"]}]
    }

    createDropList(name,list){
        return <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">{name}</a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {list.map((valor) => <li key={valor}><a className="dropdown-item" href="#">{valor}</a></li>)}
            </ul>
            
        </li>
    }

    render(){
        return <nav className="navbar navbar-expand-lg navbar-light headerframe">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">SaludDrive</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {this.state.options.map(({nombre,id,subArea}) => {
                            return nombre == "Administracion" ? this.createDropList(nombre,subArea):<li className="nav-item" key={id}><a className="nav-link optionsNarv" href="#">{nombre}</a></li>
                        }
                        )}
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