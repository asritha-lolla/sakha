import {
  Box,
  Button,
  FormControl,
  Link,
  OutlinedInput,
  Stack,
  Typography,
} from '@mui/material'

const SignUp = () => {
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
        Sign Up
      </Typography>
      <FormControl>
        <Typography variant="h4">Name</Typography>
        <OutlinedInput placeholder="Name" />
      </FormControl>
      <FormControl>
        <Typography variant="h4">Username</Typography>
        <OutlinedInput placeholder="Username" />
      </FormControl>
      <FormControl>
        <Typography variant="h4">Email</Typography>
        <OutlinedInput placeholder="Email" />
      </FormControl>
      <FormControl>
        <Typography variant="h4">Password</Typography>
        <OutlinedInput placeholder="Password" />
      </FormControl>
      <Button variant="contained">Sign Up</Button>
      <Stack direction={'column'} spacing={2}>
        <Link href="/sign-in" variant="body2" sx={{ textDecoration: 'none' }}>
          Already have an account? Sign In
        </Link>
      </Stack>
    </Box>
  )
}

export default SignUp
