import React, { useState } from 'react'
import MapView, { Marker, Callout } from 'react-native-maps'
import { StyleSheet, Dimensions, View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { markerSelector } from '../screen/MapSlice'

const { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height
const LATITUDE = 37.78825
const LONGITUDE = -122.4324
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

function MapComponent() {
    const selector = useSelector(markerSelector)
    const [location, setLocation] = useState({
        latitude: LATITUDE,
        longitude: LONGITUDE
    })
    return <MapView provider={MapView.PROVIDER_GOOGLE} style={styles.map}
        initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
        }}>
        {selector.map((element, index) => {
            return <Marker key={index} coordinate={element}>
                <View style={{ backgroundColor: "blue", paddingVertical: 5, paddingHorizontal: 10, borderRadius: 10 }}>
                    <Text style={{ color: "white", fontWeight: "700" }}>60$</Text>
                </View>
            </Marker>
        })}

    </ MapView>
}

export default MapComponent

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
})