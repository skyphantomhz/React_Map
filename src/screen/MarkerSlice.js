import { createSlice } from "@reduxjs/toolkit";
import { decode, encode } from "@googlemaps/polyline-codec";

export const markerSlice = createSlice({
    name: "mapMarker",
    initialState: {
        markers: [
        ],
        selectedMarker: {
            location: {
                latitude: 37.78825,
                longitude: -122.4324
            }
        }
    },
    reducers: {
        loadMarkers: (state, action) => {
            console.log("update state")
            state.markers = action.payload
        },
        forcusToMarker: (state, action) => {
            state.selectedMarker = action.payload
        }
    }
})

export const { loadMarkers, forcusToMarker } = markerSlice.actions

export const fetchMarker = (polyline) => (dispatch) => {
    const pathArray = decode(polyline)
    const points = pathArray.map((element, index) => {
        return {
            id: index,
            location: {
                latitude: element[0],
                longitude: element[1]
            },
            price: (Math.random()*200).toFixed(),
            type: index%2
        }
    })
    console.log("process success")
    dispatch(loadMarkers(points))
}

export const markerSelector = (state) => state.mapMarker.markers
export const selectedMarkerSelector = (state) => state.mapMarker.selectedMarker

export default markerSlice.reducer