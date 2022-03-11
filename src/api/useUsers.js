import { useQuery } from "react-query";
import axios from "axios";

const fetchUsers = async () => {
	const { data } = await axios.get(
		"https://thapatechnical.github.io/userapi/users.json"
	);
	return data;
};

const useUsers = () => useQuery("users", fetchUsers);
export default useUsers;
