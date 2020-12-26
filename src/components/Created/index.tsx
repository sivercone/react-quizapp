import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../redux/store';
import { fetchCards } from '../../redux/cards/actionCreators';
import { ModulesInterface } from '../../redux/modules/ts/state';
import { TermsInterface } from '../../redux/cards/ts/state';

import { CardTerm } from './CardTerm';
import { CardModule } from './CardModule';
import { Loader } from '../Loader';

interface Props {
   visibleModulesEdit: boolean;
   modules: [ModulesInterface];
}

export const Created: React.FC<Props> = ({ visibleModulesEdit, modules }) => {
   const dispatch = useDispatch();
   const cardsItems = useSelector((state: RootState) => state.questions.items);
   const modulesId = useSelector((state: RootState) => state.filters.items.id);
   const isLoaded = useSelector((state: RootState) => state.questions.loadingState);

   React.useEffect(() => {
      if (modulesId) {
         dispatch(fetchCards(modulesId));
      }
   }, [dispatch, modulesId]);

   return (
      <>
         <h2 className="cards__termsLength">
            {visibleModulesEdit ? 'Modules' : modulesId === '0' ? 'Terms' : 'Terms in module'} (
            {visibleModulesEdit ? modules.length : cardsItems ? cardsItems.length : 0})
         </h2>
         {isLoaded === 'LOADED' ? (
            <div className="cards__wrapper">
               {visibleModulesEdit
                  ? modules.map((content: ModulesInterface) => (
                       <div key={content.id} className="card">
                          <CardModule content={content} />
                       </div>
                    ))
                  : cardsItems.map((content: TermsInterface) => (
                       <div key={content.id} className="card">
                          <CardTerm content={content} />
                       </div>
                    ))}
            </div>
         ) : (
            <div className="wrapper">
               <Loader />
            </div>
         )}
      </>
   );
};
