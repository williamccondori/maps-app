import { ActionTree } from 'vuex';
import { IPlacesState } from './state';
import { IState } from '../index';


const actions: ActionTree<IPlacesState, IState> = {
    getInitialLocation({ commit }) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const coords = [position.coords.latitude, position.coords.longitude];
            commit("setLngLat", coords);
          },
          (error) => {
            console.error(error);
            throw new Error("Geolocation is not supported by your browser");
          }
        );
    }
} 
export default actions;