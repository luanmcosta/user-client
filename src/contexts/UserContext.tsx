import React, { createContext, useState } from 'react'
import api from '../api'

export type User = {
    id: string
    nome: string
    cpf: number
    email: string
    telefone: number
    sexo: string
    dataNascimento: string
}

export type UserContextType = {
    setUsers: (users: User[]) => void,
    users: User[] | null,
    setSearchTerm: (search: string) => void,
    searchTerm: string,
    loadUsers: () => void,
    userEditing: User | null, 
    setUserEditing: (user: User | null) => void
}

export const UserContext = createContext<UserContextType | null>(null);

type UserProviderProps = {
    children: any
};

export function UserProvider ({children}: UserProviderProps) {
    const [users, setUsers] = useState<User[] | null>(null);
    const [userEditing, setUserEditing] = useState<User | null>(null);
    const [searchTerm, setSearchTerm] = useState('');


    function loadUsers(){
        console.log('Updating users...');
        api.get('/users').then(data => setUsers(data.data));
    }

    return (
        <UserContext.Provider value={{users, setUsers, searchTerm, setSearchTerm, loadUsers, userEditing, setUserEditing}}>{children}</UserContext.Provider>
    )
}

export default UserProvider;
