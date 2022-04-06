import React from 'react';
import {View, Text} from 'react-native'

function ContentOrange(props) {
    return <View style={{ backgroundColor: "orange", paddingVertical: 5, paddingHorizontal: 10, borderRadius: 10 }}>
        <Text style={{ color: "white", fontWeight: "700" }}>${props.content.price}</Text>
    </View>;
}

export default ContentOrange;