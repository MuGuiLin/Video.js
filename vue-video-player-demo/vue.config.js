module.exports = {

    // publicPath: './',
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',

    configureWebpack: config => {

        config.devServer = {
            proxy: {
                '/mupiao': {
                    target: 'http://172.28.125.16:8080/RadioManuscriptManagement',
                    ws: true,
                    changeOrigin: true,
                    pathRewrite: {
                        '^/mupiao': ''
                    }
                }
            }
        }
    }
};

