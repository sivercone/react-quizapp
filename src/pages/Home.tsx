import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { ModulesInterface } from '../redux/modules/ts/state';
import { setModule } from '../redux/modules/actionCreators';

export const Home: React.FC = () => {
   const dispatch = useDispatch();
   const [modules, setModules] = React.useState<[ModulesInterface]>();

   React.useEffect(() => {
      axios.get('/modules').then(({ data }) => setModules(data));
   }, []);

   return (
      <div className="modals">
         <div className="modals__columns container wrapper">
            {modules &&
               modules.map((content: ModulesInterface) => (
                  <Link
                     className="card"
                     onClick={() => dispatch(setModule(content))}
                     to={`/learn/${content.id}`}
                     key={content.id}>
                     <h3>Module «{content.name}»</h3>
                  </Link>
               ))}
         </div>
      </div>
   );
};
