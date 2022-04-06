import React, { useState } from 'react'
import MapView, { Marker, Callout } from 'react-native-maps'
import { StyleSheet, Dimensions, View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { markerSelector, selectedMarkerSelector } from '../screen/MarkerSlice'
import ContentBlue from './ContentBlue'
import ContentOrange from './ContentOrange'

const { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height
const LATITUDE = 37.78825
const LONGITUDE = -122.4324
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

function MapComponent() {
    const markers = useSelector(markerSelector)
    const selectedMarker = useSelector(selectedMarkerSelector)

    const mapView = <MapView.Animated provider={MapView.PROVIDER_GOOGLE} style={styles.map}
        camera={{
            center: selectedMarker.location,
            pitch: 0,
            heading: 0,
            altitude: 0,
            zoom: 17,
        }}
        initialRegion={{
            latitude: selectedMarker.location.latitude,
            longitude: selectedMarker.location.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
        }}>
        {markers.map((element, index) => {
            let markerContent = <ContentBlue content={element} />
            if (element.type == 1) {
                markerContent = <ContentOrange content={element} />
            }
            return <Marker key={index} coordinate={element.location}>
                {markerContent}
            </Marker>
        })}

    </ MapView.Animated>
    return mapView
}

export default MapComponent

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
})