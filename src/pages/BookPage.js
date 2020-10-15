import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Modal } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Constants from 'expo-constants';

import Icon from "react-native-vector-icons/MaterialIcons"

import StorageService from '../sevices/StorageService';
import Camera from '../components/Camera';
import Photo from '../components/Photo';

const BookPage = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const book = (route.params !== undefined && route.params['book'] !== undefined)
      ? route.params['book'] 
      : {
        title: '',
        anotations: '',
        read: false,
        photo: null
      }
  
  const isEdit = (route.params !== undefined && route.params['isEdit'] !== undefined)
      ? route.params['isEdit'] : false 

  const [books, setBooks] = useState([])
  const [title, setTitle] = useState(book.title);
  const [anotations, setAnotations]  = useState(book.anotations);
  const [read, setRead]  = useState(book.read);
  const [photo, setPhoto] = useState(book.photo);
  const [isModalVisible, setIsModalVisible] = useState(false);   

  useEffect(() => {   
    StorageService.getItens('books').then(data => {
      setBooks(data)
    })
  }, [])

  const isValid = () => {
    if((title !== null) && (title !== '')) {
      return true;
    }
    return false;
  }

  const onSave = async() => {
    if(isValid()) {
      if(isEdit) {
        let newBooks = books;

        newBooks.map(item => {
          if(item.id === book.id) {
            item.title = title;
            item.anotations = anotations;
            item.read = read;
            item.photo = photo;
          }
          return item;
        })
        await StorageService.save('books', newBooks);
      }else {
        const id = ((Math.random())*100) .toString();
        const data = {
          id,
          title,
          anotations,
          photo,
        }
        books.push(data)
        await StorageService.save('books', books)
      }
      navigation.goBack();
    } else {
      alert('Dados inválidos')
    }
  }

  const onCloseModal = async () =>{
    await onSave();
    setIsModalVisible(false);
  }

  const onChagePhoto = (newPhoto) => {
    setPhoto(newPhoto);
  }

  const handleNavigateBack = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Inclua seu novo livro...</Text>
      <TextInput style={styles.input}
        placeholder="Titulo"
        value={title}
        onChangeText={(text) => {
          setTitle(text)
        }}
      />
      <TextInput style={styles.input}
        placeholder="Descrição"
        multiline={true}
        numberOfLines={4}
        value={anotations}
        onChangeText={(text) => {
          setAnotations(text)
        }}
      />
      <TouchableOpacity 
        style={styles.cameraButton}
        onPress={()=> {
          setIsModalVisible(true);
        }}
        >
        <Icon name="photo-camera" size={30} color="#fff" />
      </TouchableOpacity>
      <View style={styles.optionsButtons}>
        <TouchableOpacity style={[styles.defaultButton, styles.cancelButton]} onPress={handleNavigateBack}>
          <Icon name="block" size={30} color="#fff" />
          <Text style={styles.textButton}>Cancelar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.defaultButton, styles.saveButton, (!isValid())? styles.saveButtonInvalid : null]} 
          onPress={onSave}
          >
          <Icon name="done" size={30} color="#fff" />
          <Text style={styles.textButton}>{isEdit ? "Atualizar" : "Cadastrar"}</Text>
        </TouchableOpacity>
      </View>  
      <Modal 
        animationType="slide"
        visible={isModalVisible}
      >
        {
          photo 
            ? (<Photo 
                photo={photo}
                onDeletePhoto={ onChagePhoto }
                onClosePicture={ onCloseModal }
                ></Photo>)
            : (<Camera 
                onCloseCamera={()=> setIsModalVisible(false)}
                onTakePicture= {onChagePhoto}
                ></Camera>) 
        }

      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: Constants.statusBarHeight,
    marginTop: 10,
  },
  pageTitle: {
    textAlign: 'center',
    color: '#0097e6',
    fontSize: 22,
    marginBottom: 20
  },
  input: {
    fontSize: 22,
    color: '#fff',
    borderColor: 'transparent',
    borderBottomColor: '#f39c12',
    borderWidth: 1,
    marginBottom: 10
  },
  cameraButton: {
    backgroundColor: '#f39c12',
    borderRadius: 50,
    width: 60,
    height:60,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 30,
  },
  optionsButtons: {
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  defaultButton: {
    borderRadius: 8,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor:'#44bd32',
  },
  saveButtonInvalid: {
    backgroundColor:'#552255',
    opacity: 0.5
  },  
  textButton: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor:'#f39c12',
  },
})
export default BookPage;
