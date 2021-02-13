// import orm
const orm = require('../config/orm.js');

const burger = {
    all(cb) {
        orm.all('burgers', (res) => cb(res));
      },
      // The variables cols and vals are arrays.
      create(name, cb) {
        orm.create('burgers', ["burger_name", "devoured"], [name, false], (res) => cb(res));
      },
      update(id, cb) {
        const condition = "id=" + id;
        orm.update('burgers', {devoured: true}, condition, (res) => cb(res));
      },
      delete(id, cb) {
        const condition = "id=" + id;
        orm.delete('burgers', condition, (res) => cb(res));
      },
}

// export burger
module.exports = burger