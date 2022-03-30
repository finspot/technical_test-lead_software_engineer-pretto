# Pretto - Tech Test

[instructions](instructions.md)

## Quick Start

A demo app is available on http://pretto.gairal.rocks/

```bash
# clone the repo
git clone git@github.com:gairal/technical_test-lead_software_engineer-pretto.git

# enter the repo directory
cd technical_test-lead_software_engineer-pretto

# install the dependencies
npm i

# start the Vite process
npm run dev

# access the app on http://localhost:3000
```

## Commands

- `npm run dev`: launches a vite watcher
- `npm run build`: bundles the app for production
- `npm test`: runs Jest tests
- `npm run test-cov`: runs Jest tests with coverage
- `npm run lint`: lints the whole sources and tests with eslint

## File structure

tl;dr: interesting bits are in the `src` directory

```markup
interview-rest/
 ├──dist/                            * generated production build
 │
 ├──src/                             * source Files
 │   ├──app/                         * React/TS app
 │   │
 │   ├──css/                         * Tailwind init + a couple custom styles
 │   │
 │   ├──fonts/                       * font files
 │   │
 │   └──img/                         * favicon
 │
 ├──test/                            * Jest test setup
 │
 └──*.*                              * configuration files
```

## Comments

### Stack

Given that I had to make "the most performant and lightweight decisions" I originally started the exercise using Svelte as a component library. Svelte compiling an app to vanilla JS, it presents a few advantages: you don't have to ship a framework in the bundle, resulting in a lighter bundle than with solutions such as React and it executes faster than a framework solution.

However, given, the timeframe and the relatively low availability of community libraries compared to other more popular solutions, I decided to take a more pragmatic approach and use this good ol' React. Even if not the absolute best solution, it's obviously proven to be reliable and performant.

---

On the CSS/styling side, I chose to replace styled-components with TailwindCSS. While not allowing to scope styling per component, it does offer a lot of benefits:

- faster coding => you don't need to create a new component each time you want to style a DOM element
- you still control your styling with JS, by manipulating classes in JSX, based on your business logic
- produces lightweight bundles as you don't need to ship a JS lib with it as well as additional components, which also result in better execution performance.
- produces lightweight css files that will only contain the classes that are used in your project
- offers intellisense for your own css classes based on your project configuration
- enables high consistency between your components and different projects as you can define precisely your color palette, font-sizes, font-weights, box-shadows, margins and paddings, and so on, leaving less room for mistakes. And a single configuration can very easily be shared between different projects;
- its toolbox is so exhaustive that you rarely have to write custom CSS. In addition, you can write your own, shareable, plugins if in need.

---

Regarding the carousel and given the timeframe and scope of this exercise, I decided to use react-slick instead developing my own solution. It does adds weight to the final bundle but it is super stable, flexible and responsive.
Going with the slick carousel was one of the main reasons for choosing React over svelte.

---

For the bundler I used ViteJS, which is ridiculously easy to setup and offer stellar performance during development. Being ESM-based it does have limitations that would probably not be suitable for a more complex projects tho.

### Possible improvements

- Using a framework such as NextJS or Gatsby to Server-side render the app.
- The app has been deployed as a static website on a Google cloud storage bucket. This doesn't allow (out of the box) gzip-ing or setting efficient cache policies, so be aware.
- more tests (unit, integration, E2E)
- setting up the app as a PWA with manifest for better client side caching
- optimizing the head's meta tags to add more SEO and PWA friendly configurations
- the current Vite production configuration targets only browsers with Native ES module support => https://caniuse.com/es6-module

### Breakpoint

I decided to modify the breakpoints compared to what was presented in the Figma file;
Squishing the cards in between 1024 and 744px was really not rendering well, and I didn't feel that changing the layout another way would make sense.

- `0`=>`744`: mobile nav + carousel
- `744`=>`1024`: Desktop nav + carousel
- `1024`=>`Infinity`: Desktop nav + card on "grid" layout
