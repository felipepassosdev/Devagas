import React, { useState, useEffect } from 'react';
import axios from '../../services/api'
import { Cards, Title } from './styles';

// import { Container } from './styles';

interface Repository {
    html_url: string,
    body: string,
    title: string,
    labels: Array<any>,
    state: string
}


const Frontend: React.FC = () => {
    const [data, setData] = useState<Repository[]>([])

    const getApi = async () => {
        await axios.get(`repos/frontendbr/vagas/issues`)
            .then(function (response: any) {
                setData(response.data)
            })
    }

    useEffect(() => {
        getApi()
    }, [])

    return (
        <>
            <Title>Vagas: Frontend</Title>
            <Cards>
                {data.map((repo, index) => (
                    <li key={index}>
                        {/* <h2>{repo.state ? "Aberta" : "Fechado"}</h2> */}
                        <strong><a href={repo.html_url} target="_blank">{repo.title}</a></strong>

                        <div>{repo.labels.map(label => (
                            <div key={label.name}>
                                <p> #{label.name} </p>
                            </div>
                        ))}</div>
                    </li>
                ))}
            </Cards>
        </>
    );
}

export default Frontend;