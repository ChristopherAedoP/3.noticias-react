import React , { Component ,Fragment } from 'react';
import Header from './Components/Header';
import ListaNoticias from './Components/ListaNoticias';
import Formulario from './Components/Formulario';


class App extends Component {
  state = { 
    noticias : []
   }

  componentDidMount(){
    this.consultarNoticias();
  }
  
  consultarNoticias = async (categoria = 'general') => {
        const URL = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=eec4ab4338d441cca3b3ec940f19fc20`;


        const respuesta = await fetch(URL);
        const noticias = await respuesta.json();

        this.setState({
          noticias: noticias.articles
        })
  }  
  
  render() { 
    return ( 
      <Fragment>
        <Header titulo= "Noticias React API" />
        <div className="containner white contenedor-noticias" >
          <Formulario consultarNoticias={this.consultarNoticias}/>
          
          <ListaNoticias 
           
            noticias={this.state.noticias}/>
        </div>
      </Fragment>
     );
  } 
}
 
export default App;
