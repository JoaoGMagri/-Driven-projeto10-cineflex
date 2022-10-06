import styled from "styled-components";
import { useState } from "react";

export default function ChooseSeats({ movie, id, arrayId, seat, arraySeat }) {

    const [selected, setSelected] = useState("green");
    const [available, setAvailable] = useState(true);

    function select(parameter) {

        if (parameter) {
            setSelected("yellow");
            setAvailable(false);
            id([...arrayId, movie.id]);
            seat([...arraySeat, movie.name]);
        } else {
            setSelected("green");
            setAvailable(true);

            let newArray1 = arraySeat.filter((item) => item !== movie.name);
            seat([...newArray1]);

            let newArray2 = arrayId.filter((item) => item !== movie.id);
            id([...newArray2]);
        }

    }

    function occupied() {
        alert("Cadeira indisponível");
    }

    return (
        <>
            {movie.isAvailable ?
                (
                    <Chair
                        onClick={() => select(available)}
                        estado={selected}
                        type="button"
                        key={movie.id}
                    >
                        {movie.name}
                    </Chair>
                ) : (
                    <Chair
                        onClick={occupied}
                        estado="grey"
                        type="button"
                        key={movie.id}>
                        {movie.name}
                    </Chair>
                )
            }
        </>
    )

}

const Chair = styled.button`

    width: 26px;
    height: 26px; 
    background-color: ${props => props.estado};
    border: 1px solid ;
    border-radius: 12px;
    cursor: pointer;

`