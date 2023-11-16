Feature('Computers Page')

Before(async ({ I }) => {
  I.amOnPage('computers')
})

Scenario('@TC-1', async ({ computersPage }) => {
  const searchString = 'Acer'

  await computersPage.verifyMenuItemsOwner(searchString)
}).tag('@test')

Scenario('@TC-2', async ({ computersPage }) => {
  const searchString = 'Acer'

  await computersPage.verifyFilterButtonIsPresent()
}).tag('@test')

Scenario('@TC-4', async ({computersPage }) => {
  const computerName = 'Test Computer'

  await computersPage.addNewComputer(computerName)
}).tag('@test')

Scenario('@TC-7', async ({ computersPage }) => {

  await computersPage.addNewComputerNegative()
}).tag('@test')

Scenario('@TC-8', async ({ computersPage }) => {
  const computerName = 'Test Computer'
  const randomCharacters = 'Test'
  
  await computersPage.enterCharactersInIntroducedField(computerName, randomCharacters)
}).tag('@test')
