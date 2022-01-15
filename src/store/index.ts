import { createStore } from 'vuex';

// My custom modules
import placesModule from './places';
import { IPlacesState } from './places/state';


export interface IState {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  places: IPlacesState
}

export default createStore<IState>({
  modules: {
    places: placesModule
  }
})