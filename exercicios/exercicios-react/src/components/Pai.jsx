import React from 'react'
import FIlho from './Filho'
import Filho from './Filho'

export default props => {
    const notificarSaidaDoFilho =
        lugar => alert(`Liberado para ${lugar}`)

    return (
        <div>
            <Filho notificarSaida={ notificarSaidaDoFilho }/>
        </div>
    )
}