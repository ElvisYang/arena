import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Drawer, MenuItem, Toolbar, ToolbarTitle, ToolbarGroup, FontIcon } from 'material-ui';
import RedisLogo from '../consts/redisLogo';
// import FontAwesome from 'react-fontawesome';

const MainSidebar = () => (
    <MuiThemeProvider>
        <Drawer open>
            <Toolbar>
                <ToolbarGroup>
                    <ToolbarTitle text="Arena" />
                </ToolbarGroup>
            </Toolbar>
            <MenuItem>
                <RedisLogo viewBox="0 0 260 260" style={{ width: '23px', height: 'auto', marginRight: '5px', verticalAlign: 'middle' }} />
                <span>Redis Servers</span>
            </MenuItem>
            <MenuItem>
                <FontIcon style={{ verticalAlign: 'middle', marginRight: '5px' }} className="material-icons">
                work
                </FontIcon>
                <span>Projects</span>
            </MenuItem>
            <MenuItem>
                <FontIcon style={{ verticalAlign: 'middle', marginRight: '5px' }} className="material-icons">
                dvr
                </FontIcon>
                <span>Queues</span>
            </MenuItem>
        </Drawer>
    </MuiThemeProvider>
);

export default MainSidebar;
