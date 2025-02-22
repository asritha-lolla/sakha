import {
  Box,
  Button,
  FormControl,
  OutlinedInput,
  Typography,
  Link,
  Stack,
} from '@mui/material'

const SignIn = () => {
  return (
    <Box
      component={'form'}
      display={'flex'}
      flexDirection={'column'}
      gap={2}
      sx={{
        background: 'rgba(255, 255, 255, 0.2)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        borderRadius: '10px',
        maxWidth: '400px',
        width: '40%',
        padding: '2rem',
      }}
    >
      <Typography variant="h2" align="center">
        Sign In
      </Typography>
      <FormControl>
        <Typography variant="h4">Email</Typography>
        <OutlinedInput placeholder="Email" />
      </FormControl>
      <FormControl>
        <Typography variant="h4">Password</Typography>
        <OutlinedInput placeholder="Password" />
      </FormControl>
      <Button variant="contained">Sign In</Button>
      <Stack direction={'column'} spacing={2}>
        <Link
          href="/forgot-password"
          variant="body2"
          sx={{ textDecoration: 'none' }}
        >
          Forgot Password?
        </Link>
        <Link href="/sign-up" variant="body2" sx={{ textDecoration: 'none' }}>
          Don't have an account? Sign Up
        </Link>
      </Stack>
    </Box>
  )
}

export default SignIn
