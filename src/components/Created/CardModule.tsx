import React from 'react';
import { ModulesInterface } from '../../redux/modules/ts/state';
import { useDispatch } from 'react-redux';
import { removeModule } from '../../redux/modules/actionCreators';

interface Props {
   content: ModulesInterface;
}

export const CardModule: React.FC<Props> = ({ content }) => {
   const dispatch = useDispatch();

   const [hover, setHover] = React.useState<boolean>(false);

   const onRemove = () => {
      dispatch(removeModule(content.id, content));
   };

   return (
      <>
         <span style={{ width: '100%' }}>{content.name}</span>
         <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            {hover && (
               <div className="card__hover">
                  <button onClick={onRemove}>
                     <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path
                           fillRule="evenodd"
                           d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        />
                     </svg>
                     Delete
                  </button>
               </div>
            )}
            <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
               <path
                  fillRule="evenodd"
                  d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
               />
            </svg>
         </div>
      </>
   );
};
