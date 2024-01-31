import NavBar from "./components/NavBar";
import Resumo from "./components/Resumo";
import TopCharts from "./components/TopCharts";
import Rodape from "./components/Rodape";

export default function Home() {
    return (
        <>
            <NavBar/>
            <Resumo />
            <TopCharts />
            <Rodape />
        </>
    );
}