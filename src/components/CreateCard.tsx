import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { fetchAddCard } from '../redux/questions/actionCreators';
import { setModule } from '../redux/filter/actionCreators';
import { ModulesInterface } from '../redux/filter/ts/state';

export const CreateCard: React.FC = () => {
   const dispatch = useDispatch();
   const linkToPopup = React.useRef<HTMLDivElement>(null);

   const [textQuestion, setTextQuestion] = React.useState<string>('');
   const [textAnswer, setTextAnswer] = React.useState<string>('');
   const [modules, setModules] = React.useState<[ModulesInterface]>();
   const [currentModule, setCurrentModule] = React.useState<ModulesInterface>({ id: '0', name: '' });
   const [visiblePopup, setVisiblePopup] = React.useState<boolean>(false);

   const nonPopupClick = (event: any) => {
      const path = event.path || (event.composedPath && event.composedPath());
      if (!path.includes(linkToPopup.current)) {
         setVisiblePopup(false);
      }
   };

   React.useEffect(() => {
      axios.get('/modules').then(({ data }) => setModules(data));

      document.body.addEventListener('click', nonPopupClick);
   }, []);

   React.useEffect(() => {
      dispatch(setModule(currentModule));
      setVisiblePopup(false);
   }, [dispatch, currentModule]);

   const toggleVisiblePopup = () => {
      setVisiblePopup(!visiblePopup);
   };

   const handleChangeTextQuestion = (event: React.FormEvent<HTMLInputElement>) => {
      if (event.currentTarget) {
         setTextQuestion(event.currentTarget.value.toLowerCase().replace(/\s+/g, ' '));
      }
   };
   const handleChangeTextAnswer = (event: React.FormEvent<HTMLInputElement>) => {
      if (event.currentTarget) {
         setTextAnswer(event.currentTarget.value.toLowerCase().replace(/\s+/g, ' '));
      }
   };

   const createTerm = (event: React.FormEvent) => {
      event.preventDefault();

      if (currentModule.id === '0') {
         return;
      }

      if (!textQuestion.trim() || !textAnswer.trim()) {
         return;
      }

      dispatch(fetchAddCard(textQuestion, textAnswer, currentModule.id, currentModule.name));

      setTextQuestion('');
      setTextAnswer('');
   };

   /*
      TODO: 
     1. Сделать создание модулей.
   */

   return (
      <div className="create-term">
         <div ref={linkToPopup}>
            <div onClick={toggleVisiblePopup} className="card popup">
               <h4>{currentModule.id === '0' ? 'Select Module' : currentModule.name}</h4>
               <svg
                  className={visiblePopup ? 'rotate' : undefined}
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  fill="currentColor">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
               </svg>
            </div>
            {visiblePopup && (
               <div className="popup__visible">
                  <ul>
                     {modules &&
                        modules.map((content: ModulesInterface) => (
                           <li onClick={() => setCurrentModule(content)} key={content.id}>
                              {content.name}
                           </li>
                        ))}
                  </ul>
               </div>
            )}
         </div>
         <form onSubmit={createTerm} className="send-form card">
            <input onChange={handleChangeTextQuestion} value={textQuestion} placeholder="Question" />
            <input onChange={handleChangeTextAnswer} value={textAnswer} placeholder="Answer" />
            <button disabled={currentModule.id === '0' || !textQuestion.trim() || !textAnswer.trim()} onClick={createTerm}>
               Create
            </button>
         </form>
      </div>
   );
};
