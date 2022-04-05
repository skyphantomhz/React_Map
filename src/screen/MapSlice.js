import { createSlice } from "@reduxjs/toolkit";
import { decode, encode } from "@googlemaps/polyline-codec";

export const markerSlice = createSlice({
    name: "mapMarker",
    initialState: {
        markers: [
            {
                latitude: 37.8006173,
                longitude: -122.432349
            }
        ]
    },
    reducers: {
        loadMarkers: (state, action) => {
            console.log("update state")
            state.markers = action.payload
        }
    }
})

export const { loadMarkers } = markerSlice.actions

export const fetchMarker = (polyline) => (dispatch) => {
    const pathArray = decode(polyline)
    const points = pathArray.map(element => {
        return {
            latitude: element[0],
            longitude: element[1]
        }
    })
    console.log("process success")
    dispatch(loadMarkers(points))
}

export const markerSelector = (state) => state.mapMarker.markers

export default markerSlice.reducer