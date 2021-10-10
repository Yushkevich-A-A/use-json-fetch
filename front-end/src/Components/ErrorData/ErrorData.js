import React from 'react';
import PropTypes from 'prop-types';
import useJsonFetch from '../../hocs/useJsonFetch';

function ErrorData(props) {
    const { url } = props;
    const [{data, loading, error}] = useJsonFetch(url);
    return (
            <div className='test-block error-block'>
                <h2>Блок ошибки</h2>
                {loading && <div className='loading'>Загрузка...</div>}
                {error && <div className='error'>{error}</div>}
                {data && <div className='data'>{data}</div>}
            </div>
    )
}

ErrorData.propTypes = {
    url: PropTypes.string.isRequired,
}

export default ErrorData

