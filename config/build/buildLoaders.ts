import type webpack from 'webpack'
import { buildStyleLoader } from './buildStyleLoader'
import { buildSvgLoader } from './buildSvgLoader'
import { type BuildOptions } from './types/config'

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {loader: 'file-loader'}
        ]
    }
    const svgLoader = buildSvgLoader()

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {presets: ['@babel/preset-env']}
        }
    }

    const vueLoader = {
        test: /\.vue$/,
        use: 'vue-loader',
        exclude: /node_modules/
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {appendTsSuffixTo: [/\.vue$/],},
        exclude: /node_modules/,
    }


    const styleLoader = buildStyleLoader(isDev)

    return [
        babelLoader,
        typescriptLoader,
        vueLoader,
        styleLoader,
        svgLoader,
        fileLoader
    ]
}
