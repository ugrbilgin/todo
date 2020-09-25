import React from 'react';

export default ({ list }) => {
    return (
        <div>
            <ul className="list-group">
                {list.map((i,k)=><ListItem {...i} /> )}
            </ul>
        </div>
    );
};

const ListItem = ({todo,checked,id}) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {todo}<button>{checked?'done':'waiting'}</button>
        </li>
    );
};