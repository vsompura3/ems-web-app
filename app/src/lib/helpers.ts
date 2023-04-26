export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}

export function sayGreeting() {
  let greeting
  const today = new Date()
  const currentHour = today.getHours()
  if (currentHour >= 0 && currentHour <= 12) {
    greeting = 'Good Morning'
  } else if (currentHour > 12 && currentHour <= 18) {
    greeting = 'Good Afternoon'
  } else {
    greeting = 'Good Evening'
  }

  return greeting
}
