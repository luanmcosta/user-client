import React, { useContext } from 'react';
import api from '../../api';
import { User, UserContext, UserContextType } from '../../contexts/UserContext';

interface UserCardProps {
    user: User
}

const UserCard = ({user}: UserCardProps) => {

  const {loadUsers, setUserEditing} = useContext(UserContext) as UserContextType;

  function handleRemover(){
    api.delete(`/users/${user.id}`).then(data => {
      loadUsers();
    })
  }

  function handleAtualizar(){
    setUserEditing(user);
  }

  return (
    <div className='col-sm-6 col-md-4 p-3'>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{user.nome}</h3>
          <p className="card-text">
              {user.email}<br/>
              {user.dataNascimento} - {user.telefone}<br/>
              {user.sexo}
          </p>
          
          <div className="row justify-content-between p-2">
            <a href="#!" className="btn btn-danger col-5" onClick={handleRemover}>Remover</a>
            <a href="#!" className="btn btn-primary col-5" data-bs-toggle="modal" data-bs-target="#modalEdit" onClick={handleAtualizar}>Atualizar</a>
          </div>
   

        </div>
      </div>
    </div>
  );
}

export default UserCard;