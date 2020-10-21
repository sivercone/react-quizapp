import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchAddCard } from '../redux/questions/actionCreators';

export const CreateCard: React.FC = () => {
   const dispatch = useDispatch();
   const [textQuestion, setTextQuestion] = React.useState<string>('');
   const [textAnswer, setTextAnswer] = React.useState<string>('');

   const handleChangeTextQuestion = (event: React.FormEvent<HTMLInputElement>) => {
      if (event.currentTarget) {
         setTextQuestion(event.currentTarget.value);
      }
   };
   const handleChangeTextAnswer = (event: React.FormEvent<HTMLInputElement>) => {
      if (event.currentTarget) {
         setTextAnswer(event.currentTarget.value);
      }
   };

   const createTerm = (event: React.FormEvent) => {
      event.preventDefault();

      if (!textQuestion.trim() || !textAnswer.trim()) {
         return;
      }

      dispatch(fetchAddCard(textQuestion, textAnswer));

      setTextQuestion('');
      setTextAnswer('');
   };

   return (
      <div className="card">
         <form onSubmit={createTerm} className="card__form">
            <input onChange={handleChangeTextQuestion} value={textQuestion} placeholder="Question" />
            <input onChange={handleChangeTextAnswer} value={textAnswer} placeholder="Answer" />
            <button onClick={createTerm}>Create</button>
         </form>
      </div>
   );
};
