import QuestaoModel from "../../model/questao";
import RespostModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
  new QuestaoModel(306, 'Qual bicho transmite doenças de chagas?', [
    RespostModel.errada('Abelha'),
    RespostModel.errada('Barata'),
    RespostModel.errada('Pulga'),
    RespostModel.certa('Barbeiro') 
  ]),
  new QuestaoModel(202, 'Qual fruto é conhecido n oNorte e Nordeste como "jerium"?', [
    RespostModel.errada('Caju'),
    RespostModel.errada('Côco'),
    RespostModel.errada('Chuchu'),
    RespostModel.certa('Abóbora') 
  ]),
  new QuestaoModel(203, 'Qual o coletivo de cães?', [
    RespostModel.errada('Manada'),
    RespostModel.errada('Alcateia'),
    RespostModel.errada('Rebanho'),
    RespostModel.certa('Matilha') 
  ]),
  new QuestaoModel(204, 'Qual é o triangulo que ten todos os lados diferentes?', [
    RespostModel.errada('Equilátero'),
    RespostModel.errada('Isóceles'),
    RespostModel.errada('Trapézio'),
    RespostModel.certa('Escaleno') 
  ]),
]

export default questoes