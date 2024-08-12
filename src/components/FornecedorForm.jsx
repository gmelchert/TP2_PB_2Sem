import { useState } from 'react';
import { ref, set, push } from 'firebase/database';
import { db } from '../shared/firebase';
import { CepService } from '../services';

export const FornecedorForm = () => {
  const [nome, setNome] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [cep, setCep] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const endereco = await CepService.getAddress(cep);
      const newDocRef = push(ref(db, 'fornecedores'));

      await set(newDocRef, {
        nome,
        cnpj,
        endereco,
        telefone,
        email
      });
      
      alert('Fornecedor cadastrado com sucesso!');
      setNome('');
      setCnpj('');
      setCep('');
      setTelefone('');
      setEmail('');
    } catch (error) {
      alert('Erro ao cadastrar fornecedor: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-[#7f1d1d] p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-4">Cadastro de Fornecedor</h2>
      <div className="mb-4">
        <label className="block text-white mb-2">Nome:</label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required className="w-full p-2 rounded bg-[#f87171] border-2 border-[#991b1b] focus:outline-none focus:ring-2 focus:ring-[#991b1b]" />
      </div>
      <div className="mb-4">
        <label className="block text-white mb-2">CNPJ:</label>
        <input type="text" value={cnpj} onChange={(e) => setCnpj(e.target.value)} required className="w-full p-2 rounded bg-[#f87171] border-2 border-[#991b1b] focus:outline-none focus:ring-2 focus:ring-[#991b1b]" />
      </div>
      <div className="mb-4">
        <label className="block text-white mb-2">CEP:</label>
        <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} required className="w-full p-2 rounded bg-[#f87171] border-2 border-[#991b1b] focus:outline-none focus:ring-2 focus:ring-[#991b1b]" />
      </div>
      <div className="mb-4">
        <label className="block text-white mb-2">Telefone:</label>
        <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} required className="w-full p-2 rounded bg-[#f87171] border-2 border-[#991b1b] focus:outline-none focus:ring-2 focus:ring-[#991b1b]" />
      </div>
      <div className="mb-4">
        <label className="block text-white mb-2">Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full p-2 rounded bg-[#f87171] border-2 border-[#991b1b] focus:outline-none focus:ring-2 focus:ring-[#991b1b]" />
      </div>
      <button type="submit" className="w-full p-2 bg-[#991b1b] text-white rounded hover:bg-red">Cadastrar</button>
    </form>
  );
};