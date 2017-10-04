import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Toolbar, ToolbarTitle, ToolbarGroup, FontIcon } from 'material-ui';
import FontAwesome from 'react-fontawesome';

const Header = () => (
  <MuiThemeProvider>
    <Toolbar>
      <ToolbarTitle text="Arena" />
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
