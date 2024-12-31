'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';

const colors = ["indigo", "yellow", "blue", "purple", "green", "red"];

interface ColorPickerProps {
  selectedColor: string;
  onChangeColor: (color: string) => void;
  className: string;
}

function ColorPicker({ selectedColor, onChangeColor, className }: ColorPickerProps) {
  const [isColorPickerVisible, setIsColorPickerVisible] = useState(false);

  return (
    <div className='relative z-10'>
      <button
        className={className}
        onClick={() => setIsColorPickerVisible(!isColorPickerVisible)}
      >
        <FontAwesomeIcon icon={faPalette} />
      </button>
      {isColorPickerVisible && (
        <div className='absolute bottom-full mb-2 flex space-x-2 bg-white p-2 rounded shadow right-0'>
          {colors.map(color => (
            <button
              key={color}
              className={`w-6 h-6 rounded-full ${selectedColor === color ? `ring-2 ring-slate-500` : ''} bg-${color}-100 transition duration-300 ease-in-out hover:ring-2 hover:ring-slate-500`}
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
