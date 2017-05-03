describe('ResilientPropagation', function () {
    const ResilientPropagation = require(__PROPAGATION + 'resilient');
    const NetworkUtil = require(__TEST_HELPERS + 'networkUtil');

    beforeEach(function () {

    });

    it('XOR Dataset', function () {
        // train the neural network
        const dataset = NetworkUtil.getXORDataset();
        const network = NetworkUtil.createXORNetwork();
        const train = new ResilientPropagation(network, dataset.input, dataset.output);

        NetworkUtil.trainNetwork(train);
        const accuracy = NetworkUtil.validateNetwork(network, dataset.input, dataset.output);

        expect(accuracy >= 90).toBe(true);
    });

    it('Iris Flower Dataset', function () {
        // train the neural network
        const dataset = NetworkUtil.getIrisDataset();
        const network = NetworkUtil.createIrisNetwork();

        let inputDataset = NetworkUtil.trainTestSpit(dataset.input);
        let outputDataset = NetworkUtil.trainTestSpit(dataset.output);

        const train = new ResilientPropagation(network, inputDataset.train, outputDataset.train);

        NetworkUtil.trainNetwork(train, {minError: 0.01, minIterations: 5});
        const accuracy = NetworkUtil.validateNetwork(network, inputDataset.test, outputDataset.test);

        expect(accuracy >= 90).toBe(true);
    });
});