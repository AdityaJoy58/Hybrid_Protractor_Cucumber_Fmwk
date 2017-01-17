Feature:  Multi Language Feature in Items for Attribute Field
As a retailer catalog consumer, 
I would like to be able to translate the item attribute value to different languages 
So that it will be possible to display it in different languages

# Add mode
  @catalog @item @ml @ui @ignore
Scenario: Verify the Add functionality from the culture icon when user Add an attribute in Attribute section
	Given Create Item screen is opened
	When  User select an Attribute from the Attribute combo box in Attribute section
	And   User enter a value and click 'Add' button
	And   User click on the culture button for the Attribute row added
	Then  A pop up will open with the culture and value field
	And   Default culture and value will be displayed in the existing table below culture drop down

  @catalog @item @ml @ui @ignore
Scenario: Verify the Add functionality from the 'Add with culture' button in Attribute section
	Given Create Item screen is opened
	When  User select an Attribute from the Attribute combo box in Attribute section
	And   User click on the 'Add with culture' button
	Then  A culture pop up will open with the culture and value field
	And   User will be able to add default and other translations for the attribute
	And   A new attribute row will be added to the attribute section on clicking OK button from the culture pop-up
	And   The value for the attribute row will be the default value user added in the culture pop up

  @catalog @item @ml @ui @ignore
Scenario: Verify the tooltip text for the 'Add with culture' button in Attribute section
	Given Create Item screen is opened
	When  User mouse hover on the arrow/culture icon available next to the 'Add' button in Attribute section
	Then  The tool tip text 'Add with culture' will be displayed
	And   Culture pop up will be open when clicking 'Add with culture' button

  @catalog @item @ml @ui @ignore
Scenario: Verify the Add functionality in case user does not enter the Attribute value
	Given Create Item screen is opened
	When  User added an attribute row in Attribute section
	And   User removed the value for the attribute row
	And   User click on culture button for the attribute row
	Then  A pop up will open with the culture and value	
	And   The system’s default culture will be displayed
	And   The focus will be on the value field

#Pop up scenarios for Create Item screen
  @catalog @item @ml @ui @ignore
Scenario: Verify the culture drop down with flag
	Given Culture pop-up is opened from Create Item screen
	When  click on the drop down in pop up 
	Then  drop down will be displayed with different cultures 
	And   Each value will display with relevant flag and country value in parenthesis

  @catalog @item @ml @ui @ignore
Scenario: Verify the selection in culture drop down 
	Given Culture pop-up is opened from Create Item screen
	When  User select the language from culture drop down 
	Then  Country will appear with the corresponding flag in Parenthesis

  @catalog @item @ml @ui @ignore
Scenario: Verify the culture drop down and value column in pop up
	Given Culture pop-up is opened from Create Item screen
	Then  Culture pop-up will have culture combo box and value field	
	And   User will be able to select the language from the culture drop down 
	And   User will be able to define the value for particular language

  @catalog @item @ml @ui @ignore
Scenario: Verify the functionality that all the existing translation values should be in editable mode
	Given Culture pop-up is opened from Create Item screen
	When  User add the translation values
	And   Values gets added in existing values
	Then  All the translation values will be in the editable mode
	And   User will be able to edit any existing value

  @catalog @item @ml @ui @ignore
Scenario: Verify add functionality of culture and value in existing values
	Given Culture pop-up is opened from Create Item screen
	When  User select the language from culture drop down 
	And   User define the value for that language
	And   User click on Add button
	Then  language and value will get added in the bottom of the existing value
	And   User will notice that add was performed

  @catalog @item @ml @ui @ignore
Scenario: Verify add functionality of mouse over on the rows
	Given Culture pop-up is opened from Create Item screen
	When  User mouse over on the translation values in existing table
	Then  A black dot and delete icon will be displayed for record with mouse over

  @catalog @item @ml @ui @ignore
Scenario: Verify that user can enter one translation value against one language
	Given Culture pop-up is opened from Create Item screen
	When  A Culture already exist in the translation values
	Then  that culture will be displayed in the drop down list as disabled.

  @catalog @item @ml @ui @ignore
Scenario: Verify add Translation Value text box length and warning message
	Given Culture pop-up is opened from Create Item screen
	When  user select the language from culture drop down 
	And   User define the value for that language to the max allowed length
	Then  User will be able to continue writing up to max allowed characters
	And   User will get warning message that user cannot enter more than 64 characters

  @catalog @item @ml @ui @ignore
Scenario: Verify text box truncation and ellipsis for the existing translation values in pop up
	Given Culture pop-up is opened from Create Item screen
	When  user select the language from culture drop down 
	And   User define the value for that language to the max allowed length
	And   more than 1 line is needed to display
	Then  value will be saved in Existing value 
	And   Value will get truncated and added with ellipsis

  @catalog @item @ml @ui @ignore
Scenario: Verify the functionality using view full translation name using a tooltip
	Given Culture pop-up is opened from Create Item screen
	When  User add translation value with max allowed length
	And   Value got saved with ellipsis
	And   User mouse over on anywhere on the text
	Then  User will be able to view full translation value on tooltip

  @catalog @item @ml @ui @ignore
Scenario: Verify the functionality of clicking on the ellipsis
	Given Culture pop-up is opened from Create Item screen
	When  User add translation value with max allowed length
	And   Value got saved with ellipsis
	And   User click the ellipsis 
	Then  text area will be expanded to show the full translation value
	And   Cursor will be at the end of the text
	And   User will be able to edit the value

  @catalog @item @ml @ui @ignore
Scenario: Verify the search functionality in culture drop down
	Given Culture pop-up is opened from Create Item screen
	When  user start entering the character in the culture drop down box
	Then  Only Culture that contain matching characters will be displayed in the drop down
	And   Text will be highlighted according to the user's input for each word

  @catalog @item @ml @ui @ignore
Scenario: Verify the functionality of clear icon to clear search
	Given Culture pop-up is opened from Create Item screen
	When  User start entering the character in the culture drop down box
	Then  A clear icon will be displayed in the search field
	And   User will be able to clear the search by clear icon

  @catalog @item @ml @ui @ignore
Scenario: Verify the functionality of enable Add button
	Given Culture pop-up is opened from Create Item screen
	When  User select a culture
	And   Start entering single character in translation values 
	Then  'Add' button will be enabled

  @catalog @item @ml @ui @ignore
Scenario: Verify the functionality of enable OK button
	Given Culture pop-up is opened from Create Item screen
	When  User add a value in the existing list
	Then  'OK' button will be enabled

  @catalog @item @ml @functional
Scenario: Verify the functionality of OK button when culture pop-up is opened for an attribute row
	Given Culture pop-up is opened for an attribute row by clicking respective culture icon
	When  User add a translation value in the existing list
	And   User click on the OK button
	Then  Pop up will be closed 
	And   Changes in the Existing values will be saved

  @catalog @item @ml @functional
Scenario: Verify the functionality of OK button when culture pop-up is opened from 'Add with culture' button
	Given Culture pop-up is opened by clicking 'Add with culture' button from Attribute section on create Item screen
	When  User add a default translation value
	And   User add other translation values
	And   User click on the OK button
	Then  Pop up will be closed 
	And   A new row of Attribute will be added to the bottom of the existing Attribute list
	And   The value shown for the attribute will be the default value added by the user in the culture pop-up

  @catalog @item @ml @ui @ignore
Scenario: Verify the functionality of Cancel button
	Given Culture pop-up is opened from Create Item screen
	When  User click on the cancel button
	Then  Pop up will be closed 
	And   changes will not be saved

  @catalog @item @ml @ui @ignore
Scenario: Verify the functionality of displaying the delete icon
	Given Culture pop-up is opened from Create Item screen
	When  clicking or mouse hovering on one of the records
	Then  delete icon will be displayed on the record’s row
	And   'Delete' text will be displayed as tool tip when mousehover on the delete icon

  @catalog @item @ml @ui @ignore
Scenario: Verify the functionality of delete 
	Given Culture pop-up is opened from Create Item screen
	When  User click on the delete button of any existing translation value 
	Then  System will display a warning message

  @catalog @item @ml @ui @ignore
Scenario: Verify the functionality of scroll bar in the pop up
	Given Culture pop-up is opened from Create Item screen
	When  Exiting values of the translation values got increases 
	Then  A scroll down will be added on the right side
	
# Culture functionality on Edit screen
  @catalog @item @ml @ui @ignore
Scenario: Verify the functionality of adding a new value in edit mode
	Given Edit Item screen is opened
	When  User click on the culture button for an attribute row
	And   User selects the culture value from drop down and enters the translation value 
	And   User click on Add button
	Then  Value will get saved at the bottom of the existing values list

  @catalog @item @ml @ui @ignore
Scenario: Verify the functionality of editing existing value in edit mode
	Given Edit Item screen is opened
	When  User click on the culture button for an attribute row
	And   User selects an existing culture value 
	Then  User will be able to modify the existing value
	And   The updated value will be saved on clicking Ok button

  @catalog @item @ml @ui @ignore
Scenario: Verify the functionality of deleting existing value in Edit mode
	Given Culture pop-up is opened for an attribute row from Edit Item screen
	When  User mouse over on any existing value
	And   Click on the delete icon for the existing translation value 
	Then  System will display a warning message
	And   Existing value will be deleted when user confirm from the warning message
	
# Culture functionality on View screen
  @catalog @item @ml @ui @ignore
Scenario: View existing culture translations for Attribute row
	Given View Item screen is opened
	When  User click on the culture icon of an Attribute row 
	Then  A pop up will open with the culture and value	
	And   User should be able to view all the existing translation values for the Attribute value 
	And   User should not be able to make any changes to the translation values in the pop up

  @catalog @item @ml @ui @ignore
Scenario: View existing culture translations for Attribute row
	Given View Item screen is opened
	When  User click on the culture icon of an Attribute row
	Then  A pop up will open with the culture and value	
	And   User should be able to view all the existing translation values for the Attribute value
	And   User should not be able to make any changes to the translation values in the pop up

  @catalog @item @ml @ui @ignore
Scenario: Attribute value in Default language in view mode
	Given Item Office screen is opened
	When  User drill down a record in view mode
	Then  Attribute value will be displayed in default language (English)

  @catalog @item @ml @ui @ignore
Scenario: No translation values defined for a value
	Given Item Office screen is opened
	When  User drill down a record in view mode for which translation does not exist for Attribute field
	Then  Culture icon for Attribute row will be disabled on View mode
	And   Tool tip text on mouse over on the Culture icon for Attribute row will display 'No Translation were defined'

  @catalog @item @ml @ui @ignore
Scenario: Scroll bar in order to view the entire translation
	Given View Item screen is opened
	When  User click on culture icon for any of the Attribute row
	And   If the existing translation values list does not fit into the culture pop up
	Then  scroll bar will appear in order to view all the translation values

  @catalog @item @ml @ui @ignore
Scenario: Verify that there should be no ellipsis in view mode
	Given View Item screen is opened
	When  User click on culture icon for any of the Attribute row
	And   User view a multi-line translation value on culture pop up
	Then  User will be able to view the entire translation value text in multi line without ellipsis
