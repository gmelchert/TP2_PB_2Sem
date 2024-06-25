import { Link } from "react-router-dom";

export const Navigation = () => {
    return (
        <nav className="bg-[#7f1d1d] p-4 mb-4">
          <ul className="grid grid-cols-2 md:grid-cols-5 gap-2">
            <li>
              <Link to="/cadastro-fornecedor" className="text-[#f87171] hover:text-red">Cadastro de Fornecedor</Link>
            </li>
            <li>
              <Link to="/cadastro-contato" className="text-[#f87171] hover:text-red">Cadastro de Contato</Link>
            </li>
            <li>
              <Link to="/cadastro-produto" className="text-[#f87171] hover:text-red">Cadastro de Produto</Link>
            </li>
            <li>
              <Link to="/cadastro-cotacao" className="text-[#f87171] hover:text-red">Cadastro de Cotação</Link>
            </li>
            <li>
              <Link to="/consulta-cotacoes" className="text-[#f87171] hover:text-red">Consulta de Cotações</Link>
            </li>
          </ul>
        </nav>
      );
}