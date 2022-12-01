import axios from "axios";

export class Designer {
  constructor(email) {
    this.email = email;
    this.projects = {};
  }

  registerDesigner(email) {
    let newDesigner = new Designer(email);

    return axios.get("/RegisterDesigner");
  }
}

export class Model {
  constructor() {
    this.initialize();
  }

  initialize() {}
}
