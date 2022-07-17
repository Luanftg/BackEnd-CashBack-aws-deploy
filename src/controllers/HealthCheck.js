
const healthCheck = {
    hello: (req, res) => {
        res.sendStatus(200),
        res.body = JSON.stringify({"message": "Healthcheck Confirmed!"});
    }
};

export default healthCheck;