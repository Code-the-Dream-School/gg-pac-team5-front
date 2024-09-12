const API = import.meta.env.VITE_API_URL
	? `${import.meta.env.VITE_API_URL}/api/v1`
	: "http://localhost:8000/api/v1";
const MOCK_API = "http://localhost:8000/api/v0";

export { API, MOCK_API };
