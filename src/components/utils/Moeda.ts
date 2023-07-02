export default class Moeda {
    static formatar(valor: number) {
        return new Intl.NumberFormat('pr-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(valor)
    }
}