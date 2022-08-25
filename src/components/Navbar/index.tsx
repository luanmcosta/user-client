import React, { useContext, useState } from 'react'
import { UserContext, UserContextType } from '../../contexts/UserContext'

export default function Navbar() {

    const [search, setSearch] = useState('');
    const {setSearchTerm} = useContext(UserContext) as UserContextType;

    function handleSearch(){
        setSearchTerm(search);
    }

    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#!">Usuários</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#!">INÍCIO</a>
                    </li>
                    <li className="nav-item">
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalCreate">
                            NOVO
                        </button>
                    </li>
                </ul>
                <form className="d-flex">
                    <input value={search} onChange={e => setSearch(e.target.value)} className="form-control me-2" type="search" placeholder="Procurar um usuário" aria-label="Search" />
                    <a href="#!" onClick={handleSearch} className="btn btn-outline-success">BUSCAR</a>
                </form>
                </div>
            </div>
            </nav>
    )
}
