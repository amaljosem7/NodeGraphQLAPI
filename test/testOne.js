const expect = require('chai').expect

it('test', () => {
    const a = 1;
    const b = 3;

    expect(a+b).to.equal(4)

    expect(a+b).not.to.equal(3)
})