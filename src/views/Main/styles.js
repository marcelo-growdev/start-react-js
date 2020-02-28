import styled from 'styled-components';
import { Button, TextField } from '@material-ui/core';

export const Card = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 20px;
  min-height: 500px;
  width: 90%;
  margin: 50px auto;
`;

export const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 20px;
`;

export const ItemName = styled.span`
  font-size: 20px;
  margin-right: 5px;
`;

export const RemoveButton = styled(Button)`
  && {
    background-color: #de103d;
    color: #fff;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    padding: 7px 14px;
    &:hover {
      background-color: #f1728e;
    }
  }
`;

export const SendButton = styled(Button)`
  && {
    background-color: #097f07;
    color: #fff;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    padding: 7px 14px;
    &:hover {
      background-color: #7ae878;
    }
  }
`;

export const CustomInput = TextField;
