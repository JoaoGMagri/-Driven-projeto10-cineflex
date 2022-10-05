import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Main() {

    const [listaFilmes, setListaFilmes] = useState([]);

    useEffect(() => {

        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then((pro) => {
            setListaFilmes(pro.data);
        });
        promise.catch((err) => {
            console.log(err.response.data);
        });

    }, []);

    if (listaFilmes.length === 0) {
        return (
            <ContainerHome>
                <div>Carregando...</div>
            </ContainerHome>
        )
    }

    return (
        <ContainerHome>

            <h2>Escolha um filme</h2>

            <Posters>

                {listaFilmes.map( item =>
                    <Link to={"/sessoes/"+item.id} key={item.id}>
                        <CardPosters>
                            <img src={item.posterURL} alt={item.title} />
                        </CardPosters>
                    </Link>
                )}

            </Posters>

        </ContainerHome>
    )

}

const ContainerHome = styled.div`
    margin-top: 67px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Posters = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

`
const CardPosters = styled.div`

    background-color: white;
    width: 145px;
    height: 209px;
    cursor: pointer;
    
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 11px 0px;
    border-radius: 5px;

    img{
        width: 129px;
        height: 193px;
    }

`