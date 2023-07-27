import { View, Text } from 'react-native';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import tw from 'twrnc';

const Loading = () => {
  return <ActivityIndicator size={24} style={tw`text-blue-700`} />;
};

export default Loading;
