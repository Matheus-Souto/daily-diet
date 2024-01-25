type Theme = {
    COLORS: {
      WHITE: string;
      GREEN_700: string;
      GREEN_500: string;
      RED: string;
      RED_MID: string;
      RED_DARK: string;
      RED_LIGHT: string;
      GREEN_DARK: string;
      GREEN_MID: string;
      GREEN_LIGHT: string;
      GRAY_700: string;
      GRAY_600: string;
      GRAY_500: string;
      GRAY_400: string;
      GRAY_300: string;
      GRAY_200: string;
      GRAY_100: string;
    };
    FONT_FAMILY: {
      REGULAR: string;
      BOLD: string;
    };
    FONT_SIZE: {
      SM: number;
      MD: number;
      LG: number;
      XL: number;
    };
  }
  
  const theme: Theme = {
    COLORS: {
      WHITE: '#FFFFFF',
      GREEN_700: '#00875F',
      GREEN_500: '#00B37E',
      RED: '#F75A68',
      RED_DARK: '#BF3B44',
      RED_MID: '#F3BABD',
      RED_LIGHT: '#F4E6E7',
      GREEN_DARK: '#639339',
      GREEN_MID: '#CBE4B4',
      GREEN_LIGHT: '#E5F0DB',
      GRAY_700: '#1B1D1E',
      GRAY_600: '#333638',
      GRAY_500: '#5C6265',
      GRAY_400: '#B9BBBC',
      GRAY_300: '#DDDEDF',
      GRAY_200: '#EFF0F0',
      GRAY_100: '#FAFAFA',
    },
    FONT_FAMILY: {
      REGULAR: 'NunitoSans_400Regular',
      BOLD: 'NunitoSans_700Bold',
    },
    FONT_SIZE: {
      SM: 14,
      MD: 16,
      LG: 18,
      XL: 24,
    },
  };
  
  export default theme;