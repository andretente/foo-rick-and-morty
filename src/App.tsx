import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import Characters, { charactersLoader } from './routes/Characters'
import Character, { characterLoader } from './routes/Characters/Character'
import Episodes, { episodesLoader } from './routes/Episodes'
import Error from './routes/Error'
import Layout from './routes/Layout'
import StopWatch from './routes/StopWatch'

function App() {
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<Layout />} errorElement={<Error />}>
            <Route path="characters">
              <Route index element={<Characters />} loader={charactersLoader} />
              <Route
                path=":characterId"
                element={<Character />}
                loader={characterLoader}
              />
            </Route>

            <Route
              path="episodes"
              element={<Episodes />}
              loader={episodesLoader}
            />

            <Route path="stopwatch" element={<StopWatch />} />
          </Route>
        )
      )}
    />
  )
}

export default App
