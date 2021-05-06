let mix = require('laravel-mix');

mix
.js('src/app.js', 'dist')
.sass('src/app.scss', 'dist')
.options({
    processCssUrls:false
});

/*  Aggiungiamo options per evitare che SASS crei la cartella images 
    e si comporti normalmente */