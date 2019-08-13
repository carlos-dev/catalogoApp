import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default class Itens extends Component {

  render() {
      return (
          <View style={styles.item}>
            <View>
                <Image style={{height: 100, width: 110, marginRight: 13}} source={{uri: this.props.item.foto}}/>
            </View>
            
            <View>
                <Text style={styles.textItem}>{this.props.item.titulo}</Text>
                <Text>{this.props.item.valor}</Text>
            </View>
          </View>
      );
  }
}

const styles = StyleSheet.create({
  item: {
    margin: 10,
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#999',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textItem: {
    fontSize: 20,
  }
});
