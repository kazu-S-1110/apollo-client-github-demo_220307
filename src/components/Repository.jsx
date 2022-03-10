import * as React from 'react';
import Card from '@mui/material/Card';
import { Link, Typography } from '@mui/material';
import styled from '@emotion/styled';

const RepositoryWrapper = styled(({ children, ...props }) => (
  <Card {...props}>{children}</Card>
))`
  border: 1px solid #ccc;
  max-width: 800px;
  margin: 0 auto 20px auto;
  text-align: left;
  padding: 10px;
`;

export const Repository = ({ url, name, starCount }) => {
  return (
    <RepositoryWrapper>
      <Typography>
        url: <Link href={url}>{url}</Link>
      </Typography>
      <Typography>name : {name}</Typography>
      <Typography>star : {starCount}</Typography>
    </RepositoryWrapper>
  );
};
