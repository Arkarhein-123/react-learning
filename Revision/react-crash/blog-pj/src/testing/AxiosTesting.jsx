import axios from "axios";
import { useEffect } from "react";

const BASEURL = "http://localhost:8080/api/posts";

export default function AxiosTesting() {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(BASEURL);
                console.log(response.data);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>This is axios testing....</h2>
        </div>
    );
}
