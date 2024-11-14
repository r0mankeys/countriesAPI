import React from 'react';

interface CountryGridProps {
  children: React.ReactNode;
}

function CountryGrid({ children }: CountryGridProps) {
  return (
    <div className="my-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-center mx-auto">
      {children}
    </div>
  );
}

export default CountryGrid;
