import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setModule } from '../redux/filter/actionCreators';

export const Home: React.FC = () => {
   const dispatch = useDispatch();
   const [modules, setModules] = React.useState<any>([]);

   React.useEffect(() => {
      fetch('/modules')
         .then((response) => response.json())
         .then((data) => {
            setModules(data);
         });
   }, []);

   return (
      <div className="home-container">
         {modules &&
            modules.map((content: any) => (
               <Link onClick={() => dispatch(setModule(content))} to={'/learn'} key={content.id}>
                  <div className="card" style={{ flexDirection: 'column' }}>
                     <span>11 terms</span>
                     <h3>Module {content.name}</h3>
                  </div>
               </Link>
            ))}
      </div>
   );
};
