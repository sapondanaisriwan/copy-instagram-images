
# NextJS & CRXJS chrome extension boilerplate

A chrome extension boilerplate using Next.js for building products and CRXJS for development.

## Why need to combine NextJS with CRXJS?

- I'm experiencing [content script injected gets delayed a lot](https://github.com/crxjs/chrome-extension-tools/issues/391) when build the products.

so I decided to choose NextJS for building the product instead of CRXJS.

## Quick Start

1. **Clone the project**:

```bash
$ git clone https://github.com/sapondanaisriwan/nextjs-crxjs-chrome-extension.git
```

2. **Install dependencies**:

```bash
$ npm install
```

## Development

To start development, run:

```bash
$ npm run dev
```

Alternatively, you can click the "Run" button at the bottom left corner of your VS Code.

![](https://i.imgur.com/2wAhMfn.png)

## Building

To build the project, use:

```bash
$ npm run build
```

Alternatively, you can click the "Run" button at the bottom left corner of your VS Code.

![](https://i.imgur.com/2wAhMfn.png)

## Loading Extension

#### Chrome / Edge

1. Open `chrome://extensions` or `edge://extensions` in your browser.
2. Toggle on the "Developer mode".
3. Click on "Load unpacked" button.
4. Select the folder
   - `nextjs-crxjs-chrome-extension/dist` for development.
   - `nextjs-crxjs-chrome-extension/build` for building.

Feel free to reach out if you have any questions or need further assistance. We appreciate your contributions! 🚀
