import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Toolbar, ToolbarGroup, FontIcon, ToolbarTitle } from 'material-ui';
import FontAwesome from 'react-fontawesome';

const Header = () => (
    <MuiThemeProvider>
        <Toolbar>
            <ToolbarGroup>
                <ToolbarTitle text="Arena" />
            </ToolbarGroup>
            <ToolbarGroup>
                <FontIcon className="material-icons">
          settings
                </FontIcon>
                <FontIcon>
                    <a href="https://github.com/bee-queue/arena" target="_new">
                        <FontAwesome name="github" />
                    </a>
                </FontIcon>
            </ToolbarGroup>
        </Toolbar>
    </MuiThemeProvider>
);

export default Header;
