const artes = {

    "rosario": {

        numero: "01",

        nome: "Nossa Senhora do Rosário",

        subtitulo: "Uma expressão de devoção através da arte.",

        descricao:
            "Proposta visual desenvolvida para a coleção DOMUS Católic, trazendo Nossa Senhora do Rosário como elemento central da composição.",

        imagem:
            "ARTE_NOSSA_SENHORA_DO_ROSÁRIO_Prancheta 1.png",

        aplicacoes: {

            frente: {
                titulo: "Frente",
                descricao: "Visualização frontal da peça.",
                imagem: ""
            },

            verso: {
                titulo: "Verso",
                descricao: "Aplicação da composição no verso da peça.",
                imagem: ""
            },

            lado: {
                titulo: "Lateral",
                descricao: "Visualização lateral da peça.",
                imagem: ""
            },

            detalhe: {
                titulo: "Detalhe",
                descricao: "Detalhamento da aplicação da arte.",
                imagem: ""
            }

        }

    },


    "ave-maria": {

        numero: "02",

        nome: "Ave Maria",

        subtitulo: "Uma oração transformada em identidade.",

        descricao:
            "Proposta visual inspirada na oração Ave Maria, desenvolvida para integrar a linguagem contemporânea da DOMUS Católic.",

        imagem:
            "ARTE_AVE_MARIA_Prancheta 1.jpg",

        aplicacoes: {

            frente: {
                titulo: "Frente",
                descricao: "Visualização frontal da peça.",
                imagem: ""
            },

            verso: {
                titulo: "Verso",
                descricao: "Aplicação da composição no verso da peça.",
                imagem: ""
            },

            lado: {
                titulo: "Lateral",
                descricao: "Visualização lateral da peça.",
                imagem: ""
            },

            detalhe: {
                titulo: "Detalhe",
                descricao: "Detalhamento da aplicação da arte.",
                imagem: ""
            }

        }

    },


    "aparecida": {

        numero: "03",

        nome: "Nossa Senhora Aparecida",

        subtitulo: "Devoção brasileira em uma linguagem contemporânea.",

        descricao:
            "Proposta visual dedicada a Nossa Senhora Aparecida, desenvolvida para a coleção DOMUS Católic.",

        imagem:
            "ARTE_NOSSA_SENHORA_APARECIDA_01_Prancheta 1.png",

        aplicacoes: {

            frente: {
                titulo: "Frente",
                descricao: "Visualização frontal da peça.",
                imagem: ""
            },

            verso: {
                titulo: "Verso",
                descricao: "Aplicação da composição no verso da peça.",
                imagem: ""
            },

            lado: {
                titulo: "Lateral",
                descricao: "Visualização lateral da peça.",
                imagem: ""
            },

            detalhe: {
                titulo: "Detalhe",
                descricao: "Detalhamento da aplicação da arte.",
                imagem: ""
            }

        }

    }

};



/* =====================================================
   PÁGINA INDIVIDUAL DA ARTE
   ===================================================== */

const paginaArte = document.getElementById("paginaArte");


if (paginaArte) {

    const parametros =
        new URLSearchParams(
            window.location.search
        );


    const id =
        parametros.get("arte");


    const arte =
        artes[id] || artes["rosario"];



    paginaArte.innerHTML = `

        <section class="pagina-arte">


            <!-- VOLTAR -->

            <a
                href="index.html#colecao"
                class="voltar"
            >

                ← Voltar para coleção

            </a>



            <!-- TÍTULO -->

            <div class="titulo-arte">

                <p class="mini-titulo">

                    ARTE ${arte.numero}
                    · APRESENTAÇÃO

                </p>


                <h1>

                    ${arte.nome}

                </h1>


                <p>

                    ${arte.subtitulo}

                </p>

            </div>



            <!-- VISUAL PRINCIPAL -->

            <div class="visual-principal">


                <div class="mockup-principal">

                    <img
                        src="${arte.imagem}"
                        alt="${arte.nome}"
                    >

                </div>



                <div class="informacoes
