import React from 'react';
import { CreateCard } from '../components/CreateCard';
import { CreatedCards } from '../components/CreatedCards';

export const Create: React.FC = () => {
   return (
      <section className="cards-squares">
         <div className="container">
            <CreateCard />
            <CreatedCards />
         </div>
      </section>
   );
};
