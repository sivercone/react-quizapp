import React from 'react';

export const Learn: React.FC = () => {
   const [term, setTerm] = React.useState<any>([]);
   const [text, setText] = React.useState<string>('');
   const [index, setIndex] = React.useState<number>(0);
   const [score, setScore] = React.useState<number>(0);
   const [value, setValue] = React.useState<'correct' | 'wrong' | 'end'>();

   const scorePercent: number = Math.round((score / term.length) * 100);
   const progressbarStyle = {
      width: scorePercent + '%',
   };

   React.useEffect(() => {
      fetch('/terms')
         .then((response) => response.json())
         .then((data) => {
            setTerm(data);
         });
   }, []);

   const handleChangeText = (event: React.FormEvent<HTMLInputElement>) => {
      if (event.currentTarget) {
         setText(event.currentTarget.value);
      }
   };

   const checkAnswer = (event: React.FormEvent) => {
      event.preventDefault();

      if (!text.trim()) {
         return;
      }

      //checking correct answer
      if (text !== term[index].question) {
         return setValue('wrong');
      }

      // checking length, чтобы не поламалось
      if (index < term.length - 1) {
         setValue('correct');
         setScore(score + 1);
         setTimeout(() => {
            setIndex(index + 1);
            setValue(undefined);
            setText('');
         }, 1350);
      } else {
         setValue('correct');
         setScore(score + 1);
         setTimeout(() => {
            setIndex(0);
            setText('');
            setValue('end');
         }, 1350);
      }
   };

   /*
      TODO:
      1.Решить с проблему: увелечние блока когда 'wrong'
      2. Добавить спинер заместь надписи Loading
      3. Добавить счетчик неправльных ответов
   */

   return (
      <div className="container-learn">
         {value === 'end' ? (
            <h1>END</h1>
         ) : term.length > 0 ? (
            <div className={value === 'correct' ? 'learn correct' : value === 'wrong' ? 'learn wrong' : 'learn'}>
               <div className="learn__progressbar">
                  <div className="learn__progressbar__progress" style={progressbarStyle}></div>
               </div>
               <div className="learn__content">
                  <span>{term[index].answer}</span>
                  {value === 'wrong' ? (
                     <>
                        <span className="space"></span>
                        <span className="correctAnswerIs">correct answer</span>
                        <span>{term[index].question}</span>
                     </>
                  ) : undefined}
                  <form onSubmit={checkAnswer} className="card__form">
                     <input onChange={handleChangeText} value={text} />
                     <button onClick={checkAnswer}>{value === 'correct' ? 'Correct' : 'Answer'}</button>
                  </form>
               </div>
            </div>
         ) : (
            <h1>Loading</h1>
         )}
      </div>
   );
};
