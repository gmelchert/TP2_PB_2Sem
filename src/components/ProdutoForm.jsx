import { useState } from 'react';
import { ref, set, push } from 'firebase/database';
import { db } from '../shared/firebase';

export const ProdutoForm = () => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [unidade, setUnidade] = useState('');
  const [categoria, setCategoria] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const newDocRef = push(ref(db, 'produtos'));

      await set(newDocRef, {
        nome,
        descricao,
        unidade,
        categoria
      });

      alert('Produto cadastrado com sucesso!');
      
      setNome('');
      setDescricao('');
      setUnidade('');
      setCategoria('');
    } catch (error) {
      alert('Erro ao cadastrar produto: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-[#7f1d1d] p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-4">Cadastro de Produto</h2>
      <div className="mb-4">
        <label className="block text-white mb-2">Nome:</label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required className="w-full p-2 rounded bg-[#f87171] border-2 border-[#991b1b] focus:outline-none focus:ring-2 focus:ring-[#991b1b]" />
      </div>
      <div className="mb-4">
        <label className="block text-white mb-2">Descrição:</label>
        <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} required className="w-full p-2 rounded bg-[#f87171] border-2 border-[#991b1b] focus:outline-none focus:ring-2 focus:ring-[#991b1b]" />
      </div>
      <div className="mb-4">
        <label className="block text-white mb-2">Unidade:</label>
        <input type="text" value={unidade} onChange={(e) => setUnidade(e.target.value)} required className="w-full p-2 rounded bg-[#f87171] border-2 border-[#991b1b] focus:outline-none focus:ring-2 focus:ring-[#991b1b]" />
      </div>
      <div className="mb-4">
        <label className="block text-white mb-2">Categoria:</label>
        <input type="text" value={categoria} onChange={(e) => setCategoria(e.target.value)} required className="w-full p-2 rounded bg-[#f87171] border-2 border-[#991b1b] focus:outline-none focus:ring-2 focus:ring-[#991b1b]" />
      </div>
      <button type="submit" className="w-full p-2 bg-[#991b1b] text-white rounded hover:bg-red">Cadastrar</button>
    </form>
  );
};