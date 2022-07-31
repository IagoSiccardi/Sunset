import React from 'react';
import Heaven from '../assets/images/heaven.jpeg'
import Hell from '../assets/images/hell.jpeg'
import Collections from './Collections';
import ProductCard from './ProductCard';
import './css/Home.css'
import './css/General.css'



const Home = () => {
    return (
        <main className='home'>
       
        <div className="banner"> 
            
            <div className="sunset">
                <span className="vesti">Vesti</span>
                <span className="sunsetSpan">SUNSET</span>
            </div>
            <div className="imagen">

            </div>
            <a className="bajar" href="#colecciones"><i className="fas fa-chevron-circle-down"></i></a>
            
         </div>
         

        <section className="colecciones" id="colecciones">

            <Collections 
            image={Heaven}
            link="/products/colecciones/Heaven"
            name= "Heaven"
            />

            <Collections 
            image={Hell}
            link="/products/colecciones/Hell"
            name= "Hell"
            />
                 
        </section>

        <h2 className="h2"> Productos mas vendidos</h2>


        <section className="Mas__vendidos">

        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />


        </section>
    </main>
    );
}

export default Home;
