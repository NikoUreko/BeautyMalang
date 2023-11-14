import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/R.56e7548ac7b3293c01fe72201d69bfec?rik=HhxRQePbjzeKVQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_67908.png&ehk=vFzOSFKP0zBbvgWLdTN9ShcmAk1WwOqKvWuM2SB5I3I%3d&risl=&pid=ImgRaw&r=0',
          }}
          style={styles.headerIcon}
          />
        <Text style={styles.headerText}>BeautyMalang</Text>
      </View>

      <View style={styles.desrtination}>
        <Image
          source={{
            uri: 'https://1.bp.blogspot.com/-A95xSXU_Lsg/V8iM0yx6O8I/AAAAAAAAAAg/KWRXHJysiUwNnjKBp8Y1-C9dYQaMBg-TwCLcB/s1600/Tugu_Malang.jpg',
          }}
          style={styles.destinationImage}
        />
        <View style={styles.destinationTitle}>
          <Image
            source={{
              uri:'https://i.ibb.co/GvKcKhz/LOGO-BEAUTYMALANG.png',
            }}
            style={styles.destinationImage2}
            />
        </View>
        <Text style={styles.destinationDescription}>
          Daftar Kategori:
        </Text>
      </View>
      <View style={styles.destinationWisata}>
        <Text style={styles.destinationTextBox}>Wisata</Text>
        <Image
          source= {{
            uri: 'https://img.icons8.com/ios-filled/500/1A1A1A/beach.png',
          }}
          style={styles.destinationWisataicon}
          />
      </View>
      <View style={styles.destinationHotel}><Text style={styles.destinationTextBox}>Hotel</Text>
      <Image
        source= {{
          uri: 'https://img.icons8.com/ios-filled/500/1A1A1A/5-star-hotel--v2.png'
        }}
        style={styles.destinationHotelicon}
        />
      </View>
      <View style={styles.destinationKuliner}><Text style={styles.destinationTextBox}>Kuliner</Text>
      <Image
        source={{
          uri: 'https://img.icons8.com/ios-filled/500/1A1A1A/restaurant--v1.png'
        }}
        style={styles.destinationKulinericon}
        />
      </View>
      <View style={styles.destinationTempatibadah}><Text style={styles.destinationTextBox}>Tempat Ibadah</Text>
      <Image
        source={{
          uri: 'https://img.icons8.com/ios-filled/500/1A1A1A/stupa-of-borobudur-temple.png'
        }}
        style={styles.destinationTempatibadahicon}
        />
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
    alignItems: 'center',
  },
  headerIcon: {
    width: '11%',
    height: 40,
    position: 'absolute', left: 370 , bottom: 23
  },
  headerText: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold'
    
  },
  destination: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  destinationImage: {
    width: '100%',
    height: 200,
  },
  destinationImage2: {
    width: '101%',
    height: 120,
    borderRadius: 8
  },
  destinationTitle: {
    width:397,
    height: 110,
    backgroundColor: 'white',
    borderWidth:0,
    borderColor:'black',
    borderRadius:5,
    shadowColor: 'black',
    shadowRadius:20,
    position: 'relative', bottom:65, left: 7,
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center'
  },
  destinationDescription: {
    color: 'black',
    fontSize: 20,
    position: 'relative', bottom: 60, left: 10,
    fontWeight: 'bold',
  },
  destinationWisata: {
    width:180,
    height: 110,
    backgroundColor: 'pink',
    borderWidth:0,
    borderColor:'black',
    borderRadius:5,
    shadowColor: 'black',
    shadowRadius:20,
    position: 'relative', bottom:20, left: 15,
  },
  destinationWisataicon: {
    width: '39%',
    height: 70,
    position: 'absolute', left: 55 , bottom: 10
  },
  destinationTextBox: {
    color: 'black',
    fontSize:20,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  destinationHotel: {
    width:180,
    height: 110,
    backgroundColor: 'pink',
    borderWidth:0,
    borderColor:'black',
    borderRadius:5,
    shadowColor: 'black',
    shadowRadius:20,
    position: 'relative', bottom:130, left: 217,
  },
  destinationHotelicon: {
    width: '39%',
    height: 70,
    position: 'absolute', left: 55 , bottom: 10
  },
  destinationKuliner: {
    width:180,
    height: 110,
    backgroundColor: 'pink',
    borderWidth:0,
    borderColor:'black',
    borderRadius:5,
    shadowColor: 'black',
    shadowRadius:20,
    position: 'relative', bottom:90, left: 217,
  },
  destinationKulinericon: {
    width: '39%',
    height: 70,
    position: 'absolute', left: 55 , bottom: 10
  },
  destinationTempatibadah: {
    width:180,
    height: 110,
    backgroundColor: 'pink',
    borderWidth:0,
    borderColor:'black',
    borderRadius:5,
    shadowColor: 'black',
    shadowRadius:20,
    position: 'relative', bottom:200, left: 15,
  },
  destinationTempatibadahicon: {
    width: '39%',
    height: 70,
    position: 'absolute', left: 55 , bottom: 10
  },
  destinationBar: {
    width:420,
    height: 110,
    backgroundColor: 'pink',
    shadowColor: 'black',
    shadowRadius:20,
    position: 'relative', bottom:100,
  },
  destinationBarIcon1: {
    width: '10  %',
    height: 50,
    position: 'relative', left: 185 , bottom: -5
  },
  destinationBarIcon2: {
    width: '15%',
    height: 50,
    position: 'relative', left: 50 , bottom: 45
  },
  destinationBarIcon3: {
    width: '12%',
    height: 50,
    position: 'relative', left: 300 , bottom: 95
  },
});

export default Home;