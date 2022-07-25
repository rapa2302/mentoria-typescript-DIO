interface PessoaInterface {
    nome: string,
    idade: number,
    profissao: string
}

let pessoa1 = {} as PessoaInterface;
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz";

let pessoa2 = {} as PessoaInterface;
pessoa1.nome = "roberto";
pessoa1.idade = 19;
pessoa1.profissao = "Padeiro";

let pessoa3 : PessoaInterface = {
    nome: "laura",
    idade: 32,
    profissao: "Atriz"
};

let pessoa4 : PessoaInterface = {
    nome: "carlos",
    idade: 19,
    profissao: "padeiro"
};


