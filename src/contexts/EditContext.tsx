import React from 'react';

export const EditContext = React.createContext(
  process.env.NODE_ENV && process.env.NODE_ENV === 'development',
);

export const EditProvider = EditContext.Provider;
