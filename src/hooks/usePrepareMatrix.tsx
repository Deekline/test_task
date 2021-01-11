import { useEffect, useState } from 'react';

export const usePrepareMatrix = (size?: number) => {
  const [matrix, setMatrix] = useState<string[][] | []>([]);

  useEffect(() => {
    if (size) {
      const m = Array.from({ length: size }, (a, colIndex) =>
        Array.from(
          { length: size },
          (b, rowIndex) => `row ${colIndex + 1} col ${rowIndex + 1}`,
        ),
      );
      setMatrix(m);
    }
  }, [size]);

  return matrix;
};
