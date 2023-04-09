const path = require('path');

module.exports = {
    entry: "./src/ce/index.ts",
    mode: "production",
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                include: path.join(__dirname, './src/ce'),
                use: [
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
            { test: /\.scss$/, use: [ "style-loader", "css-loader", "sass-loader" ] },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    }
}