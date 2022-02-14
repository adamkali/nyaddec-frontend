import {Outlet, Link} from "react-router-dom";

export default function Layout (): JSX.Element {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/PartySelect">Party Select</Link>
                    </li>
                    <li>
                        <Link to="/EncounterBuilder">Encounter Builder</Link>
                    </li>
                    <li>
                        <Link to="/Monster/{id}">Monster Page</Link>
                    </li>
                </ul>
            </nav>

            <Outlet/>
        </>
    );
};