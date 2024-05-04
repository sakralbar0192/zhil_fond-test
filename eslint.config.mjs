import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'

export default [
    {
        rules: {
            'indent': [
                2,
                4
            ],
            '@typescript-eslint/indent': [
                2,
                4
            ],
            'operator-linebreak': [
                'error',
                'before'
            ],
            'no-restricted-globals': 'off',
            'no-multiple-empty-lines': [
                'error',
                {
                    'max': 2,
                    'maxEOF': 0
                }
            ],
            'prefer-regex-literals': [
                'error',
                {'disallowRedundantWrapping': true}
            ],
            'linebreak-style': 'off',
            'object-curly-newline': [
                'error',
                {
                    'ObjectExpression': {
                        'multiline': true,
                        'minProperties': 3
                    },
                    'ObjectPattern': {
                        'multiline': true,
                        'minProperties': 3
                    },
                    'ImportDeclaration': 'never',
                    'ExportDeclaration': {
                        'multiline': true,
                        'minProperties': 3
                    }
                }
            ],
            'function-call-argument-newline': [
                'error',
                'consistent'
            ],
            'prefer-destructuring': 'off',
            'arrow-body-style': 'off',
            'no-plusplus': 'off',
            'no-param-reassign': 'off',
            'max-len': [
                'error',
                160,
                2,
                {
                    'ignoreUrls': true,
                    'ignoreComments': true,
                    'ignoreTrailingComments': true,
                    'ignoreStrings': true,
                    'ignoreRegExpLiterals': true
                }
            ],
            'vue/max-len': [
                'error',
                {
                    'code': 160,
                    'template': 160,
                    'tabWidth': 2,
                    'comments': 160,
                    'ignorePattern': '',
                    'ignoreComments': true,
                    'ignoreTrailingComments': true,
                    'ignoreUrls': true,
                    'ignoreStrings': true,
                    'ignoreTemplateLiterals': false,
                    'ignoreRegExpLiterals': true,
                    'ignoreHTMLAttributeValues': false,
                    'ignoreHTMLTextContents': false
                }
            ],
            'no-console': 'off',
            'space-before-blocks': 'off',
            'quotes': [
                'error',
                'single'
            ],
            'no-unused-vars': 1,
            'vue/html-closing-bracket-spacing': [
                'error',
                {
                    'startTag': 'never',
                    'endTag': 'never',
                    'selfClosingTag': 'never'
                }
            ],
            'vue/html-closing-bracket-newline': [
                'error',
                {
                    'singleline': 'never',
                    'multiline': 'always'
                }
            ],
            'vue/max-attributes-per-line': [
                'error',
                {
                    'singleline': {'max': 3},
                    'multiline': {'max': 1}
                }
            ],
            'vue/first-attribute-linebreak': [
                'error',
                {
                    'singleline': 'ignore',
                    'multiline': 'below'
                }
            ],
            'vue/no-use-v-if-with-v-for': [
                'error',
                {'allowUsingIterationVar': false}
            ],
            'vue/comment-directive': 'off',
            'semi': [
                'error',
                'never'
            ],
            'vue/multi-word-component-names': [
                0
            ],
            'no-empty-pattern': [
                0
            ],
            'space-before-function-paren': 'off',
            '@typescript-eslint/space-before-function-paren': 'off'
        },
        languageOptions: {globals: globals.browser},
        ignores: [ 'shims-vue.d.ts' ]
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginVue.configs['flat/essential']  
]