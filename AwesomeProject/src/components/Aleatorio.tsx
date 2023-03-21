import { Text } from "react-native";

const Aleatorio: (props: { max: number, min: number}) => JSX.Element = ({ max, min }) => {
  return (
    <Text>O número aleatório é: {Math.floor(Math.random() * (max - min) + min)}</Text>
  )
}

export default Aleatorio;
