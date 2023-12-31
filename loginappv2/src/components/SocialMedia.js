/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const SocialMedia = ({onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../assets/SocialMediaIcons/google.png')}
        />
      </View>
    </Pressable>
  );
};

export default SocialMedia;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },

  image: {
    height: 60,
    width: 60,
  },
  textSocial: {
    fontSize: 20,
    color: 'gray',
    marginTop: 20,
    fontFamily: 'Audiowide-Regular',
  },
});
