import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, STATUS } from '../features/catFact';


const CatFact = () => {
    const dispatch = useDispatch();
    const status = useSelector(state => state.catFact.status);
    const fact = useSelector(state => state.catFact.fact);

    let content = null;
    if( status === STATUS.NORMAL ) {
        content = 'Ready to get some facts!';
    } else if( status === STATUS.FETCHING ) {
        content = 'Waiting for data..........';
    } else if( status === STATUS.SUCCESS ) {
        content = fact;
        console.log('fact is:', fact);
    } else {
        content = 'Something went wrong. Could not retrieve fact.';
    }

    useEffect(() => {
        fetchFact(dispatch);
    }, [dispatch]);

    return (
        <div>
            <p>
            <button onClick={() => fetchFact(dispatch)}> Get fact! </button>
            </p>
            {content}
        </div>
    )
}


async function fetchFact(dispatch) {
    dispatch(actions.isFetching());
    // göra AJAX
    const url = 'https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=2';
    try {
        let response = await fetch(url);
        let json = await response.json();
        console.log('Got data:', json);
        let dataToKeep = json[0].text;
        dispatch(actions.success(dataToKeep));
    } catch {
        dispatch(actions.failure());
    }
}


export default CatFact;
