import { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { FornecedorForm } from './components/FornecedorForm';
import { ContatoForm } from './components/ContatoForm';
import { ProdutoForm } from './components/ProdutoForm';
import { CotacaoForm } from './components/CotacaoForm';
import { ConsultaCotacoes } from './components/ConsultaCotacoes';
import { Navigation } from './components/Navigation';

import { ListCotacoes } from './pages/ListCotacoes';
import { Login } from './pages/Login';

import './index.css';

export const UserContext = createContext();

const App = () => {
  const [userLogged, setUserLogged] = useState(null);
  
  return (
    <Router>
      <div className="min-h-screen bg-zinc-950 text-white">
        <header className="bg-[#7f1d1d] p-4 text-center text-2xl font-bold">
          Sistema de Compras
        </header>
        {userLogged && <Navigation />}
        <div className="p-4">
          <UserContext.Provider value={{ userLogged, setUserLogged }}>
            <Routes>
              {
                !userLogged
                  ? <Route path="/" element={<Login />} />
                  : (<>
                    <Route path="/cadastro-fornecedor" element={<FornecedorForm />} />
                    <Route path="/cadastro-contato" element={<ContatoForm />} />
                    <Route path="/cadastro-produto" element={<ProdutoForm />} />
                    <Route path="/cadastro-cotacao" element={<CotacaoForm />} />
                    <Route path="/consulta-cotacoes" element={<ConsultaCotacoes />} />
                    <Route path="/listar-cotacoes" element={<ListCotacoes />} />
                  </>)
              }
            </Routes>
          </UserContext.Provider>
        </div>
      </div>
    </Router>
  );
};

export default App;