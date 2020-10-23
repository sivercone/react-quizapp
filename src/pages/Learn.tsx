import React from 'react';

export const Learn: React.FC = () => {
   const [term, setTerm] = React.useState<any>([]); // all terms keep here
   const [incorrect, setIncorrect] = React.useState<any>([]); // wrong answers keep here
   const [text, setText] = React.useState<string>('');
   const [indexArr, setIndexArr] = React.useState<number>(0);
   const [score, setScore] = React.useState<number>(0);
   const [value, setValue] = React.useState<'correct' | 'wrong' | 'end'>();
   const [nextStage, setNextStage] = React.useState<boolean>(false);

   React.useEffect(() => {
      fetch('/terms')
         .then((response) => response.json())
         .then((data) => {
            setTerm(data.sort(() => Math.random() - 0.5));
         });
   }, []);

   const endScore: number = 100 - Math.round((incorrect.length / term.length) * 100);
   const scorePercent: number = Math.round((score / term.length) * 100);
   const progressbarStyle = {
      width: scorePercent + '%',
   };
   const delTerm = (): void => {
      setIncorrect(incorrect.filter((obj: any, i: number) => obj !== incorrect[i]));
   };

   const handleChangeText = (event: React.FormEvent<HTMLInputElement>) => {
      if (event.currentTarget) {
         setText(event.currentTarget.value.toLowerCase().replace(/\s+/g, ' '));
      }
   };

   const checkAnswer = (event: React.FormEvent) => {
      event.preventDefault();
      setText(text.trim());

      if (!text.trim()) {
         return;
      }

      //checking correct answer
      if (text !== term[indexArr].question) {
         setIncorrect([...incorrect, term[indexArr]]);
         return setValue('wrong');
      }

      setIncorrect(incorrect.filter((obj: any, index: any) => incorrect.indexOf(obj) === index));

      // checking length end
      if (indexArr < term.length - 1) {
         if (nextStage) {
            delTerm();
         }
         setValue('correct');
         setScore(score + 1);
         setTimeout(() => {
            setIndexArr(indexArr + 1);
            setValue(undefined);
            setText('');
         }, 1350);
      } else {
         if (nextStage) {
            delTerm();
         }
         setValue('correct');
         setScore(score + 1);
         setTimeout(() => {
            setIndexArr(0);
            setText('');
            setValue('end');
         }, 1350);
      }
   };

   const goNextStage = () => {
      setTerm(incorrect);
      setValue(undefined);
      setNextStage(true);
      setScore(0);
   };
   const onRestart = () => {
      window.location.reload();
   };

   return (
      <div className="container-learn">
         {value === 'end' ? (
            <div className="learn__end">
               {incorrect.length > 0 ? (
                  <>
                     <h1>General knowledge of the material {endScore}%</h1>
                     <button onClick={goNextStage}>Continue</button>
                  </>
               ) : (
                  <>
                     <h1>Congratulations! You have passed all the material!</h1>
                     <button onClick={onRestart}>Restart</button>
                  </>
               )}
            </div>
         ) : term.length > 0 ? (
            <div className={value === 'correct' ? 'learn correct' : value === 'wrong' ? 'learn wrong' : 'learn'}>
               <div className="learn__progressbar">
                  <div className="learn__progressbar__progress" style={progressbarStyle}></div>
               </div>
               <div className="learn__content">
                  <div>
                     <span>{incorrect[indexArr] ? incorrect[indexArr].answer : term[indexArr].answer}</span>
                     {value === 'wrong' ? (
                        <>
                           <span className="space"></span>
                           <span className="correctAnswerIs">correct answer</span>
                           <span>{term[indexArr].question}</span>
                        </>
                     ) : undefined}
                  </div>
                  <form onSubmit={checkAnswer} className="card__form">
                     <input onChange={handleChangeText} value={text} />
                     <button onClick={checkAnswer}>{value === 'correct' ? 'Correct' : 'Answer'}</button>
                  </form>
               </div>
            </div>
         ) : (
            <div className="lds-roller">
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
            </div>
         )}
      </div>
   );
};
