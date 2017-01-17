Feature: View Variant Group
  As a retailer catalog owner
  I would like to be able to view existing Variant Group details in my catalog from the Central Office
  so that I can verify that the Variant Group fit my needs

# Floating menu

  @catalog @variantGroup @view @ui @ignore
  Scenario: Verify floating menu on View Variant Group Office Screen
    Given View Variant Group Office Screen
    When  User verify the floating menu enteries on the screen
    Then  Floating menu will be available on the screen with 'Variant Group Details' and 'Items' enteries

  @catalog @variantGroup @view @ui @ignore
  Scenario: Verify floating menu behavior on View Variant Group Office Screen
    Given View Variant Group Office Screen
    When  User click on 'Variant Group Details' from the floating menu
    Then  Screen focus should move to 'Variant Group Details' section

  @catalog @variantGroup @view @ui @ignore
  Scenario: Verify floating menu behavior on View Variant Group Office Screen
    Given View Variant Group Office Screen
    When  User click on 'Items' from the floating menu
    Then  Screen focus should move to 'Items' section

#Group Details Section enteries
  @catalog @variantGroup @view @ui @ignore
  Scenario: Verify enteris in Group Details section on View Variant Group Office Screen
    Given View Variant Group Office Screen
    When  User verify the enteries in the Group Details section
    Then  Group Details section will have 'Code','Title','Description','Created Date' and 'Last Update' field
    And   The Group Details section will be form based section

# Items section
  @catalog @variantGroup @view @ui @ignore
  Scenario: Verify Items section displayed on View Variant Group Office Screen for a Group which has Items
    Given View Variant Group Office Screen for a Variant Group which has Items
    When  User navigates to 'Items' section on the screen
    Then  The Items section will be of grid type
    And   Will show 'Code','Description' for each row in the grid

  @catalog @variantGroup @view @ui @ignore
  Scenario: Verify rows in Items section displayed on View Variant Group Office Screen for a Group which has Items
    Given View Items Office Screen for a Variant Group which has Items
    When  User navigates to 'Items' section on the screen
    Then  The Item section will display all the Items of the current Variant Group as rows in the grid

  @catalog @variantGroup @view @ui @ignore
  Scenario: : Verify Item Status icon in Items grid for Inactive Item
    Given View Items Office Screen for a Variant Group which has some inactive Items
    When  User navigates to 'Items' section on the screen
    Then  A status icon representing Inactive item will displayed next to Description column for each inactive item in the grid
    And   A tool tip text 'Inactive Item' will be displayed on mouse over on each status icon in the grid

  @catalog @variantGroup @view @ui @ignore
  Scenario: Verify total Items indication displayed in Item section on View Variant Group Office Screen for a Variant Group which has Items
    Given View Items Office Screen for a Variant Group which has Items
    When  User navigates to 'Items' section on the screen
    Then  The Item section will display total items indication on top of the grid

# Sorting and Filtering feature on grid in Items section
  @catalog2 @variantGroup @view @functional
  Scenario: Verify Sorting feature in Items section on View Variant Group Office Screen
    Given View Variant Group Office Screen
    When  User verify Sorting feature on each column in the item grid
    Then  Sorting icons will be avaialble on each column in the grid in the Items section
    And   User will be able to sort on each column in the item grid
    And Grid will be default sorted alphabaetically on 'Code' column

  @catalog @variantGroup @view @functional
  Scenario: Verify Filter option in Items section on View Variant Group Office Screen
    Given View Variant Group Office Screen
    When  User verify Filter option in the item grid
    Then  Filter option will be avaialble in the grid in the Items section
    And   User will be able to filter records on each column in the item grid

  @catalog @variantGroup @view @ui @ignore
  Scenario: Verify default state of the Filter option in the grid in Items section on View Variant Group Office Screen
    Given View Variant Group Office Screen
    When  User verify the default state of the filter icon available in the grid in the Items section
    Then  Filter icon will be disabled by default for the grid
    And   Filter icon will be enabled on the click

  @catalog @variantGroup @view @functional
  Scenario: Verify navigation to Item screen in View mode from Items section on View Variant Group Office Screen
    Given View Variant Group Office Screen for Group which has items
    When  User click on Code value for an item from the grid in Items section
    Then  User will be navigated to respective Item screen in the View mode.

# breadcrumb Path
  @catalog @variantGroup @view @ui @ignore
  Scenario: Verify the breadcrumb path on View Variant Group Office Screen
    Given View Variant Group Office Screen
    When  User verify the breadcrumb path value of Variant Group Office Screen
    Then  Breadcrumb path will be Catalog -> Variant Group > [Variant Group Title value]

# Edit action on View Variant Group Office Screen
  @catalog @variantGroup @view @ui @ignore
  Scenario: Verify Edit action on View Variant Group Office Screen
    Given View Variant Group Office Screen for a Variant Group
    When  User verify the 'Edit' action on the tool bar
    Then  Edit Action button will be available
    And   The Edit action button will be enable

  @catalog @variantGroup @view @functional
  Scenario: Verify click on Edit action on View Variant Group Office Screen Opens Hierarchy node in Edit mode
    Given View Variant Group Office Screen for a group
    When  User clicks on 'Edit' action button
    Then  Variant Group screen is open in Edit mode

  @catalog @variantGroup @view @ui @ignore
  # Add action on View Variant Group Office Screen
  Scenario: Verify Add action on View Variant Group Office Screen
    Given View Variant Group Office Screen for a group
    When  User verify the 'Add' action on the tool bar
    Then  Add Action button will be available
    And   The Add action button will be enable