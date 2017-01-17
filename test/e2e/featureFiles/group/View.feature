Feature: View Group
As a retailer catalog owner
I would like to be able to view existing group details in my catalog from the Central Office
so that I can verify that the group fit my needs 

# Floating menu

	@catalog @group @view @ui @ignore
	Scenario: Verify floating menu on View Group Office Screen
	Given View Group Office Screen
	When  User verify the floating menu entries on the screen
	Then  Floating menu will be available on the screen with 'Group Details' and 'Items' entries

	@catalog @group @view @ui @ignore
	Scenario: Verify floating menu behavior on View Group Office Screen
	Given View Group Office Screen
	When  User click on 'Group Details' from the floating menu 
	Then  Screen focus should move to 'Group Details' section

	@catalog @group @view @ui @ignore
	Scenario: Verify floating menu behavior on View Group Office Screen
	Given View Group Office Screen
	When  User click on 'Items' from the floating menu in Group screen
	Then  Screen focus should move to 'Items' section in Group screen
	
#Group Details Section enteries
	@catalog @group @view @ui @ignore
	Scenario: Verify enteris in Group Details section on View Group Office Screen
	Given View Group Office Screen
	When  User verify the entries in the Group Details section
	Then  Group Details section will have 'Code','Title','Description','Created Date' and 'Last Update' field
	And   The Group Details section will be form based section
	
# Items section
	@catalog @group @view @ui @ignore
	Scenario: Verify Items section displayed on View Group Office Screen for a Group which has Items
	Given View Group Office Screen for a Group which has Items
	When  User navigates to 'Items' section on the screen in Group screen
	Then  The Items section will be of Grid type
	And   Will show 'Code','Description' for each row in the grid

	#TBD
	@catalog @group @view @ui @ignore
	Scenario: Verify rows in Items section displayed on View Group Office Screen for a Group which has Items
	Given View Items Office Screen for a Group which has Items
	When  User navigates to 'Items' section on the screen in Group screen
	Then  The Item section will display all the Items of the current Group as rows in the grid

	@catalog @group @view @ui @ignore
	Scenario: Verify Item Status icon in Items grid for Inactive Item
	Given View Items Office Screen for a Group which has some inactive Items
	When  User navigates to 'Items' section on the screen in Group screen
	Then  A status icon representing Inactive item will displayed next to Description column for each inactive item in the grid
	And   A tool tip text 'Inactive Item' will be displayed on mouse over on each status icon in the grid

	@catalog @group @view @ui @ignore
	Scenario: Verify total Items indication displayed in Item section on View Group Office Screen for a Group which has Items
	Given View Items Office Screen for a Group which has Items
	When  User navigates to 'Items' section on the screen in Group screen
	Then  The Item section will display total items indication on top of the grid
	
# Sorting and Filtering feature on grid in Items section
	@catalog @group @view @functional
	Scenario: Verify Sorting feature in Items section on View Group Office Screen
	Given View Group Office Screen
	When  User verify Sorting feature on each column in the group item grid
	Then  Sorting icons will be available on each column in the grid in the Items section
	And   User will be able to sort on each column in the grid

	@catalog @group @view @functional
	Scenario: Verify Filter option in Items section on View Group Office Screen
	Given View Group Office Screen
	When  User verify Filter option in the Grid
	Then  Filter option will be available in the grid in the Items section
	And   User will be able to filter records on each column in the Grid

	@catalog @group @view @ui @ignore
	Scenario: Verify default state of the Filter option in the grid in Items section on View Group Office Screen
	Given View Group Office Screen
	When  User verify the default state of the filter icon available in the grid in the Items section
	Then  Filter icon will be disabled by default
	And   Filter icon will be enabled on click

	@catalog @group @view @functional
	Scenario: Verify navigation to Item screen in View mode from Items section on View Group Office Screen
	Given View Group Office Screen for Group which has items
	When  User click on Code value for an item from the grid in Items section
	Then  User will be navigated to respective Item Screen in View mode.
	
# breadcrumb Path
	@catalog @group @view @ui @ignore
	Scenario: Verify the breadcrumb path on View Group Office Screen
	Given View Group Office Screen
	When  User verify the breadcrumb path value of Group Office Screen
	Then  Breadcrumb path will be Catalog -> Group > [Group Title value]
	
# Edit action on View Group Office Screen
	@catalog @group @view @ui @ignore
	Scenario: Verify Edit action on View Group Office Screen
	Given View Group Office Screen for a group
	When  User verify the 'Edit' action on the tool bar
	Then  Edit Action button will be available
	And   The Edit action button will be enable

	@catalog @group @view @functional
	Scenario: Verify click on Edit action on View Group Office Screen Opens Hierarchy node in Edit mode
	Given View Group Office Screen for a group
	When  User clicks on 'Edit' action button
	Then  Group screen is open in Edit mode
	