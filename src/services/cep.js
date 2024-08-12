import { api } from "../shared/api";

export class CepService {
    static async getAddress(cep) {
        return api(`https://viacep.com.br/ws/${cep}/json/`).get();
    }
}