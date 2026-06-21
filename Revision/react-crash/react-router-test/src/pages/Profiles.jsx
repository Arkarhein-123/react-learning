import { NavLink, Outlet } from "react-router-dom";

export default function Profiles() {
    const profiles = [1, 2, 3, 4, 5];

    return (
        <div>
            <div className="flex flex-column gap-3">
                {profiles.map((profile) => (
                    <NavLink
                        key={profile}
                        to={`/profiles/${profile}`} // Fixed typo: closed string template properly
                        style={({ isActive }) => ({
                            color: isActive ? "red" : "black",
                            fontWeight: isActive ? "bold" : "normal",
                        })}
                    >
                        Profile {profile}
                    </NavLink>
                ))}
            </div>
            <Outlet />
        </div>
    );
}
