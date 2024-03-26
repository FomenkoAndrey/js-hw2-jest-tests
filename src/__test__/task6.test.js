import { code } from './prepareTestEnvironment.js'

eval(code)

describe('Task #8: Substring replacement in strObj.str', () => {
  test('strReplace contains the correct replacements', () => {
    const expectedStr = 'Мама моет раму, Рама держит маму'
    // Перевірка, що результат заміни відповідає очікуваному рядку
    expect(global.strReplace).toBe(expectedStr)
  })
})
