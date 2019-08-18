const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const path = require('path');

module.exports = withSass(withCSS({
    cssLoaderOptions: {
        url: false
    },
    webpack(config, options) {
        // config.module.rules.push({
        //     test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        //     loader: 'url-loader',
        //     options: {
        //         limit: 8192,
        //     },
        // })

        // console.log(config.resolve.alias);
        // config.resolve.alias = Object.assign({}, config.resolve.alias, {
        //     'components':''
        // })
        const root = path.resolve('./').replace(/\\/g, "\\\\");
        const aliases = {
            'components': path.resolve(root, 'components'),
            'common': path.resolve(root, 'common'),
            'helpers': path.resolve(root, 'helpers'),
            'icons': path.resolve(root, 'icons'),
            'layouts': path.resolve(root, 'layouts'),
            'pages': path.resolve(root, 'pages'),
            'theme': path.resolve(root, 'theme'),
            'views': path.resolve(root, 'views'),
            'assets': path.resolve(root, 'assets'),
        }
        config.resolve.alias = Object.assign({}, config.resolve.alias, aliases);

        return config
    }
}))

// module.exports = withSass({
//     cssLoaderOptions: {
//         url: false
//     },
//     webpack(config, options) {
//         config.module.rules.push({
//             test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
//             loader: 'url-loader',
//             options: {
//                 limit: 8192,
//             },
//         })

//         return config
//     }
// })