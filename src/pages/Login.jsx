import { useContext, useState } from "react";
import { get, push, ref, set } from "firebase/database";

import { db } from "../shared/firebase";
import { UserContext } from "../App";

export const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const { setUserLogged } = useContext(UserContext);

    const handleToggle = () => {
        setIsLogin(!isLogin);
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dbRef = ref(db, 'usuarios');

        if (isLogin) {
            const snapshot = await get(dbRef);
            const users = Object.values(snapshot.val());

            const user = users.find(user => user.email === email && user.password === password);
            if (user) {
                setUserLogged(user);
            } else {
                alert('Credenciais inválidas!');
            }
        } else {
            if (password !== confirmPassword) {
                alert('As senhas não coincidem!');
                return;
            }
            
            const newDocRef = push(dbRef);
            await set(newDocRef, {
                email,
                password,
                admin: 0,
              })
        }
    };

    return (
        <div className="max-w-lg mx-auto bg-[#7f1d1d] p-8 rounded-lg shadow-lg mt-20">
            <h2 className="text-2xl font-bold text-white mb-4">{isLogin ? 'Login' : 'Registrar'}</h2>
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="mb-4">
                    <label className="block text-white mb-2">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-2 rounded bg-[#f87171] border-2 border-[#991b1b] focus:outline-none focus:ring-2 focus:ring-[#991b1b]"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-white mb-2">Senha:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full p-2 rounded bg-[#f87171] border-2 border-[#991b1b] focus:outline-none focus:ring-2 focus:ring-[#991b1b]"
                    />
                </div>
                {!isLogin && (
                    <div className="mb-4">
                        <label className="block text-white mb-2">Confirmar Senha:</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="w-full p-2 rounded bg-[#f87171] border-2 border-[#991b1b] focus:outline-none focus:ring-2 focus:ring-[#991b1b]"
                        />
                    </div>
                )}
                <button type="submit" className="w-full p-2 bg-[#991b1b] text-white rounded hover:bg-red">
                    {isLogin ? 'Entrar' : 'Registrar'}
                </button>
            </form>
            <div className="text-center">
                <button
                    onClick={handleToggle}
                    className="text-white underline focus:outline-none"
                >
                    {isLogin ? 'Não tem uma conta? Registrar' : 'Já tem uma conta? Login'}
                </button>
            </div>
        </div>
    );
}