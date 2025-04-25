# Tutorial  

## [Document](https://angular.dev/guide/routing/common-router-tasks)  



## font  

1. Import custom font to `src/assets/fonts/Kanit` and `src/assets/fonts/Prompt`    

2. Create `font.css` in ` src/styles/font.css ` for keep ` @font-face {} ` code  

3. In `styles.css`  

```css

@import "tailwindcss";

@import "./styles/fonts.css";

@theme {
  --font-display: "Oswald", "sans-serif";
  --font-kanit: "Kanit", "sans-serif";
  --font-prompt: "Prompt", "san-serif";
}
body {
  font-family: "Prompt", sans-serif;
}
:root {
  --primary-color: #605dc8;
  --secondary-color: #8b89e6;
  --accent-color: #e8e7fa;
  --shadow-color: #e8e8e8;
}
```  

> ✨ ✨ ✨ Use `@theme` Auto suggestion will display in Template  

Usage : `font-kanit` and `font-prompt` class

```css
@theme {
  --font-display: "Oswald", "sans-serif";
  --font-kanit: "Kanit", "sans-serif";
  --font-prompt: "Prompt", "san-serif";
}
body {
  font-family: "Prompt", sans-serif;
}
```  

> ✨ ✨ ✨ Define `font-family: "Prompt", sans-serif;` in `body {}`  

