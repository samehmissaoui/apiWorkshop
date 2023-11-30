import { Route,Routes } from 'react-router-dom';

import Users from './Components/Users/Users';
import Profile from './Components/profile/Profie';
const App = () => {
  return (
    <div>
   <Routes>
   <Route path='/' element={<Users />} />
   <Route path='/user/:id' element={<Profile />} />  
   </Routes>
    </div>
  );
};

export default App;
