import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

const Favorites = () => {
  const favoriteDestinations = [
    {
      id: '1',
      name: 'Pantai Balekambang',
      image: { uri: 'https://i.pinimg.com/originals/66/74/d0/6674d0e3fdf9c3b7a529e414ab8ccb7e.jpg' },
      description: 'Pantai Balekambang adalah pantai di Malang yang begitu ramai dan sejuk',
    },
    {
      id: '2',
      name: 'Alun Alun Batu',
      image: { uri: 'https://1.bp.blogspot.com/-Zkxld9TtD_g/Vsla-90yAJI/AAAAAAAACn8/MIOXM3jG6fQ/s1600/Alun-alun-Batu_-_feryarifian-3.2.jpg' },
      description: 'Alun Alun adalah Destinasi tempat santai keluarga yang sangat indah',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Destinasi Favorit</Text>
      <FlatList
        data={favoriteDestinations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.destinationCard}>
            <Image source={item.image} style={styles.destinationImage} />
            <Text style={styles.destinationName}>{item.name}</Text>
            <Text style={styles.destinationDescription}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  destinationCard: {
    marginBottom: 20,
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
  },
  destinationImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  destinationName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  destinationDescription: {
    fontSize: 16,
  },
});

export default Favorites;
