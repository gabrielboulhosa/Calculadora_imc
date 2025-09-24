📊 Calculadora de IMC
Uma aplicação web moderna e responsiva para calcular o Índice de Massa Corporal (IMC), desenvolvida com React e Vite.

🚀 Funcionalidades
Cálculo preciso do IMC baseado em peso e altura

Classificação automática dos resultados segundo padrões da OMS:

Abaixo do peso (< 18.5)

Peso normal (18.5 - 24.9)

Sobrepeso (25.0 - 29.9)

Obesidade grau I (30.0 - 34.9)

Obesidade grau II (35.0 - 39.9)

Obesidade grau III (≥ 40.0)

Interface responsiva que se adapta a diferentes tamanhos de tela

Design moderno com cores indicativas para cada faixa de IMC

Validação de formulário com campos obrigatórios

🛠️ Tecnologias Utilizadas
React 19 - Biblioteca JavaScript para interfaces de usuário

Vite - Build tool moderna e rápida

CSS Modules - Estilização com escopo local

ESLint - Linting e padronização de código

📱 Design Responsivo
A aplicação conta com breakpoints otimizados para:

Desktop (> 768px)

Tablet (768px)

Mobile (480px)

Mobile pequeno (320px)

🎨 Interface
Layout em grid com duas colunas no desktop

Formulário intuitivo com campos para peso e altura

Resultado visual com cores diferenciadas por categoria

Imagem ilustrativa para melhor experiência do usuário

🚀 Como Executar
Clone o repositório:

git clone [url-do-repositorio]
cd calculadora_imc/projeto-react

Copy

Insert at cursor
bash
Instale as dependências:

npm install

Copy

Insert at cursor
bash
Execute o projeto em modo de desenvolvimento:

npm run dev

Copy

Insert at cursor
bash
Acesse http://localhost:5173 no seu navegador

📦 Scripts Disponíveis
npm run dev - Inicia o servidor de desenvolvimento

npm run build - Gera a build de produção

npm run preview - Visualiza a build de produção

npm run lint - Executa o linting do código

🎯 Estrutura do Projeto
projeto-react/
├── src/
│   ├── Components/
│   │   ├── img/
│   │   ├── Calculadora.module.css
│   │   └── index.jsx
│   ├── App.jsx
│   └── main.jsx
├── public/
└── package.json

Copy

Insert at cursor
💡 Características Técnicas
Componente funcional com React Hooks (useState)

CSS Modules para estilização isolada

Validação de entrada numérica

Cálculo matemático preciso com formatação decimal

Renderização condicional baseada nos resultados

Projeto desenvolvido como parte dos estudos em React e desenvolvimento web moderno.
