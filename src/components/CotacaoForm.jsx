import { useState } from 'react';
import { ref, set, push } from 'firebase/database';
import { db } from '../shared/firebase';
import { Link } from 'react-router-dom';

export const CotacaoForm = () => {
  const [produtoId, setProdutoId] = useState('');
  const [fornecedorId, setFornecedorId] = useState('');
  const [data, setData] = useState('');
  const [preco, setPreco] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newDocRef = push(ref(db, 'cotacoes'));
      await set(newDocRef, {
        produtoId,
        fornecedorId,
        data,
        preco
      })
      
      alert('Cotação cadastrada com sucesso!');
      setProdutoId('');
      setFornecedorId('');
      setData('');
      setPreco('');
    } catch (error) {
      alert('Erro ao cadastrar cotação: ' + error.message);
    }
  };

  return (
    <>
      <div className='text-right mb-8'>
        <Link
          to="/listar-cotacoes"
          className="p-2 bg-[#991b1b] text-white
          rounded hover:bg-red"
        >Lista de cotações</Link>
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-[#7f1d1d]
        p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold text-white mb-4">
          Cadastro de Cotação
        </h2>

        <div className="mb-4">
          <label className="block text-white mb-2">ID do Produto:</label>
          <input
            type="text"
            value={produtoId}
            onChange={(e) => setProdutoId(+e.target.value)}
            required
            className="w-full p-2 rounded bg-[#f87171] border-2
            border-[#991b1b] focus:outline-none focus:ring-2 focus:ring-[#991b1b]"
          />
        </div>

        <div className="mb-4">
          <label className="block text-white mb-2">ID do Fornecedor:</label>
          <input
            type="text"
            value={fornecedorId}
            onChange={(e) => setFornecedorId(+e.target.value)}
            required
            className="w-full p-2 rounded bg-[#f87171] border-2 
            border-[#991b1b] focus:outline-none focus:ring-2 focus:ring-[#991b1b]"
          />
        </div>

        <div className="mb-4">
          <label className="block text-white mb-2">Data da Cotação:</label>
          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
            className="w-full p-2 rounded bg-[#f87171] border-2 
            border-[#991b1b] focus:outline-none focus:ring-2 focus:ring-[#991b1b]"
          />
        </div>

        <div className="mb-4">
          <label className="block text-white mb-2">Preço:</label>
          <input
            type="text"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            required
            className="w-full p-2 rounded bg-[#f87171] border-2 border-[#991b1b]
            focus:outline-none focus:ring-2 focus:ring-[#991b1b]"
          />
        </div>
        
        <button
          type="submit"
          className="w-full p-2 bg-[#991b1b] text-white
          rounded hover:bg-red"
        >Cadastrar</button>
      </form>
    </>
  );
};