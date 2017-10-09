import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Table, TableHeader, TableHeaderColumn, TableRow, TableBody, TableRowColumn } from 'material-ui';

const Home = () => (
    <MuiThemeProvider>
        <Table fixedHeader>
            <TableHeader>
                <TableRow>
                    <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Redis URL">URL</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody showRowHover stripedRows>
                <TableRow>
                    <TableRowColumn>{1}</TableRowColumn>
                    <TableRowColumn>{2}</TableRowColumn>
                    <TableRowColumn>{3}</TableRowColumn>
                </TableRow>
            </TableBody>
        </Table>
    </MuiThemeProvider>
);

export default Home;
