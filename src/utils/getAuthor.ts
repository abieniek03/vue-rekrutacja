import axios from "axios";

export const getAuthor = async (userId: number) => {
	try {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
