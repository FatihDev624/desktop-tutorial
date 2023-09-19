import React, { useState } from "react";



const Home = () => {

    const [say,setSay] = useState({miktar : 0})

    const sayClick = () => {
        setSay({...say, miktar : say.miktar + 1})
    }

    return (
        <div className="container">
            <p>Saydır: {say.miktar}</p>
            <button onClick={sayClick}>Saydırmak İçin tıklayınız!</button>
        </div>
    )
}

export default Home
