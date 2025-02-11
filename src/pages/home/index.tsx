import { Container } from "../../components/container";

export function Home() {
    return (
        <Container>
            <section className="bg-white p-4 rounded-lg w-full max-w-3xl mx-auto flex items-center justify-center gap-2">
                <input type="text" placeholder="Digite o nome do carro" className="w-full border-2 rounded-lg h-9 px-3 outline-none" />
                <button className="bg-red-500 h-9 px-8 rounded-lg text-white font-medium text-lg">Buscar</button>
            </section>
            <h1 className="font-bold text-center mt-6 text-2xl mb-4">Carros novos e usados em todo o Brasil</h1>

            <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                
                <div className="w-full bg-white rounded-lg">
                    <img src="https://cdn.impel.io/swipetospin-viewers/bonsuccesso/qwr6g64/20241220212941.WSKYT23N/closeups/cu-0.jpg" alt="foto do carro" className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-all" />
                    <p className="font-bold mt-1 mb-2 px-2">ONIX HATCH</p>
                    <div className="flex flex-col px-2">
                        <span className="text-zinc-700 mb-6">Ano 2016/2016 | 23000 km</span>
                        <strong className="text-black font-medium">R$ 190.000</strong>
                    </div>
                    <div className="w-full h-px bg-slate-200 my-2"></div>
                    <div className="px-2 pb-2">
                        <span className="text-zinc-700">Lauro de Freitas - BA</span>
                    </div>
                </div>
                
            </section>
        </Container>
    )
}