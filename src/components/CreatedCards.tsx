import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../redux/questions/actionCreators';

export const CreatedCards = () => {
   const dispatch = useDispatch();

   React.useEffect(() => {
      dispatch(fetchCards());
   }, [dispatch]);

   const cardsItems = useSelector((state: any) => state.questions.items);

   return (
      <>
         <h2>Terms in module ({cardsItems.length})</h2>
         <div className="cards-wrapper">
            {cardsItems.map((content: any) => (
               <div key={content.id} className="card">
                  <span>{content.question}</span>
                  <div className="card__space"></div>
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