import styled from 'styled-components';

export const TitleBox = styled.div`
  position: relative;
  height: 250px;
  padding-top: 200px;

  padding-left: 16px;
  padding-right: 16px;

  /* display: flex; */
  /* align-items: center; */
  /* color: ${({ theme: { colors } }) => colors.primaryLightText}; */
  /* background: ${({ theme: { colors } }) => colors.backgroundLight}; */

  @media (min-width: ${({ theme: { devices } }) => devices.tablet}) {
    height: 276px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (min-width: ${({ theme: { devices } }) => devices.desktop}) {
    height: 300px;
    padding-left: 50px;
    padding-right: 50px;
  }
`;
