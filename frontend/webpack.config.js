const env = process.env.NODE_ENV;

console.log(`** Running ${env} mode using ./webpack/webpack.${env}.js **`);

module.exports = require(`./webpack/webpack.${env}.js`);
