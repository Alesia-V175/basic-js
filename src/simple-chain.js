const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  chainArr: [],

  getLength() {
    this.chainArr.length;
    return this;
  },

  reverseChain() {
    this.chainArr.reverse();
    return this;
  },

  addLink(value = "") {
    this.chainArr.push(`( ${value} )`);
    return this;
  },

  removeLink(pos) {
    if( !pos || pos < 0 || pos > this.chainArr.length || !Number.isInteger(pos)) {
      this.chainArr = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chainArr.splice(pos - 1, 1);
    return this;
  },

  finishChain() {
    let result = this.chainArr.join("~~");
    this.chainArr.length = 0;
    return result;
  },

};
module.exports = {
  chainMaker
};
