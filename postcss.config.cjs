module.exports = {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': 'postcss-nesting',
      tailwindcss: {},
      'postcss-preset-env': {
        features: { 'nesting-rules': false },
      },
    }
  }

// previous
// module.exports = {
//     plugins: [
//         require('postcss-preset-env')({
//             stage: 0,
//         })

//     ]
// }
