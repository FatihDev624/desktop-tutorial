import React, { useState } from "react";

const Name = () => {

    const [name,setName] = useState({
        name:""
    })

   const abuzer = (event) =>{
        setName({...abuzer, [event.target.name]: event.target.value})
    }

    console.log(name);



    return(
        <div className="name">
            <input className="isim" type="text"  onChange={abuzer}/>
        </div>
    )
}

export default Name