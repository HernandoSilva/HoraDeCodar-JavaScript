function executarExercicio4() {
    alert(`Informe os valores de cada forma geométrica: retângulo, quadrado, losango, trapézio, paralelogramo, triângulo e círculo.`)

    // RETANGULO
    let baseRetangulo = parseFloat(prompt(`Digite a base do retangulo: `))
    let alturaRetangulo = parseFloat(prompt(`Digite a altura do retangulo: `))
    let resultadoRetangulo = baseRetangulo * alturaRetangulo;
    alert(`A área do retângulo é: ${resultadoRetangulo}.`)

    // QUADRADO
    let ladoQuadrado = parseFloat(prompt(`Digite o lado do quadrado: `))
    let resultadoQuadrado = ladoQuadrado ** 2;
    alert(`A área do quadrado é: ${resultadoQuadrado}.`)

    // LOSANGO
    let diagonalMaiorLosango = parseFloat(prompt(`Digite a diangonal maior do losango: `))
    let diagonalMenorLosango = parseFloat(prompt(`Digite a diangonal menor do losango: `))
    let resultadoLosango = (diagonalMaiorLosango * diagonalMenorLosango) / 2;
    alert(`A área do losango é: ${resultadoLosango}.`)

    //  TRAPÉZIO
    let baseMaiorTrapezio = parseFloat(prompt(`Digite a base maior do trapézio: `))
    let baseMenorTrapezio = parseFloat(prompt(`Digite a base menor do trapézio: `))
    let alturaTrapezio = parseFloat(prompt(`Digite a altura do trapézio: `))
    let resultadoTrapezio = ((baseMaiorTrapezio + baseMenorTrapezio) * alturaTrapezio) / 2;
    alert(`A área do trapézio é: ${resultadoTrapezio}.`)

    // PARALELOGRAMO
    let baseParalelogramo = parseFloat(prompt(`Digite a base do paralelogramo: `))
    let alturaParalelogramo = parseFloat(prompt(`Digite a altura do paralelogramo: `))
    let resultadoParalelogramo = baseParalelogramo * alturaParalelogramo;
    alert(`A área do paralelogramo é: ${resultadoParalelogramo}`)

    // TRIÂNGULO
    let baseTriangulo = parseFloat(prompt(`Digite a base do triângulo: `))
    let alturaTriangulo = parseFloat(prompt(`Digite a base do triângulo: `))
    let resultadoTriangulo = (baseTriangulo * alturaTriangulo) / 2;
    alert(`A área do triângulo é: ${resultadoTriangulo}.`)
    
    // CÍRCULO
    let raioCirculo = parseFloat(prompt(`Digite o raio do círculo: `))
    let resultadoCirculo = Math.PI * (raioCirculo ** 2)
    alert(`A área do círculo é: ${resultadoCirculo}.`)

    alert(`Todos os resultados a seguir: \n Retângulo: ${resultadoRetangulo} \n Quadrado: ${resultadoQuadrado} \n Losango: ${resultadoLosango} \n Trapézio: ${resultadoTrapezio} \n Paralelogramo: ${resultadoParalelogramo} \n Triângulo: ${resultadoTriangulo} \n Circulo: ${resultadoCirculo} `)


}