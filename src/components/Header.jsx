import { Link } from "react-router-dom";

export function Header(){
    return(
        <header>
            <h4><Link to="/">Logo</Link></h4>
            
            <nav>
                <ul>
                    <li>
                        <h4><Link to="/">Home</Link></h4>
                    </li>

                    <li>
                        <h4><Link to="/users">Users</Link></h4>
                    </li>

                    <li>
                    <h4><Link to="/posts">Posts</Link></h4>
                    </li>
                </ul>
            </nav>
            
            
            
            
        </header>
    )
}