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
          <View style={styles.itemGroup}>
            <TouchableOpacity style={styles.itemButton}>
              <Icon name="book" size={30} color="#fff" />
              <Text style={styles.itemText}>{item.title}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconEndButton}>
              <Icon name="edit" size={30} color="#fff" />
            </TouchableOpacity>
          </View>
        )} 
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  toolbox: {
    flexDirection: "row",
    marginVertical: 10,
    marginBottom:30
  },
  header: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 22,
    color: '#0097e6'
  },
  toolboxButton: {
    backgroundColor: '#0097e6',
    borderRadius: 50,
    width: 30,
    height:30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemButton: {
    flexDirection: 'row',
    flex: 6,
    backgroundColor: '#7f8fa6',
    marginRight: 5,
    paddingLeft: 5,
    borderRadius: 10
  },
  itemText: {
    textShadowColor: '#000',
    fontSize: 22,
    color: '#fff',
    marginBottom: 5,
  },
  itemGroup: {
    flexDirection: 'row',
    marginBottom: 10
  },
  iconEndButton: {
   backgroundColor: '#0097e6',
   borderRadius: 10
  }
})

export default MainPage;