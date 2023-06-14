export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">
            HOPETRUST
        </a>
        <ul>
            <li className="active">
                <a href="/Team">Team</a>
                </li>
                <li>
                <a href="/About"> About</a>
            </li>
            <li>
                <a href="/Login"> Login</a>
            </li>
        </ul>
    </nav>
}