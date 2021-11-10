const { override, addWebpackAlias, addWebpackPlugin } = require( 'customize-cra' );
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

const addTerserPlugin = () => {
    if (process.env.NODE_ENV === 'production') {
        addWebpackPlugin(
            new TerserPlugin({
                terserOptions: {
                    parse: {
                        ecma: 8,
                    },
                    compress: {
                        ecma: 5,
                        warnings: false,
                        comparisons: false,
                        inline: 2,
                    },
                    mangle: {
                        safari10: true,
                    },
                    output: {
                        ecma: 5,
                        comments: /BUILD METADATA/,
                        ascii_only: true,
                    },
                },
                extractComments: /LICENSE/i,
            })
        );
    }
};

module.exports = override(
    addWebpackAlias({
        '@': path.resolve(__dirname, './src'),
        '@view': path.resolve(__dirname, './src/view'),
        '@router': path.resolve(__dirname, './src/router'),
        '@utils': path.resolve(__dirname, './src/utils'),
        '@component': path.resolve(__dirname, './src/component'),
        '@service': path.resolve(__dirname, './src/service'),
    }),
    // addWebpackPlugin(
    //     new CompressionWebpackPlugin({
    //         algorithm: 'gzip',
    //         test: /\.js$|\.css$/,
    //         threshold: 1024,
    //     })
    // ),
    addTerserPlugin(),
);
