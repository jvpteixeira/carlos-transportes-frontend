import * as React from 'react';
import {IconButton, makeStyles, Menu as MuiMenu, MenuItem } from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import routes, { myRouteProps } from '../../routes/index';
import { yellow } from '@mui/material/colors';

type Props = {
    itemsToShow : any
}


export const Menu = (props: Props) => {
    const menuRoutes = routes.filter(route => Object.keys(props.itemsToShow).includes(route.name))
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleOpen = (event:any) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
        <React.Fragment>
           <IconButton
                edge="end"
                color="inherit"
                aria-label="open drawer"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpen}
            >
                <MenuIcon sx={{ color: yellow[500] }} />
            </IconButton>
            <MuiMenu
                id="menu-appbar"
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                transformOrigin={{vertical:'top', horizontal: 'center'}}
                getContentAnchorEl={null}
            >
                <>  
                    {   
                        Object.keys(props.itemsToShow).map((routeName, key) => {
                            const route = menuRoutes.find(route => route.name === routeName) as myRouteProps;
                            return (
                                <MenuItem  key={key} component={Link} to={route.path as string} onClick={handleClose}>
                                    {props.itemsToShow[routeName]}
                                </MenuItem>
                            )
                        })
                    }
                </>
            </MuiMenu>
        </React.Fragment>
    );
};