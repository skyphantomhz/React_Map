import { configureStore } from "@reduxjs/toolkit"
import mapMarkerReducer from './screen/MapSlice'

export default configureStore({
    reducer: {
        mapMarker: mapMarkerReducer
    }
})