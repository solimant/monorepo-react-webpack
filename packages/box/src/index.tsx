import React, { FunctionComponent } from 'react';
import { styled, createShortHandDimensions } from '@we/theme';

type Props = {
  label: string,
  labelTextColor: string
  labelBackgroundColor: string,
  className?: string,
}

const RawBox: FunctionComponent<Props> = props => {
  return (
    <div className={props.className}>
      <div className='header'>
        { props.label }
      </div>
      <div className='body'>
        {props.children}
      </div>
    </div>
  )
};

const Box = styled(RawBox)`
  font-family: ${props => props.theme.fontFace};
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => props.labelBackgroundColor };
  .header {
    background-color: ${props => props.labelBackgroundColor };
    color: ${props => props.labelTextColor };
    padding:  ${props => createShortHandDimensions(props.theme.padding) };
  }
  .body {
    padding:  ${props => createShortHandDimensions(props.theme.padding) };
  }
`;

export default Box;

// const UsingBox = () => (<ThemeProvider theme={light}><Box label={'AAAA'} labelBackgroundColor={'#000000'} labelTextColor={'#FFFFFF'}><div><h2>Olaaaa</h2></div></Box></ThemeProvider>);



// import { render } from 'react-dom';

// const rootElement = document.getElementById('root');

// render(<UsingBox />, rootElement);