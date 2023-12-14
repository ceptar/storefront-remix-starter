import React from 'react';

interface ColorLabelProps {
  labelText: string;
}

const getColorClass = (labelText: string): string => {
  // Replace spaces with hyphens and convert to lowercase
  const sanitizedLabelText = labelText.replace(/\s+/g, '-').toLowerCase();
  return `text-${sanitizedLabelText}`;
};

export const ColorLabel: React.FC<ColorLabelProps> = ({ labelText }) => {
  const colorClass = getColorClass(labelText);

  return (
    <span className={colorClass}>
      {labelText}
    </span>
  );
};
