import { EventInput } from '@fullcalendar/core'

let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'Yahya Kara',
    start: todayStr + 'T15:00:00'
  },
  {
    id: createEventId(),
    title: 'Respect for karaografi',
    start: todayStr + 'T12:00:00'
  },
  {
    id: createEventId(),
    title: 'karaografi',
    start: todayStr 
  },
]

export function createEventId() {
  return String(eventGuid++)
}
