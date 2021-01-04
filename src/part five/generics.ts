import {SubtitleURLs, VideoFormatURLs} from './types'

const videos: VideoFormatURLs = {
  format360p: new URL('http://www.format360.com'),
  format480p: new URL('http://www.format480.com'),
  format720p: new URL('http://www.format720.com'),
  format1080p: new URL('http://www.format1080.com')
}

const subTitles: SubtitleURLs = {
  english: new URL('http://www.english.com'),
  german: new URL('http://www.german.com'),
  french: new URL('http://www.french.com')
}

declare function loadFormat(
  format: string
): void

type URLList = {
  [k: string]: URL
}

function isAvailable<FormatList extends URLList>(
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

function loadFile<Formats extends URLList>(
  fileFormats: Formats,
  format: keyof Formats
) {
  // The real work ahead
}

loadFile(videos, 'format4k')
loadFile(subTitles, 'spanish')

const returnValue = ''
export {returnValue}