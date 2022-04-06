import { configureStore } from "@reduxjs/toolkit"
import mapMarkerReducer from './screen/MarkerSlice'

export default configureStore({
    reducer: {
        mapMarker: mapMarkerReducer
    }
})