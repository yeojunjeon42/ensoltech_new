import React from 'react';

const Equipment: React.FC = () => {
  return (
    <div className="pt-24 p-10">
      <h1 className="text-4xl font-bold mb-6">Equipment</h1>
      <p className="mb-8">Our comprehensive equipment solutions for manufacturing excellence.</p>
      
      {/* Equipment content will go here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Equipment items will be rendered here */}
      </div>
    </div>
  );
};

export default Equipment;
