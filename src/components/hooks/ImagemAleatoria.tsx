export default function ImagemAleatoria(){

    const url = 'https://source.unsplash.com/featured/300x300'

    let pesquisa: string = ''

    function renderizarBotao() {
        return (
            <button className={`
                bg-blue-500 px-4 py-2 rounded-md
            `}>
                Botão
            </button>    
        )
    }

    return (
        <div>
            {renderizarBotao()}
        </div>
        )
}