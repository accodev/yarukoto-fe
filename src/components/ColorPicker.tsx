'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';

const colors = ["indigo", "yellow", "blue", "purple", "green", "red"];

interface ColorPickerProps {
  selectedColor: string;
  onChangeColor: (color: string) => void;
}

function ColorPicker({ selectedColor, onChangeColor }: ColorPickerProps) {
  const [isColorPickerVisible, setIsColorPickerVisible] = useState(false);

  return (
    <div className='relative z-10'>
      <button
        className='text-slate-500 transition-colors duration-200 hover:text-black'
        onClick={() => setIsColorPickerVisible(!isColorPickerVisible)}
      >
        <FontAwesomeIcon icon={faPalette} />
      </button>
      {isColorPickerVisible && (
        <div className='absolute bottom-full mb-2 flex space-x-2 bg-white p-2 rounded shadow'>
          {colors.map(color => (
            <button
              key={color}
              className={`w-6 h-6 rounded-full ${selectedColor === color ? `ring-2 ring-indigo-100` : ''} bg-${color}-100`}
              onClick={() => {
                onChangeColor(color);
                setIsColorPickerVisible(false);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export { ColorPicker };
