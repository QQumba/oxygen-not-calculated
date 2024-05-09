import { useState } from 'react';

type difficulty = 'survival' | 'noSweat';

export default function FoodSettings({
  duplicants,
  setDuplicants,
}: {
  duplicants: number;
  setDuplicants: (value: number) => void;
}) {
  const [bottomless, setBottomless] = useState(0);
  const [difficulty, setDifficulty] = useState<difficulty>('survival');

  return (
    <>
      <h1>Settings</h1>
      <div className="flex space-x-4">
        <div className="border p-4 rounded">
          Duplicants:{' '}
          <input
            type="number"
            value={duplicants}
            onChange={(e) => {
              const value = +e.target.value;
              if (value >= 0) {
                setDuplicants(value);
              }
            }}
          />
        </div>
        <div className="border p-4 rounded">Bottomless: {bottomless}</div>
        <div className="border p-4 rounded">Difficulty: {difficulty}</div>
      </div>
    </>
  );
}
