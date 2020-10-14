import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { IStorage } from '../interfaces/IStorage';

const StorageService: IStorage = {

  save: (key: string, data: any) => {
    AsyncStorage.setItem( key, JSON.stringify(data) )
  },

  getItens: async (key: string) =>{
    let itens = [];
    await AsyncStorage.getItem(key).then(data => {
      itens = JSON.parse(data) || [];
    })
    return itens;
  },

  editItem: (key: string) =>{
    
  },

  deleteItem: (key: string) => {
  }

}

export default StorageService;