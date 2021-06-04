const CracoAntDesignPlugin = require('craco-antd');
module.exports = {
    plugins: [
        {
            plugin: CracoAntDesignPlugin,
            options: {
                customizeTheme: {
                    '@primary-color': '#23b3c1',
                },
            },
        },
    ],
};
