type SearchFn = (
  query: string, tags?: string [] | undefined
 ) => Promise<Result[]>

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

function inputChangeHandler(this: HTMLInputElement){
  this.
  parentElement?.
  classList.add('active')
}

function displaySearch(
  inputId: string,
  outputId?: string,
  search?: SearchFn
): void {
  document.
    getElementById(inputId)?.
    addEventListener('change', inputChangeHandler)
}

displaySearch('search')