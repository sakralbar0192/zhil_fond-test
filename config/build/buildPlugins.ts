import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExactPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { type BuildOptions } from './types/config'
import { VueLoaderPlugin } from 'vue-loader'

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({template: paths.html}),
        new webpack.ProgressPlugin(),
        new MiniCssExactPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({__IS_DEV__: JSON.stringify(isDev)}),
        new VueLoaderPlugin()
    ]

    if (isDev) {
        plugins.push(new webpack.HotModuleReplacementPlugin())
        plugins.push(
            new BundleAnalyzerPlugin({openAnalyzer: false})
        )
    }

    return plugins
}
