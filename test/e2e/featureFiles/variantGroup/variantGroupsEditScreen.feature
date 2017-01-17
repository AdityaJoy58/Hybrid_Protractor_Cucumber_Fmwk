Feature: Edit Variant Group
  As a retailer catalog owner
  I would like to update existing variant group in my catalog in an easy way from the Central Office
  so that the variant groups will fit my needs

# Floating menu
  @catalog @variantGroup @edit @ui @ignore
  Scenario: Verify floating menu on Edit Variant Group Office Screen
	Given This scenario is UI Ignored - "UI Ignore scenarios are not implemented"
	And Edit Variant Group Office Screen
	When  User verify the floating menu entries on the screen
	Then  Floating menu will be available on the screen with 'Variant Group Details' and 'Items' entries

  @catalog @variantGroup @edit @ui @ignore
  Scenario: Verify floating menu behaviour on Edit Variant Group Office Screen
	Given This scenario is UI Ignored - "UI Ignore scenarios are not implemented"
	And Edit Variant Group Office Screen
	When  User click on 'Group Details' from the floating menu
	Then  Screen focus should move to 'Variant Group Details' section

  @catalog @variantGroup @edit @ui @ignore
  Scenario: Verify floating menu behaviour on Edit Variant Group Office Screen
	Given This scenario is UI Ignored - "UI Ignore scenarios are not implemented"
	And Edit Variant Group Office Screen
	When  User click on 'Items' from the floating menu
	Then  Screen focus should move to 'Items' section

#Group Details Section entries
  @catalog @variantGroup @edit @ui @ignore
  Scenario: Verify entries in Group Details section on Edit Variant Group Office Screen
	Given Edit Variant Group Office Screen
	When  User verify the entries in the Variant Group Details section
	Then  Group Details section will have 'Code', 'Title' and 'Description' field
	And   'Code' field will be Mandatory Field
	And   The Group Details section will be form based section

# Expansion feature on Code, Title and Description field
  @catalog @variantGroup @edit @ui @ignore
  Scenario: Verify Code field size allow user input only upto the maximum size allowed
	Given Edit Variant Group Office Screen
	When  User type into Code field
	Then  As user type into the Code field, the text will Shift to left allow user input
	And   User will be not be able to type into the field more that Maximum allowed size for the field
	And   Message will be displayed informing user that maximum allowed size has been reached

  @catalog @variantGroup @edit @ui @ignore
  Scenario: Verify Title field size dynamically (expand vertically) according to user input upto the maximum allowed size
	Given Edit Variant Group Office Screen
	When  User type into Variant Group Title field
	Then  Variant Group Title field will size dynamically (expand vertically) to accommodate user input
	And   User will not be allowed to type further when maximum allowed size for Title field has been reached
	And   Message will be displayed informing user that maximum allowed size has been reached for title

  @catalog @variantGroup @edit @ui @ignore
  Scenario: Verify Description field size dynamically (expand vertically) according to user input upto the maximum allowed size
	Given Edit Variant Group Office Screen
	When  User type into Variant Group Description field
	Then  Variant Group Description field will size dynamically (expand vertically) to accommodate user input
	And   User will not be allowed to type further when maximum allowed size for Description field has been reached
	And   Message will be displayed informing user that maximum allowed size for Description field has been reached

# Keyboard Tab feature
  @catalog @variantGroup @edit @ui @ignore
  Scenario: Verify user is able to navigate among different fields using keyboard tab on Edit Variant Group Office Screen
	Given This scenario is UI Ignored - "UI Ignore scenarios are not implemented"
	And Edit Variant Group Office Screen
	When  User click on any field in Group Details section and then click on tab from keyboard
	Then  User will be able to navigate among different fields on the screen using Tab from keyboard

# Items section
  @catalog @variantGroup @edit @ui @ignore
  Scenario: Verify Items section displayed on Edit Variant Group Office Screen when no items are associated to the Variant Group
	Given Edit Variant Group Office Screen for a Variant Group when no items are associated to the Variant Group
	When  User navigates to 'Items' section on the screen
	Then  The Items section will have 'Add Items' button

  @catalog @variantGroup @edit @functional
  Scenario: Verify Items section displayed on Edit Variant Group Office Screen when items are associated to the Variant Group
	Given Edit Variant Group Office Screen for a Variant Group when items are associated to the Variant Group
	When  User navigates to 'Items' section on the screen
	Then  The Item section will display all the Items of the current Variant Group as rows in the grid
	And   The Variant Group item grid will display following columns for each record row: 'Code' and 'Description'

  @catalog @variantGroup @edit @ui @ignore
  Scenario: Verify Item Status icon in Items grid for Inactive Item
	Given This scenario is UI Ignored - "UI Ignore scenarios are not implemented"
	And Edit Variant Group Office Screen for a Variant Group when items are associated to the Variant Group
	When  User navigates to 'Items' section on the screen
	Then  A status icon representing Inactive item will displayed next to Description column for each inactive item in the grid
	And   A tool tip text 'Inactive Item' will be displayed on mouse over on each status icon in the grid

  @catalog @variantGroup @edit @ui @ignore
  Scenario: Verify total Items indication displayed in Item section on Edit Variant Group Office Screen when items are associated to the Variant Group
	Given Edit Variant Group Office Screen for a Variant Group when items are associated to the Variant Group
	When  User navigates to 'Items' section on the screen
	Then  The Item section will display total items indication on top of the grid

  @catalog @variantGroup @edit @ui @ignore
  Scenario: Verify Item picker button in the 'Items' section on Edit Variant Group Office Screen when items are associated to the Variant Group
	Given Edit Variant Group Office Screen for a Variant Group when items are associated to the Variant Group
	When  User navigates to 'Items' section on the screen
	Then  The 'Add Items' button will be replaced by 'Manage Items' button

# Sorting and Filtering feature on grid in Items section
  @catalog @variantGroup @edit @functional  @ignore
  Scenario: Verify Sorting feature in Items section on Edit Variant Group Office Screen when items are associated to the Variant Group
	Given Edit Variant Group Office Screen for a Variant Group when items are associated to the Variant Group
	When  User verify Sorting feature on each column in the grid
	Then  Sorting icons will be avaialble on each column in the grid in the Items section
	And   User will be able to sort on each column in the Grid
	And   Grid will be default sorted alphabaetically on 'Code' column

  @catalog @variantGroup @edit @functional
  Scenario: Verify Filter option in Items section on Edit Variant Group Office Screen when items are associated to the Variant Group
	Given Edit Variant Group Office Screen for a Variant Group when items are associated to the Variant Group
	When  User verify Filter option in the grid
	Then  Filter option will be avaialble in the grid in the Items section
	And   User will be able to filter records on each Column in the grid for variant groups in Edit mode

  @catalog @variantGroup @edit @ui @ignore
  Scenario: Verify default state of the Filter option in the grid in Items section on Edit Variant Group Office Screen when items are associated to the Variant Group
	Given This scenario is UI Ignored - "UI Ignore scenarios are not implemented"
	And Edit Variant Group Office Screen for a Variant Group when items are associated to the Variant Group
	When  User verify the default state of the filter icon available in the grid in the Items section
	Then  Filter icon will be disabled by default
	And   Filter icon will be enabled on click

  @catalog @variantGroup @edit @functional @ignore
  Scenario: Verify navigation to Item screen in View mode from Items section on Edit Variant Group Office Screen when items are associated to the Variant Group
	Given Edit Variant Group Office Screen for a Variant Group when items are associated to the Variant Group
	When  User navigates to 'Items' section on the screen
	When  User click on Code value for an item from the grid in Items section in variant group screen
	Then  User will be navigated to respective Item screen in View mode.

# Action buttons and validations
  @catalog @variantGroup @edit @ui @ignore
  Scenario: Verify the Action buttons displayed on Edit Variant Group Office Screen
	Given Edit Variant Group Office Screen
	When  User verify the Action buttons available in the tool bar on the screen
	Then  Following action buttons will be displayed: 'Save','Done','Cancel'
	And   Action buttons 'Edit' and 'Add' will be hidden

  @catalog @variantGroup @edit @functional
  Scenario: Verify on Save of Variant Group, the group record is saved and the screen stays in Edit mode.
	Given Edit Variant Group Office Screen
	When  User enters all the valid information in variant Group edit page
	And   Click 'Save' button
	Then  Variant Group will be saved
	And   Notification will be displayed to user that the Record was Saved Successfully
	And   Variant Group screen will stay in Edit mode
	And   breadcrumb will display  Catalog > Variant Groups > 'Variant Group Title - Edit'

  @catalog @variantGroup @edit @functional
  Scenario: Verify on clicking Done of Variant Group, the group is saved and the screen stays in View mode.
	Given Edit Variant Group Office Screen
	When  User enters all the valid information in variant Group edit page
	And   Click 'Done' button
	Then  Variant Group will be saved
	And   Notification will be displayed to user that the Record was Saved Successfully
	And   Variant Group screen will be displayed in View mode
	And   breadcrumb will display  Catalog > Variant Groups > 'Variant Group title'

  @catalog @variantGroup @edit @functional
  Scenario: Verify on clicking Save for Variant Group with no code when clicked on Save button
	Given Edit Variant Group Office Screen
	When  User enters no data in Code field or Title Field or Description Field in Variant Group screen
	And   Click 'Save' button
	Then  Variant Group will not be saved
	And   Error message for Variant Group will be displayed informing user that Code is mandatory

  @catalog @variantGroup @edit @functional
  Scenario: Verify on clicking Save for Variant Group with no code when clicked on Done button
	Given Edit Variant Group Office Screen
	When  User enters no data in Code field or Title Field or Description Field in Variant Group screen
	And   Click 'Done' button
	Then  Variant Group will not be saved
	And   Error message for Variant Group will be displayed informing user that Code is mandatory

  @catalog @variantGroup @edit @functional @ignore
  Scenario: Verify on clicking Save for Variant Group with existing code
	Given Edit Variant Group Office Screen
	When  User enters an existing code data in Code field in Variant Group Edit screen
	And   Click 'Save' button
	Then  Variant Group will not be saved
	And   Error message will be displayed informing user that record with the Same Code already exist

  @catalog @variantGroup @edit @ui @ignore
  Scenario: Verify on clicking Cancel for Variant Group
	Given This scenario is UI Ignored - "UI Ignore scenarios are not implemented"
	And Edit Variant Group Office Screen
	When  User enters all the valid information in the required fields
	And   Click 'Cancel' button
	Then  Message prompt will be displayed asking user If user would like to discard changes
	And   Message prompt will have 'Yes' and 'No' options

  @catalog @variantGroup @edit @functional @ignore
  Scenario: Verify clicking No from Cancel message prompt for Variant Group
	Given This scenario is UI Ignored - "UI Ignore scenarios are not implemented"
	And   Edit Variant Group Office Screen
	When  User enters all the valid information in the required fields
	And   Click 'Cancel' button
	And   Click 'No' from cancel message prompt
	Then  User will stay on Edit Variant Group office screen.

  @catalog @variantGroup  @edit @functional @ignore
  Scenario: Verify clicking Yes from Cancel message prompt for Variant Group
	Given This scenario is UI Ignored - "UI Ignore scenarios are not implemented"
	And Edit Variant Group Office Screen
	When  User enters all the valid information in the required fields
	And   Click 'Cancel' button
	And   Click 'Yes' from cancel message prompt
	Then  User will navigate back to Variant Group Office screen
	And   Variant Group will not be Edited

  @catalog @variantGroup @edit @ui @ignore
  Scenario: Verify Cancel message prompt on navigating away from Edit Variant Group Office Screen
	Given This scenario is UI Ignored - "UI Ignore scenarios are not implemented"
	And Edit Variant Group Office Screen
	When  User enters all the valid information in the required fields
	And   User navigate away from screen by using back button\ using breadcrumbs\ page browsing\ other
	Then  Message prompt will be displayed asking user If user would like to discard changes
	And   Message prompt will have 'Yes' and 'No' options

# breadcrumb Path
  @catalog @variantGroup @edit @ui @ignore
  Scenario: Verify the breadcrumb path on Edit Variant Group Office Screen
	Given Edit Variant Group Office Screen
	When  User verify the breadcrumb Path value
	Then  breadcrumb will display  Catalog > Variant Groups > 'Variant Group Title - Edit'
