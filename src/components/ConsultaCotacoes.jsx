import { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../shared/firebase';

export const ConsultaCotacoes = () => {
  const [produtoId, setProdutoId] = useState('');
  const [cotacoes, setCotacoes] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    const q = query(collection(db, 'cotacoes'), where('produtoId', '==', produtoId));
    const querySnapshot = await getDocs(q);
    const cotacoesList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setCotacoes(cotacoesList);
  };

  return (
    <div className="max-w-lg mx-auto bg-[#7f1d1d] p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-4">Consulta de Cotações</h2>
      <form onSubmit={handleSearch} className="mb-4">
        <div className="mb-4">
          <label className="block text-white mb-2">ID do Produto:</label>
          <input type="text" value={produtoId} onChange={(e) => setProdutoId(e.target.value)} required className="w-full p-2 rounded bg-[#f87171] border-2 border-[#991b1b] focus:outline-none focus:ring-2 focus:ring-[#991b1b]" />
        </div>
        <button type="submit" className="w-full p-2 bg-[#991b1b] text-white rounded hover:bg-red">Buscar</button>
      </form>
      <div>
        {cotacoes.length > 0 ? (
          <ul>
            {cotacoes.map(cotacao => (
              <li key={cotacao.id} className="p-2 bg-[#f87171] my-2 rounded border-2 border-[#991b1b]">
                <p className="text-black"><strong>Fornecedor ID:</strong> {cotacao.fornecedorId}</p>
                <p className="text-black"><strong>Data:</strong> {cotacao.data}</p>
                <p className="text-black"><strong>Preço:</strong> {cotacao.preco}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-white">Nenhuma cotação encontrada para o ID do produto fornecido.</p>
        )}
      </div>
    </div>
  );
};