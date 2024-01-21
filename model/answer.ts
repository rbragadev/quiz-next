export default class AnswerModel {
  #value: string;
  #certain: boolean;
  #revealed: boolean;

  constructor(value: string, certain: boolean, revealed = false) {
    this.#value = value;
    this.#certain = certain;
    this.#revealed = revealed;
  }

  static certa(value: string) {
    return new AnswerModel(value, true);
  }

  static errada(value: string) {
    return new AnswerModel(value, false);
  }

  get value() {
    return this.#value;
  }

  get certain() {
    return this.#certain;
  }

  get revealed() {
    return this.#revealed;
  }

  toObject() {
    return {
      value: this.#value,
      certain: this.#certain,
      revealed: this.#revealed,
    };
  }
}
