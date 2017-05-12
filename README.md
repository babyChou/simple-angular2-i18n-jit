# simple-angular2-i18n-jit

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.3.

## Development server

Run `apache` for a dev server.

1.enable the `rewrite module`

2.add config to `.htaccess`

<IfModule mod_rewrite.c>

    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f

    RewriteRule ^ index.html [L]

</IfModule>


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Referance (Thanks for the Referance)

1.[https://github.com/angular/angular-cli/wiki/stories-internationalization](https://github.com/angular/angular-cli/wiki/stories-internationalization)

2.[http://codetrixstudio.com/internationalization-i18n-angular-2-webpacks/](http://codetrixstudio.com/internationalization-i18n-angular-2-webpacks/)

3.[https://github.com/angular/angular-cli/issues/2327](https://github.com/angular/angular-cli/issues/2327)
