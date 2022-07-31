import React from 'react';

const Collections = (props) => {
    return (
         
        <article className="coleccion">
        <a href="/products/colecciones/Heaven">

            <img src={props.image} alt="" />
        </a>
            
        <div className="coleccionNombre">
            <a href={props.link}>

                <h4 className="glitch">{props.name}</h4>
            </a>
        </div>
  
</article>
    );
}

export default Collections;
