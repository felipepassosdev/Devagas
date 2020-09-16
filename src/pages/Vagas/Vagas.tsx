import React, { useState, useEffect } from 'react';
import axios from '../../services/api'

// import { Container } from './styles';

const getApi = async () => {
    await axios.get(`/vagas/issues`)
        .then(function (response: any) {
            console.log(response
                
                )
        })
}

const Vagas: React.FC = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        getApi()
    }, [])

  return <div />;
}

export default Vagas;