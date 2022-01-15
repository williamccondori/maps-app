import { onMounted } from "vue";
import { useStore } from "vuex";
import { IState } from "@/store";


export const usePlacesStore = () => {

    const store = useStore<IState>();

    onMounted(() => {
        if (!store.getters['places/isUserLocationReady']) {
            store.dispatch('places/getInitialLocation');
        }
    });

    return {};
}