# Happy Birthday

<p>
<img src="https://img.shields.io/github/stars/abandon888/HappyBirthday" alt="stars" />
<img src="https://img.shields.io/github/issues/abandon888/HappyBirthday" alt="issues" />
<img src="https://img.shields.io/github/forks/abandon888/HappyBirthday" alt="forks" />
<img src="https://img.shields.io/github/license/abandon888/HappyBirthday" alt="license" />
<a href="https://app.netlify.com/sites/friendly-paprenjak-ad64b7/deploys"><img src="https://api.netlify.com/api/v1/badges/39d29171-f3b1-4172-932e-1f657058303a/deploy-status" alt="Netlify Status" /></a>
</p>

[中文](./README_EN.md)｜ English

A special way to wish someone a happy birthday.

Project preview: <https://friendly-paprenjak-ad64b7.netlify.app/>

**Project Highlights:**

1. Carefully designed text animations with romantic floating balloon animations
2. Customize all text content, images, background music, and font styles by simply modifying the `customize.json` file
3. Click anywhere on the page to trigger beautiful fireworks effects
4. Automatically plays beautiful background music to create a warm and romantic atmosphere
5. Uses modern rspack build system for better performance

## Some project background you might want to know

Used to wish a special person or lover a happy birthday and create a romantic atmosphere. For the story behind the project, you can check out my Zhihu blog post: [Thoughts on Birthday Celebrations - Website Background Music Playback](https://zhuanlan.zhihu.com/p/677636150)

## How to Use

Fork this project, modify the `customize.json` file, replace the content with your own, then deploy it on GitHub Pages or other hosting platforms (like Netlify).

- Vercel Deployment

  [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fabandon888%2FHappyBirthday&project-name=happy-birthday)

- Netlify Deployment (Recommended for users in China, not blocked)

  [![Deploy with NEtlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/abandon888/HappyBirthday)

> You don't need to submit PRs to this repository

You can modify text, images, background music, fonts, etc., but there are some things to note:

1. Only modify the `customize.json` file, don't modify other files, otherwise the page may not display properly.
2. When replacing music, make sure to rename it to the same name or modify the path in the json file, such as `bgMusic.mp3` in my case.
3. When replacing images, the birthday hat might be misaligned, so it's recommended to crop the image to the same size as the original for the best viewing experience.
4. When replacing fonts, just modify the font configuration in the json. You can use local fonts or online fonts (like Google Fonts). The project already includes the `LXGW WenKai` font file and can be used directly. Note that only one font configuration is supported.

Usage example:

```json
  "fonts": [
    {
      "name": "Ma Shan Zheng",
      "path": "https://fonts.googleapis.com/css?family=Ma+Shan+Zheng&display=swap"
    },
  // Or use local fonts, but only one font can be used at a time
  // {
  //     "name": "LXGW WenKai",
  //     "path":"./fonts/LXGWWenKai-Regular.ttf"
  //   }
  ]
```

## Local Development/Preview

The project uses npm as the package manager. Please ensure that Node.js is configured locally, otherwise install it yourself. Check your Node.js environment as follows:

```
$ node -v
v22.2.1
```

Then install dependencies:

```
npm install
```

Run:

```
npm run start
```

## Other Information

The project uses pure HTML, CSS, and JavaScript, along with GSAP for animations.

Thanks to the original project author for open-sourcing. This project is based on modifications of [happy-birthday](https://github.com/faahim/happy-birthday).

If you like this project, please give it a star ⭐ to encourage me, thank you!

## Changelog

### v2.0 (2025-02-03)

1. Use rspack to build the project
2. Add font configuration support
3. Add fireworks effects
4. Optimize music playback interaction
5. More configurable options

### v1.0

1. Added music playback effects
2. Added landing page
3. Chinese localization
4. Optimized some details
