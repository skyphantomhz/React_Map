import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMarker, markerSelector } from './MarkerSlice'
import MapComponent from '../component/MapComponent'
import BottomCard from '../component/BottomCard'

function HomeScreen() {
    const dispatch = useDispatch()
    useEffect(() => {
        console.log("fetchData")
        dispatch(fetchMarker("gtueFngdjVx[lE|g@kv@zCpvAcD|vAak@mT"))
    })
    return <View>
        <MapComponent />
        <BottomCard style={{ width: 100, height: 100, backgroundColor: 'black', position: 'absolute', bottom:0}} />
    </View>
}

export default HomeScreen