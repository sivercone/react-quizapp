import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../redux/questions/actionCreators';
import { RootState } from '../redux/store';
import { TermsInterface } from '../redux/questions/ts/state';

export const CreatedCards: React.FC = () => {
   const dispatch = useDispatch();
   const cardsItems = useSelector((state: RootState) => state.questions.items);
   const moduleId = useSelector((state: RootState) => state.filters.module.id);

   console.log(moduleId);
   React.useEffect(() => {
      dispatch(fetchCards(moduleId));
   }, [dispatch, moduleId]);

   return (
      <>
         <h2 className="terms-length">Terms in module ({cardsItems ? cardsItems.length : 0})</h2>
         <div className="cards-wrapper">
            {cardsItems &&
               cardsItems.map((content: TermsInterface) => (
                  <div key={content.id} className="card">
                     <span>{content.question}</span>
                     <div className="line-height"></div>
                     <span>{content.answer}</span>
                     <div>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                           <path
                              fillRule="evenodd"
                              d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                           />
                        </svg>
                     </div>
                  </div>
               ))}
         </div>
      </>
   );
};
