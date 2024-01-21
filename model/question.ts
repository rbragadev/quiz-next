import AnswerModel from './answer';

export default class QuestionModel {
  #id: number;
  #statement: string;
  #answers: AnswerModel[];
  #accepted: boolean;
  //#answered: boolean;

  constructor(
    id: number,
    statement: string,
    answers: AnswerModel[],
    accepted = false,
  ) {
    this.#id = id;
    this.#statement = statement;
    this.#answers = answers;
    this.#accepted = accepted;
  }

  get id() {
    return this.#id;
  }

  get statement() {
    return this.#statement;
  }

  get answers() {
    return this.#answers;
  }

  get accepted() {
    return this.#accepted;
  }

  get answered() {
    for (let answer of this.#answers) {
      if (answer.revealed) return true;
    }
    return false;
  }

  toObject() {
    return {
      id: this.#id,
      statement: this.#statement,
      accepted: this.#accepted,
      answers: this.#answers.map((ans) => ans.toObject()),
    };
  }
}
