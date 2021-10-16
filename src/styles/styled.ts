import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    
    background:{
        primary: string,
        secundary: string,
        childrenSecondy: string
    },
    colors: {
        primary: string,
        secundary: string
    }
  }
}