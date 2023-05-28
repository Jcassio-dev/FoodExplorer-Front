import {Routes, Route} from 'react-router-dom';

import { Home } from '../pages/Home';
import { Add } from '../pages/Add';
import { Edit } from '../pages/Edit';


export function AdminRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/add" element={<Add/>}/>
            <Route path="/edit/:id" element={<Edit/>}/>
        </Routes>
    );
}