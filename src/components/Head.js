//Funcionalidades
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Head() {

    return (

        <ContainerHead>
            <Link to="/">
                <span>CINEFLEX</span>
            </Link>
        </ContainerHead>

    )

}

const ContainerHead = styled.header`

    background-color: black;
    width: 100%;
    height: 67px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top:0;

    span{
        font-style: normal;
        font-weight: 400;
        font-size: 34px;
        color: #E8833A;
    }
    a{
        text-decoration: none;
    }

`