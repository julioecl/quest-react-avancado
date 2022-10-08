import { BrowserRouter, Route, Routes } from "react-router-dom"
import PokemonDetails from "../components/pokemon-details"
import PokemonPage from "../components/pokemon-page"


const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<PokemonPage/>}/>
                <Route exact path='/pokemon/:id/' element={<PokemonDetails/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }

