import {EventKind, GroupedEvents, TechEvent, UserEvents} from './types'

function neverError(
  message: string,
  token: never
){
  /**
   * `never` param : safeguard for situations that could occur, but should never occur
   */
  return new Error(
    `${message}.${token} should not exist`
  )
}

function getEventTeaser(event: TechEvent) {
  switch(event.kind) {
    case 'conference':
      return `${event.title} (Conference), ` +
      `priced at ${event.price} USD`
    case 'meetup':
      return `${event.title} (Meetup), ` +
      `hosted at ${event.location}`
    case 'webinar':
      return '${event.title} (Webinar), ' +
      `available online at ${event.url}`
    case 'hackathon':
      return '${event.title} (Hackaton), ' +
      `hosted at ${event.location}`
    default:
      throw neverError('Not sure what to do with that!', event)
  }
}

const script19 = {
  title: 'ScriptConf',
  date: new Date('2019-10-25'),
  capacity: 300,
  rsvp: 289,
  description: 'The feel-good JS conference',
  kind: 'conference' as const,
  price: 129,
  location: 'Central Linz',
  talks: [{
    speaker: 'Vitaly Friedman',
    title: 'Designing with Privacy in mind',
    abstract: '...'
  }]
};

getEventTeaser(script19)


function filterByKind(
  list: TechEvent[],
  kind: EventKind
): TechEvent[] {
  return list.filter(el => el.kind === kind)
} 

const event: TechEvent = script19

function groupEvents(
  events: TechEvent[]
): GroupedEvents {
  const grouped: GroupedEvents = {
  conference: [],
  meetup: [],
  webinar: [],
  hackathon: []
  };
  events.forEach((el) => {
    grouped[el.kind].push(el)
  })
  return grouped
}

function isUserEventListCategory(
  list: UserEvents,
  category: string
): category is keyof UserEvents{ // <== this is a type predicate. Works with func. that returns a bool value
  return Object.keys(list).includes(category)
}

function filterUserEvent(
  list: UserEvents,
  category: string,
  filterKind?: EventKind
){
  if (isUserEventListCategory(list, category)){
    const filteredList = list[category]
    if (filterKind){
      return filteredList.filter(event =>
        event.kind === filterKind
      )
    }
    return filteredList
  }
  return list
}


const returnValue = ''
export {returnValue}