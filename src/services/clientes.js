import { http } from './config'

export default {
    listar:() => {
        return http.get('listar')
    },

    salvar:(cliente) => {
        return http.post('adicionar', cliente)
    },

    atualizar:(cliente) => {
        return http.put("atualizar/"+ cliente.id, cliente)
    },

    apagar:(cliente) => {
        return http.delete("excluir/"+ cliente.id, cliente)
    }
}