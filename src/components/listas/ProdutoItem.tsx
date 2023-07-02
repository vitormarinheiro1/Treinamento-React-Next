import Image from "next/image"
import Produto from "../model/Produto"
import { IconShoppingCart } from "@tabler/icons-react"
import Moeda from "../utils/Moeda"


interface ProdutoItemProps {
    produto: Produto
    comprar: (produto: Produto) => void
}

export default function ProdutoItem(props: ProdutoItemProps){
    const { produto } = props
    return (
        <div className={`
            flex flex-col rounded-md
            border border-zinc-600
            p-1
        `}>
            <Image 
                src={produto.imagem} 
                width={300} height={200}
                alt="Imagem do produto" 
                className="rounded-md"
            />
            <div className="flex flex-col p-3 gap-3">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-black">{produto.nome}</div>
                    <div className="text-green-500 font-bold">{Moeda.formatar(produto.preco)}</div>
                </div>
                <div>
                    <div className="text-gray-500">{produto.descricao}</div>
                </div>
                <div>
                    <button className="botao flex w-full justify-center gap-2"
                        onClick={() => props.comprar(produto)}>
                        <IconShoppingCart/>Comprar
                    </button>
                </div>
            </div>
        </div>
    )
}