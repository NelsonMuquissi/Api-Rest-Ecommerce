import jwt from 'jsonwebtoken'

const login = (req, res, next) => {
    

    try {
        const token = req.headers.authorization.split('')[1]
        const decode = jwt.verify(token, process.env.jwt_key)
        req.usuario = decode
        next()
    } catch (error) {
        return res.status(404).send({mensagem: "Falha na autenticação"})
    }
}

export default login