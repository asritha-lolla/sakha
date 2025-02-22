import {
  Box,
  Button,
  FormControl,
  Link,
  OutlinedInput,
  Stack,
  Typography,
} from '@mui/material'
import { useForm } from 'react-hook-form'

interface ISignUpFormState {
  name: string
  username: string
  email: string
  password: string
}

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpFormState>()
  console.log('🚀 ~ SignUp ~ errors:', errors)

  const signUpHandler = (data: ISignUpFormState) => {
    console.log('🚀 ~ signUpHandler ~ data:', data)
  }

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
      onSubmit={handleSubmit(signUpHandler)}
    >
      <Typography variant="h2" align="center">
        Sign Up
      </Typography>
      <FormControl>
        <Typography variant="h4">Name</Typography>
        <OutlinedInput
          {...register('name', { required: 'Name is required' })}
          type="text"
          error={!!errors.name}
        />
        {errors.name && (
          <Typography color="error">{errors.name.message}</Typography>
        )}
      </FormControl>
      <FormControl>
        <Typography variant="h4">Username</Typography>
        <OutlinedInput
          {...register('username', { required: 'Username is required' })}
          type="text"
          error={!!errors.username}
        />
        {errors.username && (
          <Typography color="error">{errors.username.message}</Typography>
        )}
      </FormControl>
      <FormControl>
        <Typography variant="h4">Email</Typography>
        <OutlinedInput
          {...register('email', { required: 'Email is required' })}
          type="email"
          error={!!errors.email}
        />
        {errors.email && (
          <Typography color="error">{errors.email.message}</Typography>
        )}
      </FormControl>
      <FormControl>
        <Typography variant="h4">Password</Typography>
        <OutlinedInput
          type="password"
          error={!!errors.password}
          {...register('password', { required: 'Password is required' })}
        />
        {errors.password && (
          <Typography color="error">{errors.password.message}</Typography>
        )}
      </FormControl>
      <Button variant="contained" type="submit">
        Sign Up
      </Button>
      <Stack direction={'column'} spacing={2}>
        <Link href="/sign-in" variant="body2" sx={{ textDecoration: 'none' }}>
          Already have an account? Sign In
        </Link>
      </Stack>
    </Box>
  )
}

export default SignUp
