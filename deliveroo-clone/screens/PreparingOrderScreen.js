import { SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import * as Aniamatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery');
    }, 4000);
  }, []);

  return (
    <SafeAreaView className="bg-[#4fc6fc] flex-1 justify-center items-center">
      <Aniamatable.Image
        source={require('../assets/preparing.gif')}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />
      <Aniamatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-black font-bold text-center">
        Waiting for Restaurant to accept your order!
      </Aniamatable.Text>

      <Progress.Circle size={60} indeterminate color="black" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
