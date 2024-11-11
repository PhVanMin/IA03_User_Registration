import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Navbar() {
    const token = localStorage.getItem('jwtToken');
    const navigate = useNavigate();
    const handleSignOut = () => {
        localStorage.removeItem('jwtToken')
        axios.defaults.headers['Authorization'] = "";
        navigate('/')
    }
    return (
        <nav className="bg-slate-950 text-white p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <a className="flex items-center justify-center" href="/">
                    <span className="sr-only">Web Dev</span>
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M12 5V3" />
                        <path d="M18 12h2" />
                        <path d="M12 21v-2" />
                        <path d="M4 12H2" />
                        <path d="m19 3-3 3" />
                        <path d="m21 21-3-3" />
                        <path d="m3 3 3 3" />
                        <path d="m5 21 3-3" />
                        <circle cx="12" cy="12" r="4" />
                    </svg>
                </a>
                {
                    !token ?
                        <div className="flex space-x-6">
                            <a href="/auth/login" className="text-white hover:text-gray-300">
                                Sign In
                            </a>
                            <a href="/auth/register" className="text-white hover:text-gray-300">
                                Sign Up
                            </a>
                        </div> : <div className="flex space-x-6">
                            <a href="/profile" className="text-white hover:text-gray-300">
                                Profile
                            </a>
                            <a href="#" onClick={handleSignOut} className="text-white hover:text-gray-300">
                                Sign Out
                            </a>
                        </div>
                }
            </div>
        </nav>
    )
}