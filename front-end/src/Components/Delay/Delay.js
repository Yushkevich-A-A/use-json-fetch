import React from 'react';
import PropTypes from 'prop-types';
import useJsonFetch from '../../hocs/useJsonFetch';

function Delay(props) {
    const { url } = props;
    const [{data, loading, error}] = useJsonFetch(url);
    return (
        <div className='test-block delay'>
            <h2>Блок долгой закрузки</h2>
            {loading && <div className='loading'>Загрузка...</div>}
            {error && <div className='error'>{error}</div>}
            {data && <div className='data'>{data}</div>}
        </div>
    )
}

Delay.propTypes = {
    url: PropTypes.string.isRequired,
}

export default Delay

