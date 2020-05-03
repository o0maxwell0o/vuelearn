// vue.config.js
module.exports = {
    devServer: {
        disableHostCheck: true,
        port: 8036,
        proxy: { // 设置代理
            '/api': {
                target: 'http://localhost:8443',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
