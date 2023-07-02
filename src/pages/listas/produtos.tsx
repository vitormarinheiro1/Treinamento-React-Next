import produtos from "@/components/constants/produtos";
import Carrinho from "@/components/listas/Carrinho";
import ListaProdutos from "@/components/listas/ListaProdutos";
import ProdutoItem from "@/components/listas/ProdutoItem";
import ItemCarrinho from "@/components/model/ItemCarrinho";
import Produto from "@/components/model/Produto";
import { useState } from "react";

export default function PaginaProdutos() {
    // const produto = produtos[0]

    function adicionarProduto(produto: Produto) {
        const itemAtual = itens.find((item) => item.produto.id === produto.id) ?? { quantidade: 0, produto }
        const novoItem = {...itemAtual, quantidade: itemAtual.quantidade + 1}
        const outrosItens = itens.filter((item) => item.produto.id !== produto.id)
        setItens([...outrosItens, novoItem])
    }

    const [itens, setItens] = useState<ItemCarrinho[]>([])

    return (
        <div className={`
        flex flex-col gap-10 justify-center items-center h-screen
        `}>
            <Carrinho itens={itens} />
            <ListaProdutos produtos={produtos} comprar={adicionarProduto} />
        </div>    
    )
}