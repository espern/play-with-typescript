type Talk = {
  title: string,
  abstract: string,
  speaker: string
}

type Conference = TechEventBase & {
  location: string,
  price: number,
  talks: Talk[],
  kind: 'conference'
}
type Meetup = TechEventBase & {
  location: string,
  price: string,
  talks: Talk[],
  kind: 'meetup'
}
type Webinar = TechEventBase & {
  url: string,
  price?: number,
  talks: Talk,
  kind: 'webinar'
}

type TechEventBase = {
  title: string,
  description: string
  date: Date,
  capacity: number,
  rsvp: number,
}

type Hackathon = TechEventBase & {
  location: string,
  price?: number,
  kind: 'hackathon'
}

export type TechEvent = Webinar | Conference | Meetup | Hackathon
export type EventKind = TechEvent['kind']


export type GroupedEvents = {
  [kind in EventKind]: TechEvent[]  // <== Mapped type here
}

/**
 * // 1. The original declaration
  type GroupedEvents = {
    [Kind in EventKind]: TechEvent[]
  }
  // 2. Resolving the type alias.
  // We suddenly get a connection to tech event
  type GroupedEvents = {
    [Kind in TechEvent['kind']]: TechEvent[]
  }
  // 3. Resolving the union
  type GroupedEvents = {
    [Kind in 'webinar' | 'conference'
    | 'meetup' | 'hackathon']: TechEvent[]
  }
  // 4. Extrapolating keys
  type GroupedEvents = {
    webinar: TechEvent[],
    conference: TechEvent[],
    meetup: TechEvent[],
    hackathon: TechEvent[],
  }
 */

export type UserEvents = {
  watching: TechEvent[],
  rvsp: TechEvent[],
  attended: TechEvent[],
  signedout: TechEvent[]
 }
