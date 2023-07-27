import { View, FlatList, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ItemCards from '../components/ItemCards';
import Loading from '../components/Loading';

const BillsToPay = () => {
  const [billsToPay, setBillsToPay] = useState();
  async function getBillsToPay() {
    setBillsToPay([]);
    const response = await axios.get('/bills-to-pay?paid=0');
    setBillsToPay(response.data);
  }

  useEffect(() => {
    getBillsToPay();
  }, []);

  return (
    <View>
      <TouchableOpacity
        style={{ alignSelf: 'flex-end', padding: 10 }}
        onPress={getBillsToPay}
      >
        <MaterialCommunityIcons
          name="cloud-refresh"
          size={24}
          color="#97cbfd"
        />
      </TouchableOpacity>
      <FlatList
        data={billsToPay}
        renderItem={({ item }) => (
          <ItemCards
            title={item.name}
            subtitle={`Vencimento: ${
              item.dueDate ? item.dueDate : 'sem data registrada'
            }`}
            bodyTitle={`Valor pago: R$ ${item.valuePaid}`}
            bodyContent={`Valor total: R$ ${item.value}`}
          />
        )}
        ListEmptyComponent={<Loading />}
      />
    </View>
  );
};

export default BillsToPay;
