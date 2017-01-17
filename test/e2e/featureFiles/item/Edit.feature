Feature: Edit Item
As a retailer catalog owner
I would like to update existing item in my catalog in an easy way from the Central Office
so that the items will be up to date

# Floating menu
  @catalog @item @edit @ui @ignore
Scenario: Verify floating menu on Edit Item Office Screen
	Given Edit Item Office Screen
	When  User verify the floating menu entries on the screen 
	Then  Floating menu will be available on the screen with following entries 'Item Details', 'Attributes' and 'Groups'

#Item Details Section entries
  @catalog @item @edit @ui @ignore
Scenario: Verify entries in Item Details section on Edit Item Office Screen
	Given Edit Item Office Screen
	When  User verify the entries in the Item Details section
	Then  Item Details section will have 'Master Code', 'Status', 'Short Description', 'Long Description', 'Additional Identifiers', 'Merchandise Hierarchy' fields
	And   'Master Code', 'Status' and 'Merchandise Hierarchy' fields will be the mandatory fields
	
# Field level input and validations in Item Details Section
  @catalog @item @edit @ui @ignore
Scenario: Verify Master Code field is non-editable
	Given Edit Item Office Screen
	When  User verify the Master Code field
	Then  Master Code field will be non-editable on Edit screen

  @catalog @item @edit @ui @ignore
Scenario: Verify Short Description field size change dynamically (expand vertically) according to user input up to the maximum allowed size
	Given Edit Item Office Screen
	When  User type into Short Description field
	Then  User will be able ot modify existing value of Short Description
	And   Short Description field will size dynamically (expand vertically) to accommodate user input
	And   User will not be allowed to type further when maximum allowed size has been reached
	And   Message will be displayed informing user that maximum allowed size has been reached

  @catalog @item @edit @ui @ignore
Scenario: Verify Long Description field size change dynamically (expand vertically) according to user input upto the maximum allowed size
	Given Edit Item Office Screen
	When  User type into Long Description field
	Then  User will be able to modify existing value of Long Description field
	And   Long Description field will size dynamically (expand vertically) to accommodate user input
	And   User will not be allowed to type further when maximum allowed size has been reached
	And   Message will be displayed informing user that maximum allowed size has been reached

  @catalog @item @edit @functional
Scenario: Verify Status field
	Given Edit Item Office screen
	When  User click on Status field to change the status of the Item
	And   Click on Save action button
	Then  Item will be saved with the changed status

  @catalog @item @edit @ui @ignore
Scenario: Verify Merchandise hierarchy field
	Given Edit Item Office screen
	When  User verify the Merchandise Hierarchy field
	Then  Merchandise hierarchy field will have a 'Change' button
	And   Clicking 'Change' button will open Hierarchy Tree Picker pop up which will allow user to modify existing hierarchy path value
	And   The updated hierarchy path will be available in the Merchandise hierarchy field

  @catalog @item @edit @ui @ignore
Scenario: Verify Merchandise hierarchy field when the field value is long
	Given Edit Item Office screen
	When  User set a long path for Merchandise hierarchy field using Tree picker
	Then  The Merchandise hierarchy field will display Upper level's path truncated at beginning and ellipsis will be added
	And   The direct parent in the path will be bolded
	And   The ellipsis will become bold and change its shape to a button on mouse-over
	And   Merchandise hierarchy field will be expanded to show entire Item path on click on ellipsis
	And   An arrow icon will be displayed in expanded mode which on click will collapse the Merchandise hierarchy field

  @catalog @item @edit @ui @ignore
Scenario: Verify node as individual link functionality on Merchandise hierarchy field
	Given Edit Item Office screen
	When  User set a long path for Merchandise hierarchy field using Tree picker
	Then  Tooltip will be displayed on mouse-over on path value in truncated mode displaying entire Item path in tooltip
	And   The node under mouse over will look clickable
	And   On click will navigate to Merchandise Hierarchy View screen for that particular node

  @catalog @item @edit @ui @ignore
Scenario: Verify Additional Identifier field
	Given Edit Item Office Screen
	When  User verify the 'Type' and 'Value' field for Addition Identifier sub section
	Then  The Type field will have hint text as 'Enter Type'
	And   The Value field will have hint text as 'Enter Value'
	And   Both Type and Value field will size dynamically (expand vertically) to accommodate user input
	And   Clicking 'Add' button will add the 'Type-Value' pair to the bottom of the list of Additional Identifiers

  @catalog @item @edit @ui @ignore
Scenario: Verify modification to Additional Identifiers values
	Given Edit Item Office Screen
	When  User click on an existing Additional Identifier (Type and Value) for an Item
	Then  User will be able to modify the value for Additional Identifier (Type and Value)
	And   When mouse over / focus on an Additional Identifier a Delete icon will be displayed
	And   When mouse over on Delete icon, Tooltip text 'Delete' will be displayed

  @catalog @item @edit @ui @ignore
Scenario: Verify Deletion of Additional Identifier for an Item
	Given Edit Item Office Screen
	When  User mouse over on existing Additional Identifier row and click Delete icon
	Then  Warning pop up will be displayed
	And   Additional Identifier row will be deleted when user confirm from the warning pop up message
	
# Attribute
  @catalog @item @edit @functional
Scenario: Verify modification to existing Item Attribute values
	Given Edit Item Office Screen
	When  User click on Value field for an existing Item Attribute row
	Then  User will be able to modify the value for the Attribute
	And   Clicking Save Action button will save the updated Attribute value for the Item

  @catalog @item @edit @ui @ignore
Scenario: Verify Deletion of Additional Identifier for an Item
	Given Edit Item Office Screen
	When  User has added an Attribute for an Item
	And   mouse over / focus on the existing Item Attribute row in Attribute section
	And   Click Delete icon
	Then  Warning pop up will be displayed
	And   Attribute row will be deleted when user confirm from the warning pop up message

  @catalog @item @edit @ui @ignore
Scenario: Addition of new Item attribute in the Attribute section
	Given Edit Item Office Screen
	When  User verify the Attribute Section
	Then  'Attribute' drop down list and Value field will be available
	And   Default focus will be on Attribute drop down field
	And   A Hint text 'Search and select attribute' will be shown in the attribute drop down field
	And   A Hint text 'Type Value' will be shown in the Value field
	And   'Value' field will size dynamically (expand vertically) to accommodate user input
	And   User will be able to type up to maximum of 64 characters in the Value field

  @catalog @item @edit @ui @functional
Scenario: 'Add' action on Attribute field
	Given Edit Item Screen
	When  User navigate to Attribute section
	Then  An 'Add' button will be available next to Attribute value field
	And   The Add button will be enabled when user selected an attribute and type atleast 1 character in the value field
	And   An Attribute row will be added to the bottom of the list of Attribute on click of 'Add' button
	And   The attribute added will be shown as disabled in the attribute drop down field

# Groups Section
  @catalog @item @edit @ui @ignore
Scenario: Verify Item Group sub section	
	Given Edit Item Screen
	When  User navigate to Groups section
	Then  'Item groups' sub section will display concise description text
	And   A Combo box field will be available with default Hint text 'Search and select Item groups'
	And   The combo-box field will allow user to select multiple value
	And   The combo box field will have action buttons 'Cancel' and 'Ok'

  @catalog @item @edit @ui @ignore
Scenario: Update existing selected Item groups list
	Given Edit Item Screen
	When  User click on Item group combo box
	And   Deselected an existing item group selection
	And   Select a new item group from the combo box
	And   Click 'Ok' button
	Then  Then the Item group selected list will be updated to show the new selected group
	And   The previously selected item group will not be shown in the selected list

  @catalog @item @edit @ui @ignore
Scenario: Delete selected Item groups functionality
	Given Edit Item Screen
	When  User has added groups in Item Groups section
	And   User does a mouse over on a group record
	Then  A delete icon will be added to the record’s row
	And   A tool tip text 'Delete' will be displayed on mouse over on delete icon
	And   A warning message will be displayed on clicking delete icon
	And   The group record will be deleted when user confirm the delete action from warning message

  @catalog @item @edit @ui @ignore
Scenario: Verify variant Group sub section
	Given Edit Item Screen
	When  User navigate to Groups section
	Then  'Variant group' sub section will display concise description text
	And   A Combo box field will be available with default Hint text 'Search and select variant group'
	And   The combo-box field will allow user to select only single Variant Group

  @catalog @item @edit @ui @ignore
Scenario: Update existing selected variant group
	Given Edit Item Screen
	When  User click on Variant group combo box
	And   Click on a variant group record from the combo box
	Then  The selected variant group record will be added to the list
	And   The selected variant group record will replace existing record

  @catalog @item @edit @ui @ignore
Scenario: Delete selected Variant group functionality
	Given Edit Item Screen
	When  User has added group in Variant Group section
	And   User does a mouse over on a group record
	Then  A delete icon will be added to the record’s row
	And   A tool tip text 'Delete' will be displayed on mouse over on delete icon
	And   A warning message will be displayed on clicking delete icon
	And   The group record will be deleted when user confirm the delete action from warning message
	
# Action buttons and validations
  @catalog @item @edit @ui @ignore
Scenario: Verify the Action buttons displayed on Edit Item Office Screen
	Given Edit Item Office Screen
	When  User verify the Action buttons available in the tool bar on the screen
	Then  Following action buttons will be displayed: 'Save', 'Done', 'Cancel'
	And   Action buttons 'Edit' and 'Add' will be hidden

  @catalog @item @edit @functional
Scenario: Verify on Save of an Item, the Item record is saved and the screen stays in Edit mode.
	Given Edit Item Office Screen
	When  User update some information for the Item required
	And   Click 'Save' button
	Then  Item will be saved
	And   Notification will be displayed to user that the Record was saved successfully
	And   Item screen will be displayed in Edit mode
	And   breadcrumb will display Catalog > Items > Item Short description> - Edit

  @catalog @item @edit @functional
Scenario: Verify on clicking Done for an Item, the Item is saved and the screen stays in View mode.
	Given Edit Item Office Screen
	When  User update some information for the Item required
	And   Click 'Done' button
	Then  Item will be saved
	And   Notification will be displayed to user that the Record was saved successfully
	And   Item screen will be displayed in View mode
	And   Breadcrumb will display Catalog > Items > Item Short description>

  @catalog @item @edit @ui @ignore
Scenario: Verify on clicking Cancel for an Item
	Given Edit Item Office Screen
	When  User update some information for the Item required
	And   Click 'Cancel' button
	Then  Message prompt will be displayed asking user If user would like to discard changes
	And   Message prompt will have 'Yes' and 'No' options

  @catalog @item @edit @ui @ignore
Scenario: Verify clicking No from Cancel message prompt for an Item
	Given Edit Item Office Screen
	When  User update some information for the Item required
	And   Click 'Cancel' button
	And   Click 'No' from cancel message prompt
	Then  User will stay on Edit Item office screen.

  @catalog @item @edit @functional @ignore
Scenario: Verify clicking Yes from Cancel message prompt for an Item
	Given Edit Item Office Screen
	When  User update some information for the Item required
	And   Click 'Cancel' button
	And   Click 'Yes' from cancel message prompt
	Then  User will navigate back to Item Office screen
	And   Updates for the Item will not be saved

  @catalog @item @edit @ui @ignore
Scenario: Verify Cancel message prompt on navigating away from Edit Item Office Screen
	Given Edit Item Office Screen
	When  User update some information for the Item required
	And   User navigate away from screen by using back button\ using breadcrumbs\ page browsing\ node link from merchandise hierarchy field \other
	Then  Message prompt will be displayed asking user If user would like to discard changes
	And   Message prompt will have 'Yes' and 'No' options
	
# breadcrumb Path
  @catalog @item @edit @ui @ignore
Scenario: Verify the breadcrumb path on Edit Item Office Screen
	Given Edit Item Office Screen
	When  User verify the breadcrumb path value
	Then  Breadcrumb path will be Catalog > Items > <Item Short description> - Edit

  @catalog @item @edit @ui @ignore
Scenario: Verify the breadcrumb path on Edit Item Office Screen for an Item with blank short description
	Given Edit Item Office Screen for an Item with blank short description
	When  User verify the breadcrumb path value
	Then  Breadcrumb path will be Catalog > Items > <Item Master Code> - Edit


	
	
