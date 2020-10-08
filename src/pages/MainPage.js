import React from 'react';
import { FlatList, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/MaterialIcons"

const MainPage = () => {
  const navigation = useNavigation();
  function handleNavigateToBook(){
    navigation.navigate('Book');
  }

  const data = [
    {
      id: "1",
      title: "Código Limpo",
      anotations: "Livro muito bom!",
      read: false,
      photo: null,
    },
    {
      id: "2",
      title: "C Completo e total",
      anotations: "Livro muito bom!",
      read: false,
      photo: null,
    },
    {
      id: "3",
      title: "A Biblia do PHP",
      anotations: "Livro muito bom!",
      read: false,
      photo: null,
    }
  ]
  return(
    <View style={styles.container}>
      <View style={styles.toolbox}>
        <Text style={styles.header}>Lista de Leitura </Text>
        <TouchableOpacity 
          style={styles.toolboxButton}
          onPress={handleNavigateToBook}  
        >
          
          <Icon name="add" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
      <FlatList 
        data={data}   
        keyExtractor={item => item.id} 
        renderItem={({item}) => (
          <TouchableOpacity style={styles.itemButton}>
            <Text style={styles.itemText}>{item.title}</Text>
          </TouchableOpacity>
        )} 
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    padding: 10
  },
  toolbox: {
    flexDirection: "row",
    marginVertical: 10,
  },
  header: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 22,
    color: '#3498db'
  },
  toolboxButton: {
    backgroundColor: '#3498db',
    borderRadius: 50,
    width: 30,
    height:30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemButton: {

  },
  itemText: {
    fontSize: 22
  }
})

export default MainPage;