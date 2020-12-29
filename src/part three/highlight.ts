const result = {
  title: 'A guide to @@starthl@@Ember@@endhl@@.js',
  url: '/a-guide-to-ember',
  abstract: 'The framework @@starthl@@Ember@@endhl@@.js in a nutshell'
}

// highlight is a 'taggged template litteral'
let markup = highlight`<li>${result.title}</li>`

function highlight(
  strings: TemplateStringsArray,
  ...values: string[]
) {
  let str = '' // The result string
  strings.forEach((templ, i) => {
    // Fetch the expression from the same position
    // or assign an empty string
    if (values[i]){
      let expr = values[i]?.
      replace('@@starthl@@', '<em>').
      replace('@@endhl@@', '</em>') ?? ''
      // Merge template and expression
      str += templ + (expr ? expr : '')
    }
  });
  return str
}

function createResultTemplate(results: Result[]): string {
  return `<ul>${results.map(result =>
      highlight`<li>${result.title}</li>`)}</ul>`
}

let returnValue = createResultTemplate([result, result, result])

export {returnValue}