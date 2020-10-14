import React, {useState, useEffect} from 'react';
import { FlatList, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/MaterialIcons"
import StorageService from '../sevices/StorageService';

const MainPage = () => {
  const navigation = useNavigation();
  function handleNavigateToBook(){
    navigation.navigate('Book');
  }

  const onBookEdit = (bookId) => {
    const book = books.find(item => item.id === bookId);
    navigation.navigate('Book', {book: book, isEdit: true})
  }

  const onBookDelete = async (bookId) => {
    const newBook = books.filter(item => item.id !== bookId);
    await StorageService.save('books', newBook);
    setBooks(newBook);
  }

  const onBookRead = async(bookId) =>{
    const newBooks = books.map(item => {
      if(item.id === bookId) {
        item.read = !item.read;
      }
      return item;
    })
    await StorageService.save('books', newBooks);
    setBooks(newBooks);
  }

  const [books, setBooks] = useState([])

  useEffect(()=> {
   StorageService.getItens('books').then(data => {
     setBooks(data)
   })
  }, []);
  
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
        data={books}   
        keyExtractor={item => item.id} 
        renderItem={({item}) => (
          <View style={styles.itemGroup}>
            <TouchableOpacity 
              style={styles.itemButton}
              onPress={() =>onBookRead(item.id)}
              >
              <Icon name="book" size={30} color="#fff" />
              <Text style={[styles.itemText, item.read ? styles.itemRead : null]}>{item.title}</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.iconEndButton}
              onPress={() =>onBookEdit(item.id)}
              >
              <Icon name="edit" size={30} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.iconEndButton}
              onPress={() =>onBookDelete(item.id)}
              >
              <Icon name="delete" size={30} color="#e74c3c" />
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
    marginRight: 5,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: '#fff',
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderRadius: 10
  },
  itemText: {
    textShadowColor: '#000',
    fontSize: 22,
    color: '#fff',
    marginBottom: 5,
  },
  itemRead: {
    textDecorationLine: 'line-through',
    color: '#95a5a6'
  },
  itemGroup: {
    flexDirection: 'row',
    marginBottom: 10
  },
  iconEndButton: {
    borderColor:'#fff',
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 10,
  }
})

export default MainPage;
