import React from 'react';
import { Bone as Drone, Camera, Compass, Target } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title }: { icon: any, title: string }) => (
  <div className="flex flex-col items-center p-6 text-center">
    <div className="mb-4">
      <Icon className="w-12 h-12 text-[#2374e1]" />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">
      Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </div>
);

const Services = () => {
  return (
    <div className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">
        INNOVATIVE DRONE FLIGHT CONTROL TRAINING
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        <ServiceCard icon={Drone} title="DRONE PILOTING" />
        <ServiceCard icon={Camera} title="PHOTOGRAPHY AND VIDEOGRAPHY" />
        <ServiceCard icon={Compass} title="PROFESSIONAL AIR NAVIGATION" />
        <ServiceCard icon={Target} title="TECHNICAL DRONE SERVICE" />
      </div>
    </div>
  );
};

export default Services;