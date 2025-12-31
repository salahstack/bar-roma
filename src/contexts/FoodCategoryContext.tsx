/**
 * Node modules
 */
import {
  createContext,
  useCallback,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

/**
 * Interfaces
 */

interface initialContextValueInterface {
  updateCategory: (category: string) => void;
  activeCategory: string;
}

/**
 * Initial context value
 */

const initialContextValue: initialContextValueInterface = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateCategory: (_category) => {},
  activeCategory: '',
};

const FoodCategoryContext = createContext(initialContextValue);

/**
 * Food category provider
 */

const FoodCategoryProvider = ({ children }: { children: ReactNode }) => {
  const [activeCategory, setActiveCategory] = useState('Tutti');
  const updateCategory = useCallback(
    (category: string) => setActiveCategory(category),
    []
  );

  const contextValue = useMemo(
    () => ({
      updateCategory,
      activeCategory,
    }),
    [updateCategory, activeCategory]
  );
  return (
    <FoodCategoryContext value={contextValue}>{children}</FoodCategoryContext>
  );
};

export {
  FoodCategoryProvider,
  FoodCategoryContext
}