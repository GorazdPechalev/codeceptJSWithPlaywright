
const { I, computersObject } = inject()

const verifyMenuItemsOwner = async (searchString) => {
    await verifyFilterButtonIsPresent()
    await I.seeElement(computersObject.searchField)
    await I.fillField(computersObject.searchField, searchString)
    await I.click(computersObject.filterButton)
    await I.waitForText('3 computers found')
}

const verifyFilterButtonIsPresent = async () => {
    await I.waitForElement(computersObject.filterButton, 15)
}

const addNewComputer =async (computerName) => {
    await I.waitForElement(computersObject.addANewComputerButton)
    await I.click(computersObject.addANewComputerButton)
    await addNewComputerScreen(computerName)
}

const addNewComputerScreen =async (computerName) => {
    await I.waitForElement(computersObject.computerNameField)
    await I.fillField(computersObject.computerNameField, computerName)
    await I.selectOption(computersObject.companyDropdown, "IBM")
    await I.click(computersObject.createComputerButton)
    await I.waitForElement(computersObject.notificationBar)
    await I.see("Computer " + computerName + " has been created", computersObject.notificationBar)
}

const addNewComputerNegative =async () => {
    
    await I.waitForElement(computersObject.addANewComputerButton)
    await I.click(computersObject.addANewComputerButton)
    await I.waitForElement(computersObject.createComputerButton)
    await I.click(computersObject.createComputerButton)
    await I.see('Failed to refine type : Predicate isEmpty() did not fail.')
    
}

const enterCharactersInIntroducedField =async( computerName, randomCharacters) => {
    
    await I.waitForElement(computersObject.addANewComputerButton)
    await I.click(computersObject.addANewComputerButton)
    await I.waitForElement(computersObject.computerNameField)
    await I.fillField(computersObject.introducedField, randomCharacters)
    await I.fillField(computersObject.computerNameField, computerName)
    await I.click(computersObject.createComputerButton)
    await I.see("Failed to decode date : java.time.format.DateTimeParseException: Text 'Test' could not be parsed at index 0")
    
    
}
export = {
    verifyMenuItemsOwner,
    verifyFilterButtonIsPresent,
    addNewComputer,
    addNewComputerScreen,
    addNewComputerNegative,
    enterCharactersInIntroducedField
}
