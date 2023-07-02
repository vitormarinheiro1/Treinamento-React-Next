import { IconCircleX } from "@tabler/icons-react";

export default function CarrinhoVazio() {
    return (
        <div className="flex justify-center gap-3 text-zinc-400">
        <IconCircleX />
        <span>Nenhum item no carrinho</span>
    </div>    
    )
}