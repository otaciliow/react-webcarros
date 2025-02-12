import { ReactNode, createContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebaseConnection';

import { IUserProps } from '../interfaces/IUserProps';

interface IAuthProviderProps {
    children: ReactNode;
}

type AuthContextData = {
    signed: boolean;
    loadingAuth: boolean;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({children}: IAuthProviderProps) {
    const [user, setUser] = useState<IUserProps | null>(null);
    const [loadingAuth, setLoadingAuth] = useState(true);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    uid: user.uid,
                    name: user?.displayName,
                    email: user?.email
                })
                setLoadingAuth(false);
            } else {
                setUser(null);
                setLoadingAuth(false);
            }
        })

        return () => {
            unsub();
        }

    }, [])

    return (
        <AuthContext.Provider value={{signed: !!user, loadingAuth}}> {/* Usar o !! transforma uma variável em booleana */}
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;