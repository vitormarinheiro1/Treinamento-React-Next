import Circulo from "../../components/basicos/Circulo";

export default function PaginaCirculos() {
    return (
        <div className="flex justify-around items-center h-screen">
            <Circulo texto="Círculo #1" quasePerfeito/>
            <Circulo texto="Círculo #2" />
            <Circulo texto="Círculo #3" />
        </div>    
    )
}