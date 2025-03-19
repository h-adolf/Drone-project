import React from 'react';

const PricingCard = ({ title, price, description }: { title: string, price: string, description: string }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg">
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <div className="text-3xl font-bold mb-4">${price}</div>
    <p className="text-gray-600 mb-6">Per course</p>
    <p className="text-gray-600 mb-6">{description}</p>
    <button className="bg-[#2374e1] text-white px-6 py-2 rounded hover:bg-[#1b5bb9] transition-colors">
      GET NOW
    </button>
  </div>
);

const PricingSection = () => {
  return (
    <div className="py-16 px-4 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">OUR PRICING TABLE</h2>
        <p className="text-gray-600">
          Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <PricingCard
          title="SILVER PACK"
          price="200.00"
          description="Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        />
        <PricingCard
          title="GOLD PACK"
          price="350.00"
          description="Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        />
        <PricingCard
          title="PLATINUM PACK"
          price="500.00"
          description="Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        />
      </div>
    </div>
  );
};

export default PricingSection;