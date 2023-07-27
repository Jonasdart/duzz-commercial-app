import { View, FlatList, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ItemCards from '../components/ItemCards';
import Loading from '../components/Loading';

const CashRegisterList = () => {
  const [cashRegisters, setCashRegisters] = useState([]);
  async function getCashRegisters() {
    setCashRegisters([]);
    const response = await axios.get('/cash-registers?isActive=1');
    setCashRegisters(response.data);
    console.log(cashRegisters);
  }

  useEffect(() => {
    getCashRegisters();
  }, []);

  return (
    <View>
      <TouchableOpacity
        style={{ alignSelf: 'flex-end', padding: 10 }}
        onPress={getCashRegisters}
      >
        <MaterialCommunityIcons
          name="cloud-refresh"
          size={24}
          color="#97cbfd"
        />
      </TouchableOpacity>
      <FlatList
        data={cashRegisters}
        renderItem={({ item }) => (
          <ItemCards
            title={item.name}
            subtitle={Number(item.isOpen) ? 'Aberto' : 'Fechado'}
            bodyTitle="Valor"
            bodyContent={`R$ ${item.currentValue}`}
          />
        )}
        ListEmptyComponent={<Loading />}
      />
    </View>
  );
};

export default CashRegisterList;
