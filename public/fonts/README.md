# Custom Font Upload Instructions

## How to Add Your Custom Font for Titles

1. **Upload your font file(s) to this directory** (`/public/fonts/`)
   - Supported formats: `.woff2`, `.woff`, `.ttf`, `.otf`
   - Recommended: Upload multiple formats for browser compatibility

2. **Update the font configuration in `/index.html`**

   Replace the current font CDN link:
   ```html
   <link href="https://fonts.cdnfonts.com/css/chinese-rocks" rel="stylesheet" />
   ```

   With a local `@font-face` declaration in the `<style>` tag:
   ```html
   <style>
     @font-face {
       font-family: 'YourCustomFont';
       src: url('/fonts/your-font-file.woff2') format('woff2'),
            url('/fonts/your-font-file.woff') format('woff');
       font-weight: normal;
       font-style: normal;
     }
   </style>
   ```

3. **Update Tailwind config** (`/tailwind.config.js`)

   Change the `fontFamily` configuration:
   ```javascript
   fontFamily: {
     display: ['YourCustomFont', 'Impact', 'sans-serif'],
     sans: ['YourCustomFont', 'Impact', 'sans-serif'],
   },
   ```

4. **Update CSS** (`/src/index.css`)

   Change the `body` font-family:
   ```css
   body {
     @apply bg-gray-700 text-white antialiased;
     font-family: 'YourCustomFont', 'Impact', sans-serif;
   }
   ```

## Example Font File Names

- `custom-title-font.woff2`
- `custom-title-font.woff`
- `custom-title-font.ttf`

## Current Font Usage

The `font-display` class is used for:
- All section titles (Hero, Services, Case Studies, Contact, FAQ)
- All button text
- FAQ questions
- Logo fallback text

Replace "YourCustomFont" with the actual name of your font family in all the files above.
