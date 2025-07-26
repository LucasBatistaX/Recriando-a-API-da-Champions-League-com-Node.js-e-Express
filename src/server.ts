import createApp from "./app"

//Variavel só para chamar a função de inicialização do server.
const app = createApp()
// criei uma variavel ambiente para que fique facil de fazer manutenção.
const port = process.env.PORT

//Criando a porta de acesso com uma mensagem.
app.listen(port, () =>{
    console.log(`🔥 Server running at port http://localhost:${port}`)
})
