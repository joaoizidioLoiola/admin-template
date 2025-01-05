'use client';
import { createContext, useEffect, useState } from 'react';

// type Tema = 'dark' | '';

interface AppContextProps {
  tema?: string | null;
  alternarTema?: () => void;
}

const AppContext = createContext<AppContextProps>({
  // tema: '',
  // alternarTema: null,
});

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [tema, setTema] = useState<string | null>('dark');

  function alternarTema() {
    const novoTema = tema === '' ? 'dark' : '';
    setTema(novoTema);
    localStorage.setItem('tema', novoTema);
  }

  useEffect(() => {
    const temaSalvo = localStorage.getItem('tema');
    setTema(temaSalvo);
  }, []);

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
