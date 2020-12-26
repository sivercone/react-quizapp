import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { ModulesInterface } from '../redux/modules/ts/state';
import { fetchAddModule, setModule } from '../redux/modules/actionCreators';
import { Created } from './Created/';
import { fetchAddCard } from '../redux/cards/actionCreators';

export const Create: React.FC = () => {
   const dispatch = useDispatch();
   const linkToPopup = React.useRef<HTMLDivElement>(null);

   const [textQuestion, setTextQuestion] = React.useState<string>('');
   const [textAnswer, setTextAnswer] = React.useState<string>('');
   const [textModule, setTextModule] = React.useState<string>('');
   const [modules, setModules] = React.useState<[ModulesInterface]>(Object);
   const [currentModule, setCurrentModule] = React.useState<ModulesInterface>({ id: '0', name: '' }); // ¯\_(ツ)_/¯
   const [visiblePopup, setVisiblePopup] = React.useState<boolean>(false);
   const [visibleModulesEdit, setVisibleModulesEdit] = React.useState<boolean>(false);

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

   const toggleVisibleModulesEdit = () => {
      setVisibleModulesEdit(!visibleModulesEdit);
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
   const handleChangeTextModule = (event: React.FormEvent<HTMLInputElement>) => {
      if (event.currentTarget) {
         setTextModule(event.currentTarget.value.replace(/\s+/g, ' '));
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

   const createModule = (event: React.FormEvent) => {
      event.preventDefault();
      if (!textModule.trim()) {
         return;
      }

      dispatch(fetchAddModule(textModule));
      setTextModule('');
   };

   return (
      <div className="cards">
         <div className="container">
            <div className="cards__create">
               <div className="modulePopup" ref={linkToPopup}>
                  <button onClick={toggleVisiblePopup} className="card">
                     <span>{currentModule.id === '0' ? 'Select Module' : currentModule.name}</span>
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
                  </button>
                  {visiblePopup && (
                     <div className="modulePopup__list">
                        <ul>
                           {modules &&
                              modules.map((content: ModulesInterface) => (
                                 <li
                                    onClick={() => setCurrentModule(content)}
                                    key={content.id}
                                    className={currentModule.id === content.id ? 'active' : undefined}>
                                    {content.name}
                                 </li>
                              ))}
                        </ul>
                     </div>
                  )}
               </div>

               <div className="cards__addContent">
                  {visibleModulesEdit ? (
                     <form onSubmit={createModule} className="sendForm card">
                        <input onChange={handleChangeTextModule} value={textModule} placeholder="Module" />
                        <button disabled={!textModule.trim()} onClick={createModule}>
                           Create
                        </button>
                     </form>
                  ) : (
                     <form onSubmit={createTerm} className="sendForm card">
                        <input onChange={handleChangeTextQuestion} value={textQuestion} placeholder="Question" />
                        <input onChange={handleChangeTextAnswer} value={textAnswer} placeholder="Answer" />
                        <button
                           disabled={currentModule.id === '0' || !textQuestion.trim() || !textAnswer.trim()}
                           onClick={createTerm}>
                           Create
                        </button>
                     </form>
                  )}
                  <div onClick={toggleVisibleModulesEdit} className="toggleModule">
                     <button>
                        {visibleModulesEdit ? (
                           <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                 fillRule="evenodd"
                                 d="M9.828 4H2.19a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91H9v1H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181L15.546 8H14.54l.265-2.91A1 1 0 0 0 13.81 4H9.828zm-2.95-1.707L7.587 3H2.19c-.24 0-.47.042-.684.12L1.5 2.98a1 1 0 0 1 1-.98h3.672a1 1 0 0 1 .707.293z"
                              />
                              <path
                                 fillRule="evenodd"
                                 d="M11.146 10.146a.5.5 0 0 1 .708 0L13 11.293l1.146-1.147a.5.5 0 0 1 .708.708L13.707 12l1.147 1.146a.5.5 0 0 1-.708.708L13 12.707l-1.146 1.147a.5.5 0 0 1-.708-.708L12.293 12l-1.147-1.146a.5.5 0 0 1 0-.708z"
                              />
                           </svg>
                        ) : (
                           <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                 fillRule="evenodd"
                                 d="M9.828 4H2.19a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91H9v1H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181L15.546 8H14.54l.265-2.91A1 1 0 0 0 13.81 4H9.828zm-2.95-1.707L7.587 3H2.19c-.24 0-.47.042-.684.12L1.5 2.98a1 1 0 0 1 1-.98h3.672a1 1 0 0 1 .707.293z"
                              />
                              <path
                                 fillRule="evenodd"
                                 d="M13.5 10a.5.5 0 0 1 .5.5V12h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V13h-1.5a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z"
                              />
                           </svg>
                        )}
                     </button>
                  </div>
               </div>
            </div>
            <Created visibleModulesEdit={visibleModulesEdit} modules={modules} />
         </div>
      </div>
   );
};
