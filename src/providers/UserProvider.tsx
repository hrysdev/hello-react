import React, { useState, useContext } from "react";
import { createContext } from "react";

type Context = { name?: string; changeName: (v: string) => void };

const init: Context = {
  name: undefined,
  changeName: (_v) => {},
};

const UserContext = createContext<Context>(init);

type Props = { children: React.ReactNode };

export default function UserProvider(props: Props) {
  const [name, setName] = useState<string | undefined>(undefined);
  const changeName = setName;

  return (
    <UserContext.Provider value={{ name, changeName }}>
      {props.children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
