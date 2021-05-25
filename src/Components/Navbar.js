import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import react, {Component} from "react"

const Navbar=()=>{

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6">Live Score</Typography>
            </Toolbar>
        </AppBar>
    )
}
export default Navbar