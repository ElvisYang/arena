import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Chip } from 'material-ui';

const Crumbs = (crumbs) => {
    crumbs.unshift({
        path: '/',
        name: 'Dashboard',
    });
    return crumbs.map(crumb => <Chip onClick={() => this.props.history.push(crumb.path)} />);
};

const BreadCrumbs = props => (
    <MuiThemeProvider>
        <div>
            {Crumbs(props.crumbs)}
        </div>
    </MuiThemeProvider>
);

BreadCrumbs.propTypes = {
    crumbs: PropTypes.array.Optional,
};

BreadCrumbs.defaultProps = {
    crumbs: [],
};

export default BreadCrumbs;
