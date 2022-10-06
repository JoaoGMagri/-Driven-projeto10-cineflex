import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Success({ obj }) {

    if (!obj) {
        return (
            <ContainerSuccess>
                    <Link to={"/"}>
                        <button>Página principal</button>
                    </Link>
            </ContainerSuccess>
        )
    }

    return (
        <ContainerSuccess>

            <h1>Pedido feito com sucesso!</h1>

            <Summary>

                <Title>Filme e sessão</Title>
                <Info>{obj.title}</Info>
                <Info>{obj.day} {obj.hour}</Info>

                <Title>Ingressos</Title>
                {obj.seat.map((item, i) => <Info key={i}>Assento {item}</Info>)}

                <Title>Comprador</Title>
                <Info>Nome: {obj.name}</Info>
                <Info>CPF: {obj.cpf}</Info>

            </Summary>

            <Link to={"/"}>
                <button>Página principal</button>
            </Link>

        </ContainerSuccess>
    )

}

const ContainerSuccess = styled.div`
    margin-top: 67px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        margin: 25px auto;
        color: #247A6B;
    }
    button{
        margin-top: 20px;
        width: 200px;
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
const Summary = styled.div`
    width:95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`
const Title = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color:white;

    margin-bottom: 10px;
    margin-top: 15px;
`
const Info = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    color:white;
`