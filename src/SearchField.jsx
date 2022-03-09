import { Button, TextField } from '@mui/material';
import * as React from 'react';
import _ from 'lodash';
import styled from '@emotion/styled';
import { Mutation } from 'react-apollo';
import { changeSearchText } from './mutations';

const TextFieldWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  background: #fff;
  padding: 20px;
`;

export const SearchField = ({ text, onSearchRepository }) => {
  const [inputText, setInputText] = React.useState('');

  return (
    <Mutation mutation={changeSearchText} variables={{ text: text }}>
      {(changeSearchText) => {
        const handleInputEnter = (e) => {
          setInputText(e.target.value);
          changeSearchText({ variables: { text: e.target.value } });
          if (e.keyCode === 13) {
            onSearchRepository(inputText);
          }
        };

        const handleSearchButtonClick = () => {
          onSearchRepository(inputText);
        };

        return (
          <TextFieldWrapper>
            <TextField
              label={'検索'}
              value={inputText}
              onChange={handleInputEnter}
              onKeyDown={handleInputEnter}
            />
            <Button
              variant={'contained'}
              color={'secondary'}
              disabled={_.isEmpty(inputText)}
              onClick={handleSearchButtonClick}
            >
              検索
            </Button>
          </TextFieldWrapper>
        );
      }}
    </Mutation>
  );
};
