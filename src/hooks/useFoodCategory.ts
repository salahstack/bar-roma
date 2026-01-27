/**
 * React router dom modules
 */
import { useSearchParams } from 'react-router-dom';

const useFoodCategory = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeCategory = searchParams.get('category') || 'tutti';

  const updateCategory = (category: string) => {
    setSearchParams({ category });
  };

  return { activeCategory, updateCategory }
};

export { useFoodCategory };
