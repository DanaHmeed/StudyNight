/* global describe, it */

import { expect } from "chai";
import { shuffle } from "../starter/src/shuffle.js";

describe("shuffle()", () => {
  it("shuffles array items but keeps the same elements", () => {
    const original = [1, 2, 3, 4, 5];
    const shuffled = shuffle([...original]);

    expect(shuffled).to.have.lengthOf(original.length);
    expect(shuffled).to.have.members(original);
    expect(shuffled).to.not.deep.equal(original); // not same order
  });

  it("returns empty array if input is empty", () => {
    const result = shuffle([]);
    expect(result).to.deep.equal([]);
  });

  it("throws error if not passed an array", () => {
    expect(() => shuffle(null)).to.throw();
  });
});
