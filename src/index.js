import sum from "./calc"
import Heading from "./components/heading"

console.log("Testando o webpack 2")

sum(1, 5)
sum(9, 7)

//Loaders

const heading = new Heading()

heading.title("Treinamento Webpack basico")
heading.description("Erickson Martinez")
