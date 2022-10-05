import styled from "styled-components";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Seats() {

    const assentos = Array(50).fill('x');
    
    let idMovie = useParams();
    idMovie = idMovie.idSessao;
    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idMovie}/seats`
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
            <ContainerSeats>
                <div>Carregando...</div>
            </ContainerSeats>
        )
    }

    return (

        <ContainerSeats>

            <h2>Selecione o(s) assento(s)</h2>

            <ChooseSeats>
                {assentos.map((num, i) =>
                    <Chair
                        color="green"
                        type="button"
                        key={i}>
                        {num}
                    </Chair>
                )}
            </ChooseSeats>

            <Subtitle>

                <div>
                    <Chair color={"yellow"} ></Chair>
                    <span>Selecionado</span>
                </div>

                <div>
                    <Chair color={"green"} ></Chair>
                    <span>Disponível</span>
                </div>

                <div>
                    <Chair color={"grey"} ></Chair>
                    <span>Indisponível</span>
                </div>

            </Subtitle>

            <UserInformation>
                <span>Nome do comprador:</span>
                <input type="text" placeholder="Digite seu nome..."></input>

                <span>CPF do comprador:</span>
                <input type="text" placeholder="Digite seu CPF..."></input>
            </UserInformation>

            <Confirmation type="button">Reservar assento(s)</Confirmation>

        </ContainerSeats>

    )

}

const ContainerSeats = styled.div`
    
    margin-top: 67px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
const ChooseSeats = styled.div`

    width: 90%;
    gap: 7px;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

`
const Chair = styled.button`

    width: 26px;
    height: 26px; 
    background-color: ${props => props.color};
    border: 1px solid ${props => props.color};
    border-radius: 12px;
    cursor: pointer;

`
const Subtitle = styled.div`
    
    margin-top: 16px;
    gap: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    span{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        color: white;
    }

`
const UserInformation = styled.div`

    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 42px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;

    span{
        color: white;
    }
    input{
        width: 100%;
        height: 51px;
        color: black;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
    }

`
const Confirmation = styled.button`

    width: 225px;
    height: 42px;
    background: #E8833A;
    cursor: pointer;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #FFFFFF;
    
    border: 0px;
    border-radius: 3px;
    margin-top: 57px;

`