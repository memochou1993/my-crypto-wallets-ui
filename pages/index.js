import {AppBar, Box, IconButton, Toolbar, Typography} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'

export default function Home() {
  return (
    <Box
      sx={{ flexGrow: 1 }}
    >
      <AppBar
        position="static"
      >
        <Toolbar>
          <IconButton
            aria-label="menu"
            color="inherit"
            edge="start"
            size="large"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="div"
            sx={{ flexGrow: 1 }}
            variant="h6"
          >
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
