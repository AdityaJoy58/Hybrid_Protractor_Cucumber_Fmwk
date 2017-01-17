Feature:  Multi Language Feature in Groups for Title Field
  As a retailer catalog owner,
  I would like to be able to translate the group title to different language
  So that it will be possible to display them in different languages on different TP (for in the eCommerce)

# Add mode
  @catalog @group @ml @functional
  Scenario: Verify the Add functionality in case user enter the Group title
    Given Create Group screen is opened
    When  User enter the title
    And   User click on the culture Button
    Then  A pop up will open with the culture and Value	field
    And   Default culture and value will be displayed in the existing table below culture drop Down

  @catalog @group @ml @ui @ignore
  Scenario: Verify the Add functionality in case user does not enter the Group title
    Given This scenario is UI - "Definition already implemented at Merchandise Hierarchy."
    And Create Group screen is opened
    When  User leave the Title field as Blank
    And   User click on the culture Button
    Then  A pop up will open with the culture and Value
    And   The system�s default culture will be Displayed
    And   The focus will be on the Value field

#Pop up scenarios for Create Group screen
  @catalog @group @ml @ui @ignore
  Scenario: Verify the culture drop down with flag
    Given Culture pop-up is opened for Title field from Create Group screen
    When  click on the drop down in Pop up
    Then  drop down will be displayed with different Cultures
    And   Each value will display with relevant flag and country value in Parenthesis

    #functional
  @catalog @group @ml @ui @ignore
  Scenario: Verify the selection in culture drop down
    Given Culture pop-up is opened for Title field from Create Group screen
    When  User select the language from Culture drop Down
    Then  Country will appear with the corresponding Flag in Parenthesis

  @catalog @group @ml @ui @ignore
  Scenario: Verify the culture drop down and value column in pop up
    Given Culture pop-up is opened for Title field from Create Group screen
    Then  A pop up will open with the culture and Value
    And   User will be able to select the language from the culture drop Down
    And   User will be able to define the value for particular Language

  @catalog @group @ml @ui @ignore
  Scenario: Verify the functionality that all the existing translation values should be in editable mode
    Given Culture pop-up is opened for Title field from Create Group screen
    When  User add the Translation Values
    And   Values gets Added in existing Values
    Then  All the translation values will be in the editable Mode
    And   User will be able to edit any Existing value

  @catalog @group @ml @ui @ignore
  Scenario: Verify add functionality of culture and value in existing values
    Given Culture pop-up is opened for Title field from Create Group screen
    When  User select the language from Culture drop Down
    And   User define the value for that Language
    And   User clicks on Add Button
    Then  language and value will get added in the bottom of the existing Value
    And   User will notice that add Was Performed


  @catalog @group @ml @ui @ignore
  Scenario: Verify functionality of mouse over on the rows
    Given Culture pop-up is opened for Title field from Create Group screen
    When  User mouse over on the translation Values in existing Table
    Then  A black dot and delete icon will be displayed for record with Mouse over

  @catalog @group @ml @ui @ignore
  Scenario: Verify that user is allowed to edit the existing values in add mode
    Given Culture pop-up is opened for Title field from Create Group screen
    When  User select a culture from drop down and enter the Translation Value
    And   Value added in existing Values
    Then  User will be able to edit the existing translation Values

  @catalog @group @ml @ui @ignore
  Scenario: Verify that user can enter one translation value against one language
    Given Culture pop-up is opened for Title field from Create Group screen
    When  A Culture already exist in the Translation Values
    Then  that culture will be displayed in The drop list as disabled

  @catalog @group @ml @ui @ignore
  Scenario: Verify add Translation Value text box length and warning message
    Given This scenario is UI Ignored - "UI scenarios are not implemented."
    And Culture pop-up is opened for Title field from Create Group screen
    When  User select the language from Culture drop Down
    And   User define the value for that Language to the max 64 characters
    Then  User will be able to continue writing up to max allowed Characters
    And   User will get warning message that user cannot enter more Than 64 characters

  @catalog @group @ml @ui @ignore
  Scenario: Verify the search functionality in culture drop down
    Given Culture pop-up is opened for Title field from Create Group screen
    When  user start entering the character in the culture drop Down Box
    Then  Only Culture that contain matching characters will be displayed in The drop Down
    And   Text will be highlighted according to the user's input for Each Word

  @catalog @group @ml @ui @ignore
  Scenario: Verify the functionality of clear icon to clear search
    Given This scenario is UI Ignored - "UI scenarios are not implemented."
    And Culture pop-up is opened for Title field from Create Group screen
    When  user start entering the character in the culture drop Down Box
    Then  A clear icon will be displayed in the Search Field
    And   User will be able to clear the search by Clear Icon

  @catalog @group @ml @ui @ignore
  Scenario: Verify that after using the clear button, search results will clear and default culture drop down values will be displayed
    Given This scenario is UI Ignored - "UI scenarios are not implemented."
    And Culture pop-up is opened for Title field from Create Group screen
    When  user start entering the character in the culture drop Down Box
    And   User clears the search by Clear Icon
    Then  search results Will Clear
    And   Culture drop down will display the Default Values

  @catalog @group @ml @ui @ignore
  Scenario: Verify the functionality of enable Add button
    Given Culture pop-up is opened for Title field from Create Group screen
    When  User selects a Culture
    And   Start entering single character in translation Values
    Then  'Add' button will Be enabled

  @catalog @group @ml @ui @ignore
  Scenario: Verify the functionality of enable OK button
    Given Culture pop-up is opened for Title field from Create Group screen
    When  User add a value in the existing List
    Then  'OK' Button will be enabled

  @catalog @group @ml @functional
  Scenario: Verify the functionality of OK button
    Given Culture pop-up is opened for Title field from Create Group screen
    When  User add a value in the existing List
    And   User click on the OK Button
    Then  Pop up will Be Closed
    And   Changes in the existing values will get saved

  @catalog @group @ml @functional
  Scenario: Verify the functionality of Cancel button
    Given Culture pop-up is opened for Title field from Create Group screen
    When  User click on the Cancel Button
    Then  Pop up will Be Closed
    And   changes will not Be Saved

  @catalog @group @ml @ui @ignore
  Scenario: Verify the functionality of displaying the delete icon
    Given This scenario is UI Ignored - "UI scenarios are not implemented."
    And Culture pop-up is opened for Title field from Create Group screen
    When  clicking or mouse hovering on one of the Records
    Then  delete icon will be displayed on the Record�s Row

  @catalog @group @ml @ui @ignore
  Scenario: Verify the functionality of displaying the delete text as tooltip
    Given Culture pop-up is opened for Title field from Create Group screen
    When  user mouse over on the Delete icon
    Then  Delete text will be Displayed as Tooltip

  @catalog @group @ml @functional
  Scenario: Verify the functionality of delete
    Given Culture pop-up is opened for Title field from Create Group screen
    When  User click on the delete button of any existing translation value in Group Screen
    Then  System will display a Warning message

  @catalog @group @ml @ui @ignore
  Scenario: Verify the functionality of scroll bar in the pop up
    Given This scenario is UI Ignored - "UI scenarios are not implemented."
    And Culture pop-up is opened for Title field from Create Group screen
    When  Exiting values of the translation values Got increases
    Then  A scroll down will be added on the Right side

# Culture functionality on Edit screen
  @catalog @group @ml @functional
  Scenario: Verify the functionality of adding a new value in edit mode
    Given Edit Group screen is opened
    When  User click on the culture Button for Title field
    And   User selects the culture value from drop down and enters the Translation value
    And   User clicks on Add Button
    Then  Value will get saved at the bottom of the existing values List

# Culture functionality on View screen
  @catalog @group @ml @functional
  Scenario: View existing culture translations for Title field
    Given View Group screen is opened
    When  User click on the culture icon Of Title Field
    Then  A pop up will open with the Culture and Value
    And   User should be able to view all the existing translation values for the Title Field
    And   User should not be able to make any changes to the translation values in the Pop up

  @catalog @group @ml @functional
  Scenario: Title value in Default language in view mode
    Given Group Office screen is Opened
    When  User drill down a record in View Mode
    Then  Title field value will be displayed in Default Language (English)

  @catalog @group @ml @ui @ignore
  Scenario: No translation values defined for a value
    Given This scenario is UI Ignored - "UI scenarios are not implemented."
    And Group Office screen is Opened
    When  User drill down a record in View Mode for which translation does not exist for Title field
    Then  Culture icon for Title field will be disable On View Mode
    And   Tool tip text on mouse over on the Culture icon Will Display 'No Translation were define'

  @catalog @group @ml @ui @ignore
  Scenario: Scroll bar in order to view the entire translation
    Given This scenario is UI Ignored - "UI scenarios are not implemented."
    And View Group screen is opened
    When  User Click on culture icon for Title Field
    And   Existing translation values list does not fit into the Culture pop up
    Then  scroll bar will appear in order to view all the Translation Values

  @catalog @group @ml @ui @ignore
  Scenario: Verify that there should be no ellipsis in view mode
    Given View Group screen is opened
    When  Click on culture icon for Title Field
    And   User view a multi-line translation value on culture Pop up
    Then  User will be able to view the entire translation value text in multi line Without Ellipsis
