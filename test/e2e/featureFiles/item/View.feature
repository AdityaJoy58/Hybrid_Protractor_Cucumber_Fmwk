Feature: View Item
As a retailer catalog owner
I would like to be able to view existing items in my catalog from the Central Office
so that I will be able to view all its details 

# Floating menu
	@catalog @item @view @ui @ignore
Scenario: Verify floating menu on View Item Office Screen
	Given View Item Office Screen
	When  User verify the floating menu entries on the screen 
	Then  Floating menu will be available on the screen with following entries 'Item Details', 'Attributes' and 'Groups'	

# Item Details Section
	@catalog @item @view @ui @ignore
Scenario: Verify entries in Item Details section on View Item Office Screen
	Given View Item Office Screen
	When  User click on 'Item Details' entry from floating menu
	Then  Screen focus will move to 'Item Details' section on the screen
	And   Item Details Section will have following sub section 'Main Details', 'Additional Details'
	And   'Main Details' sub section will have following fields 'Master Code', 'Status', 'Short Description', 'Long Description'
	And   'Addition Details' sub section will have following fields 'Additional Identifiers', 'Merchandise Hierarchy', 'Created Date' and 'Last Update'

	@catalog @item @view @ui @ignore
Scenario: Verify 'Status' field in 'Main Details' sub section under 'Item Details' section on View Item Office Screen for an Inactive Item
	Given View Item Office screen for an inactive item
	When  User verify the 'Status' field value 'Main Details' sub section under 'Item Details' section
	Then  The status field will show inactive icon following the field value text.

	@catalog @item @view @ui @ignore
Scenario: Verify the 'Additional Identifiers' field in 'Addition Details' sub section under 'Item Details' section on View Item Office Screen
	Given View Item Office screen for an item which has additional identifiers mapped to it
	When  User verify the 'Additional Identifiers' field in 'Addition Details' sub section under 'Item Details' section
	Then Additional Identifier field will list down identifier type and value pairs mapped to the item
	
# 'Merchandise Hierarchy' field in Item Details section
	@catalog @item @view @ui @ignore
Scenario: Verify Merchandise hierarchy field for a Item which is at highest level in the merchandise hierarchy
	Given View Item Office screen is opened for an Item which is at highest level
	When  User verify the Merchandise hierarchy field in 'Additional Details' sub section
	Then  The Merchandise hierarchy field will display value as 'Root'
	And   The 'Root' will be bolded
	And   No tooltip will be displayed on mouse-over

	@catalog @item @view @ui @ignore
Scenario: Verify Merchandise hierarchy field for a Item record which is not at highest level in the merchandise hierarchy and the path value is short
	Given View Item Office screen is opened for an Item which is not at highest level and has short path value
	When  User verify the Merchandise hierarchy field in 'Additional Details' sub section
	Then  The Merchandise hierarchy field will display Upper level's path
	And   The direct parent in the path will be bolded
	And   No tooltip will be displayed on mouse-over

	@catalog @item @view @ui @ignore
Scenario: Verify Merchandise hierarchy field for a Item record which is not at highest level in the merchandise hierarchy and the path value is long
	Given View Item Office screen is opened for an Item which is not at highest level and has long path value
	When  User verify the Merchandise hierarchy field in 'Additional Details' sub section
	Then  The Merchandise hierarchy field will display Upper level's path truncated at beginning and ellipsis will be added
	And   The direct parent in the path will be bolded
	And   Tooltip will be displayed on mouse-over on path value in truncated mode displaying entire Item path in tooltip

	@catalog @item @view @ui @ignore
Scenario: Verify Ellipsis functionality on Merchandise hierarchy field
	Given View Item Office screen is opened for an Item which is not at highest level and has long path value
	When  User verify the Ellipsis in Merchandise hierarchy field in 'Additional Details' sub section
	Then  The ellipsis will become bold and change its shape to a button on mouse-over
	And   Merchandise hierarchy field will be expanded to show entire Item path on click on ellipsis
	And   An arrow icon will be displayed in expanded mode which on click will collapse the Merchandise hierarchy field

	@catalog @item @view @ui @functional
Scenario: Verify individual nodes in Merchandise hierarchy field
	Given View Item Office screen is opened
	When  User mouse over on individual node in the Merchandise hierarchy field value in the 'Additional Details' sub section
	Then  The node under the mouse over will look clickable
	And   On click will navigate to Merchandise Hierarchy View screen for that particular node

# Attribute Section
	@catalog @item @view @ui @ignore
Scenario: Verify the Attribute section on View Item Screen
	Given View Item Office screen is opened
	When  User click on 'Attributes' from the floating menu
	Then  Focus of the screen will move to 'Attribute' section
	And   The section will display list of Attribute and Value associated to the item

	@catalog @item @view @ui @ignore
Scenario: Verify the Attribute section on View Item Screen when more than 10 Attribute-Value are associated to the item
	Given View Item Office screen is opened
	When  User verify the 'Attributes' section
	Then  The section will display list of Attribute and Value associated to the item
	And   An internal scroll will be displayed in the 'Attribute' section to allow user to view all Attributes associated to the item
	
# Groups Section
	@catalog @item @view @ui @ignore
Scenario: Verify the Groups Section on View Item Screen
	Given View Item Office screen is opened
	When  User click on 'Groups' from the floating menu
	Then  Focus of the screen will move to 'Groups' section
	And   The section will display following sub section 'Item Groups' and 'Variant Group'

	@catalog @item @view @ui @ignore
Scenario: Verify the 'Item Groups' sub section on View Item Screen for an Item associated to a maximum of 10 Item groups
	Given View Item Office screen is opened for an Item associated to a maximum of 10 Item groups
	When  User verify 'Item Groups' sub section
	Then  'Item Groups' sub section will show list of all Item Groups to which the item is associated

	@catalog @item @view @ui @ignore
Scenario: Verify the 'Item Groups' sub section on View Item Screen for an Item associated to more than 10 Item groups
	Given View Item Office screen is opened for an Item associated to more than 10 Item groups
	When  User verify 'Item Groups' sub section
	Then  'Item Groups' sub section will show list of all Item Groups to which the item is associated
	And   An internal scroll will be displayed in the 'Item Groups' sub section to allow user to view all Item Groups associated to the item

	@catalog @item @view @ui @ignore
Scenario: Verify the 'Variant Group' sub section on View Item Screen for an Item associated to a maximum of 10 Item groups
	Given View Item Office screen is opened for an Item associated to a maximum of 10 Item groups
	When  User verify 'Variant Group' sub section
	Then  'Variant Group' sub section will show the Variant Group to which the item is associated	
	
# breadcrumb Path
	@catalog @item @view @ui @ignore
Scenario: Verify the breadcrumb path on View Item Office Screen for Item with non-empty Short description
	Given View Item Office Screen for Item with non-empty Short description
	When  User verify the breadcrumb path value
	Then  Breadcrumb path will be Catalog -> Items > [Item Short description value]

	@catalog @item @view @ui @ignore
Scenario: Verify the breadcrumb path on View Item Office Screen for Item with empty Short description
	Given View Item Office Screen for Item with empty Short description
	When  User verify the breadcrumb path value
	Then  Breadcrumb path will be Catalog -> Items > [Item Master Code value]
	
# Action Button on View Merchandise Hierarchy Office Screen
	@catalog @item @view @ui @ignore
Scenario: Verify action buttons on View Item Office Screen
	Given View Item Office Screen is opened
	When  User verify the action buttons on the tool bar
	Then  Following action buttons will be enabled 'Edit' and 'Add'

	@catalog @item @view @functional
Scenario: Verify click on Edit action on View Item Office Screen Opens Item screen in Edit mode
	Given View Item Office Screen is opened
	When  User clicks on 'Edit' action button
	Then  Item screen will open in Edit mode

	@catalog @item @view @functional
Scenario: Verify click on Add action on View Item Office Screen Opens Add Item Office screen
	Given View Item Office Screen is opened
	When  User clicks on 'Add' action button
	Then  Add Item Office screen will open
