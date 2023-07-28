import { View, Text, Dimensions, Image, StyleSheet } from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get('window');

interface ProfileCardProps {
  colors: any; // Replace 'any' with the appropriate type for the 'colors' prop
  t: (key: string) => string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ colors, t }) => {
  return (
    <View style={{ backgroundColor: colors.bottomBarBackground }}>
      <View style={styles.cardContainer}>
        <View>
          <Text style={[styles.nameText,{color:colors.bottomBarIcon}]}>{t('welcome:profile_name')}</Text>
          <Text style={{color:colors.bottomBarIcon}}>{t('welcome:profile_email')}</Text>
          <Text style={{color:colors.bottomBarIcon}}>{t('welcome:profile_phone')}</Text>
        </View>
        <Image
          source={require('../assets/images/frame.png')}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    paddingVertical: 20,
  },
  nameText: {
    fontSize: 15,
    fontWeight: '700',
  },
  emailText: {},
  phoneText: {},
  image:{
    width: 60, height: 60, backgroundColor: 'black'
  }
});

export default ProfileCard;
