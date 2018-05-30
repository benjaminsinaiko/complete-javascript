module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaVersion: 8,
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        },
        sourceType: 'module'
    },
    plugins: ['react'],
    rules: {
        'no-console': 1,
        indent: ['error', 2],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'never']
    }
}
