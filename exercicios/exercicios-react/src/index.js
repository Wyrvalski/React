import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponente from './components/PrimeiroComponente'
// import MultiElementos from './components/MultiElementos'
// import FamiliaSilva from './components/FamiliaSilva'
// 
// import { CompA, CompB } from './components/DosComponentes'
// import Familia from './components/familia'
// import Membro from './components/Membro'
// import ComponenteComFuncao from'./components/ComponenteComFuncao'
//  import Pai from './components/Pai'
// import ComponenteClasse from './components/ComponenteClasse'
// import Contador from './components/Contador'
import Hook from './components/Hook'

const element = document.getElementById('root')

ReactDOM.render(
    <div>
        <Hook />
        {/* <Contador numero={10}/> */}
        {/* <ComponenteClasse valor="Teste Classe"/> */}
        {/* <Pai/> */}
        {/* <Familia sobrenome="Silva">
            <Membro nome="Andre"/> 
            <Membro nome="Julia"/> 
        </Familia> */}
        {/* <FamiliaSilva/> */}
        {/* <MultiElementos /> */}
        {/* <CompA valor="Componente A" />
        <CompB valor="Componente B" /> */}

    </div>
    , element)