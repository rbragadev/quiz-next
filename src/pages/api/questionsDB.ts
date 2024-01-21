import QuestionModel from '../../../model/question';
import AnswerModel from '../../../model/answer';

const questions: QuestionModel[] = [
  new QuestionModel(306, 'Qual bicho transmite a Doença de Chagas?', [
    AnswerModel.errada('Abelha'),
    AnswerModel.errada('Barata'),
    AnswerModel.errada('Pulga'),
    AnswerModel.certa('Barbeiro'),
  ]),
  new QuestionModel(
    202,
    'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?',
    [
      AnswerModel.errada('Caju'),
      AnswerModel.errada('Côco'),
      AnswerModel.errada('Chuchu'),
      AnswerModel.certa('Abóbora'),
    ],
  ),
  new QuestionModel(203, 'Qual é o coletivo de cães?', [
    AnswerModel.errada('Manada'),
    AnswerModel.errada('Alcateia'),
    AnswerModel.errada('Rebanho'),
    AnswerModel.certa('Matilha'),
  ]),
  new QuestionModel(
    204,
    'Qual é o triângulo que tem todos os lados diferentes?',
    [
      AnswerModel.errada('Equilátero'),
      AnswerModel.errada('Isóceles'),
      AnswerModel.errada('Trapézio'),
      AnswerModel.certa('Escaleno'),
    ],
  ),
  new QuestionModel(205, 'Quem compôs o Hino da Independência?', [
    AnswerModel.errada('Castro Alves'),
    AnswerModel.errada('Manuel Bandeira'),
    AnswerModel.errada('Carlos Gomes'),
    AnswerModel.certa('Dom Pedro I'),
  ]),
  new QuestionModel(206, 'Qual é o antônimo de "malograr"?', [
    AnswerModel.errada('Perder'),
    AnswerModel.errada('Fracassar'),
    AnswerModel.errada('Desprezar'),
    AnswerModel.certa('Conseguir'),
  ]),
  new QuestionModel(207, 'Em que país nasceu Carmen Miranda?', [
    AnswerModel.errada('Argentina'),
    AnswerModel.errada('Espanha'),
    AnswerModel.errada('Brasil'),
    AnswerModel.certa('Portugal'),
  ]),
  new QuestionModel(
    208,
    'Qual foi o último Presidente do período da ditadura militar no Brasil?',
    [
      AnswerModel.errada('Costa e Silva'),
      AnswerModel.errada('Emílio Médici'),
      AnswerModel.errada('Ernesto Geisel'),
      AnswerModel.certa('João Figueiredo'),
    ],
  ),
  new QuestionModel(
    209,
    'Seguindo a sequência do baralho, qual carta vem depois do dez?',
    [
      AnswerModel.errada('Ás'),
      AnswerModel.errada('Nove'),
      AnswerModel.errada('Rei'),
      AnswerModel.certa('Valete'),
    ],
  ),
  new QuestionModel(210, 'O adjetivo "venoso" está relacionado a:', [
    AnswerModel.errada('Vela'),
    AnswerModel.errada('Vento'),
    AnswerModel.errada('Vênia'),
    AnswerModel.certa('Veia'),
  ]),
  new QuestionModel(211, 'Que nome se dá à purificação por meio da água?', [
    AnswerModel.errada('Abrupção'),
    AnswerModel.errada('Abolição'),
    AnswerModel.errada('Abnegação'),
    AnswerModel.certa('Ablução'),
  ]),
  new QuestionModel(
    212,
    'Qual montanha se localiza entre a fronteira do Tibet com o Nepal?',
    [
      AnswerModel.errada('Monte Branco'),
      AnswerModel.errada('Monte Fuji'),
      AnswerModel.errada('Monte Carlo'),
      AnswerModel.certa('Monte Everest'),
    ],
  ),
  new QuestionModel(213, 'Em que parte do corpo se encontra a epiglote?', [
    AnswerModel.errada('Estômago'),
    AnswerModel.errada('Pâncreas'),
    AnswerModel.errada('Rim'),
    AnswerModel.certa('Pescoço'),
  ]),
  new QuestionModel(214, 'A compensação por perda é chamada de...', [
    AnswerModel.errada('Déficit'),
    AnswerModel.errada('Indexação'),
    AnswerModel.errada('Indébito'),
    AnswerModel.certa('Indenização'),
  ]),
  new QuestionModel(
    215,
    'Que personagem do folclore brasileiro tem uma perna só?',
    [
      AnswerModel.errada('Cuca'),
      AnswerModel.errada('Curupira'),
      AnswerModel.errada('Boitatá'),
      AnswerModel.certa('Saci-pererê'),
    ],
  ),
  new QuestionModel(216, 'Quem é o "patrono" do Exército Brasileiro?', [
    AnswerModel.errada('Marechal Deodoro'),
    AnswerModel.errada('Barão de Mauá'),
    AnswerModel.errada('Marquês de Pombal'),
    AnswerModel.certa('Duque de Caxias'),
  ]),
];

export default questions;
