import React, {Component, Fragment} from 'react';
import Header from './components/Header';

class App extends Component {
  state = { 
    noticias: []
  }

  componentDidMount(){
    this.consultarNoticias();
  }

  consultarNoticias = async () => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e9b15662f8774dab949b75fe0b41fd79';

    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    this.setState({
      noticias : noticias.articles
    })
  }


  render (){
    return (
      <Fragment>
        <Header 
          titulo = 'Noticias React API '
        />

        <div className="container white contenedor-noticias">

        </div>
      </Fragment>
    )
  }
}

export default App;
