import theme, { Color } from '../theme';
import { CSSProp } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: Color;
  }
}
