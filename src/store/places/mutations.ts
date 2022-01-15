import { MutationTree } from 'vuex';
import { IPlacesState } from './state';


const mutation: MutationTree<IPlacesState> = {
    setLngLat( state: IPlacesState, coords: [number, number] ) {
        state.userLocation = coords;
        state.isLoading = false;
    }
}


export default mutation;