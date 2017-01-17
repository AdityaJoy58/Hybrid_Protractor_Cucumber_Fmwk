Feature: Create Group
As a retailer catalog owner
I would like the ability to create new groups in my catalog in an easy way from the Central Office
so that I will be able to use the defined groups in the future for any use

# Floating menu
	@catalog @group @create @ui @ignore
	Scenario: Verify floating menu on Create Group Office Screen
	Given Add Group Office Screen
	When  User verify the floating menu entries on the screen
	Then  Floating menu will be available on the screen with 'Group Details' and 'Items' entries

	@catalog @group @create @ui @ignore
	Scenario: Verify floating menu behaviour on Create Group Office Screen
	Given Add Group Office Screen
	When  User click on 'Group Details' from the floating menu
	Then  Screen focus should move to 'Group Details' section

	@catalog @group @create @ui @ignore
	Scenario: Verify floating menu behaviour on Create Group Office Screen
	Given Add Group Office Screen
	When  User click on 'Items' from the floating menu in Group screen
	Then  Screen focus should move to 'Items' section in Group screen

#Group Details Section entries
	@catalog @group @create @ui @ignore
	Scenario: Verify entries in Group Details section on Create Group Office Screen
	Given Add Group Office Screen
	When  User verify the entries in the Group Details section
	Then  Group Details section will have 'Code', 'Title' and 'Description' field
	And   'Code' field will be mandatory field
	And   The Group Details section will be form based section

# Expansion feature on Code, Title and Description field
	@catalog @group @create @ui @ignore
	Scenario: Verify Code field size allow user input only upto the maximum size allowed
	Given Add Group Office Screen
	When  User type into Code field
	Then  As user type into the Code field, the text will shift to left allow user input
	And   User will be not be able to type into the field more that maximum allowed size for the field
	And   Message will be displayed informing user that maximum allowed size has been reached

	@catalog @group @create @ui @ignore
	Scenario: Verify Title field size dynamically (expand vertically) according to user input upto the maximum allowed size
	Given Add Group Office Screen
	When  User type into Title field
	Then  Title field will size dynamically (expand vertically) to accommodate user input
	And   User will not be allowed to type further when maximum allowed size has been reached
	And   Message will be displayed informing user that maximum allowed size has been reached

	@catalog @group @create @ui @ignore
	Scenario: Verify Description field size dynamically (expand vertically) according to user input upto the maximum allowed size
	Given Add Group Office Screen
	When  User type into Description field
	Then  Description field will size dynamically (expand vertically) to accommodate user input
	And   User will not be allowed to type further when maximum allowed size has been reached
	And   Message will be displayed informing user that maximum allowed size has been reached

# Keyboard Tab feature

	@catalog @group @create @ui @ignore
	Scenario: Verify user is able to navigate among different fields using keyboard tab on Create Group Office Screen
	Given Add Group Office Screen
	When  User click on any field in Group Details section and then click on tab from keyboard
	Then  User will be able to navigate among different fields on the screen using Tab from Keyboard

# Items section

	@catalog @group @create @ui @ignore
	Scenario: Verify Items section displayed on Create Group Office Screen when no items are associated to the group
	Given Add Group Office Screen for a group when no items are associated to the group
	When  User click on 'Items' from the floating menu in Group screen
	Then  The Items section will have 'Add Items' button

	@catalog @group @create @functional
	Scenario: Verify Items section displayed on Create Group Office Screen when items are associated to the group
	Given Add Group Office Screen for a group when items are associated to the group
	When  User navigates to 'Items' section on the screen in Group screen
	Then  The Item section will display all the Items of the current Group as rows in the grid
	And   The item grid will display following columns for each record row: 'Code' and 'Short Description'

	@catalog @group @create @ui @ignore
	Scenario: Verify Item Status icon in Items grid for Inactive Item
	Given Add Group Office Screen for a group when items are associated to the group
	When  User navigates to 'Items' section on the screen in Group screen
	Then  A Status icon representing Inactive item will displayed next to Description column for each inactive item in the grid
	And   A Tool tip text 'Inactive Item' will be displayed on mouse over on each status icon in the grid

	@catalog @group @create @ui @ignore
	Scenario: Verify total Items indication displayed in Item section on Create Group Office Screen when items are associated to the group
	Given Add Group Office Screen for a group when items are associated to the group
	When  User navigates to 'Items' section on the screen in Group screen
	Then  The Item Section will display total items indication on top of the grid

	@catalog @group @create @ui @ignore
	Scenario: Verify Item picker button in the 'Items' section on Create Group Office Screen when items are associated to the group
	Given Add Group Office Screen for a group when items are associated to the group
	When  User navigates to 'Items' section on the screen in Group screen
	Then  The 'Add Items' button will be replaced by 'Manage Items' button

# Sorting and Filtering feature on grid in Items section

	@catalog @group @create @functional
	Scenario: Verify Sorting feature in Items section on Create Group Office Screen when items are associated to the group
	Given Add Group Office Screen when items are associated to the group
	When  User verify Sorting feature on each column in the grid on Create Group Office Screen
	Then  Sorting icons will be available on each column in the grid in the Items section
	And   User verify Sorting feature on each column in the grid on Create Group Office Screen
	And   Grid will be default sorted alphabetically on 'Code' column

	@catalog @group @create @functional
	Scenario: Verify Filter option in Items section on Create Group Office Screen when items are associated to the group
	Given Add Group Office Screen when items are associated to the group
	When  User verify Filter option in the grid in Group Office Screen
	Then  Filter option will be available in the grid in the Items section
	And   User will be able to filter records on each column in the grid in Group Office Screen

	@catalog @group @create @ui @ignore
	Scenario: Verify default state of the Filter option in the grid in Items section on Create Group Office Screen when items are associated to the group
	Given Add Group Office Screen when items are associated to the group
	When  User verify the default state of the filter icon available in the grid in the Items section
	Then  Filter icon will be disabled by default
	And   Filter icon will be enabled on click

	@catalog @group @create @functional @ignore
	Scenario: Verify navigation to Item screen in View mode from Items section on Create Group Office Screen when items are associated to the group
	Given Add Group Office Screen for Group when items are associated to the group
	When  User click on Code value for an item from the grid in Items section
	Then  User will be navigated to respective Item Screen in View mode.

# Action buttons and validations
	@catalog @group
	Scenario: Verify the Action buttons displayed on Create Group Office Screen
	Given Add Group Office Screen
	When  User verify the Action buttons available in the tool bar on the screen
	Then  Following action buttons will be displayed: 'Save','Done','Cancel'
	And   Action buttons 'Edit' and 'Add' will be hidden

	@catalog @group @create @functional
	Scenario: Verify on Save of new Group, the group record is saved and the screen stays in Edit mode.
	Given Add Group Office Screen
	When  User enters all the valid information in the required fields in Create Group
	And   Click 'Save' button in Group Office Screen
	Then  New Group will be saved
	And   Notification will be displayed to user that the Record was Saved successfully
	And   Group screen will be displayed in Edit mode
	And   breadcrumb will display  Catalog > Groups > <Group Title> - Edit

	@catalog @group @create @functional
	Scenario: Verify on clicking Done of new group, the group is saved and the screen stays in View mode.
	Given Add Group Office Screen
	When  User enters all the valid information in the required fields in Create Group
	And   Click 'Done' button in Group Office Screen
	Then  New Group will be saved
	And   Notification will be displayed to user that the Record was Saved successfully
	And   Group screen will be displayed in View mode
	And   breadcrumb will display  Catalog > Groups > <group title>

	@catalog @group @create @functional
	Scenario: Verify on clicking Save for new group with no code
	Given Add Group Office Screen
	When  User enters no data in Code field or Title Field or Description Field
	And   Click 'Save' button in Group Office Screen
	Then  New group will not be saved
	And   Error message will be displayed informing user that Required Field is mandatory in Group Office Screen

  @catalog @group @create @functional
  Scenario: Verify on clicking Done for new group with no code
	Given Add Group Office Screen
	When  User enters no data in Code field or Title Field or Description Field
	And   Click 'Done' button in Group Office Screen
	Then  New group will not be saved
	And   Error message will be displayed informing user that Required Field is mandatory in Group Office Screen


  @catalog @group @create @functional
	Scenario: Verify on clicking Save for new group with existing code
	Given Add Group Office Screen
	When  User enters an existing code data in Code field
	And   Click 'Save' button
	Then  New group will not be saved
	And   Error message will be displayed informing user that record with the same code already exist

	@catalog @group @create @ui @ignore
	Scenario: Verify on clicking Cancel for new group
	Given Add Group Office Screen
	When  User enters all the valid information in the required fields
	And   Click 'Cancel' button
	Then  Message prompt will be displayed asking user If user would like to discard changes
	And   Message prompt will have 'Yes' and 'No' options

	@catalog @group @create @functional @ignore
	Scenario: Verify clicking No from Cancel message prompt for new group
	Given Add Group Office Screen
	When  User enters all the valid information in the required fields
	And   Click 'Cancel' button
	And   Click 'No' from cancel message prompt
	Then  User will stay on Add Group office screen.

	@catalog @group @create @functional @ignore
	Scenario: Verify clicking Yes from Cancel message prompt for new group
	Given Add Group Office Screen
	When  User enters all the valid information in the required fields
	And   Click 'Cancel' button
	And   Click 'Yes' from cancel message prompt
	Then  User will navigate back to Group Office screen
	And   New group will not be created

	@catalog @group @create @ui @ignore
	Scenario: Verify Cancel message prompt on navigating away from Add Group Office Screen
	Given Add Group Office Screen
	When  User enters all the valid information in the required fields
	And   User navigate away from screen by using back button\ using breadcrumbs\ page browsing\ other
	Then  Message prompt will be displayed asking user If user would like to discard changes
	And   Message prompt will have 'Yes' and 'No' options

# breadcrumb Path
	@catalog @group @create @ui @ignore
	Scenario: Verify the breadcrumb path on Add Group Office Screen
	Given Add Group Office Screen
	When  User verify the Breadcrumb path value
	Then  Breadcrumb path will be Catalog -> Groups > New Group
