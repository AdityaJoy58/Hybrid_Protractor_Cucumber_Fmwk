Feature: Create Item
As a retailer catalog owner
I would like to create new item in my catalog in an easy way from the Central Office
so that I will be able to add new items and use them in the future

# Floating menu
	@catalog @item @create @ui @ignore
Scenario: Verify floating menu on Create Item Office Screen
	Given Create Item Office Screen
	When  User verify the floating menu entries on the screen 
	Then  Floating menu will be available on the screen with following entries 'Item Details', 'Attributes' and 'Groups'

#Item Details Section entries
	@catalog @item @create @ui @ignore
Scenario: Verify entries in Item Details section on Create Item Office Screen
	Given Create Item Office Screen
	When  User verify the entries in the Item Details section
	Then  Item Details section will have 'Master Code', 'Status', 'Short Description', 'Long Description', 'Additional Identifiers', 'Merchandise Hierarchy' fields
	And   'Master Code', 'Status' and 'Merchandise Hierarchy' fields will be the mandatory fields
	
# Field level input and validations in Item Details Section
	@catalog @item @create @ui @ignore
Scenario: Verify Master Code field size allow user input only upto the maximum size allowed
	Given Create Item Office Screen
	When  User type into Master Code field
	And   User has typed in maximum allowed number of characters
	Then  User will be not be able to type into the field
	And   Message will be displayed informing user that maximum allowed size has been reached

	@catalog @item @create @ui @ignore
Scenario: Verify Short Description field size change dynamically (expand vertically) according to user input up to the maximum allowed size
	Given Create Item Office Screen
	When  User type into Short Description field
	Then  Short Description field will size dynamically (expand vertically) to accommodate user input
	And   User will not be allowed to type further when maximum allowed size has been reached
	And   Message will be displayed informing user that maximum allowed size has been reached

	@catalog @item @create @ui @ignore
Scenario: Verify Long Description field size change dynamically (expand vertically) according to user input upto the maximum allowed size
	Given Create Item Office Screen
	When  User type into Long Description field
	Then  Long Description field will size dynamically (expand vertically) to accommodate user input
	And   User will not be allowed to type further when maximum allowed size has been reached
	And   Message will be displayed informing user that maximum allowed size has been reached

	@catalog @item @create @ui @ignore
Scenario: Verify Status field
	Given Create Item Office screen
	When  User verify the Status field
	Then  The Status field will be am binary input which will allow user to set status of item
	And   The default value for Status field will be enabled

	@catalog @item @create @ui @ignore
Scenario: Verify Merchandise hierarchy field
	Given Create Item Office screen
	When  User verify the Merchandise Hierarchy field
	Then  Merchandise hierarchy field will have a 'Set' button
	And   The default value of Merchandise hierarchy field will be 'Root'
	And   Clicking 'Set' button will open Hierarchy Tree Picker pop up which will allow user to set a hierarchy path

	@catalog @item @create @ui @ignore
Scenario: Verify Merchandise hierarchy field when the field value is long
	Given Create Item Office screen
	When  User set a long path for Merchandise hierarchy field using Tree picker
	Then  The Merchandise hierarchy field will display Upper level's path truncated at beginning and ellipsis will be added
	And   The direct parent in the path will be bolded
	And   The ellipsis will become bold and change its shape to a button on mouse-over
	And   Merchandise hierarchy field will be expanded to show entire Item path on click on ellipsis
	And   An arrow icon will be displayed in expanded mode which on click will collapse the Merchandise hierarchy field

	@catalog @item @create @functional
Scenario: Verify node as individual link functionality on Merchandise hierarchy field
	Given Create Item Office screen
	When  User set a long path for Merchandise hierarchy field using Tree picker
	Then  The node under mouse over will clickable
	And   On click will navigate to Merchandise Hierarchy view screen for that particular node

	@catalog @item @create @ui @ignore
Scenario: Verify node as individual link functionality on Merchandise hierarchy field
	Given Create Item Office screen
	When  User set a long path for Merchandise hierarchy field using Tree picker
	Then  Tooltip will be displayed on mouse-over on path value in truncated mode displaying entire Item path in tooltip
	And   The node under mouse over will clickable
	And   On click will navigate to Merchandise Hierarchy view screen for that particular node

	@catalog @item @create @ui @ignore
Scenario: Verify Additional Identifier field
	Given Create Item Office Screen
	When  User verify the 'Type' and 'Value' field for Addition Identifier sub section
	Then  The Type field will have hint text as 'Enter Type'
	And   The Value field will have hint text as 'Enter Value'
	And   Both type and Value field will size dynamically (expand vertically) to accommodate user input
	And   Clicking 'Add' button will add the 'Type-Value' pair to the bottom of the list of Additional Identifiers

	@catalog @item @create @ui @ignore
Scenario: Verify modification to Additional Identifiers values
	Given Create Item Office Screen
	When  User has added an Additional Identifier (Type and Value) for an Item
	Then  User will be able to modify the value for Additional Identifier (Type and Value)
	And   When mouse over / focus on an Additional Identifier a Delete icon will be displayed
	And   When mouse over on Delete icon, Tooltip text 'Delete' will be displayed

	@catalog @item @create @ui @ignore
Scenario: Verify Deletion of Additional Identifier for an Item
	Given Create Item Office Screen
	When  User has added an Additional Identifier (Type and Value) for an Item
	And   User mouse over on the Additional Identifier row and click Delete icon
	Then  Warning pop up will be displayed
	And   Additional Identifier row will be deleted when user confirm from the warning pop up message
	
# Attribute
	@catalog @item @create @ui @ignore
Scenario: Verify user is able to set Item attribute values in the Attribute section
	Given Create Item Office Screen
	When  User verify the Attribute Section
	Then  'Attribute' drop down list and Value field will be available
	And   Default focus will be on Attribute drop down field
	And   A Hint text 'Search and select attributes' will be shown in the attribute drop down field
	And   A Hint text 'Enter value' will be shown in the Value field
	And   'Type' value field will size dynamically (expand vertically) to accommodate user input
	And   User will be able to type up to maximum of 64 characters in the Value field

	@catalog @item @create @functional
Scenario: Verify Search Capability on Attribute drop down field
	Given Create Item Screen
	When  User navigate to Attribute section
	Then  User will be able to type attribute name in attribute drop down field
	And   Flat list with matching value will be shown

	@catalog @item @create @ui @ignore
Scenario: Verify Search Capability on Attribute drop down field
	Given Create Item Screen
	When  User navigate to Attribute section
	Then  User will be able to type attribute name in attribute drop down field
	And   Flat list with matching value will be shown
	And   Matching character will be highlighted in each word which contains input string

	@catalog @item @create @ui @ignore
Scenario: Verify Clear Icon on Attribute drop down field
	Given Create Item Screen
	When  User navigate to Attribute section
	And   User perform search on attribute drop down field
	Then  A clear icon will be available at the field to clear search text.

	@catalog @item @create @ui @ignore
Scenario: 'Add' action on Attribute field
	Given Create Item Screen
	When  User navigate to Attribute section
	Then  An 'Add' button will be available next to Attribute value field
	And   The Add button will be enabled when user selected an attribute and type atleast 1 character in the value field
	And   An Attribute row will be added to the bottom of the list of Attribute on click of 'Add' button
	And   The attribute added will be shown as disabled in the attribute drop down field

	@catalog @item @create @ui @ignore
Scenario: 'Add+Culture' action on Attribute field
	Given Create Item Screen
	When  User navigate to Attribute section
	Then  An 'Add+Culture' icon will be available next to 'Add' button
	And   The 'Add+ Culture' icon' will be enabled when user selected an attribute from the drop down field

	@catalog @item @create @ui @ignore
Scenario: Verify modification to Attribute values
	Given Create Item Office Screen
	When  User has added an Attribute for an Item
	Then  User will be able to modify the value for Attribute
	And   When mouse over / focus on the Attribute field a Delete icon will be displayed
	And   When mouse over on Delete icon, Tooltip text 'Delete' will be displayed

	@catalog @item @create @ui @ignore
Scenario: Verify Deletion of Additional Identifier for an Item
	Given Create Item Office Screen
	When  User has added an Attribute for an Item
	And   User mouse over on the Attribute row and click Delete icon
	Then  Warning pop up will be displayed
	And   Attribute row will be deleted when user confirm from the warning pop up message

# Groups Section
	@catalog @item @create @ui @ignore
Scenario: Verify Item Group sub section	
	Given Create Item Screen
	When  User navigate to Groups section
	Then  'Item groups' sub section will display concise description text
	And   A Combo box field will be available with default Hint text 'Search and select Item groups'

	@catalog @item @create @functional @ignore
Scenario: Verify Combo-box field in the Item Groups sub section under Groups section
	Given Create Item Screen
	When  User navigate to Groups section
	And   User verify the Combo-box field in the Item Groups sub section
	Then  The combo-box field will allow user to select multiple value
	And   The combo box field will have action buttons 'Cancel' and 'Ok'
	And   All the selected Item groups will be added as list to the 'Item Groups' sub section on clicking 'Ok' button from combo-box

	@catalog @item @create @functional @ignore
Scenario: Verify search functionality in Combo-box field in the Item Groups sub section under Groups section
	Given Create Item Screen
	When  User navigate to Groups section
	And   User type search text in Combo-box field in the Item Groups sub section
	Then  The combo-box field will display list of matching records
	And   User will be able to select multiple records and Click 'Ok' button
	And   All the selected Item groups will be added as list to the 'Item Groups' sub section

	@catalog @item @create @ui @ignore
Scenario: Delete selected Item groups functionality
	Given Create Item Screen
	When  User has added groups in Item Groups section
	And   User does a mouse over on a group record
	Then  A delete icon will be added to the record�s row
	And   A tool tip text 'Delete' will be displayed on mouse over on delete icon
	And   A warning message will be displayed on clicking delete icon
	And   The group record will be deleted when user confirm the delete action from warning message

	@catalog @item @create @ui @ignore
Scenario: Verify variant Group sub section
	Given Create Item Screen
	When  User navigate to Groups section
	Then  'Variant group' sub section will display concise description text
	And   A Combo box field will be available with default Hint text 'Search and select variant group'

	@catalog @item @create @functional
Scenario: Verify Combo-box field in the Item Groups sub section under Groups section
	Given Create Item Screen
	When  User navigate to Groups section
	And   User verify the Combo-box field in the Variant Group sub section
	Then  The Combo-box field will list down all the Variant Groups
	And   The combo-box field will allow user to select only single Variant Group
	And   The selected Variant groups will be added as list to the 'Variant Groups' sub section 
	And   Will replace any existing Variant group added in the list

	@catalog @item @create @ui @ignore
Scenario: Delete selected Variant group functionality
	Given Create Item Screen
	When  User has added group in Variant Group section
	And   User does a mouse over on a group record
	Then  A delete icon will be added to the record�s row
	And   A tool tip text 'Delete' will be displayed on mouse over on delete icon
	And   A warning message will be displayed on clicking delete icon
	And   The group record will be deleted when user confirm the delete action from warning message
	
# Action buttons and validations
	@catalog @item @create @ui @ignore
Scenario: Verify the Action buttons displayed on Create Item Office Screen
	Given Create Item Office Screen
	When  User verify the Action buttons available in the tool bar on the screen
	Then  Following action buttons will be displayed: 'Save', 'Done', 'Cancel'
	And   Action buttons 'Edit' and 'Add' will be hidden

	@catalog @item @create @functional
Scenario: Verify on Save of new Item, the Item record is saved and the screen stays in Edit mode.
	Given Create Item Office Screen
	When  User enters all the valid information in the required fields of create Item
	And   Click 'Save' button
	Then  New Item will be saved
	And   Notification will be displayed to user that the Record was saved successfully
	And   Item screen will be displayed in Edit mode

	@catalog @item @create @functional @ignore
Scenario: Verify on Save of new Item, the Item record is saved and the screen stays in Edit mode.
	Given Create Item Office Screen
	When  User enters all the valid information in the required fields of create Item
	And   Click 'Save' button
	Then  New Item will be saved
	And   Notification will be displayed to user that the Record was saved successfully
	And   Item screen will be displayed in Edit mode
	And   breadcrumb will display Catalog > Items > <Item Short description> - Edit

	@catalog @item @create @functional
Scenario: Verify on clicking Done of new Item, the Item is saved and the screen stays in View mode.
	Given Create Item Office Screen
	When  User enters all the valid information in the required fields of create Item
	And   Click 'Done' button
	Then  New Item will be saved
	And   Notification will be displayed to user that the Record was saved successfully
	And   Item screen will be displayed in View mode
	And   Breadcrumb will display Catalog > Items > Item Short description>

	@catalog @item @create @functional
	Scenario: Verify on clicking Save for new item with no Master Code or Short Description or Long Description
		Given Create Item Office Screen
		When  User enters no data in Master Code or Short Description or Long Description fields
		And   Click 'Save' button
		Then  New Item will not be saved
		And   Error message will be displayed informing user that Master Code or Short Description or Long Description is mandatory

	@catalog @item @create @functional
	Scenario: Verify on clicking Save for new item with no Master Code or Short Description or Long Description
		Given Create Item Office Screen
		When  User enters no data in Master Code or Short Description or Long Description fields
		And   Click 'Done' button
		Then  New Item will not be saved
		And   Error message will be displayed informing user that Master Code or Short Description or Long Description is mandatory

	@catalog @item @create @functional
Scenario: Verify on clicking Save for new Item with existing master code
	Given Create Item Office Screen
	When  User enters an existing code data in Master Code field
	And   Click 'Save' button
	Then  New Item will not be saved
	And   Error message will be displayed informing user that record with the same Master Code already exist

	@catalog @item @create @functional @ignore
Scenario: Verify on clicking Cancel for new Item
	Given Create Item Office Screen
	When  User enters all the valid information in the required fields
	And   Click 'Cancel' button
	Then  Message prompt will be displayed asking user If user would like to discard changes
	And   Message prompt will have 'Yes' and 'No' options

	@catalog @item @create @functional @ignore
Scenario: Verify clicking No from Cancel message prompt for new Item
	Given Create Item Office Screen
	When  User enters all the valid information in the required fields
	And   Click 'Cancel' button
	And   Click 'No' from cancel message prompt
	Then  User will stay on Create Item office screen.

	@catalog @item @create @functional @ignore
Scenario: Verify clicking Yes from Cancel message prompt for new Item
	Given Create Item Office Screen
	When  User enters all the valid information in the required fields
	And   Click 'Cancel' button
	And   Click 'Yes' from cancel message prompt
	Then  User will navigate back to Item Office screen
	And   New Item will not be created

	@catalog @item @create @functional @ignore
Scenario: Verify Cancel message prompt on navigating away from Create Item Office Screen
	Given Create Item Office Screen
	When  User enters all the valid information in the required fields
	And   User navigate away from screen by using back button\ using breadcrumbs\ page browsing\ node link from merchandise hierarchy field \other
	Then  Message prompt will be displayed asking user If user would like to discard changes
	And   Message prompt will have 'Yes' and 'No' options

	@catalog @item @create @ui @ignore
# breadcrumb Path
Scenario: Verify the breadcrumb path on Create Item Office Screen
	Given Create Item Office Screen
	When  User verify the breadcrumb path value
	Then  Breadcrumb path will be Catalog -> Items > New Item


	
	
