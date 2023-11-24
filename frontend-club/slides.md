---
theme: dracula
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
transition: slide-left
title: Welcome to Slidev
mdc: true
---

# Make _frontends_ without any ~~framework~~

**Web Components 101**

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Are you ready ??
  </span>
</div>

<div class="abs-br m-6 flex flex-col gap-2">
  <a href="https://github.com/progmatic-99" target="_blank" alt="Twitter" title="Open in Twitter"
    class="text-xl slidev-icon-btn !border-none !hover:text-white">
    <carbon-logo-twitter /> @progmatic99
  </a>
  <a href="https://github.com/progmatic-99" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn !border-none !hover:text-white">
    <carbon-logo-github /> progmatic-99
  </a>
  <a href="https://github.com/progmatic-99" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn !border-none !hover:text-white">
    <carbon-logo-linkedin /> Shubham Upreti
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---

```yaml
layout: two-cols
```

# whoami

**DevOps Engineer** by <twemoji-sun />, **Open Sourcer** by <logos-moon />, kinda **full-stack** in between

- 📝 **Open Source** - @FOSSASIA, a few others...
- 🎥 **Won Codeheat Program** - Started interning with FOSSASIA
- 🎨 **Freelancing** - started with small gigs
- 🧑‍💻 **Community** - Managed PyDelhi
- 🛠 **Hacking** - <logos-nginx />, <logos-kubernetes />, <logos-typescript-icon />, <logos-django-icon />

::right::
<img src="https://media.giphy.com/media/J39XJZDieZ5cc/giphy.gif" class="h-full w-full p-8" />

<br>
<br>

Read more about [Why Slidev?](https://sli.dev/guide/why)

<!--
You can have `style` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/guide/syntax#embedded-styles
-->

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<!--
Here is another comment.
-->

---

```yaml
layout: two-cols
```

# Doom of choices

- Infinite choices when starting out a new project
- Too many choices for everything
- **CSS** : tailwind, chakra, ant, material
- **State Management** : recoil, redux, zustand, easy-peasy...
  <img src="https://media.giphy.com/media/KbeMMTRmTCF11CPLq1/giphy.gif" class="p-8">

::right::
<img src="https://www.vshsolutions.com/wp-content/uploads/2020/04/blog-featured-choosing-front-end-framework.png" class="h-full w-full p-8" />

---

```yaml
transition: slide-up
```

# Web Components

_They’re a set of W3C standards for building reusable HTML elements. You use them by writing a class for a custom element, registering a tag name and using it in your markup._

<div class="text-center m-8">
  <span class="text-red text-4xl">!!! Disclaimer</span>
</div>

- Don't use this in PROD!!
- Not recommending to ditch all frameworks
- Not saying this is the best way to do things

<div class="flex justify-center">
  <img src="https://media.giphy.com/media/coYo4nM8jE1TW/giphy.gif" class="p-4" />
</div>

---

```yaml
layout: center
```

# Thank you!!

<div class="abs-br m-6 flex flex-col gap-2">
  <a href="https://github.com/progmatic-99" target="_blank" alt="Twitter" title="Open in Twitter"
    class="text-xl slidev-icon-btn !border-none !hover:text-white">
    <carbon-logo-twitter /> @progmatic99
  </a>
  <a href="https://github.com/progmatic-99" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn !border-none !hover:text-white">
    <carbon-logo-github /> progmatic-99
  </a>
  <a href="https://github.com/progmatic-99" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn !border-none !hover:text-white">
    <carbon-logo-linkedin /> Shubham Upreti
  </a>
</div>
