import React from 'react';
import { Typography } from '@material-ui/core';

type StatusMessageProps = {
  working: boolean;
  session: boolean;
};

export const StatusMessage: React.FC<StatusMessageProps> = (
  props: StatusMessageProps
) => {
  const { working, session } = props;
  if (session === false) return <React.Fragment />;
  return (
    <>
      {working ? (
        <Typography variant="h5">作業中</Typography>
      ) : (
        <Typography variant="h5" color="secondary">
          休憩中
        </Typography>
      )}
    </>
  );
};

export default StatusMessage;
