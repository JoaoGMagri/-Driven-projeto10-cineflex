import styled from "styled-components";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Sessions() {

    let idMovie = useParams();
    idMovie = idMovie.idFilme;
    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`
    const [movie, setMovie] = useState([]);

    useEffect(() => {

        const promise = axios.get(URL);
        promise.then((pro) => {
            setMovie(pro.data);
        });
        promise.catch((err) => {
            console.log(err.response.data);
        });

    }, [URL]);

    if (movie.length === 0) {
        return (
            <ContainerSessions>
                <div>Carregando...</div>
            </ContainerSessions>
        )
    }

    return (
        <ContainerSessions>

            <h2>Selecione o horário</h2>

            {movie.days.map((item, i) => 
                <Given key={i}>
                    <Days>{item.weekday} - {item.date}</Days>
                    <Schedules>
                        <Link to={"/assentos/"+item.showtimes[0].id}>
                            <button type="button">{item.showtimes[0].name}</button>
                        </Link>
                        <Link to={"/assentos/"+item.showtimes[1].id}>
                            <button type="button">{item.showtimes[1].name}</button>
                        </Link>
                    </Schedules>
                </Given>
            )}
            
        </ContainerSessions>
    )

}

const ContainerSessions = styled.div`

    margin-top: 67px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`
const Given = styled.div`
    width: 95%;
`
const Days = styled.div`

    display:flex;
    justify-content: flex-start;
    align-items: center;

    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: white;

    margin-top: 20px;
    margin-bottom: 15px;

`
const Schedules = styled.div`

    display:flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;  
    margin-bottom: 20px;

    button{
        width: 83px;
        height: 43px;
        background: #E8833A;
        cursor: pointer;

        border: 0px;
        border-radius: 3px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: white;
    }

`