javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

// Режим разработки (development) или production
    mode: 'development',

// Входной файл - откуда начинать сборку
    entry: './src/index.js',

// Выходной файл - куда сохранить результат
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
},

// Настройки модулей (как обрабатывать разные файлы)
module: {
    rules: [
        {
            test: /\.css$/i, // для всех CSS файлов
            use: ['style-loader', 'css-loader'], // использовать эти загрузчики
        },
    ],
},

// Плагины - дополнительные возможности
plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html', // использовать наш HTML как шаблон
    }),
],

// Настройки сервера для разработки
devServer: {
    static: './dist',
    hot: true, // горячая замена модулей
    open: true, // открыть браузер автоматически
    port: 3000, // порт для доступа
    },
};