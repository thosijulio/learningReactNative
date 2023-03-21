import React from "react";
import { Text } from "react-native";
import estilo from "./estilo";

export const Comp1: () => JSX.Element = () => {
    return (
        <Text style={estilo.txtG}>Comp #01</Text>
    )
}

export const Comp2: () => JSX.Element = () => {
    return (
        <Text style={estilo.txtG}>Comp #02</Text>
    )
}

const CompPadrao: () => JSX.Element = () => {
    return (
        <Text style={estilo.txtG}>Comp #Oficial</Text>
    )
}

export default CompPadrao;
