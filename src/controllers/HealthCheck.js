
const healthCheck = {
    hello: (req, res) => {
        res.sendStatus(200),
        JSON.stringify({"message": "Healthcheck Confirmed!"});
    }
};

export default healthCheck;