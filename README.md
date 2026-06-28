# Instituto Comportar — Landing Page

Site institucional de página única (landing page) construído com [Astro](https://astro.build).
Estático, sem servidor, hospedado de graça no **GitHub Pages**.

## ✏️ Como editar o conteúdo

**99% das mudanças** (textos, telefone, especialidades, etc.) ficam em um único arquivo:

```
src/content/site.ts
```

Abra esse arquivo, troque os textos entre aspas e salve. Itens entre `[colchetes]`
são lembretes para preencher.

### Trocar as fotos
Substitua os arquivos em `public/images/` mantendo os mesmos nomes:
- `dra-retrato-1.jpg` — foto do topo (hero)
- `dra-retrato-2.jpg` — foto da seção "Sobre"
- `logo.png` — logotipo

### Mostrar o mapa
Em `site.ts`, preencha `contato.mapaQuery` com o endereço (ou o nome do
consultório). O mapa do Google aparece sozinho. Deixe `""` para escondê-lo.

## 💻 Rodar localmente

```bash
npm install      # só na primeira vez
npm run dev      # abre em http://localhost:4321
```

Outras: `npm run build` (gera o site em `dist/`) · `npm run preview` (testa o build).

## 🚀 Publicar (GitHub Pages)

O deploy é **automático**. A cada `git push` na branch `main`, o GitHub Actions
(`.github/workflows/deploy.yml`) compila e publica o site.

Configuração única (uma vez só):
1. Crie o repositório no GitHub e dê push.
2. No GitHub: **Settings → Pages → Source → "GitHub Actions"**.
3. Pronto. Em ~2 min o site fica no ar em
   `https://SEU-USUARIO.github.io/instituto-comportar/`.

> A pasta `_assets/` (rascunhos/textos de referência) **não** é publicada.
