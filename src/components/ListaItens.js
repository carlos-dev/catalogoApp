import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Itens from './Itens';
import axios from 'axios';

export default class ListaItens extends Component {

  constructor(props) {
    super(props);

    this.state = { listaItens: [] } 
  }

  componentWillMount() {
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
      .then((response) => { this.setState({listaItens: response.data}) })
      .catch(() => {console.log('error')})
  }

  render() {
      return (
        <ScrollView>
          { 
            this.state.listaItens.map((item) => {
              return  (
                <Itens  key={item.titulo} item={item} />
              )
            }) 
          }
        </ScrollView>
      );
  }
}

const styles = StyleSheet.create({
  
});
