import styled from 'styled-components';

export const ButtonBlock = ({ handleMinus, handlePlus, number }) => {
  return (
    <ControlBox>
      <ControlButton onClick={handleMinus}>-</ControlButton>
      <ControlButton> {number} </ControlButton>
      <ControlButton onClick={handlePlus}>+</ControlButton>
    </ControlBox>
  );
};

const ControlButton = styled.div`
  font-size: 16px;
  border-radius: 50%;
  cursor: pointer;
`;

const ControlBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 92px;
  height: 28px;
  border: 1px solid;
  border-radius: 20px;
  color: ${({ theme: { colors } }) => colors.greenAccent};
  border-color: ${({ theme: { colors } }) => colors.greenAccent};
  user-select: none;

  @media (min-width: ${({ theme: { devices } }) => devices.tablet}) {
    width: 110px;
    height: 32px;
  }
`;
