import { GetterTree } from 'vuex';
import { IPlacesState } from './state';
import { IState } from '../index';


const getters: GetterTree<IPlacesState, IState> = {
    isUserLocationReady(state: IPlacesState): boolean {
        return !!state.userLocation;
    }
}



export default getters;