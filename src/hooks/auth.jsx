import { createContext, useContext, useEffect, useState } from 'react';

import { api } from '../services/api';

export const AuthContext = createContext({});


function AuthProvider({children}) {
    const [data, setData] = useState({})

    async function signIn({ email, password }){
        try{
            const response = await api.post('/sessions', {email, password});
            const {user, token} = response.data;

            
            localStorage.setItem("@explorerfoods:user", JSON.stringify(user));
            localStorage.setItem("@explorerfoods:token", token);

            api.defaults.headers.common['Authorization'] = `Barrer ${token}`;
            setData({user, token});

        }catch(error){
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Não foi possível realizar login!");
            }
        }
    }

    async function signOut(){
        localStorage.removeItem("@explorerfoods:token");
        localStorage.removeItem("@explorerfoods:user");
        
        setData({});
     }      

     useEffect(() => {
        const token = localStorage.getItem("@explorerfoods:token")
        const user = localStorage.getItem("@explorerfoods:user")

        if(token && user){
            api.defaults.headers.common['Authorization'] = `Barrer ${token}`
            setData({
                token,
                user: JSON.parse(user)
            })
        }
    }, [])

    return(
        <AuthContext.Provider value={{signIn, signOut, user: data.user}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}


export { AuthProvider, useAuth }

