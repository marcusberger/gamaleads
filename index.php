<?php
//"$conexao" recebe a Conexão com o Banco de Dados
$conexao = pg_connect("host=ec2-107-20-188-239.compute-1.amazonaws.com" port=5432 dbname=d2d21aou17g1i5 user=ppxwnsjkjlvtfb password=6a953ec26f1503028cfed358550049670650a0546d48531a7dd1f8fac74e4419);

//"$sql" string para Inserção de Registros na Tabela
$sql = "INSERT INTO leads (id_leads, nome, email, dia, hora) VALUES (". $_POST['id_leads'] .", ". $_POST['ip'] .", ". $_POST['nome'] .", ". $_POST['email'] .", ". $_POST['dia'] .", ". $_POST['hora'] .");";

//"$res" recebe o resultado da Inserção
$res = pg_exec($conexao, $sql);

//"$qtd_linhas" recebe a quantidade de Linhas Afetadas pela Inserção
$qtd_linhas = pg_affected_rows($res);

//Se "$qtd_linhas" tiver um Valor maior que 0 o Produto foi gravado com Sucesso na Tabela
if ($qtd_linhas > 0)
{
echo "Produto Cadastrado com Sucesso";
}
//Se "$qtd_linhas" tiver um Valor Igual a 0 é porque ouve um Erro ao gravar o Produto na Tabela
elseif ($qtd_linhas == 0)
{
echo "Não foi possível cadastrar o Produto";
}

header ('Location: /index.html')
?>
