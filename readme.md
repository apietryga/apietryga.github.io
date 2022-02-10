# apietryga.com v1.0
PWA web-dev portfolio
## Main info
  - Page is full wroted in DOM objects in [js/app.js](js/app.js). 
  - Contents of page is in [js/data.js](js/data.js)
  - To make pretty og tags call [makeoghtmls.php](makeoghtmls.php) -
  it makes html files based on [js/meta.js](js/meta.js) and [js/data.js](js/meta.js)
  - Path to most of img's is defined in top of [js/social_hacks.js](js/social_hacks.js) and in [makeoghtmls.php](makeoghtmls.php)
  - There's only one *.html file that is important - it's [template.html](template.html) - when you change smth in it, after call [makeoghtmls.php](makeoghtmls.php), every html will have wrote lines. 
### Must to know
  If u want to use this portfolio you have to configure
  rewrite engine to change index to home and hide files extensions:
  - .htaccess:
    ```
    RewriteEngine On
    DirectoryIndex home.html
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^([^\.]+)$ $1.html [NC,L]
    ```
  - firebase.json (for firebase)
    ```json   
    "hosting": {
      "cleanUrls": true,
      "rewrites": [
        {
          "source": "/",
          "destination": "/home.html"
        }
      ],
    ```
## To do in v1.1
  - slide up and down 
  - Ios Checkboxes on "filtering and sorting"
  - back navigation
  - loadings

## Review
  - pushing url's 
  - share button on computer version
