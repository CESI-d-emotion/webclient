export function setCookie(name: string, value: string, days: number) {
  const date = new Date()
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
  const expires = 'expires=' + date.toUTCString()
  document.cookie = name + '=' + value + ';' + expires + ';path=/'
}

export function unsetCookie(name: string) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`
}

export function getCookies(name: string) {
  const cookies = document.cookie.split(';')
  const cookie = cookies.find(cookie => cookie.trim().startsWith(name))
  if (cookie) {
    return cookie.split('=')[1]
  }
}

export function checkAndSetAuthFromCookie() {
  const token = getCookies('auth-token')
  const identity = getCookies('auth-identity') as 'isuser' | 'isassociation'
  if (token && identity) {
    return { token, identity }
  }
}
