import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { FornecedorForm } from './components/FornecedorForm';
import { ContatoForm } from './components/ContatoForm';
import { ProdutoForm } from './components/ProdutoForm';
import { CotacaoForm } from './components/CotacaoForm';
import { ConsultaCotacoes } from './components/ConsultaCotacoes';
import { Navigation } from './components/Navigation';

import { ListCotacoes } from './pages/ListCotacoes';

import './index.css';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-zinc-950 text-white">
        <header className="bg-[#7f1d1d] p-4 text-center text-2xl font-bold">
          Sistema de Compras
        </header>
        <Navigation />
        <div className="p-4">
          <Routes>
            <Route path="/cadastro-fornecedor" element={<FornecedorForm />} />
            <Route path="/cadastro-contato" element={<ContatoForm />} />
            <Route path="/cadastro-produto" element={<ProdutoForm />} />
            <Route path="/cadastro-cotacao" element={<CotacaoForm />} />
            <Route path="/consulta-cotacoes" element={<ConsultaCotacoes />} />
            <Route path="/listar-cotacoes" element={<ListCotacoes />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;