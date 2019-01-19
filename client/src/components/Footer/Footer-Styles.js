import styled from 'styled-components'

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 96vw;
  margin: 2vw;
`

export const Svg = styled.div`  
  filter: drop-shadow(1.5px 1px 1px #999);  
  transform: rotate(-0.2deg);
  transition: 0.3s;

  &:hover {
    transform: rotate(-0.6deg);
    cursor: pointer;
  }
`

export const Button = styled.a`
  border-radius: 50%;
  border: 1px solid #fff;
  width: 3.2em;
  height: 3.2em;
  padding: 5px;
  transition: .3s;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  background: ${props => props.provider === 'medium' ? '#00ab6c' : '#6e5494'};
  font-size: ${props => props.provider === 'medium' ? '0.85em' : '1em'};

  &:hover {
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.45);
  }
`