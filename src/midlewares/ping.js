export default (req, res, next) => {
    const { hookConfig } = req.body;
    const { OrderId }  = req.body;  

    if (hookConfig === 'ping') {
        res.sendStatus(200);
    } else if (OrderId) {
        next();
    } else {
        res.status(422).json({"message": "Bad Request!!!" }); 
    }
}