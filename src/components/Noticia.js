import React from 'react';

const Noticia = ({noticia}) => {

    //Extraer datos 
    const { ulrToImage, url, title, description, source } = noticia;

    //Condicional si la img está disponible
    const imagen = (ulrToImage) ? 
        <div className="card-image">
            <img src={ulrToImage} alt={title}/>
            <span className="card-title">{source.name}</span>
        </div>

    : null;

    return ( 
        <div className="col s12 m6 l4">
            <div className="card">
                

                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>

                    <div className="card-action">
                        <a href={url} target="_blank" rel="noopener noreferrer" className="waves-effect waves-light btn">
                            Ver noticia
                        </a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Noticia;