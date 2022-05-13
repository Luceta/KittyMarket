import React, { useState, createContext, ReactChild, Props } from "react";

const ProgressContext = createContext({
  inProgress: false,
  spinner: () => {},
});

const ProgressProvider = ({ children }: { children: React.ReactNode }) => {
  const [inProgress, setInProgress] = useState(false);
  const spinner = {
    start: () => setInProgress(true),
    stop: () => setInProgress(false),
  };

  const value = { inProgress, spinner };
  return <ProgressContext.Provider value={value} children={children} />;
};

export { ProgressContext, ProgressProvider };
