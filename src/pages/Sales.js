import { View, FlatList, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ItemCards from '../components/ItemCards';
import Loading from '../components/Loading';

const Sales = () => {
  const [sales, setSales] = useState();
  async function getSales() {
    setSales([]);
    const response = await axios.get('/sales?isClosed=0');
    setSales(response.data);
  }

  useEffect(() => {
    getSales();
  }, []);

  return (
    <View>
      <TouchableOpacity
        style={{ alignSelf: 'flex-end', padding: 10 }}
        onPress={getSales}
      >
        <MaterialCommunityIcons
          name="cloud-refresh"
          size={24}
          color="#97cbfd"
        />
      </TouchableOpacity>
      <FlatList
        data={sales}
        renderItem={({ item }) => (
          <ItemCards
            title={`Venda nº${item.id}`}
            subtitle={`Aberta desde: ${item.moment}`}
            bodyTitle="Valor"
            bodyContent={`R$ ${item.value}`}
          />
        )}
        ListEmptyComponent={<Loading />}
      />
    </View>
  );
};

export default Sales;
