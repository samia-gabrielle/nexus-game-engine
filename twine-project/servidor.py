#!/usr/bin/env python3
import http.server
import socketserver
import os
import webbrowser
from pathlib import Path

PORT = 8000
SCRIPT_DIR = Path(__file__).parent.parent  # Sobe para c:\Users\54547130159\nexus\

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(SCRIPT_DIR), **kwargs)

os.chdir(SCRIPT_DIR)

with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
    print(f"🎮 NEXUS Servidor iniciado!")
    print(f"📍 Acesse: http://localhost:{PORT}/nexus-completo.html")
    print(f"⏹️  Pressione CTRL+C para parar\n")

    webbrowser.open(f"http://localhost:{PORT}/twine-project/nexus-completo.html")

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n✅ Servidor encerrado")
