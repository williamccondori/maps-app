import { Module } from 'vuex';
import { IState } from '../index';

import state, { IPlacesState  } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';


const placesModule: Module<IPlacesState, IState> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}


export default placesModule;