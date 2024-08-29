import { capitalize, Tab } from "@mui/material";
import './HeaderBar.css';
import { uiSlice } from '../../redux/slices/uiSlice';

const valTabs = ['注音器', '編輯', '說明',  '語言'] as const;

function Tabs() {
    return (
        <div id='tabs'>
            {valTabs.map((tab) => <Tab key={tab} label={capitalize(tab)} onClick={} />)}
        </div>
    );
}

function HeaderBar() {
    return (
        <header id='header'>
            <h1 id='title'>全響</h1>
            <h2 id='subtitle'>多功能注音器</h2>
            <h3 id='version'>{ _appVersion }</h3>
            <Tabs />
        </header>
    );
}

export default HeaderBar;