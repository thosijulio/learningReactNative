import React from "react";
import { Text } from "react-native";
import estilo from "./estilo";

const MinMax: (props: { min: Number, max: Number }) => JSX.Element = ({ min, max }) => {
    return (
        <Text style={estilo.txtG}>
            {`O valor ${max} é maior que o valor ${min}`}
        </Text>
    )
}

export default MinMax;
