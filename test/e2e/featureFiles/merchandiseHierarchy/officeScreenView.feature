Feature: View Merchandise Hierarchy
  As a Retailer catalog owner,
  I would like to have an option to view existing hierarchies in NR1 repository from the Central Office
  so that the NR1 catalog will be see the hierarchy details

# Floating menu
  @catalog  @catalog  @mh @view @ui @ignore
  Scenario: Verify floating menu on View Merchandise Hierarchy Office Screen
    Given View Merchandise Hierarchy Office Screen for hierarchy node which has child nodes
    When  User verify the floting menu enteries on the screen
    Then  Floating menu will be available on the screen with 'Hierarchy Details' and 'Lower Level' enteries

  @catalog @mh @view @ui @ignore
  Scenario: Verify floating menu enteries for a hierachy node which has items on View Merchandise Hierarchy Office Screen
    Given View Merchandise Hierarchy Office Screen for hierarchy node which has items
    When  User verify the floting menu enteries on the screen
    Then  Floating menu will be available on the screen with 'Hierarchy Details' and 'Hierarchy Items' enteries

  @catalog @mh @view @ui @ignore
  Scenario: Verify floating menu behavior on View Merchandise Hierarchy Office Screen
    Given View Merchandise Hierarchy Office Screen
    When  User click on Hierarchy Detail from the floating menu
    Then  Screen focus should move to 'Hierarchy Details' section

  @catalog @mh @view @ui @ignore
  Scenario: Verify floating menu behavior on View Merchandise Hierarchy Office Screen
    Given View Merchandise Hierarchy Office Screen
    When  User click on Lower Level from the floating menu
    Then  Screen focus should move to 'Lower Level' section

#Hierarchy Details Section enteries
  @catalog @mh @view @ui @ignore
  Scenario: Verify enteris in Hierarchy Details section on View Merchandise Hierarchy Office Screen
    Given View Merchandise Hierarchy Office Screen
    When  User verify the entries in the Hierarchy details section
    Then  Hierarchy Details section will have 'Code','Title','Description','Parent','Created Date' and 'Last Update' field

  @catalog @mh @view @ui @ignore
  Scenario: Verify 'Created Date' and 'Last Update' in Hierarchy Details section on View Merchandise Hierarchy Office Screen
    Given View Merchandise Hierarchy Office Screen
    When  User verify the 'Created Date' and 'Last Update' in the Hierarchy Details section
    Then  'Created Date' and 'Last Update' field will be auto populated

 #Parent field in Hierarchy Details Section
  @catalog @mh @view @ui @ignore
  Scenario: Verify Parent field value in Hierarchy Details section on View Screen when the Merchandise Hierarchy node is not under Root
    Given View Merchandise Hierarchy Office Screen for hierarchy node which is not under Root
    When  User verify the Parent field value in the Hierarchy Details section
    Then  Parent field  will only display Ellipsis and the parent value with a slash between them
    And   The parent value will be bolded

  @catalog @mh @view @ui @ignore
  Scenario: Verify Parent field in Hierarchy Details section on View Merchandise Hierarchy Office Screen when the Merchandise Hierarchy node is under Root
    Given View Merchandise Hierarchy Office Screen for hierarchy node which is under Root
    When  User verify the Parent field value in the Hierarchy Details section
    Then  Parent field on the Create screen will have default value as Root
    And   Root is bolded

  @catalog @mh @view @ui @ignore
  Scenario: Verify entire Parent field value shown in tool tip
    Given View Merchandise Hierarchy Office Screen
    When  User mouse over on Parent field
    Then  Tool tip will be displayed
    And   Entire Parent field value will be shown in tool tip

# Ellipsis in Parent field
  @catalog @mh @view @ui @ignore
  Scenario: Verify Ellipsis button behaviour on mouse over
    Given View Merchandise Hierarchy Office Screen
    When  User mouse over on Ellipsis in Parent field
    Then  Ellipsis will be bolded
    And   Ellipsis will change its shape to button

  @catalog @mh @view @ui @ignore
  Scenario: Verify Parent field is expanded on click on Ellipsis
    Given This scenario is UI Ignored - "UI Ignore scenarios are not implemented"
    And View Merchandise Hierarchy Office Screen with Parent field with Ellipses
    When  User click on Ellipsis in Parent field
    Then  Parent field will be expanded to show entire path with Parent bolded
    And   there will be an arrow icon to collapse the Parent field

  @catalog @mh @view @ui @ignore
  Scenario: Verify Parent fields is collapsed again to show Ellipsis on clicking arrow icon.
    Given This scenario is UI Ignored - "UI Ignore scenarios are not implemented"
    And View Merchandise Hierarchy Office Screen with Parent field expanded
    When  User click on arrow icon in the Parent field
    Then  Parent field will collapse back
    And   will show ellipsis and the hierarchy Parent

# Lower Level section
  @catalog @mh @view @ui @ignore
  Scenario: Verify Lower Level section displayed on View Merchandise Hierarchy Office Screen for a hierachy node which has child nodes
    Given View Merchandise Hierarchy Office Screen for a hierachy node which has child nodes
    When  User navigates to 'Lower Level' section on the screen
    Then  The Lower level section will be of grid type
    And   Will show 'Code','Title','Description','Parent' for each row in the grid

  @catalog @mh @view @ui @ignore
  Scenario: Verify rows in Lower Level section displayed on View Merchandise Hierarchy Office Screen for a hierachy node which has child nodes
    Given View Merchandise Hierarchy Office Screen for a hierachy node which has child nodes
    When  User navigates to 'Lower Level' section on the screen
    Then  The Lower level section will display all the child nodes of the current hierarchy node as rows in the grid

# Sorting and Filtering feature on grid in Lower Level section
  @catalog @mh @view @functional
  Scenario: Verify Sorting feature in Lower level section on View Merchandise Hierarchy Office Screen
    Given View Merchandise Hierarchy Office Screen
    When  User verify Sorting feature on each column in the grid
    Then  Sorting icons will be avaialble on each column in the grid in the lower level section
    And   User will be able to sort on each column in the grid

  @catalog @mh @view @functional
  Scenario: Verify Filter option in Lower level section on View Merchandise Hierarchy Office Screen
    Given View Merchandise Hierarchy Office Screen
    When  User verify Filter option in the grid
    Then  Filter option will be avaialble in the grid in the lower level section
    And   User will be able to filter records on each column in the grid

  @catalog @mh @view @ui @ignore
  Scenario: Verify default state of the Filter option in the grid in Lower level section on View Merchandise Hierarchy Office Screen
    Given View Merchandise Hierarchy Office Screen
    When  User verify the default state of the filter icon available in the grid in the lower level section
    Then  Filter icon will be disabled by default
    And   Filter icon will be enabled on click

# Path field in Lower level Section
  @catalog @mh @view @ui @ignore
  Scenario: Verify Path field in Lower level section on View Merchandise Hierarchy Office Screen
    Given View Merchandise Hierarchy Office Screen
    When  User verify the Path field for each row in the Lower level section grid
    Then  Path field will show hierarchy path for the respective child node

  @catalog @mh @view @ui @ignore
  Scenario: Verify short Path field in Lower level section on View Merchandise Hierarchy Office Screen
    Given View Merchandise Hierarchy Office Screen
    When  User verify the Path field for each row in the Lower level section for grid
    Then  Path field will show complete path for child nodes that have short path
    And   There will be no ellipsis appended at the begining of the Path field

  @catalog @mh @view @ui @ignore
  Scenario: Verify multi level Path field in Lower level section on View Merchandise Hierarchy Office Screen
    Given View Merchandise Hierarchy Office Screen with multi level Path field
    When  User verify the Path field for each row in the Lower level section for grid
    Then  Path field will show truncated path for child nodes with multi level path
    And   There will be ellipsis appended at the begining of the Path field

  @catalog @mh @view @ui @ignore
  Scenario: Verify entire path field including ellipsis is clickable
    Given View Merchandise Hierarchy Office Screen with Path field
    When  user click anywhere on path field or ellipsis (if present)
    Then  entire path field should be clickable
    And   an always-on-top pop up will be displayed showing node's hierarchy path as tree

# Tree View Option in Lower level Section
  @catalog @mh @view @ui @ignore
  Scenario: Verify 'Tree View' option in the lower level section
    Given View Merchandise Hierarchy Office Screen for hierarchy node which has child nodes
    When  User navigates to Lower level section
    Then  Default view will be Grid view
    And   there will be a button 'Tree View' available in the lower level section

# Hierarchy Items section

  @catalog @mh @view @ui @ignore
  Scenario: Verify Hierarchy Items section on View Merchandise Hierarchy Office Screen for hierarchy node which has items
    Given View Merchandise Hierarchy Office Screen for hierarchy node which has items
    When  User navigates to the Hierarchy Items section
    Then  'Show Items' button will be displayed to the user
    And   There will be no item list displayed.

  @catalog @mh @view @functional
  Scenario: Verify Item list displayed in Hierarchy Items section on View Merchandise Hierarchy Office Screen for hierarchy node which has items
    Given View Merchandise Hierarchy Office Screen for hierarchy node which has items
    When  User click on 'Show Items' button from the Hierarchy Items section
    Then  Grid displaying list of all the items mapped to the current hierarchy nodes will be displayed
    And   Grid will display 'Code' and 'Description' for each item row in the grid

  @catalog @mh @view @functional
  Scenario: Verify Sorting feature in Hierarchy Items section on View Merchandise Hierarchy Office Screen
    Given View Merchandise Hierarchy Office Screen for hierarchy node which has items
    When  User verify sorting feature on each column in the grid
    Then  Sorting icons will be avaialble on each column in the grid in the lower level section
    And   User will be able to sort on each column in the grid

  @catalog @mh @view @functional
  Scenario: Verify Filter option in Hierarchy Items section on View Merchandise Hierarchy Office Screen
    Given View Merchandise Hierarchy Office Screen for hierarchy node which has items
    When  User verify filter option in the grid
    Then  Filter option will be avaialble in the grid in the Hierarchy Items section
    And   User will be able to filter records on each column in the grid

  @catalog @mh @view @ui @ignore
  Scenario: Verify default state of the Filter option in the grid in Hierarchy Items section on View Merchandise Hierarchy Office Screen
    Given View Merchandise Hierarchy Office Screen for hierarchy node which has items
    When  User verify the default state of the filter icon available in the grid in the Hierarchy Items section
    Then  Filter icon will be disabled by default
    And   Filter icon will enabled on click

  @catalog @mh @view @ui @ignore
  Scenario: Verify the breadcrumb path on View Merchandise Hierarchy Office Screen
    Given View Merchandise Hierarchy Office Screen for hierarchy node with empty title
    When  User verify the breadcrumb path value
    Then  Breadcrumb path will be Catalog -> Merchandise Hierarchy > [Hierarchy Code value]

# Edit action on View Merchandise Hierarchy Office Screen
  @catalog @mh @view @functional
  Scenario: Verify Edit action on View Merchandise Hierarchy Office Screen
    Given View Merchandise Hierarchy Office Screen for hierarchy node
    When  User verify the 'Edit' action on the tool bar
    Then  Edit Action button will be available
    And   The Edit action button will be enable

    #OR to be placed
  @catalog @mh @view @functional
  Scenario: Verify on click behaviour for Culture icon for Title or Description field in Hierarchy Details section
    Given View Merchandise Hierarchy Office Screen
    When  User click on culture icon for Title field in Hierarchy Details section
    Then  A culture pop-up will open for the corresponding Title field
    Then  User click on close button on Culture popup
    When  User click on culture icon for Description field in Hierarchy Details section
    Then  A culture pop-up will open for the corresponding Description field

  @catalog @mh @view @functional
  Scenario: Verify click on Edit action on View Merchandise Hierarchy Office Screen Opens Hierarchy node in Edit mode
    Given View Merchandise Hierarchy Office Screen for hierarchy node
    When  User clicks on 'Edit' action button
    Then  Hierarchy node screen is open in Edit mode

  @catalog @mh @view @functional
  Scenario: Verify navigation to Item screen in View mode from Hierarchy Items section on View Merchandise Hierarchy Office Screen
    Given View Merchandise Hierarchy Office Screen for hierarchy node which has items
    When  User click on Code value for an item from the grid in Hierarchy Items section
    Then  User will be navigated to respective Item screen in View mode for Merchandise Hierarchy

    # Culture feature for Title and Description fields in Hierarchy Details section

  @catalog @mh @view @ui @ignore
  Scenario: Verify culture feature on Title field in Hierarchy Details section
    Given View Merchandise Hierarchy Office Screen
    When  User verify the Title field in Hierarchy Details section
    Then  A culture icon will be available for the field

  @catalog @mh @view @ui @ignore
  Scenario: Verify culture feature on Description field in Hierarchy Details section
    Given View Merchandise Hierarchy Office Screen
    When  User verify the Description field in Hierarchy Details section
    Then  A culture icon will be available for the field