//@ts-ignore
import { createStore } from "vuex";
import axios from "axios";
interface State {
	postCountPerPage: number;
	pageActive: number;
	pageCount: number;
	searchValue: string;
}

const store = createStore<State>({
	state: {
		postCountPerPage: 10,
		pageActive: 1,
		pageCount: 2,
		searchValue: "",
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
		setSearchValue(state: State, searchValue: string) {
			state.searchValue = searchValue;
		},
	},
	actions: {
		setPageCount({ commit }: any, pageCount: number) {
			commit("setPageCount", pageCount);
		},
		setPageActive({ commit }: any, page: number) {
			commit("setPageActive", page);
		},
		setSearchValue({ commit }: any, searchValue: string) {
			commit("setSearchValue", searchValue);
		},
		async fetchPostsAndSetPageCount({ commit, getters }: any) {
			try {
				const response = await axios.get("https://jsonplaceholder.typicode.com/posts/");
				const pageCount = Math.ceil(response.data.length / getters.getPostCountPerPage);
				await commit("setPageCount", pageCount);
			} catch (error) {
				console.error(error);
			}
		},

		setCounts({ commit, getters }: any, allPostCount: number) {
			const pageCount = Math.ceil(allPostCount / getters.getPostCountPerPage);
			commit("setPageCount", pageCount);
		},
	},
	getters: {
		getPostCountPerPage: (state: State) => state.postCountPerPage,
		getPageActive: (state: State) => state.pageActive,
		getPageCount: (state: State) => state.pageCount,
		getSearchValue: (state: State) => state.searchValue,
	},
});

export default store;
