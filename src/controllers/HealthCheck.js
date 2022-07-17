
const healthCheck = {
    hello: (req, res) => {
        res.sendStatus(200).json({"message": "Healthcheck Confirmed!"});
    }
};

export default healthCheck;