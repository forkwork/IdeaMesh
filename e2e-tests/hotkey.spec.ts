import { expect } from '@playwright/test'
import { test } from './fixtures'
import { createRandomPage, enterNextBlock, lastBlock, modKey, IsLinux, closeSearchBox } from './utils'

test('open search dialog', async ({ page }) => {
  await page.waitForTimeout(200)
  await closeSearchBox(page)
  await page.keyboard.press(modKey + '+k')

  await page.waitForSelector('[placeholder="What are you looking for?"]', { state: 'visible' })
  await page.keyboard.press('Escape')
  await page.waitForSelector('[placeholder="What are you looking for?"]', { state: 'hidden' })
})

test('insert link #3278', async ({ page }) => {
  await createRandomPage(page)

  let hotKey = modKey + '+l'
  let selectAll = modKey + '+a'

  // Case 1: empty link
  await lastBlock(page)
  await page.press('textarea >> nth=0', hotKey)
  expect(await page.inputValue('textarea >> nth=0')).toBe('[]()')
  await page.type('textarea >> nth=0', 'Ideamesh Website')
  expect(await page.inputValue('textarea >> nth=0')).toBe('[Ideamesh Website]()')
  await page.fill('textarea >> nth=0', '[Ideamesh Website](https://ideamesh.khulnasoft.com)')

  // Case 2: link with label
  await enterNextBlock(page)
  await page.type('textarea >> nth=0', 'Ideamesh')
  await page.press('textarea >> nth=0', selectAll)
  await page.press('textarea >> nth=0', hotKey)
  expect(await page.inputValue('textarea >> nth=0')).toBe('[Ideamesh]()')
  await page.type('textarea >> nth=0', 'https://ideamesh.khulnasoft.com/')
  expect(await page.inputValue('textarea >> nth=0')).toBe('[Ideamesh](https://ideamesh.khulnasoft.com/)')

  // Case 3: link with URL
  await enterNextBlock(page)
  await page.type('textarea >> nth=0', 'https://ideamesh.khulnasoft.com/')
  await page.press('textarea >> nth=0', selectAll)
  await page.press('textarea >> nth=0', hotKey)
  expect(await page.inputValue('textarea >> nth=0')).toBe('[](https://ideamesh.khulnasoft.com/)')
  await page.type('textarea >> nth=0', 'Ideamesh')
  expect(await page.inputValue('textarea >> nth=0')).toBe('[Ideamesh](https://ideamesh.khulnasoft.com/)')
})
