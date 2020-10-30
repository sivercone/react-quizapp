import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setModule } from '../redux/filter/actionCreators';
import { ModulesInterface } from '../redux/filter/ts/state';

export const Home: React.FC = () => {
   const dispatch = useDispatch();
   const [modules, setModules] = React.useState<[ModulesInterface]>();

   React.useEffect(() => {
      axios.get('/modules').then(({ data }) => setModules(data));
   }, []);

   return (
      <section className="modals-waves">
         <div className="modals container wrapper">
            {modules &&
               modules.map((content: ModulesInterface) => (
                  <Link onClick={() => dispatch(setModule(content))} to={`/learn/${content.id}`} key={content.id}>
                     <div className="card" style={{ flexDirection: 'column' }}>
                        <span>11 terms</span>
                        <h3>Module {content.name}</h3>
                     </div>
                  </Link>
               ))}
         </div>
      </section>
   );
};
