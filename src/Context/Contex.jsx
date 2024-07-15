import { createContext, useState } from "react";

export const GlobalContext = createContext();

const Context = ({ children }) => {
  const [originalValue, setOriginalValue] = useState([]); // Estado para almacenar el valor original
  const [value, setValue] = useState([]); // Estado para el valor actual filtrado o no filtrado

  // Función para establecer el valor original
  const setInitialValue = (initialValue) => {
    setOriginalValue(initialValue);
    setValue(initialValue); // También establece el valor actual al valor inicial
  };

  // Función para filtrar por nombre de evento
  const filterValue = (evento) => {
    // Verificar si evento está presente (no vacío ni null ni undefined)
    if (evento.trim() === "") {
      // Si el input está vacío, restaurar el valor original
      setValue(originalValue);
    } else {
      // Filtrar por nombre del evento
      const filteredValues = originalValue.filter((item) =>
        item.name.toLowerCase().includes(evento.toLowerCase())
      );
      setValue(filteredValues);
    }
  };

  return (
    <GlobalContext.Provider value={{ value, setInitialValue, filterValue,originalValue }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Context;
