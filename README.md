# Vidya Mentor Classes — Website

Ye poora folder GitHub Pages par upload karne ke liye ready hai.

## Files
- `index.html` — sara text aur structure yahan hai
- `style.css` — sare colors, fonts, spacing yahan hain
- `script.js` — slider aur version-check ka code
- `version.json` — app ka latest version + download link (isse edit karke update daalo)
- `assets/logo.png`, `assets/banner.jpg` — images

## Baad mein customize kaise karein

### 1. Text change karna
`index.html` file kholo — jo text website par dikhta hai wo seedha wahin likha hai
(jaise `<h2>Welcome to Vidya Mentor Classes</h2>`). Text ko dhundo aur badal do.
Kisi bhi text editor (Notepad, VS Code) se ye file kholi ja sakti hai.

`[...]` bracket wale placeholder text zaroor apne asli content se replace karo —
jaise About section ka welcome paragraph.

### 2. Naya update / app version daalna
Jab bhi naya APK upload karo:
1. `version.json` file kholo
2. `versionCode` ko 1 se badha do (jaise 2, 3...)
3. `versionName` ko naya version number do (jaise "1.1")
4. `apkUrl` mein naye APK ka GitHub Release link daalo
5. Save karo aur GitHub par upload kar do

Website apne aap naya version dikhane lagegi — kuch aur karne ki zaroorat nahi.

### 3. Naya slide (banner) add karna
`index.html` mein `<div class="carousel" id="carousel">` dhundo. Usme aisa
dikhega:
```html
<div class="slide">
  <div class="slide-placeholder"><b>Slide 2</b>Put your new banner image here</div>
</div>
```
Isko replace kar do apni image se:
```html
<div class="slide">
  <img src="assets/apna-naya-banner.jpg" alt="New update">
</div>
```
Apni image `assets` folder mein daal dena, aur `src` mein wahi filename likhna.

### 4. Colors badalna
`style.css` ke sabse upar `:root { ... }` mein sare colors hain
(`--gold`, `--black`, etc). Wahin badal do, poori site update ho jayegi.

### 5. Links badalna
`index.html` mein `href="https://youtube.com/..."`, WhatsApp aur Instagram
links dhundo aur apne naye link se replace kar do.

## GitHub Pages par upload kaise karein
1. GitHub par naya repository banao (free account se)
2. Is poore folder ke sare files usme upload karo
3. Repo Settings → Pages mein jaakar "Deploy from branch" chuno, `main` branch select karo
4. Kuch minute mein website live ho jayegi: `https://yourusername.github.io/repo-name/`
  © 2026 Vidya Mentor Classes. All rights reserved.
