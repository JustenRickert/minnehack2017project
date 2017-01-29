import context


if __name__ == "__main__":
    from server import app
    from gevent import pywsgi
    from geventwebsocket.handler import WebSocketHandler
    port=app.config["PORT"]
    server = pywsgi.WSGIServer(('', port), app, handler_class=WebSocketHandler)
    server.serve_forever()
