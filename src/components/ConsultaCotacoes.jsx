import { useState } from 'react';
import { get, equalTo, query, ref, orderByChild } from 'firebase/database';
import { db } from '../shared/firebase';

export const ConsultaCotacoes = () => {
  const [produtoId, setProdutoId] = useState('');
  const [cotacoes, setCotacoes] = useState([]);

  const docRef = ref(db, 'cotacoes');

  const handleSearch = async (event) => {
    event.preventDefault();

    const dbQuery = query(docRef, orderByChild('produtoId'), equalTo(+produtoId));
    const snapshot = await get(dbQuery);

    if (snapshot.exists()) {
      setCotacoes(Object.values(snapshot.val()));
    } else {
      setCotacoes([]);
    }
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
            {cotacoes.map((cotacao, i) => (
              <li key={`cotacao-${i}`} className="p-2 bg-[#f87171] my-2 rounded border-2 border-[#991b1b]">
                <p className="text-black"><strong>Fornecedor ID:</strong> {cotacao.fornecedorId}</p>
                <p className="text-black"><strong>Data:</strong> {cotacao.data}</p>
                <p className="text-black"><strong>Preço:</strong> {cotacao.preco}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-white">Nenhuma cotação encontrada.</p>
        )}
      </div>
    </div>
  );
};