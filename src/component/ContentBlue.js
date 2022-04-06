import React from 'react';
import { View, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

function ContentBlue(props) {
    return <View style={{ backgroundColor: "blue", paddingVertical: 5, paddingHorizontal: 10, borderRadius: 10, flexDirection: 'row' }}>
        <MaterialIcons name="hotel" size={16} color="white" />
        <Text style={{ marginStart: 6, color: "white", fontWeight: "700" }}>${props.content.price}</Text>
    </View>;
}

export default ContentBlue;