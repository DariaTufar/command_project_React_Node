import styled from 'styled-components';
import { AutoInput } from './AutoInput';

export const Form = styled.form`
  width: 100%;
`;

export const InputForm = styled.input`
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '40px')};
  margin-left: ${props => (props.marginLeft ? props.marginLeft : 0)}px;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
  font-family: ${({ theme: { fonts } }) => fonts.primary};
  font-size: 14px;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.regular};
  color: ${({ theme: { colors } }) => colors.primaryDarkText};
  background-color: ${({ theme: { colors } }) => colors.whiteBackgroundToBlack};

  @media (min-width: ${({ theme: { devices } }) => devices.tablet}) {
    font-size: 18px;
  }
`;

export const TextForm = styled.textarea`
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '40px')};
  border: none;
  outline: none;
  resize: none;

  font-family: ${({ theme: { fonts } }) => fonts.primary};
  font-size: 14px;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.regular};
  color: ${({ theme: { colors } }) => colors.primaryDarkText};
  background-color: ${({ theme: { colors } }) => colors.whiteBackgroundToBlack};

  @media (min-width: ${({ theme: { devices } }) => devices.tablet}) {
    font-size: 18px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
  align-items: center;

  width: 100%;
  @media (min-width: ${({ theme: { devices } }) => devices.tablet}) {
    align-items: start;
  }
  @media (min-width: ${({ theme: { devices } }) => devices.desktop}) {
    gap: 50px;
    width: 800px;
  }
`;

export const VBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  @media (min-width: ${({ theme: { devices } }) => devices.tablet}) {
    gap: 32px;
    width: 393px;
  }
  @media (min-width: ${({ theme: { devices } }) => devices.desktop}) {
    gap: 40px;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 68px;
  margin-bottom: 24px;
  @media (min-width: ${({ theme: { devices } }) => devices.tablet}) {
    margin-top: 100px;
    margin-bottom: 32px;
  }
  @media (min-width: ${({ theme: { devices } }) => devices.desktop}) {
    width: 610px;
  }
`;

export const InstructionBox = styled.div`
  margin-bottom: 72px;
`;

export const IngredBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const LabelBox = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 200px;
  flex-grow: 1;
  height: 43px;
  padding: 1px 0;
  color: black;
  border-bottom: 1px solid black;

  font-family: ${({ theme: { fonts } }) => fonts.primary};
  font-size: 14px;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.regular};
  color: ${({ theme: { colors } }) => colors.primaryDarkText};
  background-color: ${({ theme: { colors } }) => colors.whiteBackgroundToBlack};

  @media (min-width: ${({ theme: { devices } }) => devices.tablet}) {
    font-size: 18px;
  }
`;

export const Ubox = styled.div`
  width: 100px;
`;

export const Dbox = styled.div`
  width: 180px;
  font-family: ${({ theme: { fonts } }) => fonts.primary};
  font-size: 14px;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.regular};
  color: ${({ theme: { colors } }) => colors.primaryDarkText};
  background-color: ${({ theme: { colors } }) => colors.whiteBackgroundToBlack};

  @media (min-width: ${({ theme: { devices } }) => devices.tablet}) {
    font-size: 18px;
  }
`;

export const AiIngredient = styled(AutoInput)`
  font-family: ${({ theme: { fonts } }) => fonts.primary};
  font-size: 14px;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.regular};
  color: ${({ theme: { colors } }) => colors.primaryDarkText};
  background-color: ${({ theme: { colors } }) => colors.whiteBackgroundToBlack};

  @media (min-width: ${({ theme: { devices } }) => devices.tablet}) {
    font-size: 18px;
  }
`;
