import React from 'react';
import {
  AppBar,
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import HomeIcon from '@mui/icons-material/Home';

export default function Home() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography component="div" sx={{ flexGrow: 1 }} variant="h6">
              Aplysia
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="lg" sx={{ marginTop: '60px' }}>
        <Grid container spacing={12}>
          <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: '240px' }}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Stack spacing={2}>
                  <Avatar
                    alt="Memo Chou"
                    src="https://github.com/memochou1993.png"
                    sx={{ width: 90, height: 90 }}
                  />
                  <div>Memo Chou</div>
                </Stack>
              </Box>
              <Divider color="#DEDEDE" sx={{ marginTop: '16px' }} />
              <nav>
                <List>
                  <ListItem disablePadding>
                    <ListItemButton
                      selected
                    >
                      <ListItemIcon>
                        <HomeIcon sx={{ fontSize: 32, color: '#AEAEAE' }} />
                      </ListItemIcon>
                      <ListItemText primary="Home" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      sx={{ borderRadius: '8px' }}
                    >
                      <ListItemIcon>
                        <AccountBalanceWalletIcon sx={{ fontSize: 32, color: '#AEAEAE' }} />
                      </ListItemIcon>
                      <ListItemText primary="My Wallets" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <ArticleIcon sx={{ fontSize: 32, color: '#AEAEAE' }} />
                      </ListItemIcon>
                      <ListItemText primary="My Posts" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            TODO
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
