import { get, ref } from "firebase/database";
import { useEffect, useState } from "react"
import { db } from "../shared/firebase";
import { Link } from "react-router-dom";

export const ListCotacoes = () => {
  const [cotacoesList, setCotacoesList] = useState([]);

  const fetchData = async () => {
    const dbRef = ref(db, 'cotacoes');
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      setCotacoesList(Object.values(snapshot.val()));
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <div className='mb-8'>
        <Link
          to="/cadastro-cotacao"
          className="p-2 px-4 bg-[#991b1b] text-white
          rounded hover:bg-red"
        >Voltar</Link>
      </div>
    
      <div
        className="container p-4 mx-auto rounded
        flex flex-col gap-4"
      >
        <div
          className="rounded grid p-2 bg-[#7f1d1d]
          grid-cols-4 text-white text-center"
        >
          <span>ID Produto</span>
          <span>ID Fornecedor</span>
          <span>Preço</span>
          <span>Data</span>
        </div>
        {cotacoesList.map(({
          data,
          fornecedorId,
          preco,
          produtoId,
        }, i) => (
          <div
            style={{
              backgroundColor: i % 2 !== 0 ? '#7f1d1d' : '#141418'
            }}
            className="rounded grid p-2
            grid-cols-4 text-center"
          >
            <span
              className="font-bold text-white"
            >{produtoId}</span>
            <span
              className="text-gray-200"
            >
              {fornecedorId}
            </span>
            <span
              className="text-gray-200"
            >
              {preco}
            </span>
            <span
              className="text-gray-200"
            >
              {data}
            </span>
          </div>
        ))}
      </div>
    </>
  )
}