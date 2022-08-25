import React, { useContext } from 'react'
import UserCard from '../../components/UserCard';
import { UserContext, UserContextType } from '../../contexts/UserContext';

export default function Home() {

    const {users, searchTerm} = useContext(UserContext) as UserContextType;

    const filteredUsers = users?.filter(user => {
        return user.nome.includes(searchTerm) || user.email.includes(searchTerm);
    })

    return (
        <div className="conteudo">
            <div className="row gx-5">
                {filteredUsers && filteredUsers.map((user, index) => <UserCard user={user} key={index} />)}
            </div>
        </div>
    )
}
