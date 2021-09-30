import { useState } from "react";
import Questionario from "../components/Questionario";
import QuestaoModel from "../model/questao";
import RespostaModel from "../model/resposta";

const questaoMock = new QuestaoModel(1, "melhor cor?", [
  RespostaModel.errada("verde"),
  RespostaModel.errada("azul"),
  RespostaModel.errada("rosa"),
  RespostaModel.certa("preta"),
]);

export default function Home() {
  const [questao, setQuestao] = useState(questaoMock);

  function questaoRespondida(questao: QuestaoModel) {}

  function irPraProximoPasso() {}

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Questionario
        questao={questao}
        ultima={false}
        questaoRespondida={questaoRespondida}
        irPraProximoPasso={irPraProximoPasso}
      />
    </div>
  );
}
