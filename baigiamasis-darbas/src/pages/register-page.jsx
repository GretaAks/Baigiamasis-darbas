import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function LoginPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
      <Grid container component="main" sx={{ height: '100vh' }}>
        
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'success.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
             Registruotis
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Vardas"
                name="name"
                autoComplete="name"
                autoFocus
                
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="El. paštas"
                name="email"
                autoComplete="email"
                
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Slaptažodis"
                type="password"
                id="password"
                autoComplete="current-password"
              
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="phone"
                label="Telefonas"
                type="number"
                id="phone"
                autoComplete="phone"
              
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="success" />}
                label="Įsiminti mane"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor:'success.main'}}
              >
                Registruotis
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" sx={{color: 'success.main' }}>
                    Pamiršote slaptažodį?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2" sx={{color: 'success.main' }}>
                    {"Jau turite paskyrą? Prisijunkite"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
      </CssBaseline>
    </ThemeProvider>
  );
}