import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';

import logoImg from '../../assets/logo.svg';
import { FiUser, FiLogIn } from 'react-icons/fi';

export function Header() {
    const {signed, loadingAuth} = useContext(AuthContext);

    return (
        <header className="w-full flex items-center justify-center h-16 bg-white drop-shadow">
            <div className="flex w-full max-w-7xl items-center justify-between px-4 mx-auto">
                <Link to='/'>
                    <img src={logoImg} alt="Logo do site" />
                </Link>

                <div className="border-2 rounded-full p-1 border-gray-900">
                    { !loadingAuth && signed && (
                        <Link to='/dashboard'>
                            <FiUser size={22} color="#000" />
                        </Link>
                    )}

                    { !loadingAuth && !signed && (
                        <Link to='/login'>
                            <FiLogIn size={22} color="#000" />
                        </Link>
                    )}
                </div>
            </div>
        </header>
    )
}