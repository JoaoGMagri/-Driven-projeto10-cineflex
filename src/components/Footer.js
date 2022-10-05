import styled from "styled-components";

export default function Footer({ img, name, day, hour }) {

    return (

        <ContainerFooter>

            <BorderImage>
                <img src={img} alt={name} />
            </BorderImage>

            <InformationImage>
                <h1>{name}</h1>
                {(day === "") ? (
                    ""
                ) : (
                    <>
                        <h1> {day} - {hour} </h1>
                    </>
                )}
            </InformationImage>

        </ContainerFooter>

    )

}

const ContainerFooter = styled.div`

    width: 100%;
    height: 117px;
    position: fixed;
    bottom: 0;
    left: 0;

    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #9EADBA;

`
const BorderImage = styled.div`
    background-color: white;
    width: 64px;
    height: 89px;
    cursor: pointer;
    
    display: flex;
    justify-content: center;
    align-items: center;

    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;

    img{
        width: 48px;
        height: 72px;
    }
`
const InformationImage = styled.div`
    word-break: normal;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;

`