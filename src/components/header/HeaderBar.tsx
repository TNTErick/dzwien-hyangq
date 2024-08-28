import { capitalize, Tab } from "@mui/material";
import './HeaderBar.css';
import { SpaceBar } from "@mui/icons-material";

const valTabs = ['home', 'about', 'contact'] as const;

function Tabs() {
    return (
        <div id='tabs'>
            {valTabs.map((tab) => <Tab key={tab} label={capitalize(tab)} />)}
        </div>
    );
}

function HeaderBar() {
    return (
        <header id='header'>
            <h1 id='title'>DzwienHyangq</h1>
            <h2 id='subtitle'>Dzwienneong Tjuohqyim Khyih</h2>
            <h3 id='version'>v0.0.1</h3>
            {
                // add empty 
            }
            <Tabs />
        </header>
    );
}

export default HeaderBar;