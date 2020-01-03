describe('OneHot encoder', function () {
    const Encog = require(PATHS.BASE);
    Encog.Log.options.logLevel = 'silent';
    
    const OneHot = Encog.Preprocessing.DataMappers.OneHot;
    let oneHot;

    beforeEach(function () {
        oneHot = new OneHot();
    });

    describe('fit_transform', function () {
        test('should encode into a one hot array', function () {
            expect(oneHot.fit_transform([1, 2], '')).toEqual({
                columns: ['_1', '_2'],
                values: [[1, 0], [0, 1]]
            });
            expect(oneHot.fit_transform([1, 2, 3], '')).toEqual({
                columns: ['_1', '_2', '_3'],
                values: [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
            });
            expect(oneHot.fit_transform(['a', 'b', 'c', 'd'], '')).toEqual({
                columns: ['_a', '_b', '_c', '_d'],
                values: [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]
            });
            expect(oneHot.fit_transform(['a', 'b', 'a', 'b', 'c', 'd'], '')).toEqual({
                columns: ['_a', '_b', '_c', '_d'],
                values: [[1, 0, 0, 0], [0, 1, 0, 0], [1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]
            });
        });
    });
});