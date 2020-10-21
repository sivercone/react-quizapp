import React from 'react';
import { CreateCard } from '../components/CreateCard';
import { CreatedCards } from '../components/CreatedCards';

export const Create: React.FC = () => {
   return (
      <div className="container-create">
         <CreateCard />
         <CreatedCards />
      </div>
   );
};
