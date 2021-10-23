import { logo_small, logo_big } from '../logos'; // check imports, different file? -> CW project

export const Navbar = () => {
    return <navbar>
        <span className="navbar_left">
            <a href="../App.js">Lisa Law</a> {/* Check link connection*/}
            <img src="logo_small" alt="test" />
        </span>

        <ul className="navbar_right">
            <li>
                <a href="">About</a>
            </li>
            <li>
                <a href="">Projects</a>
            </li>
            <li>
                <a href="">Skills</a>
            </li>
            <li>
                <button>Download CV</button>
            </li> {/*check how to download files*/}
        </ul>
    </navbar>
};
