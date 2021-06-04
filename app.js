const livros = require('./database.js')

livros.sort((a,b)=> {
    return a.paginas - b.paginas
})

const leitura = require("readLine-sync")
const livrosCategorias = leitura.question("Voce deseja esncontrar um livro por categoria?(S/N")

if(livrosCategorias.toLocaleUpperCase() == "S"){
    console.log("Essas são todas opções disponíveis")
    console.log("Auto Conhecimento", "Espirita", "Organizacao")

    const qualCategoria = leitura.question("Qual categoria voce escolhe?")
    const categoria = livros.filter(livros => livros.categoria == qualCategoria)

    console.log(categoria)
}else{
    const livrosrecomenda = leitura.question("Gostaria de escolher por recomendacao?(S?N")

if(livrosrecomenda.toLocaleUpperCase() == "S"){
    console.log("essas são as opcoes disponiveis")
    console.log( "true")
}else{
    
}

    console.log("Esses são todos as obras disponíveis:")
    console.log(livros)

}