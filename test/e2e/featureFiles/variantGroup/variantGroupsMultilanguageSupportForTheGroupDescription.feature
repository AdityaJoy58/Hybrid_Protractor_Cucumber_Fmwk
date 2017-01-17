Feature:  Multi Language Feature in Variant Groups for Description Field
  As a retailer catalog owner,
  I would like to be able to translate the Variant Group description to different language
  So that it will be possible to display them in different languages


# Add mode
  @catalog @variantGroup  @ml @functional
  Scenario: Verify the Add functionality in case user enter the Variant Group Description
    Given Create Variant Group screen is Opened
    When  User enters the Variant Group Code
    Then  User enters the Description
    And   User clicks on the Culture button
    Then  A pop up will open with the Culture and Value fields
    And   Default Culture and value will be displayed in the existing table below culture drop down for Variant Group Description

  @catalog @variantGroup  @ml @ui @ignore
  Scenario: Verify the Add functionality in case user does not enter the Variant Group Description
    Given This scenario is UI - "Definition already implemented at Merchandise Hierarchy."
    And   Create Variant Group screen is Opened
    When  User leave the Description Field as blank
    And   User clicks on the Culture button
    Then  A pop up will open with the culture And value
    And   The system�s default Culture will be Displayed
    And   The focus will be on the value Field

#Pop up scenarios for Create Variant Group screen
  @catalog @variantGroup @ml @ui @ignore
  Scenario: Verify the culture drop down with flag
    Given Culture pop-up is opened for Description field from Create Variant Group screen
    When  click on the drop down in pop Up
    Then  drop down will be displayed with Different Cultures
    And   Each value will display with relevant flag and Country value in parenthesis

  @catalog @variantGroup @ml @ui @ignore
  Scenario: Verify the selection in culture drop down
    Given Culture pop-up is opened for Description field from Create Variant Group screen
    When  User select the language from culture drop Down
    Then  Country will appear with the corresponding Flag in parenthesis

  @catalog @variantGroup @ml @ui @ignore
  Scenario: Verify the culture drop down and value column in pop up
    Given Culture pop-up is opened for Description field from Create Variant Group screen
    Then  A pop up will open with the culture And value
    And   User will be able to select the language from the Culture drop Down
    And   User will be able to define the value for Particular Language

  @catalog @variantGroup @ml @ui @ignore
  Scenario: Verify the functionality that all the existing translation values should be in editable mode
    Given Culture pop-up is opened for Description field from Create Variant Group screen
    When  User adds the translation Values
    And   Values gets added in Existing Values
    Then  All the translation values will be in the Editable Mode
    And   User will be able to edit any Existing Value

  @catalog @variantGroup @ml @ui @ignore
  Scenario: Verify add functionality of culture and value in existing values
    Given Culture pop-up is opened for Description field from Create Variant Group screen
    When  User select the language from culture drop Down
    And   User define the value For that Language
    And   User clicks on add Button
    Then  language and value will get added in The bottom of the existing value
    And   User will notice that Add was Performed

  @catalog @variantGroup @ml @ui @ignore
  Scenario: Verify add functionality of mouse over on the rows
    Given Culture pop-up is opened for Description field from Create Variant Group screen
    When  User mouse over on the Translation values in existing table
    Then  A black dot and delete icon will be displayed for Record with mouse over

  @catalog @variantGroup @ml @ui @ignore
  Scenario:  Verify that user can enter one translation value against one language
    Given Culture pop-up is opened for Description field from Create Variant Group screen
    When  A Culture already exist in the translation value
    Then  that culture will be displayed in the drop list as Disabled

  @catalog @variantGroup @ml @ui @ignore
  Scenario: Verify add Translation Value text box length and warning message
    Given This scenario is UI Ignored - "UI scenarios are not implemented."
    And Culture pop-up is opened for Description field from Create Variant Group screen
    When  User select the language from culture drop Down
    And   User define the value For that Language to the max 256 characters
    Then  User will be able to continue writing Up to max allowed characters
    And   User will get warning message that user cannot enter more than 256 characters

  @catalog @variantGroup @ml @ui @ignore
  Scenario: Verify text box truncation and ellipsis for the existing translation values in pop up
    Given This scenario is UI Ignored - "UI scenarios are not implemented."
    And Culture pop-up is opened for Description field from Create Variant Group screen
    When  User select the language from culture drop Down
    And   User define the value For that Language to the max 256 characters
    And   more than 1 line is Needed to display
    Then  value will be saved in Existing Value
    And   Value will get truncated and added with Ellipsis

  @catalog @variantGroup @ml @ui @ignore
  Scenario: Verify the functionality using view full translation name using a tooltip
    Given This scenario is UI Ignored - "UI scenarios are not implemented."
    And   Culture pop-up is opened for Description field from Create Variant Group screen
    When  User add translation value with Max 256 character
    And   Value got Saved with ellipsis
    And   User Mouse over on anywhere on the text
    Then  User will be able to view full translation value on Tooltip

  @catalog @variantGroup @ml @ui @ignore
  Scenario: Verify the functionality of clicking on the ellipsis
    Given This scenario is UI Ignored - "UI scenarios are not implemented."
    And   Culture pop-up is opened for Description field from Create Variant Group screen
    When  User add translation value with Max 256 character
    And   Value got Saved with ellipsis
    And   User click the Ellipsis
    Then  text area will be Expanded to show the full translation value
    And   Cursor Will be at the end of the text
    And   User will be able to Edit the value

  @catalog @variantGroup @ml @ui @ignore
  Scenario: Verify the search functionality in culture drop down
    Given Culture pop-up is opened for Description field from Create Variant Group screen
    When  user start entering the Character in the culture drop down box
    Then  Only Culture that contain Matching characters will be displayed in the drop down
    And   Text will be highlighted according to the user's input for Each word

  @catalog @variantGroup @ml @ui @ignore
  Scenario: Verify the functionality of clear icon to clear search
    Given This scenario is UI Ignored - "no able to capture the clear icon"
    And Culture pop-up is opened for Description field from Create Variant Group screen
    When  user start entering the Character in the culture drop down box
    Then  A clear icon will be displayed in the Search field
    And   User will be able to Clear the search by clear icon

  @catalog @variantGroup @ml @ui @ignore
  Scenario: Verify that after using the clear button, search results will clear and default culture drop down values will be displayed
    Given This scenario is UI Ignored - "no able to capture the clear icon"
    And Culture pop-up is opened for Description field from Create Variant Group screen
    When  user start entering the Character in the culture drop down box
    And   User clears the search by Clear icon
    Then  search results Will clear
    And   Culture drop down will display the Default values

  @catalog @variantGroup @ml @ui @ignore
  Scenario: Verify the functionality of enable Add button
    Given Culture pop-up is opened for Description field from Create Variant Group screen
    When  User selects A Culture
    And   Start entering Single character in translation values
    Then  'Add' Button will be enabled

  @catalog @variantGroup @ml @ui @ignore
  Scenario: Verify the functionality of enable OK button
    Given Culture pop-up is opened for Description field from Create Variant Group screen
    When  User add a value in the Existing list
    Then  'OK' button Will be Enabled

  @catalog @variantGroup @ml @functional
  Scenario: Verify the functionality of OK button
    Given Culture pop-up is opened for Description field from Create Variant Group screen
    When  User add a value in the Existing list
    And   User click on The OK Button
    Then  Pop up will Be closed
    And   Changes in the existing values will Be saved

  @catalog @variantGroup @ml @functional
  Scenario: Verify the functionality of Cancel button
    Given Culture pop-up is opened for Description field from Create Variant Group screen
    When  User click on The cancel button
    Then  Pop up will Be closed
    And   changes Will not be Saved

  @catalog @variantGroup @ml @ui @ignore
  Scenario: Verify the functionality of displaying the delete icon
    Given This scenario is UI Ignored - "UI scenarios are not implemented."
    And Culture pop-up is opened for Description field from Create Variant Group screen
    When  clicking or mouse hovering on one of The Records
    Then  delete icon will be Displayed on the record�s row

  @catalog @variantGroup @ml @ui @ignore
  Scenario: Verify the functionality of displaying the delete text as tooltip
    Given Culture pop-up is opened for Description field from Create Variant Group screen
    When  user mouse over on the Delete Icon
    Then  Delete text will be Displayed as tooltip

  @catalog @variantGroup @ml @functional
  Scenario: Verify the functionality of delete
    Given Culture pop-up is opened for Description field from Create Variant Group screen
    When  User click on the delete button of any existing Translation value
    Then  System will display a Warning Message when trying to delete a Group Description for an new Variant group

  @catalog @variantGroup @ml @ui @ignore
  Scenario: Verify the functionality of scroll bar in the pop up
    Given This scenario is UI Ignored - "UI scenarios are not implemented."
    And Culture pop-up is opened for Description field from Create Variant Group screen
    When  Exiting values of the translation Values got increases
    Then  A scroll down will be dded on the right side

# Culture functionality on Edit screen
  @catalog @variantGroup @ml @functional
  Scenario: Verify the functionality of adding a new value in edit mode
    Given  Edit Variant Group screen is Opened
    When  User clicks on the Culture button for Description field
    And   User selects the culture value from drop down and Enters the translation value
    And   User clicks on add Button
    Then  Value will get saved at the bottom of the Existing values list

  @catalog @variantGroup @ml @functional
  Scenario: Verify the functionality of editing existing value in edit mode
    Given  Edit Variant Group screen is Opened
    When  User clicks on the Culture button for Description field
    And   User selects an existing culture value
    Then  User will be able to modify the existing value
    And   The updated value will be saved on Clicking Ok button

  @catalog @variantGroup @ml @functional
  Scenario: Verify the functionality of deleting existing value in Edit mode
    Given Culture pop-up is opened for Description field from Edit Variant Group screen
    When  User mouse over on any existing value
    And   Click on the delete icon for the existing translation value
    Then  System will display a Warning Message when trying to delete a Group Description for an existing Variant group
    And   Existing Culture Group Description value will be deleted when user confirm from the warning message

# Culture functionality on View screen
  @catalog @variantGroup @ml @functional
  Scenario: View existing culture translations for Description field
    Given View Variant Group screen is Opened
    When  User click on the culture icon of Description Field
    Then  a pop up will open with the culture and value
    And   User should be able to view all the existing translation values for the Description Field
    And   User should not be able to make any changes to the translation values in the Pop Up

  @catalog @variantGroup @ml @functional
  Scenario: Description value in Default language in view mode
    Given Variant Group Office screen is Opened
    When  User drill down a record In view Mode
    Then  Description field value will be Displayed in default language (English)

  @catalog @variantGroup @ml @ui @ignore
  Scenario: No translation values defined for a value
    Given This scenario is UI Ignored - "UI scenarios are not implemented."
    And   Variant Group Office screen is Opened
    When  User drill down a record in view Mode for which translation does not exist for Description field
    Then  Culture icon for Description field will be Disable on View mode
    And   Tool tip text on Mouse over on the Culture Icon will display 'No Translation were define'

  @catalog @variantGroup @ml @ui @ignore
  Scenario: Scroll bar in order to view the entire translation
    Given This scenario is UI Ignored - "UI scenarios are not implemented."
    And   View Variant Group screen is Opened
    When  User click on culture Icon For Description Field
    And   Existing translation values list does not Fit into the culture pop up
    Then  scroll bar will appear in order to view all the Translation values

  @catalog @variantGroup @ml @ui @ignore
  Scenario: Verify that there should be no ellipsis in view mode
    Given View Variant Group screen is Opened
    When  User click on culture Icon For Description Field
    And   User view a multi-line translation value on Culture pop up
    Then  User will be able to view the entire translation value text in Multi line without ellipsis
