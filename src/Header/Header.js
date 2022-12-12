import { Routes, Route, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../utils/icons/Logo.svg";
import Overview from "../Pages/Overview/Overview";
import Worker from "../Pages/Worker/Worker";
import Cards from "../Pages/Cards/Cards";
import Invoices from "../Pages/Invoices/Invoices";
import Goals from "../Pages/Goals/Goals";
import Settings from "../Pages/Settings/Settings";
import OverviewGray from "../utils/icons/OverviewGray.svg";
import WorkerGray from "../utils/icons/WorkerGray.svg";
import InvoicesGray from "../utils/icons/InvoicesGray.svg";
import CardsGray from "../utils/icons/CardsGray.svg";
import GoalsGray from "../utils/icons/GoalsGray.svg";
import SettingsGray from "../utils/icons/SettingsGray.svg";




function Header(){
    return(
        <header className="header">
            <nav className="nav">
                    <div className="links">
                        <div className="logo">
                            <figure>
                                <img src={logo} alt="logo" />
                            </figure>
                        </div>
                        <ul className="ul">
                            <li>
                                <figure><img src={OverviewGray} alt="OverviewGray" /></figure>
                                <NavLink to="/Overview" className="navlink" >Overview</NavLink>
                            </li>
                            <li>
                                <figure><img src={WorkerGray} alt="WorkerGray" /></figure>
                                <NavLink to="/Worker" className="navlink" >Worker</NavLink>
                            </li>
                            <li>
                                <figure><img src={CardsGray} alt="CardsGray" /></figure>
                                <NavLink to="/Cards" className="navlink" >Cards</NavLink>
                            </li>
                            <li>
                                <figure><img src={InvoicesGray} alt="InvoicesGray" /></figure>
                                <NavLink to="/Invoices" className="navlink" >Invoices</NavLink>
                            </li>
                            <li>
                                <figure><img src={GoalsGray} alt="GoalsGray" /></figure>
                                <NavLink to="/Goals" className="navlink" >Goals</NavLink>
                            </li>
                            <li>
                                <figure><img src={SettingsGray} alt="SettingsGray" /></figure>
                                <NavLink to="/Settings" className="navlink" >Settings</NavLink>
                            </li>
                        </ul>
                        
                    </div>
                    <div>
                    <Routes>
                        <Route path="/Overview" element={<Overview/>}/>
                        <Route path="/Worker" element={<Worker/>}/>
                        <Route path="/Cards" element={<Cards/>}/>
                        <Route path="/Invoices" element={<Invoices/>}/>
                        <Route path="/Goals" element={<Goals/>}/>
                        <Route path="/Settings" element={<Settings/>}/>
                    </Routes>
                    </div>
            </nav>
        </header>
    )
}

export default Header;