declare module 'styled-components' {
    export interface DefaultTheme {  
      colors: {
        Primary: string;
        LightPrimary: string;
        DarkPrimary: string;
        White: string;
        Accent: string;
        Black: string;
        DarkGray: string;
        LightGray: string;
        Divider: string;

      };
    }
  }


export const theme = {
    colors: {
        Primary: '#673AB7',
        LightPrimary: '#D1C4E9',
        DarkPrimary: '#512DA8',
        White: '#FFFFFF',
        Accent: '#FF9800',
        Black: '#212121',
        DarkGray: '#757575',
        LightGray: '#BDBDBD',
        Divider: '#BDBDBD'
    }
}