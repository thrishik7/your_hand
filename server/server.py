from multiprocessing import Process
import socket 


server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind(socket.gethostname(), 1024)
server_socket.listen(5)

while True:
    clt, adr = server_socket.accept()
