import socket
import mysql.connector

# Configurações do banco de dados
db = mysql.connector.connect(
    host="127.0.0.1",
    user="root",
    password="liss0066",
    database="autopecas_db"
)
cursor = db.cursor()

# Função para processar a compra
def processar_compra(produto_nome):
    print(f"[DEBUG] Buscando produto no banco: {produto_nome}")
    cursor.execute("SELECT id, estoque FROM produtos WHERE nome = %s", (produto_nome,))
    resultado = cursor.fetchone()

    if resultado is None:
        print("[DEBUG] Produto não encontrado.")
        return "Produto não encontrado."

    produto_id, estoque = resultado
    print(f"[DEBUG] Produto ID: {produto_id}, Estoque: {estoque}")

    if estoque <= 0:
        return f"Produto esgotado: {produto_nome}"

    novo_estoque = estoque - 1
    cursor.execute("UPDATE produtos SET estoque = %s WHERE id = %s", (novo_estoque, produto_id))
    db.commit()
    return f"Compra confirmada para: {produto_nome} (restam {novo_estoque} unidade(s))"


# Criar socket TCP
HOST = '127.0.0.1'
PORT = 5580

servidor = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
servidor.bind((HOST, PORT))
servidor.listen()

print(f"[SERVIDOR] Aguardando conexões em {HOST}:{PORT}...")

# ... (importações e conexão com o banco de dados)

while True:
    conexao, endereco = servidor.accept()
    print(f"[CONECTADO] {endereco}")

    try:
        # ✅ Ao receber (decodificando corretamente em UTF-8)
        dados = conexao.recv(1024).decode('utf-8')
        
        if not dados:
            conexao.close()
            continue

        # Processa a compra
        resposta = processar_compra(dados)

        # ✅ Ao enviar (codificando corretamente em UTF-8)
        conexao.send(resposta.encode('utf-8'))

    except Exception as e:
        print(f"[ERRO] Falha ao processar requisição: {type(e).__name__}: {e}")
        conexao.send("Erro interno no servidor.".encode('utf-8'))

    conexao.close()

