import { useParams } from "react-router-dom";

export default function Profile() {
    const param = useParams();
    const id = param.profileId;
    return (
        <div>
            <h1>Profile {id} </h1>
        </div>
    );
}
