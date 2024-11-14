import { useState } from 'react';
import type { Theme } from '../../src/types';

function useThemeToggle(initialValue: Theme) {
  const [value, setValue] = useState<Theme>(initialValue);

  function toggleValue(newValue?: Theme) {
    if (newValue !== undefined) {
      setValue(newValue);
    } else {
      setValue((prev: Theme): Theme => (prev === 'light' ? 'dark' : 'light'));
    }
  }

  return [value, toggleValue] as const;
}

export default useThemeToggle;
