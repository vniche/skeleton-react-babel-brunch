exports.npm = {
    globals: {
        React: 'react',
        ReactDOM: 'react-dom'
    }
}

exports.files = {
    javascripts: {
        joinTo: 'app.js'
    },
    stylesheets: {
        joinTo: {
            'app.css': ['**/*.css', '**/*.scss']
        }
    }
};

exports.plugins = {
    babel: {
        presets: ['latest', 'react']
    }
};

exports.hot = true;