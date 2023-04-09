import styled from 'styled-components';

export const TitleBar = styled.div`
  position: relative;
  height: 22px;
  /* padding-top: 64px; */

  padding-left: 16px;
  padding-right: 16px;

  /* display: flex; */
  /* align-items: center; */
  /* color: ${({ theme: { colors } }) => colors.primaryLightText}; */
  /* background: ${({ theme: { colors } }) => colors.backgroundLight}; */

  @media (min-width: ${({ theme: { devices } }) => devices.tablet}) {
    height: 60px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (min-width: ${({ theme: { devices } }) => devices.desktop}) {
    height: 50px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;