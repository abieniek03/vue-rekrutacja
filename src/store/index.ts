// @ts-ignore
import { createStore } from "vuex";

interface State {
	activePage: number;
}

const store = createStore<State>({
	state: {
		activePage: 1,
	},
	mutations: {
		setActivePage(prevState: State, page: number) {
			prevState.activePage = page;
		},
	},
	actions: {
		setActivePage({ commit }: any, page: number) {
			commit("setActivePage", page);
		},
	},
	getters: {
		getActivePage: (state: State) => state.activePage,
	},
});

export default store;
