Feature:  Multi Language Feature in Groups for Description Field
As a retailer catalog owner, 
I would like to be able to translate the group description to different language 
So that it will be possible to display them in different languages


# Add mode

  @catalog @group @ml @functional
Scenario: Verify the Add functionality in case user enter the group Description
	Given Create Group screen is opened
	When  User enter the description
	And   User click on the Description Culture Button
	Then  A pop up will open with the culture and value field
	And   Default culture and value will be displayed in the existing table below culture drop down

  @catalog @group @ml @ui @ignore
Scenario: Verify the Add functionality in case user does not enter the group Description
    Given This scenario is UI - "Definition already implemented at Merchandise Hierarchy."
	And Create Group screen is opened
	When  User leave the Description field as Blank
	And   User click on the Description Culture Button
    Then  A pop up will open with the culture and value field
	And   The system�s default culture will be Displayed
	And   The focus will be on the value field

#Pop up scenarios for Create Group screen

  @group @ml @ui @ignore
Scenario: Verify the culture drop down with flag
	Given Culture pop-up is opened for Description field from Create Group screen
	When  click on the drop down in pop up 
	Then  drop down will be displayed with different cultures 
	And   Each value will display with relevant flag and country value in parenthesis

  @catalog @group @ml @ui @ignore
Scenario: Verify the selection in culture drop down 
	Given Culture pop-up is opened for Description field from Create Group screen
	When  User select the language from culture drop down 
	Then  Country will appear with the corresponding flag in Parenthesis

  @catalog @group @ml @ui @ignore
Scenario: Verify the culture drop down and value column in pop up
	Given Culture pop-up is opened for Description field from Create Group screen
	Then  A pop up will open with the culture and value	
	And   User will be able to select the language from the culture drop down 
	And   User will be able to define the value for particular language

  @catalog @group @ml @ui @ignore
Scenario: Verify the functionality that all the existing translation values should be in editable mode
	Given Culture pop-up is opened for Description field from Create Group screen
	When  User add the translation values
	And   Values gets added in existing values
	Then  All the translation values will be in the editable mode
	And   User will be able to edit any existing value

  @catalog @group @ml @ui @ignore
Scenario: Verify add functionality of culture and value in existing values
	Given Culture pop-up is opened for Description field from Create Group screen
	When  User select the language from Culture drop Down
    And   User define the value for that Language
    And   User clicks on Add Button
    Then  language and value will get added in the bottom of the existing Value
    And   User will notice that add Was Performed

  @catalog @group @ml @ui @ignore
Scenario: Verify add functionality of mouse over on the rows
	Given Culture pop-up is opened for Description field from Create Group screen
    When  User mouse over on the translation Values in existing Table
    Then  A black dot and delete icon will be displayed for record with Mouse over

  @catalog @group @ml @ui @ignore
Scenario: Verify that user is allowed to edit the existing values in add mode
	Given Culture pop-up is opened for Description field from Create Group screen
    When  User select a culture from drop down and enter the Translation Value
    And   Value added in existing Values
    Then  User will be able to edit the existing translation Values

  @catalog @group @ml @ui @ignore
Scenario:  Verify that user can enter one translation value against one language
	Given Culture pop-up is opened for Description field from Create Group screen
    When  A Culture already exist in the Translation Values
    Then  that culture will be displayed in The drop list as disabled

  @catalog @group @ml @ui @ignore
Scenario: Verify add Translation Value text box length and warning message
    Given This scenario is UI Ignored - "UI scenarios are not implemented."
	And Culture pop-up is opened for Description field from Create Group screen
	When  user select the language from culture drop down 
	And   User define the value for that language to the max 256 characters
	Then  User will be able to continue writing up to max allowed characters
	And   User will get warning message that user cannot enter more than 256 characters

  @catalog @group @ml @ui @ignore
Scenario: Verify text box truncation and ellipsis for the existing translation values in pop up
    Given This scenario is UI Ignored - "UI scenarios are not implemented."
	And Culture pop-up is opened for Description field from Create Group screen
	When  user select the language from culture drop down 
	And   User define the value for that language to the max 256 characters
	And   more than 1 line is needed to display
	Then  value will be saved in Existing value 
	And   Value will get truncated and added with ellipsis

  @catalog @group @ml @ui @ignore
Scenario: Verify the functionality using view full translation name using a tooltip
    Given This scenario is UI Ignored - "UI scenarios are not implemented."
	And Culture pop-up is opened for Description field from Create Group screen
	When  User add translation value with max 256 character
	And   Value got saved with ellipsis
	And   User mouse over on anywhere on the text
	Then  User will be able to view full translation value on tooltip

  @catalog @group @ml @ui @ignore
Scenario: Verify the functionality of clicking on the ellipsis
    Given This scenario is UI Ignored - "UI scenarios are not implemented."
	And Culture pop-up is opened for Description field from Create Group screen
	When  User add translation value with max 256 character
	And   Value got saved with ellipsis
	And   User click the ellipsis 
	Then  text area will be expanded to show the full translation value
	And   Cursor will be at the end of the text
	And   User will be able to edit the value

  @catalog @group @ml @ui @ignore
Scenario: Verify the search functionality in culture drop down
	Given Culture pop-up is opened for Description field from Create Group screen
	When  user start entering the character in the culture drop Down Box
	Then  Only Culture that contain matching characters will be displayed in The drop Down
	And   Text will be highlighted according to the user's input for Each Word

  @catalog @group @ml @ui @ignore
Scenario: Verify the functionality of clear icon to clear search
	Given Culture pop-up is opened for Description field from Create Group screen
	When  User start entering the character in the culture drop down box
	Then  A clear icon will be displayed in the search field
	And   User will be able to clear the search by clear icon

  @catalog @group @ml @ui @ignore
Scenario: Verify that after using the clear button, search results will clear and default culture drop down values will be displayed
    Given This scenario is UI Ignored - "UI scenarios are not implemented."
	And Culture pop-up is opened for Description field from Create Group screen
	When  User start entering the character in the culture drop down box
	And   User clears the search by clear icon
	Then  search results will clear 
	And   Culture drop down will display the default values

  @catalog @group @ml @ui @ignore
Scenario: Verify the functionality of enable Add button
	Given Culture pop-up is opened for Description field from Create Group screen
    When  User selects a Culture
    And   Start entering single character in translation Values
    Then  'Add' button will Be enabled

  @catalog @group @ml @ui @ignore
Scenario: Verify the functionality of enable OK button
	Given Culture pop-up is opened for Description field from Create Group screen
    When  User add a Culture value for Description field in the existing List
    Then  'OK' Button will be enabled

  @catalog @group @ml @functional
Scenario: Verify the functionality of OK button
	Given Culture pop-up is opened for Description field from Create Group screen
	When  User add a Culture value for Description field in the existing List
	And   User click on the OK button of Pop Up
	Then  Description Field Culture Pop up will be closed
	And   Description Field Culture Changes in the existing values will be saved

  @catalog @group @ml @functional
Scenario: Verify the functionality of Cancel button
	Given Culture pop-up is opened for Description field from Create Group screen
    When  User click on the Cancel Button
    Then  Description Field Culture Pop up will be closed
    And   changes will not Be Saved

  @catalog @group @ml @ui @ignore
Scenario: Verify the functionality of displaying the delete icon
	Given Culture pop-up is opened for Description field from Create Group screen
    When  clicking or mouse hovering on one of the Records
    Then  delete icon will be displayed on the Record�s Row

  @catalog @group @ml @ui @ignore
Scenario: Verify the functionality of displaying the delete text as tooltip
	Given Culture pop-up is opened for Description field from Create Group screen
    When  user mouse over on the Delete icon
    Then  Delete text will be Displayed as Tooltip

  @catalog @group @ml @functional
Scenario: Verify the functionality of delete
	Given Culture pop-up is opened for Description field from Create Group screen
	When  User click on the delete button of any existing translation value in Group Screen
	Then  System will display a Warning message

  @catalog @group @ml @ui @ignore
Scenario: Verify the functionality of scroll bar in the pop up
    Given This scenario is UI Ignored - "UI scenarios are not implemented."
	And Culture pop-up is opened for Description field from Create Group screen
	When  Exiting values of the translation values got increases 
	Then  A scroll down will be added on the right side
	
# Culture functionality on Edit screen
  @catalog @group @ml @functional
  Scenario: Verify the functionality of adding a new value in edit mode
	Given Edit Group screen is opened
	When  User click on the culture button for Description field
    And   User selects the culture value from drop down and enters the Translation value
	And   User click on Add Button
	Then  Value will get saved at the bottom of the existing values List
	
# Culture functionality on View screen
  @catalog @group @ml @functional
Scenario: View existing culture translations for Description field
	Given View Group screen is opened
    When  User click on the culture button for Description field
    Then  A pop up will open with the Culture and Value
	And   User should be able to view all the existing translation values for the Description field
    And   User should not be able to make any changes to the translation values in the Pop up

  @catalog @group @ml @functional
Scenario: Description value in Default language in view mode
	Given Group Office screen is opened
    When  User drill down a record in View Mode
	Then  Description field value will be displayed in Default Language (English)

  @catalog @group @ml @ui @ignore
Scenario: No translation values defined for a value
    Given This scenario is UI Ignored - "UI scenarios are not implemented."
	And Group Office screen is opened
	When  User drill down a record in view mode for which translation does not exist for Description field
	Then  Culture icon for Description field will be disable on View mode
	And   Tool tip text on mouse over on the Culture icon will display 'No Translation were define'

  @catalog @group @ml @ui @ignore
Scenario: Scroll bar in order to view the entire translation
    Given This scenario is UI Ignored - "UI scenarios are not implemented."
	And View Group screen is opened
	When  User click on culture icon for Description field
	And   Existing translation values list does not fit into the culture pop up
	Then  scroll bar will appear in order to view all the translation values

  @catalog @group @ml @ui @ignore
Scenario: Verify that there should be no ellipsis in view mode
    Given View Group screen is opened
    When  User click on culture icon For Description Field
	And   User view a multi-line translation value on culture pop up
    Then  User will be able to view the entire translation value text in multi line Without Ellipsis
