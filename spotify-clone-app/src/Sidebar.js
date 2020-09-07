import React from 'react';
import './Sidebar.css';
import SideBarOption from './SidebarOption';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import {DataLayerValue, useDataLayerValue} from "./DataLayer";

function Sidebar() {
    const [{playlists} , dispatch] = useDataLayerValue();
    return (
        <div className="sidebar">
            <img className="sidebar_logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify" />
            <SideBarOption title="Home" Icon={HomeIcon}  />
            <SideBarOption title="Search" Icon={SearchIcon} />
            <SideBarOption title="Your Library" Icon={LibraryMusicIcon} />
            <br />
            <strong className="sidebar_title"> PLAYLISTS</strong>
            <hr />
            {playlists?.items?.map(playlist =>(
            <SideBarOption title={playlist.name} />
            ))}

        </div>
    )
    
}


export default Sidebar
