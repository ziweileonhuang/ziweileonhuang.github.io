# Ziwei Huang’s Academic Homepage

Personal academic website in the [AcademicPages](https://academicpages.github.io/) style, hosted at [ziweileonhuang.github.io](https://ziweileonhuang.github.io/).

## Preview locally (no Git needed)

Double-click `index.html`, or from this folder run:

```bat
preview.bat
```

You can also right-click `index.html` in Cursor and choose **Open with Live Server** / **Simple Browser** if that extension is installed.

Edit `index.html`, then refresh the browser.

## Publish without Git

1. Open [ziweileonhuang/ziweileonhuang.github.io](https://github.com/ziweileonhuang/ziweileonhuang.github.io) in the browser.
2. Click **Add file → Upload files**.
3. Drag these items from `d:\HomePage` into the page (not a nested extra folder):
   - `index.html`, `404.html`, `.nojekyll`, `README.md`
   - the `assets` folder
4. Commit the upload.
5. Go to **Settings → Pages**. Set **Source** to **Deploy from a branch**, branch `main` (or `master`), folder `/ (root)`.
6. The site will be at https://ziweileonhuang.github.io/.

If the repo already has files, upload again to replace them, or delete the old files first.

## Edit the site

| What to change | File |
| --- | --- |
| Bio, publications, news | `index.html` |
| Colors and layout | `assets/css/main.css` |
| Photo | replace the GitHub avatar URL in `index.html`, or put a photo at `images/profile.png` |
