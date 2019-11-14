import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/misc/404.scss';

const NotFound = ()=>(
    <React.Fragment>
        <div className="notfound">
            <h1>404 No encontrado</h1>    
            <h3>Regresa al <Link to="/">home</Link></h3>
        </div>
    </ React.Fragment>
);

export default NotFound;