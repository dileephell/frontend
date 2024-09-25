import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

export default function SignIn() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const form = {
      email: data.get('email'),
      password: data.get('password'),
    };
    await login(form);
  };

  const handleSignUp = () => {
    navigate('/signup'); // Navigate to the Sign Up page
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} />
          <Typography component="h1" variant="h5">Sign In</Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
            <TextField required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Sign In</Button>
            <Button fullWidth variant="outlined" onClick={handleSignUp}>Sign Up</Button> {/* Sign Up button */}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
