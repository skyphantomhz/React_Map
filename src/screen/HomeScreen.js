import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMarker, markerSelector } from './MapSlice'
import MapComponent from '../component/MapComponent'

function HomeScreen() {
    const dispatch = useDispatch()
    useEffect(() => {
        console.log("fetchData")
        dispatch(fetchMarker("gtueFngdjVx[lE|g@kv@zCpvAcD|vAak@mT"))
    })
    return <View>
        <MapComponent />
        <View>

        </View>
    </View>
}

export default HomeScreen