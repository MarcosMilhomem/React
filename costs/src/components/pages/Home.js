import style from './Home.modules.css'
import savings from '../../../src/img/savings.svg'

function Home() {
    return (
        <section>
            <h1>
                Bem-vindo ao <span>Costs</span>
            </h1>
            <p>Comece a gerenciar os seus projetos agora mesmo</p>
            <a href="/">Criar Projeto</a>
            <img src={savings} alt ="Cos    ts" />
        </section>
    )
}
export default Home