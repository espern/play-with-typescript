import {SubtitleURLs, VideoFormatURLs} from './types'

const videos: VideoFormatURLs = {
  format360p: new URL('https://www.google.fr/?q=format360'),
  format480p: new URL('https://www.google.fr/?q=format480'),
  format720p: new URL('https://www.google.fr/?q=format720'),
  format1080p: new URL('https://www.google.fr/?q=format1080')
}

const subTitles: SubtitleURLs = {
  english: new URL('https://www.google.fr/?q=english'),
  german: new URL('https://www.google.fr/?q=german'),
  french: new URL('https://www.google.fr/?q=french')
}

type HD = Pick<
VideoFormatURLs,
'format1080p' | 'format720p'>

type URLObject2 = Record<string, URL>

declare function loadFormat(
  format: string
): void

type URLObject = {
  [k: string]: URL
}

type Loaded<Key> = {
  format: Key,
  loaded: boolean
}

function isAvailable<FormatList extends URLObject>(
  obj: FormatList,
  key: string | number | symbol
): key is keyof FormatList {
  return key in obj
}


let availability = `${isAvailable(videos, 'format720p')} & 
  ${isAvailable(subTitles, 'spanish')}`


async function randomNumber() {
  return Math.random()
}

async function loadFile<
  Formats extends URLObject,
  Key extends keyof Formats
  >(fileFormats: Formats, format: Key):
  Promise<Loaded<Key>> {
  
  const api = 'http://dummy.restapiexample.com/api/v1/employees'
  const response = await fetch(fileFormats[format].href)
  const { data } = await response.json()

  return {
    format,
    loaded: data.response === 200
  }
}

type Split = {
  [P in keyof VideoFormatURLs]
  : Record<P, VideoFormatURLs[P]>
}[keyof VideoFormatURLs]

type SplitGeneric<Obj> = {
  [Prop in keyof Obj]: Record<Prop, Obj[Prop]>
}[keyof Obj]

type AvailableFormats = SplitGeneric<VideoFormatURLs>

const result = async () => await loadFile(videos, 'format1080p')

const returnValue = ''+result()
export {returnValue}