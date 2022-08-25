import React, { useContext, useState } from 'react'
import api from '../../api'
import { UserContext, UserContextType } from '../../contexts/UserContext';

export default function NewUserModalForm() {

    const {loadUsers} = useContext(UserContext) as UserContextType;

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [sexo, setSexo] = useState('');
    const [dtNasc, setDtNasc] = useState('');

    function handleClose(){
        setNome('');
        setCpf('');
        setEmail('');
        setTelefone('');
        setSexo('Masculino');
        setDtNasc('');
       
    }

    function handleSave(){
        api.post('/users', {
            data: {nome, cpf, email, telefone, sexo, dataNascimento: dtNasc}
        }).then(res => {
            loadUsers();
        });
    }

    return (
        
        <div className="modal fade" id="modalCreate" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">Criar um Usuário</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body row">
                    <div className="form-floating mb-3 col-6">
                        <input value={nome} onChange={e => setNome(e.target.value)} type="text" className="form-control" id="nomeInput" placeholder="name@example.com" />
                        <label htmlFor="nomeInput">Nome Completo</label>
                    </div>
                    <div className="form-floating mb-3 col-6">
                        <input value={cpf} onChange={e => setCpf(e.target.value)} type="number" className="form-control" id="cpfInput" placeholder="name@example.com" required/>
                        <label htmlFor="cpfInput">Cpf</label>
                    </div>
                    <div className="form-floating mb-3 col-6">
                        <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="emailInput" placeholder="name@example.com" required/>
                        <label htmlFor="emailInput">Email</label>
                    </div>
                    <div className="form-floating mb-3 col-6">
                        <input value={telefone} onChange={e => setTelefone(e.target.value)} type="number" className="form-control" id="telefoneInput" placeholder="name@example.com" required/>
                        <label htmlFor="telefoneInput">Telefone</label>
                    </div>
                    <div className="form-floating mb-3 col-6">
                        <select id="selectSexo" value={sexo} onChange={e => setSexo(e.target.value)} className="form-select col-12 mb-3">
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                        </select>
                        <label htmlFor="selectSexo">Sexo</label>
                    </div>
                    <div className="form-floating mb-3 col-6">
                        <input value={dtNasc} onChange={e => setDtNasc(e.target.value)} type="date" className="form-control" id="dtNascInput" placeholder="name@example.com" required/>
                        <label htmlFor="dtNascInput">Data de Nascimento</label>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Fechar</button>
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleSave}>Salvar</button>
                </div>
                </div>
            </div>
        </div>
    )
}
