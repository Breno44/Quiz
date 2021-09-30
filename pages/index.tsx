import { useState } from "react";
import Questao from "../components/Questao";
import QuestaoModel from "../model/questao";
import RespostaModel from "../model/resposta";

const questaoMock = new QuestaoModel(1, "melhor cor?", [
  RespostaModel.errada("verde"),
  RespostaModel.errada("azul"),
  RespostaModel.errada("rosa"),
  RespostaModel.certa("preta"),
]);

export default function Home() {
  const [questao, setQuestao] = useState(questaoMock)

  function respostaFornecida(indice: number) {
    console.log(indice)
    setQuestao(questao.responderCom(indice))
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Questao valor={questao} respostaFornecida={respostaFornecida}/>
    </div>
  );
}
