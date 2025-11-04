const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servidor archivos estáticos
app.use(express.static(__dirname));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/img', express.static(path.join(__dirname, 'img')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/lib', express.static(path.join(__dirname, 'lib')));
app.use('/mail', express.static(path.join(__dirname, 'mail')));

// Rutas para las páginas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/service', (req, res) => {
    res.sendFile(path.join(__dirname, 'service.html'));
});

app.get('/price', (req, res) => {
    res.sendFile(path.join(__dirname, 'price.html'));
});

app.get('/team', (req, res) => {
    res.sendFile(path.join(__dirname, 'team.html'));
});

app.get('/portfolio', (req, res) => {
    res.sendFile(path.join(__dirname, 'portfolio.html'));
});

app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'blog.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Barbería Don Diego corriendo en: http://localhost:${PORT}`);
    console.log(`📍 Para detener el servidor: Ctrl + C`);
});
