# Teste Técnico Front-end – FIAP

## Desafio

Você foi selecionado para desenvolver uma Landing Page seguindo a identidade visual da FIAP, utilizando alguns componentes que já fazem parte da nossa rotina de desenvolvimento.

A equipe de design criou um layout no Figma com versões para desktop (1920x1080) e mobile (414x736), que deve ser seguido.

---

## Considerações e Justificativas

Utilizei **renderização de componentes específicos por dispositivo** (`Device-specific component rendering`) nos componentes de **FAQ** e **Cursos**, pois o design apresentava proporções distintas para cada resolução. Para os demais componentes, adotei a abordagem **mobile-first**.

Implementei um **loading simples**, pois o projeto não realiza requisições a APIs. Apesar disso, poderia ter sido utilizado o `React.Suspense` para um carregamento mais sofisticado.

A arquitetura do projeto segue o padrão de **Design Atômico**. Por uma questão de organização e boas práticas, optei por manter essa estrutura fora da pasta `app`.

Os conteúdos utilizados foram organizados em arquivos `.json` dentro da pasta `data`, com o objetivo de tornar os dados reutilizáveis em qualquer parte da aplicação, descentralizando a responsabilidade dos componentes filhos.

página 404, e custom da barra de rolagem e select dos texto.

Bônus: ultilizei o motion e criei varios frame usando a técnica `frame-by-frame` assim foi montando a imagem de acordo com scroll.

---

# Melhorias

Uma melhoria seria a implementação mais refinada das animações baseadas na rolagem. Segui o modelo de `parallax scroll` de forma funcional e com qualidade, o que desenvolvi atende bem ao propósito. Porém, por conta do tempo, deixei de lado algumas perfeições nesse requisito. Ainda assim, seria algo que evoluiria para dar uma sensação melhor no storytelling.

usando `position: sticky`


| Técnica                    | Descrição                                                                        |
| -------------------------- | -------------------------------------------------------------------------------- |
| `position: sticky`         | Mantém a imagem fixa no topo da viewport enquanto seu contêiner estiver visível. |
| `height: 100vh`            | Garante que cada seção ocupe 100% da altura da tela, criando "páginas" visuais.  |
| `z-index`                  | Controla a sobreposição entre a imagem de fundo e o conteúdo.                    |
| `scrollY` + `Math.floor()` | Detecta a posição de scroll para decidir qual imagem ou conteúdo mostrar.        |
| `transition`, `opacity`    | Suavizam a troca de imagens ou elementos visuais com animações.                  |



# Videos

- Mobile:

https://www.youtube.com/watch?v=ZN9ss_ved0M

- Desktop:

https://www.youtube.com/watch?v=iGXpxA4Msyk


## Especificação Técnica

* **Next.js** 15
* **Node.js** ^18
* **TypeScript**

---

## Instalação

Para instalar as dependências da aplicação:

```bash
npm install
```

Para rodar a aplicação localmente:

```bash
npm run dev
```

---

## Licença

Licenciado sob a **GNU GPL v3**.
