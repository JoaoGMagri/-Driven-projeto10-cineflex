import styled from "styled-components";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Footer from "../components/Footer";
import ChooseSeats from "../components/ChooseSeats";

export default function Seats({setObj}) {

    let idMovie = useParams();
    idMovie = idMovie.idSessao;
    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idMovie}/seats`
    const navigate = useNavigate();

    const [movie, setMovie] = useState([]);
    const [seatMovie, setSeatMovie] = useState([]);
    const [objIdMovie, setObjIdMovie] = useState([]);
    const [objNameMovie, setObjNameMovie] = useState("");
    const [objCPFMovie, setObjCPFMovie] = useState("");

    console.log(objIdMovie);
    console.log(seatMovie);

    useEffect(() => {

        const promise = axios.get(URL);
        promise.then((pro) => {
            setMovie(pro.data);
        });
        promise.catch((err) => {
            console.log(err.response.data);
        });

    }, [URL]);

    function finish() {

        const obj1 = {
            ids: [...objIdMovie],
            name: objNameMovie,
            cpf: objCPFMovie
        }

        const obj2 = {
            title: movie.movie.title,
            day: movie.day.weekday,
            hour: movie.name,
            seat: seatMovie,
            name: objNameMovie,
            cpf: objCPFMovie
        }

        setObj(obj2);
        const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", obj1);
        promise.then(() => alert("Deu bom"));
        promise.catch(() => alert("Deu ruim"));

    }

    function submit(event) {
        finish();
        event.preventDefault();
        navigate("/sucesso");
    }

    if (movie.length === 0) {
        return (
            <ContainerSeats>
                <div>Carregando...</div>
            </ContainerSeats>
        )
    }

    return (

        <>
            <ContainerSeats>

                <h2>Selecione o(s) assento(s)</h2>

                <ContainerChooseSeats>

                    {movie.seats.map(item =>
                        <ChooseSeats
                            movie={item}
                            id={setObjIdMovie}
                            arrayId={objIdMovie}
                            seat={setSeatMovie}
                            arraySeat={seatMovie}
                            key={item.id}
                        />
                    )}

                </ContainerChooseSeats>

                <Subtitle>

                    <div>
                        <Chair estado="yellow" ></Chair>
                        <span>Selecionado</span>
                    </div>

                    <div>
                        <Chair estado="green" ></Chair>
                        <span>Disponível</span>
                    </div>

                    <div>
                        <Chair estado="grey" ></Chair>
                        <span>Indisponível</span>
                    </div>

                </Subtitle>

                <UserInformation id="form" onSubmit={submit}>

                    <span>Nome do comprador:</span>
                    <input
                        required
                        type="text"
                        placeholder="Digite seu nome..."
                        onChange={(item) => setObjNameMovie(item.target.value)}
                    />

                    <span>CPF do comprador:</span>
                    <input
                        required
                        type="text"
                        placeholder="Digite seu CPF..."
                        pattern="\d{3}.?\d{3}.?\d{3}-?\d{2}" 
                        onChange={(item) => setObjCPFMovie(item.target.value)}
                    />

                </UserInformation>

                <Confirmation form="form" type="submit">Reservar assento(s)</Confirmation>


            </ContainerSeats>

            <Footer img={movie.movie.posterURL} name={movie.movie.title} day={movie.day.weekday} hour={movie.name} />
        </>

    )

}

const ContainerSeats = styled.div`
    
    margin-top: 67px;
    margin-bottom: 117px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
const ContainerChooseSeats = styled.div`

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
    background-color: ${props => props.estado};
    border: 1px solid ;
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
const UserInformation = styled.form`

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