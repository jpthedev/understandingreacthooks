import React from 'react';

const userContext = React.createContext();

const userProvider = userContext.Provider;
const userConsumer = userContext.Consumer;

export { userConsumer, userProvider }