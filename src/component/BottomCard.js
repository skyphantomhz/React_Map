import React from 'react';
import { FlatList, View, Text, TouchableWithoutFeedback } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { forcusToMarker, markerSelector } from '../screen/MarkerSlice'

function BottomCard() {
    const dispatch = useDispatch()
    const markers = useSelector(markerSelector)
    return <View style={{ position: 'absolute', bottom: 0 }}>
        <FlatList horizontal={true} data={markers}
            renderItem={({ item }) =>
                <TouchableWithoutFeedback onPress={() => {
                    dispatch(forcusToMarker(item))
                }}>
                    <View key={item.id} style={{ padding: 10, flexDirection: 'row', backgroundColor: 'white', width: 330, marginHorizontal: 8, marginBottom: 8, borderRadius: 10 }}>
                        <View style={{ backgroundColor: 'grey', width: 80, height: 80 }} />
                        <View style={{ marginStart: 6, flex: 1 }}>
                            <Text style={{ fontSize: 18, fontWeight: '700' }} numberOfLines={2}>Where does it come from?</Text>
                            <Text style={{ marginTop: 4 }} numberOfLines={2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            } />
    </View>
}

export default BottomCard;