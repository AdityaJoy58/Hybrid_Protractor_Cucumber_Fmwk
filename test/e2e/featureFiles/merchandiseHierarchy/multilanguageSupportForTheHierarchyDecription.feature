Feature: Multi Language Feature in Merchandise Hierarchy for Description Field
  As a retailer catalog consumer,
  I would like to be able to translate the merchandise hierarchy description to different language
  So that it will be possible to display them in different languages

# Add mode

  @catalog @mh @ml @functional
  Scenario: Verify the Add functionality in case user enter the hierarchy Description
    Given Create Merchandise Hierarchy screen is opened
    When  User enter the Description
    And   User clicks on the culture button
    Then  A pop up will open with the culture and value	field
    And   default culture and value will be displayed in the existing table below the culture drop down

  @catalog @mh @ml @ui @ignore
  Scenario: Verify the Add functionality in case user does not enter the hierarchy Description
    Given Create Merchandise Hierarchy screen is opened
    When  User leave the Description field as blank
    And   User clicks on the culture button
    Then  A pop up will open with the culture and value
    And   The system’s default culture will be displayed
    And   The focus will be on the value field

#pop up scenarios for Create Merchandise Hierarchy screen
  @catalog @mh @ml @ui @ignore
  Scenario: Verify the culture drop down with flag
    Given Culture pop-up is opened for Description field from Create Merchandise Hierarchy screen
    When  click on drop down in pop up
    Then  drop down will be displayed with different cultures
    And   Each value will display with relevant flag and country value in parenthesis

  @catalog @mh @ml @ui @ignore
    #not run
  Scenario: Verify the selection in culture drop down
    Given Culture pop-up is opened for Description field from Create Merchandise Hierarchy screen
    When  User selects the language from culture drop down
    Then  Country will appear with the corresponding flag in Parenthesis

  @catalog @mh @ml @ui @ignore
  Scenario: Verify the culture drop down and value column in pop up
    Given Culture pop-up is opened for Description field from Create Merchandise Hierarchy screen
    Then  A pop up will open with the culture and value
    And   User will be able to select the language from the culture drop down
    And   User will be able to define the value for particular language

  @catalog @mh @ml @ui @ignore
    #not run
  Scenario: Verify the functionality that all the existing translation values should be in editable mode
    Given Culture pop-up is opened for Description field from Create Merchandise Hierarchy screen
    When  User adds the translation values
    And   Values gets added in existing values
    Then  All the translation values will be in the editable mode
    And   User will be able to edit any existing value

  @catalog @mh @ml @ui @ignore
  Scenario: Verify add functionality of culture and value in existing values
    Given Culture pop-up is opened for Description field from Create Merchandise Hierarchy screen
    When  User selects the language from culture drop down
    And   User defines the value for that language
    And   User clicks on Add button
    Then  language and value will get added in the bottom of the existing value
    And   User will notice that add was performed

  @catalog @mh @ml @ui @ignore
    #not run
  Scenario: Verify add functionality of mouse over on the rows
    Given Culture pop up is opened
    When  User mouse over on translation values in existing table
    Then  A black dot and delete icon will be displayed for record with mouse over

  @catalog @mh @ml @ui @ignore
  Scenario: Verify that user is allowed to edit the existing values in add mode
    Given Culture pop up is opened
    When  User select a culture from drop down and enter translation value
    And   Value added in the existing values
    Then  User will be able to edit the existing translation values

  @catalog @mh @ml @ui @ignore
    #not run
  Scenario: Verify that user can enter one translation value against one language
    Given Culture pop up is opened
    When  A Culture already exist in the translation values
    Then  that culture will be displayed in drop list as disabled.

  @catalog @mh @ml @ui @ignore
  Scenario: Verify add Translation Value text box length and warning message
    Given Culture pop up is opened
    When  User selects the language from culture drop down
    And   User defines the value for that language to the max 256 characters
    Then  User will be able to continue wrtting up to max allowed characters
    And   Line will get shift down to second row once 64 characters gets entered
    And   User will get warning message that user cannot enter more than 256 characters

  @catalog @mh @ml @ui @ignore
  Scenario: Verify text box truncation and ellipsis for the existing translation values in pop up
    Given Culture pop up is opened in create mode
    When  User selects the language from culture drop down
    And   User defines the value for that language to the max 256 characters
    And   more than 1 line is needed to display
    Then  value will be saved in Existing value
    And   Value will get truncated and added with ellipsis

  @catalog @mh @ml @ui @ignore
  Scenario: Verify the functionality using view full translation name using a tooltip
    Given Culture pop up is opened
    When  User add transalation value with max 256 characters
    And   Value got saved with the ellipsis
    And   User mouse over on anywhere on text
    Then  User will be able to view full translation value on tooltip

  @catalog @mh @ml @ui @ignore
    # not run
  Scenario: Verify the functionality of clicking on the elipsis
    Given Culture pop up is opened
    When  User add transalation value with max 256 characters
    And   Value got saved with the ellipsis
    And   User clicks the ellipsis
    Then  text area will be expanded to show the full translation value
    And   Cursor will be at the end of the text
    And   User will be able to edit the value

  @catalog @mh @ml @ui @ignore
  Scenario: Verify the search functionality in culture drop down
    Given Culture pop up is opened
    When  user starts entering the character in the culture drop down box
    Then  Only Culture that contain matching characters will be displayed in the drop down
    And   Text will be highlighted according to the user's input for each word

  @catalog @mh @ml @ui @ignore
  Scenario: Verify the functionality of clear icon to clear search
    Given Culture pop up is opened
    When  user starts entering the character in the culture drop down box
    Then  A clear icon will be displayed in the search field
    And   User will be able to clear the search by clear icon

  @catalog @mh @ml @ui @ignore
  Scenario: Verify that after using the clear button, search results will clear and default culture drop down values will be displayed
    Given Culture pop up is opened
    When  user starts entering the character in the culture drop down box
    And   User clears the search by clear icon
    Then  search results will clear
    And   Culture drop down will display the default values

  @catalog @mh @ml @ui @ignore
  Scenario: Verify the functionality of enable Add button
    Given Culture pop up is opened
    When  User selects a culture
    And   Start entering single character in the transalation values
    Then  'Add' button will be enabled

  @catalog @mh @ml @ui @ignore
  Scenario: Verify the functionality of enable OK button
    Given Culture pop up is opened in create mode
    When  User adds a value in the existing list
    Then  'OK' button will be enabled

  @catalog @mh @ml @functional
  Scenario: Verify the functionality of OK button
    Given Culture pop up is opened
    When  User adds a value in the existing list
    And   User clicks on the OK button
    Then  Pop up will be closed
    And   Changes in the existing values will be saved

  @catalog @mh @ml @ui @ignore
  Scenario: Verify the functionality of Cancel button
    Given Culture pop up is opened
    When User adds a value in the existing list
    And  User clicks on the cancel button
    Then  Pop up will be closed
    And   changes will not be saved

  @catalog @mh @ml @ui @ignore
  Scenario: Verify the functionality of displaying the delete icon
    Given Culture pop up is opened
    When  clicking or mouse hovering on one of records
    Then  delete icon will be displayed on the record’s row

  @catalog @mh @ml @ui @ignore
  Scenario: Verify the functionality of displaying the delete text as tooltip
    Given Culture pop up is opened
    When  user mouse over on the delete icon
    Then  Delete text will be displayed as tooltip

  @catalog @mh @ml @functional
  Scenario: Verify the functionality of delete
    Given Culture pop up is opened
    When  User click on the delete button of any existing translation value
    Then  System will display a warning message

  @catalog @mh @ml @ui @ignore
  Scenario: Verify the functionality of scroll bar in the pop up
    Given Culture pop up is opened
    When  Exiting values of translation values got increases
    Then  A scroll down will be added on the right side

# Culture functionality on Edit screen
  @catalog @mh @ml @functional
  Scenario: Verify the functionality of adding a new value in edit mode
    Given Edit Merchandise hierarchy screen is opened
    When  User clicks on the culture button for Description field
    And   User select the culture value from drop down and enter the translation value
    And   User clicks on Add button
    Then  Value will get saved at the bottom of the existing values list

# Culture functionality on View screen
  @catalog @mh @ml @ui @ignore
  Scenario: View existing culture translations for Description field
    Given View Merchandise hierarchy screen is opened
    When  User click on the culture icon of Description field
    Then  a pop up will open with the culture and value
    And   User should be able to view all the existing transalation values for the Description field
    And   User should not be able to make any changes to the translation values in the pop up

  @catalog @mh @ml @functional
  Scenario: Description value in Default language in view mode
    Given Merchandise hierarchy Office screen is opened
    When  User drills down record in view mode
    Then  Description field value will be displayed in default language (English)

  @catalog @mh @ml @ui @ignore
  Scenario: No transalation values defined for a value
    Given Merchandise hierarchy Office screen is opened
    When  User drill down a record in view mode for which translation does not exist for Description field
    Then  Culture icon for Description field will be disable on View mode

  @catalog @mh @ml @ui @ignore
  Scenario: Scroll bar in order to view the entire translation
    Given View Merchandise hierarchy screen is opened
    When  User click on culture icon
    And   Existing translation value list does not fit into the culture pop up
    Then  scroll bar will appear in order to view all the translation values

  @catalog @mh @ml @ui @ignore
  Scenario: Verify that there should be no ellipsis in view mode
    Given View Merchandise hierarchy screen is opened
    When  Click on culture icon for Description field
    And   User view a multi line translation value on culture pop up
    Then  User will be able to view the entire translation value text in multi line without ellipsis

