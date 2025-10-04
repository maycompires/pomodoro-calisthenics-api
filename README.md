// README.md
# Pomodoro Calisthenics API

API em Node.js para fornecer exercícios de calistenia durante pausas Pomodoro em apps de foco em estudos.

## Como Rodar Localmente
1. `npm install`
2. `npm start`

## Endpoints
- GET `/exercises`: Lista todos os exercícios.
- GET `/random-exercise`: Exercício aleatório.
- GET `/`: Teste.

## Integração com Lovable
No seu app Lovable, configure ações para chamar esses endpoints via HTTP quando o timer Pomodoro entrar em pausa. Ex: Use um webhook ou integração API para fetch `/random-exercise` e exibir no app.

## Deploy no Render
- Crie um serviço web no Render.com.
- Conecte ao GitHub.
- Comando de build: `npm install`
- Comando de start: `npm start`
- Porta: Automática.

Para mais exercícios, edite `exercises.js`.