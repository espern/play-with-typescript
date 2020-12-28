type Result = {
  title: string,
  url: string,
  abstract: string
}

function search(
  query: string,
  callback: (results: Result[]) => void,
  tags?: string[]
){

  let queryString = `?query=${query}`
  if (tags && tags.length){
    queryString += `&tags=${tags.join()}`
  }

  fetch(`/search${queryString}`)
    .then(res => res.json() as Promise<Result[]>)
    .then(results => callback(results))
}

type Query = {
  query: string,
  tags?: string[],
  assemble: (includeTags: boolean) => string
}

const query: Query = {
  query: 'Ember',
  tags: ['javascript'],
  assemble(includeTags = false) {
    let query = `?query=${this.query}`
    if (includeTags && typeof this.tags !== 'undefined'){
        query += `&tags=${this.tags.join(',')}`
    }
    return query
  }
}

type SearchFn = (
  query: string, tags?: string [] | undefined
 ) => Promise<Result[]>

const testSearch: SearchFn = function(term) {
  return Promise.resolve([{
    title: `The ${term} test book`,
    url: `/${term}-design-patterns`,
    abstract: `A practical book on ${term}`
  }])
}

declare function displaySearch(
  inputId: string,
  outputId: string,
  search: SearchFn
): void

/**
 * displaySearch(
  'SearchField',
  'result',
  function(query, tags){
    return Promise.resolve([{
      title: `The ${query} test book`,
      url: `/${query}-design-patterns`,
     abstract: `A practical book on ${query}`
    }])
  }
)
*/

const dummyContentSearchFn: SearchFn = function() {
  return Promise.resolve([{
    title: 'Form Design Patterns',
    url: '/form-design-patterns',
    abstract: 'A practical book on accessible forms'
  }])
}

search('Ember', function(results){
  console.log(results)
})

const result = ''

export {result}