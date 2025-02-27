"use client";

import React, { useEffect, useState } from "react";

const MyContext = React.createContext({});

export function MyContextProvider({children}: {children: React.ReactNode}) {
  const [time, setTime] = useState("");

 useEffect(() => {
    const interval = setInterval(() => setTime(String(new Date())), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <MyContext.Provider value={{time, setTime}}>
      <div>cool</div>
      {children}
    </MyContext.Provider>
  );
}

export const useMyContext = () => React.useContext(MyContext);
