import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const Settings = () => {
  const [showNotifications, setShowNotifications] = React.useState(true);
  const [showLocation, setShowLocation] = React.useState(true);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const toggleLocation = () => {
    setShowLocation(!showLocation);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pengaturan</Text>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Notifikasi</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={showNotifications ? '#f4f3f4' : '#f4f3f4'}
          onValueChange={toggleNotifications}
          value={showNotifications}
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Izinkan Akses Lokasi</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={showLocation ? '#f4f3f4' : '#f4f3f4'}
          onValueChange={toggleLocation}
          value={showLocation}
        />
      </View>
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
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  settingLabel: {
    fontSize: 18,
  },
});

export default Settings;
