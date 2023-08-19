const items = []
// simulate request add item using api
function api(id, date, country) {
  const item = {
    id,
    date,
    timestamp: Date.parse(date), // timestamp
    country
  }
  items.push(item)
}
// configure timezone to EUA
const eua = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Europe/Amsterdam',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
});
api(1, eua.format(new Date()), 'eua') // add item 1 from eua
api(2, eua.format(new Date()), 'eua') // add item 2 from eua

// configure timezone to Brazil
const brazil = new Intl.DateTimeFormat('en-US', {
  timeZone: 'America/Sao_Paulo',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
});
api(3, brazil.format(new Date()), 'brazil') // add item 3 from brazil

// sort item by nearest date
const itemsSortBy = items.sort((a, b) => {
  return (a.timestamp) - (b.timestamp)
})
for (const item of itemsSortBy) {
  console.log(item)
}
