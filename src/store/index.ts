//@ts-ignore
import { createStore } from "vuex";
import axios from "axios";

interface State {
	postCountPerPage: number;
	pageActive: number;
	pageCount: number;
}

const store = createStore<State>({
	state: {
		postCountPerPage: 10,
		pageActive: 1,
		pageCount: 1,
	},
	mutations: {
		setPostCountPerPage(state: State, postCountPerPage: number) {
			state.postCountPerPage = postCountPerPage;
		},
		setPageCount(state: State, pageCount: number) {
			state.pageCount = pageCount;
		},
		setPageActive(state: State, pageActive: number) {
			state.pageActive = pageActive;
		},
	},
	actions: {
		async fetchPostsAndSetPageCount({ commit, getters }: any) {
			try {
				const response = await axios.get("https://jsonplaceholder.typicode.com/posts/");
				const pageCount = Math.ceil(response.data.length / getters.getPostCountPerPage);
				await commit("setPageCount", pageCount);
			} catch (error) {
				console.error(error);
			}
		},

		setPageActive({ commit }: any, page: number) {
			commit("setPageActive", page);
		},
	},
	getters: {
		getPostCountPerPage: (state: State) => state.postCountPerPage,
		getPageActive: (state: State) => state.pageActive,
		getPageCount: (state: State) => state.pageCount,
	},
});

export default store;
