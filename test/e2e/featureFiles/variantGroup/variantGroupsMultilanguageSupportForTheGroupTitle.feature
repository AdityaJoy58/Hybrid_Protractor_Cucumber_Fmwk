Feature:  Multi Language Feature in Variant Groups for Title Field
  As a retailer catalog owner,
  I would like to be able to translate the variant group title to different language
  So that it will be possible to display them in different languages on different TP (for in the eCommerce)

# Add mode
  @catalog @variantGroup @ml @functional
  Scenario: Verify the Add functionality in case user enter the Variant Group title
    Given Create Variant Group screen is opened
    When  User enters the Title
    And   User clicks the culture button
    Then  A pop up will get opened with culture and value field
    And   Default Culture and value will be displayed in the existing table below culture drop down for Variant Group Title

  @catalog @variantGroup @ml @ui @ignore
  Scenario: Verify the Add functionality in case user does not enter the Variant Group title
    Given This scenario is UI - "Definition already implemented at Merchandise Hierarchy."
    And   Create Variant Group screen is opened
    When  User leaves the Title field as blank
    And   User clicks the culture button
    Then  A pop up will get opened with culture and value
    And   the system�s default culture will be displayed
    And   the focus will be on value field

#Pop up scenarios for Create Variant Group screen
  @catalog @variantGroup  @ml @ui @ignore
  Scenario: Verify the culture drop down with flag
    Given Culture pop-up is opened for Title field from Create Variant Group screen
    When  Click on the drop down in pop up
    Then  Drop down will be displayed with different cultures
    And   Each value will get displayed with relevant flag and country value in parenthesis

  @catalog @variantGroup  @ml @ui @ignore
  Scenario: Verify the selection in culture drop down
    Given Culture pop-up is opened for Title field from Create Variant Group screen
    When  User select the language from Culture drop down
    Then  Country will appear with the corresponding flag in parenthesis

  @catalog @variantGroup  @ml @ui @ignore
  Scenario: Verify the culture drop down and value column in pop up
    Given Culture pop-up is opened for Title field from Create Variant Group screen
    Then  A pop up will get opened with culture and value
    And   User will be able to select the language from the Culture drop down
    And   User will be able to define the value for Particular language

  @catalog @variantGroup  @ml @ui @ignore
  Scenario: Verify the functionality that all the existing translation values should be in editable mode
    Given Culture pop-up is opened for Title field from Create Variant Group screen
    When  User add the translation Values
    And   Values gets added in existing Values
    Then  All the translation Values will be in the editable mode
    And   User will be able to edit any existing Value

  @catalog @variantGroup  @ml @ui @ignore
  Scenario: Verify add functionality of culture and value in existing values
    Given Culture pop-up is opened for Title field from Create Variant Group screen
    When  User select the language from Culture drop down
    And   User define the Value for that language
    And   User click on add Button
    Then  Language and value will get added in the bottom of the existing value
    And   User will notice that add was Performed

  @catalog @variantGroup  @ml @ui @ignore
  Scenario: Verify functionality of mouse over on the rows
    Given Culture pop-up is opened for Title field from Create Variant Group screen
    When  User mouse over on the translation values in existing Table
    Then  A black dot and delete icon will be displayed for record with mouse Over

  @catalog @variantGroup  @ml @ui @ignore
  Scenario: Verify that user is allowed to edit the existing values in add mode
    Given Culture pop-up is opened for Title field from Create Variant Group screen
    When  User select a culture from drop down and enter the translation Value
    And   Value added in existing value
    Then  User will be able to edit the existing translation value

  @catalog @variantGroup  @ml @ui @ignore
  Scenario: Verify that user can enter one translation value against one language
    Given Culture pop-up is opened for Title field from Create Variant Group screen
    When  A Culture already exist in the translation Values
    Then  that culture will be displayed in the drop list as disabled

  @catalog @variantGroup  @ml @ui @ignore
  Scenario: Verify add Translation Value text box length and warning message
    Given This scenario is UI Ignored - "UI scenarios are not implemented."
    And   Culture pop-up is opened for Title field from Create Variant Group screen
    When  User select the language from Culture drop down
    And   User define the Value for that language to the max 64 characters
    Then  User will be able to continue writing up to Max allowed characters
    And   User will get warning message that user cannot enter more than 64 Characters

  @catalog @variantGroup @ml @ui @ignore
  Scenario: Verify the search functionality in culture drop down
    Given This scenario is UI Ignored - "UI scenarios are not implemented."
    And   Culture pop-up is opened for Title field from Create Variant Group screen
    When  user start entering the character in the culture drop down Box
    Then  Only Culture that contain matching characters will be displayed in the drop Down
    And   Text will be highlighted according to the user's input for each Word

  @catalog @variantGroup @ml @ui @ignore
  Scenario: Verify the functionality of clear icon to clear search
    Given This scenario is UI Ignored - "no able to capture the clear icon"
    And Culture pop-up is opened for Title field from Create Variant Group screen
    When  user start entering the character in the culture drop down Box
    Then  A clear icon will be displayed in the search Field
    And   User will be able to clear the search by clear Icon

  @catalog @variantGroup @ml @ui @ignore
  Scenario: Verify that after using the clear button, search results will clear and default culture drop down values will be displayed
    Given This scenario is UI Ignored - "no able to capture the clear icon"
    And   Culture pop-up is opened for Title field from Create Variant Group screen
    When  user start entering the character in the culture drop down Box
    And   User clears the search by clear Icon
    Then  search results will Clear
    And   Culture drop down will display the default Values

  @catalog @variantGroup @ml @ui @ignore
  Scenario: Verify the functionality of enable Add button
    Given Culture pop-up is opened for Title field from Create Variant Group screen
    When  User select a Culture
    And   Start Entering single character in translation values
    Then  'Add' button will be Enabled

  @catalog @variantGroup @ml @ui @ignore
  Scenario: Verify the functionality of enable OK button
    Given Culture pop-up is opened for Title field from Create Variant Group screen
    When  User add a value in existing list
    Then  'OK' button will be Enabled

  @catalog @variantGroup @ml @functional
  Scenario: Verify the functionality of OK button
    Given Culture pop-up is opened for Title field from Create Variant Group screen
    When  User add a value in existing list
    And   User click on the Ok button
    Then  Pop up will be Closed
    And   Changes in the existing values will be Saved

  @catalog @variantGroup @ml @functional
  Scenario: Verify the functionality of Cancel button
    Given Culture pop-up is opened for Title field from Create Variant Group screen
    When  User click on the cancel Button
    Then  Pop up will be Closed
    And   changes will not be Saved


  @catalog @variantGroup @ml @ui @ignore
  Scenario: Verify the functionality of displaying the delete icon
    Given This scenario is UI Ignored - "UI scenarios are not implemented."
    And Culture pop-up is opened for Title field from Create Variant Group screen
    When  clicking or mouse hovering on one of the record
    Then  delete icon will be displayed on the record�s Row

  @catalog @variantGroup @ml @ui @ignore
  Scenario: Verify the functionality of displaying the delete text as tooltip
    Given Culture pop-up is opened for Title field from Create Variant Group screen
    When  user mouse over on the delete Icon
    Then  Delete text will be displayed as Tooltip

  @catalog @variantGroup @ml @functional
  Scenario: Verify the functionality of delete
    Given Culture pop-up is opened for Title field from Create Variant Group screen
    When User click on the delete button of any existing translation Value
    Then System will display a Warning Message when trying to delete a Group Title for an new Variant group

  @catalog @variantGroup @ml @ui @ignore
  Scenario: Verify the functionality of scroll bar in the pop up
    Given This scenario is UI Ignored - "UI scenarios are not implemented."
    And   Culture pop-up is opened for Title field from Create Variant Group screen
    When  Exiting values of the translation values got Increases
    Then  A scroll down will be added on the right Side

# Culture functionality on Edit screen
  @catalog @variantGroup  @ml @ui @ignore
  Scenario: Verify the functionality of adding a new value in edit mode
    Given Edit Variant Group screen is opened
    When  User clicks the culture button for Title field
    And   User selects the culture value from drop Down and enters the translation value
    And   User click on Add Button
    Then  Value will get saved at the bottom of the existing Values list

# Culture functionality on View screen
  @catalog @variantGroup  @ml @functional
  Scenario: View existing culture translations for Title field
    Given View Variant Group screen is opened
    When  User click on the culture icon of Title Field
    Then  A pop up will get opened with Culture and Value
    And   User should be able to view all the existing translation values for the Title field
    And   User should not be able to make any changes to the translation values in the pop Up

  @catalog @variantGroup  @ml @functional
  Scenario: Title value in Default language in view mode
    Given Variant Group Office screen is opened
    When  User drill down a record in view Mode
    Then  Title field value will be displayed in default Language (English)

  @catalog @variantGroup @ml @ui @ignore
  Scenario: No translation values defined for a value
    Given This scenario is UI Ignored - "UI scenarios are not implemented."
    And   Variant Group Office screen is opened
    When  User drill down a record in view Mode for which translation does not exist for Title field
    Then  Culture icon for Title field will be disable on View Mode
    And   Tool tip text on mouse over on the Culture Icon will display 'No Translation were define'

  @catalog @variantGroup @ml @ui @ignore
  Scenario: Scroll bar in order to view the entire translation
    Given This scenario is UI Ignored - "UI scenarios are not implemented."
    And   View Variant Group screen is opened
    When  User click on culture icon For Title Field
    And   Existing translation values list does not fit into the culture Pop Up
    Then  scroll bar will appear in order to view all the translation Values

  @catalog @variantGroup @ml @ui @ignore
  Scenario: Verify that there should be no ellipsis in view mode
    Given View Variant Group screen is opened
    When  Click on culture icon For Title field
    And   User view a Multi-Line translation value on culture pop up
    Then  User will be able to view the entire translation value text in multi line without Ellipsis
