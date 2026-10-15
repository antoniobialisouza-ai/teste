# Brasa & Manjericão — site de restaurante

Landing page responsiva de demonstração para um restaurante fictício de cozinha brasileira contemporânea.

## Recursos

- Layout adaptável para celular, tablet e desktop.
- Navegação responsiva com menu móvel.
- Seções de apresentação, história, pratos, ambiente e reservas.
- Formulário de reserva que prepara uma mensagem e abre o WhatsApp.
- Tipografia do Google Fonts e favicon SVG.
- HTML semântico, foco visível nos campos e respeito à preferência por movimento reduzido.

## Estrutura

```
.
├── index.html
├── README.md
├── assets/
│   ├── README.md
│   └── favicon.svg
├── css/
│   └── style.css
└── js/
    └── main.js
```

## Como executar

Basta abrir `index.html` no navegador. Para desenvolvimento, recomenda-se usar a extensão Live Server do VS Code.

## Antes de publicar para um restaurante real

1. Substitua nome, textos, preços, horários e informações ilustrativas pelos dados reais.
2. No arquivo `js/main.js`, altere `whatsappNumber` para o número oficial com código do país e DDD, apenas dígitos. O valor atual é demonstrativo.
3. Atualize o link do WhatsApp flutuante em `index.html`.
4. Confira as licenças e substitua as fotografias de referência por imagens autorizadas do estabelecimento.
5. Confirme cardápio, alergênicos, endereço, funcionamento e política de reservas com o responsável.

## Tecnologias

HTML5, CSS3 e JavaScript puro. Não exige instalação de dependências nem processo de build.

## Observação

Nome do restaurante, pratos, preços, horários e número de WhatsApp são exemplos fictícios para apresentação do layout; o formulário não cria uma reserva automaticamente, apenas abre o WhatsApp com a mensagem preenchida.