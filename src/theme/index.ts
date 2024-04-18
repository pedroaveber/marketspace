import { extendTheme } from 'native-base'

export const theme = extendTheme({
  colors: {
    blue: {
      700: '#364D9D',
      300: '#647AC7',
    },
    red: {
      300: '#EE7979',
    },
    gray: {
      950: '#1A181B',
      700: '#3E3A40',
      600: '#5F5B62',
      500: '#9F9BA1',
      300: '#D9D8DA',
      200: '#EDECEE',
      50: '#F7F7F8',
    },
  },
  sizes: {
    22: 88,
  },
  fonts: {
    heading: 'Karla_700Bold',
    body: 'Karla_400Regular',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
  },
})
