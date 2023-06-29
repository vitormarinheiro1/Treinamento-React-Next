interface BotoesProps {
    dec: (valor: number) => void
    inc: (valor: number) => void
}

export default function Botoes(props: BotoesProps){
    return(
        <div className="flex justify-between pt-2 gap-2 ">
            <button className="botao flex-1" onClick={() => props.dec(10)}>
                -10
            </button>
            <button className="botao flex-1" onClick={() => props.inc(20)}>
                +20
            </button>
        </div>
    )
}