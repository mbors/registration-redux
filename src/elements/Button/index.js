import styled, { css } from 'styled-components'
import PropTypes from 'prop-types';

export const Button = styled.button`
background: black;
text-transform: uppercase;
width: 300px;
height: 4em; 
border-radius: 5px;
display: inline-block;
border: none;
color: white; 
${props =>
        props.primary &&
        css`
        background: rgba(199, 127, 127, 0.32);
        color: white;
  `};
`

Button.propTypes = {
  primary: PropTypes.any,
}