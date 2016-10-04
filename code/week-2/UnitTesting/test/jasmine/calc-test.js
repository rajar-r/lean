

describe('calc tets', function () {


    it('1+2=3', function () {
        var r = calc.add(1, 2);
        expect(3).toBe(r);
    })

    it('1-2=-1', function () {
        var r = calc.sub(1, 2);
        expect(-1).toBe(r);
    })
    

});