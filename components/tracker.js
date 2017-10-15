import ga from 'react-ga'

ga.initialize('UA-599674-49')

export default function Tracker({ location }) {
  const pathname = location.pathname
  const search = location.search
  const fullpath = pathname + search

  console.log('VIEWING:', { location, fullpath })

  ga.set({ page: fullpath })
  ga.pageview(fullpath)

  return null
}
