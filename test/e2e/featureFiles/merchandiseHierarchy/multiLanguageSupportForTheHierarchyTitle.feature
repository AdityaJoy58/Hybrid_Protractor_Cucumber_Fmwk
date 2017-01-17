Feature: Multi Language Feature in Merchandise Hierarchy for Title Field
  As a retailer catalog consumer,
  I would like to be able to translate the merchandise hierarchy title to different language
  So that it will be possible to display them in different languages

# Add mode
  @catalog @mh @ml @functional
  Scenario: Verify the Add functionality in case user enter the hierarchy title
    Given Create merchandise hierarchy screen is opened
    When  User enter the Title
    And   User clicks on  culture button
    Then  A pop up will open with culture and value	field
    And   default culture and value will get displayed in the existing table below culture drop down

  @catalog @mh @ml @ui @ignore
  Scenario: Verify the Add functionality in case user does not enter the hierarchy title
    Given Create merchandise hierarchy screen is opened
    When  User leave the Title field as blank
    And   User clicks on  culture button
    Then  A pop up will open with culture and value
    And   The system’s default culture will get displayed
    And   The focus will be on value field

#pop up scenarios for Create Merchandise Hierarchy screen
  @catalog @mh @ml @ui @ignore
  Scenario: Verify the culture drop down with flag
    Given culture pop up is opened for Title field from Create Merchandise Hierarchy screen
    When  click on the drop down in the pop up
    Then  drop down will get displayed with different cultures
    And   Each value will display with relevant flag and country value in the parenthesis

  @catalog @mh @ml @ui @ignore
  Scenario: Verify the selection in culture drop down
    Given culture pop up is opened for Title field from Create Merchandise Hierarchy screen
    When  User select the language from the culture drop down
    Then  Country will appear with the corresponding flag in the Parenthesis

  @catalog @mh @ml @ui @ignore
  Scenario: Verify the culture drop down and value column in pop up
    Given culture pop up is opened for Title field from Create Merchandise Hierarchy screen
    Then  A pop up will open with culture and value
    And   User will be able to select the language from culture drop down
    And   User will be able to define the value for the particular language

  @catalog @mh @ml @ui @ignore
  Scenario: Verify the functionality that all the existing translation values should be in editable mode
    Given culture pop up is opened for Title field from Create Merchandise Hierarchy screen
    When  User is adding the translation values
    And   Values gets added in the existing values
    Then  All the translation values will be in editable mode
    And   User will be able to edit existing value

  @catalog @mh @ml @ui @ignore
  Scenario: Verify add functionality of culture and value in existing values
    Given culture pop up is opened for Title field from Create Merchandise Hierarchy screen
    When  User select the language from the culture drop down
    And   User define value for that language
    And   User clicks on add button
    Then  language and value will get added in bottom of the existing value
    And   User will notice that the add was performed

  @catalog @mh @ml @ui @ignore
  Scenario: Verify add functionality of mouse over on the rows
    Given culture pop up is opened
    When  user mouse over on the translation values in existing table
    Then  a black dot and delete icon will be displayed for record with mouse over

  @catalog @mh @ml @ui @ignore
  Scenario: Verify that user is allowed to edit the existing values in add mode
    Given culture pop up is opened
    When  user select a culture from drop down and enter the translation value
    And   value added in existing values
    Then  user will be able to edit the existing translation values

  @catalog @mh @ml @ui @ignore
  Scenario: Verify that user can enter one translation value against one language
    Given culture pop up is opened
    When  a Culture already exist in the translation values
    Then  culture will be displayed in the drop list as disabled.

  @catalog @mh @ml @ui @ignore
  Scenario: Verify add Translation Value text box length and warning message
    Given culture pop up is opened
    When  User select the language from the culture drop down
    And   User define value for that language to the max 256 characters
    Then  user will be able to continue wrtting up to max allowed characters
    And   line will get shift down to second row once 64 characters gets entered
    And   user will get warning message that user cannot enter more than 256 characters

  @catalog @mh @ml @ui @ignore
  Scenario: Verify the search functionality in culture drop down
    Given culture pop up is opened
    When  User starts entering the character in the culture drop down box
    Then  only Culture that contain matching characters will be displayed in the drop down
    And   text will be highlighted according to the user's input for each word

  @catalog @mh @ml @ui @ignore
  Scenario: Verify the functionality of clear icon to clear search
    Given culture pop up is opened
    When  User starts entering the character in the culture drop down box
    Then  a clear icon will be displayed in the search field
    And   user will be able to clear the search by clear icon

  @catalog @mh @ml @ui @ignore
  Scenario: Verify that after using the clear button, search results will clear and default culture drop down values will be displayed
    Given culture pop up is opened
    When  User starts entering the character in the culture drop down box
    And   user clear the search by clear icon
    Then  Search results will clear
    And   culture drop down will display the default values

  @catalog @mh @ml @ui @ignore
  Scenario: Verify the functionality of enable Add button
    Given culture pop up is opened
    When  user select a culture
    And   start entering single character in transalation values
    Then  'add' button will be enabled

  @catalog @mh @ml @ui @ignore
  Scenario: Verify the functionality of enable OK button
    Given culture pop up is opened in create mode
    When  user add a value in the existing list
    Then  'ok' button will be enabled

  @catalog @mh @ml @functional
  Scenario: Verify the functionality of OK button
    Given Culture pop-up is opened for Title field from Merchandise Hierarchy screen in Edit Mode
    When  user add a value in the existing list
    And   user click on the OK button
    Then  pop up will be closed
    And   changes in the existing values will be saved

  @catalog @mh @ml @ui @ignore
  Scenario: Verify the functionality of Cancel button
    Given culture pop up is opened
    When  user click on the cancel button
    Then  pop up will be closed
    And   Changes will not be saved

  @catalog @mh @ml @ui @ignore
  Scenario: Verify the functionality of displaying the delete icon
    Given culture pop up is opened
    When  Clicking or mouse hovering on one of the records
    Then  Delete icon will be displayed on the record’s row

  @catalog @mh @ml @ui @ignore
  Scenario: Verify the functionality of displaying the delete text as tooltip
    Given culture pop up is opened
    When  User mouse over on the delete icon
    Then  delete text will be displayed as tooltip

  @catalog @mh @ml @functional
  Scenario: Verify the functionality of delete
    Given Culture pop-up is opened for Title field from Merchandise Hierarchy screen
    When  user click on the delete button of any existing translation value
    Then  System will display a Warning Message when trying to delete a Hierarchy Title for an new Merchandise Hierarchy group

  @catalog @mh @ml @ui @ignore
  Scenario: Verify the functionality of scroll bar in the pop up
    Given culture pop up is opened
    When  exiting values of the translation values got increases
    Then  a scroll down will be added on the right side

# Culture functionality on Edit screen
  @catalog @mh @ml @functional
  Scenario: Verify the functionality of adding a new value in edit mode
    Given Edit merchandise hierarchy screen is opened
    When  User clicks on  culture button for Title field
    And   user select the culture value from drop down and enter the translation value
    And   User clicks on add button
    Then  value will get saved at the bottom of the existing values list

# Culture functionality on View screen
  @catalog @mh @ml @ui @ignore
  Scenario: View existing culture translations for Title field
    Given View merchandise hierarchy screen is opened
    When  User click on the culture icon of Title field
    Then  a pop up will open with culture and value
    And   User should be able to view all the existing transalation values for the Title field
    And   user should not be able to make any changes to the translation values in the pop up

  @catalog @mh @ml @ui @ignore
  Scenario: Title value in Default language in view mode
    Given merchandise hierarchy Office screen is opened
    When  user drill down a record in view mode
    Then  Title field value will be displayed in default language (English)

  @catalog @mh @ml @ui @ignore
  Scenario: No transalation values defined for a value
    Given merchandise hierarchy Office screen is opened
    When  User drill down a record in view mode for which translation does not exist for Title field
    Then  Culture icon for Title field will be disable on View mode

  @catalog @mh @ml @ui @ignore
  Scenario: Scroll bar in order to view the entire translation
    Given view Merchandise hierarchy screen is opened
    When  user click on culture icon
    And   existing translation value list does not fit into the culture pop up
    Then  Scroll bar will appear in order to view all the translation values

  @catalog @mh @ml @ui @ignore
  Scenario: Verify that there should be no ellipsis in view mode
    Given view Merchandise hierarchy screen is opened
    When  Click on culture icon for Title field
    And   user view a multi line translation value on culture pop up
    Then  user will be able to view the entire translation value text in multi line without ellipsis

