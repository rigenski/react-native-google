import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import MapView from "react-native-maps";
import styles from "./style";

export default function Home({ setIsLogin }) {
  const [mapLat, setMapLat] = useState(6.841776681);
  const [mapLong, setMapLong] = useState(79.869319);

  return (
    <View style={styles.map}>
      <View style={styles.mapHeader}>
        <Text style={styles.mapHeaderTitle}>Map</Text>
        <Text style={styles.mapHeaderSubtitle}>
          Find a place you want to visit
        </Text>
      </View>
      <MapView
        style={styles.mapContent}
        initialRegion={{
          latitude: mapLat,
          longitude: mapLong,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      ></MapView>
      <TouchableOpacity
        style={styles.mapButton}
        onPress={() => setIsLogin(false)}
      >
        <Text style={styles.mapButtonText}>Login With Google</Text>
      </TouchableOpacity>
    </View>
  );
}
