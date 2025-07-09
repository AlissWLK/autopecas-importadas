from flask import Flask, request, jsonify, render_template
import socket

app = Flask(__name__)

TCP_HOST = '127.0.0.1'
TCP_PORT = 5580

def enviar_para_servidor_tcp(produto_nome):
    try:
        cliente = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        cliente.connect((TCP_HOST, TCP_PORT))
        cliente.send(produto_nome.encode('utf-8'))

        resposta = cliente.recv(1024).decode('utf-8')  # Aqui pode estar o erro
        cliente.close()
        return resposta
    except Exception as e:
        return f"Erro ao conectar com o servidor TCP: {str(e)}"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/comprar', methods=['POST'])
def comprar():
    data = request.get_json()
    produto = data.get('produto')
    resposta = enviar_para_servidor_tcp(produto)
    return jsonify({'mensagem': resposta})

if __name__ == '__main__':
    app.run(debug=True, port=5001)
