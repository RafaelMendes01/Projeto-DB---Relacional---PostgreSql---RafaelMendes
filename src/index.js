const app = require('./server');
const port = 3000;

function call(){
    console.log(`server rodando na porta ${port}`);
};
app.listen(port,call);