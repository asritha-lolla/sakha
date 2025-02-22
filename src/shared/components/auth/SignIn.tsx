import {
  Box,
  Button,
  FormControl,
  OutlinedInput,
  Typography,
  Link,
  Stack,
} from '@mui/material';
import { useForm } from 'react-hook-form';

interface ISignInFormState{
  email:string;
  password:string;
}

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInFormState>();

  const signInHandler = (data:ISignInFormState) => {
    console.log('🚀 ~ signInHandler ~ data:', data);
  };

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
      onSubmit={handleSubmit(signInHandler)} 
    >
      <Typography variant="h2" align="center">
        Sign In
      </Typography>
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
          {...register('password', { required: 'Password is required' })}
          type="password"
          error={!!errors.password}

        />
        {errors.password && (
          <Typography color="error">{errors.password.message}</Typography>
        )}
      </FormControl>
      <Button variant="contained" type="submit">
        Sign In
      </Button>
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
  );
};

export default SignIn;