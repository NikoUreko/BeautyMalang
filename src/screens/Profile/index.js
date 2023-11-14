import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://images.wallpapersden.com/image/download/jett-neon-and-sage-valorant-4k_bWZraGqUmZqaraWkpJRmamhrrWdmamc.jpg',
        }}
        style={styles.profileImage}
      />
      <Text style={styles.username}>Ureko</Text>
      <Text style={styles.location}>Lokasi TerFavorit: Alun Alun Batu</Text>
      <Text style={styles.bio}>Be Yourself</Text>
      <View style={styles.reviews}>
        <Text style={styles.reviewTitle}>Ulasan Terakhir:</Text>
        <Text style={styles.reviewText}>"Pengalaman hebat di tempat wisata ini. Saya sangat menikmatinya!"</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  location: {
    fontSize: 16,
    marginBottom: 5,
  },
  bio: {
    fontSize: 16,
    marginBottom: 20,
  },
  reviews: {
    width: '80%',
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
  },
  reviewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  reviewText: {
    fontSize: 16,
  },
});

export default Profile;