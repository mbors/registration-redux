import { DEFAULT_STATE, setLocale } from './locale.reducers'

test('setLocale should save a valid locale', () => {
  const initialState = DEFAULT_STATE
  const payload = 'it-IT'

  const newState = setLocale(initialState, { payload })
  expect(newState).toEqual({ code: payload })
})

test('setLocale should not save an invalid locale', () => {
  const initialState = DEFAULT_STATE
  const payload = 'invalid-code'

  const newState = setLocale(initialState, { payload })
  expect(newState).toEqual(initialState)
})