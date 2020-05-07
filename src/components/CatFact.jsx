import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, STATUS } from '../features/catFact';

const url = 'https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=2';

const CatFact = () => {
    const dispatch = useDispatch();
    const status = useSelector(state => state.catFact.status);
    let content = null;
    if( status === STATUS.NORMAL ) {
        content = 'Ready to get some facts!';
    }

    const handleClick = () => {
        dispatch(actions.isFetching());
        // göra AJAX
    }

    return (
        <div>
            <button onClick={handleClick}> Get fact! </button>
            {content}
        </div>
    )
}


export default CatFact;
