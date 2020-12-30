type PollingResults = {
  results: Result[],
  done: boolean
}

async function polling(
  term: string
): Promise<PollingResults> {
  /*return fetch(`/pollingSearch?query=${term}`)
    .then(result => result.json())*/

  let apiResults = ['Ember', 'Java', 'Python']
    .filter(elt => elt.toLocaleLowerCase().includes(term.toLowerCase()))
    .map((elt: string) => {
      return {
        title: `The ${elt} test book`,
        url: `/${elt}-design-patterns`,
        abstract: `A practical book on ${elt}`
      }
    })

  let results: PollingResults = {
    results: apiResults,
    done: true
  }

  return Promise.resolve(results)
}

function append(result: Result){
  const node = document.createElement('li')
  node.innerHTML = `
    <a href="${result.url}">${result.title}</a>
  `
  document.querySelector('#result')?.append(node)
}

async function *getResults(term: string
  ): AsyncGenerator<Result[], void, boolean>{
  let state
  let stop = false
  do {
    state = await polling(term)
    stop = yield state.results
  } while (!state.done || stop)
}

async function handleChange(this: HTMLElement){
  let resultsNode = document.querySelector('#result')
  if (resultsNode){
    resultsNode.innerHTML = ''
  }

  if (this instanceof HTMLInputElement){
    let resultsGen = getResults(this.value)
    let next
    let count = 0
    do {
      next = await resultsGen.next(count >= 5)
      if (typeof next.value !== 'undefined'){
        next.value.map(append)
        count += next.value.length
      }
    } while (!next.done)
    

    /**
     * If we did'nt pass anything to `yield`, we could
     * have used a `for` loop...
    for await(let results of resultsGen){
      results.map(append)
    }
    */
  }
}

document.getElementById('search')?.
  addEventListener('change', handleChange)

const returnValue = ''
export {returnValue}