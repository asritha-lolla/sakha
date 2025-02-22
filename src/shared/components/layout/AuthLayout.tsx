import { Box, Grid2 as Grid } from '@mui/material'
import { images } from '@shared/utils/images'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <Grid container sx={{ height: '100vh' }}>
      <Grid size={6} className="flex">
        <Box
          component={'img'}
          src={images.banner}
          sx={{
            width: '100%',
            objectFit: 'cover',
          }}
          alt="banner"
        />
      </Grid>
      <Grid size={6} className="flex">
        <Outlet />
      </Grid>
    </Grid>
  )
}

export default AuthLayout
