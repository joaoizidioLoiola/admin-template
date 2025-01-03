'use client';
import { createContext, useState } from 'react';

type Tema = 'dark' | '';

interface AppContextProps {
  tema?: Tema;
  alternarTema?: () => void;
}

const AppContext = createContext<AppContextProps>({
  // tema: '',
  // alternarTema: null,
});

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [tema, setTema] = useState<Tema>('dark');

  function alternarTema() {
    setTema(tema === '' ? 'dark' : '');
  }

  return (
    <AppContext.Provider
      value={{
        tema,
        alternarTema,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
