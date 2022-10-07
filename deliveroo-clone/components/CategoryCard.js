import { Text, Image, View, TouchableOpacity } from 'react-native';
import React from 'react';

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <View>
        <Image source={{ uri: imgUrl }} className="h-20 w-20 rounded" />
        <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
