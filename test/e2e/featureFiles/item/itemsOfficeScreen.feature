Feature: Items Landing Page
  As a retailer catalog owner,
  I would like to be able to view and search for existing item from the Central Office,
  so that I will be able to review existing items

#Item Office screen Grid
  @catalog @item @officeView @ui @ignore
  Scenario: Verify the data displayed for each record in Item's Office screen grid
    Given Item's Office screen
    When  User verify the data column displayed in the grid
    Then  Following columns will displayed in grid for each row: 'Master Code', 'Status', 'Short Description', 'Merchandise hierarchy'
    And   Checkbox will be available for each record row in the grid

  @catalog @item @officeView @ui @ignore
  Scenario: Verify multiple record selection in the grid
    Given This scenario is UI Ignored - "Definition already implemented at Merchandise Hierarchy."
    And   Item's Office screen
    When  User tries to select multiple record
    Then  User will be able to select multiple records

  @catalog @item @officeView @ui @ignore
  Scenario: Verify selected records in the grid are highlighted
    Given This scenario is UI Ignored - "Definition already implemented at Merchandise Hierarchy."
    And   Item's Office screen
    When  User select multiple record
    Then  Selected records will be highlighted
    And   Selected records text will be bolded

  @catalog @item @officeView @ui @ignore
  Scenario: Verify mouse over on the records in the grid
    Given This scenario is UI Ignored - "Definition already implemented at Merchandise Hierarchy."
    And   Item's Office screen
    When  User mouse over on any record in the grid
    Then  Record on which mouse over will be highlighted
    And   black dot will be displayed against the leading column indicating the record is under mouse over

  @catalog @item @officeView @functional
  Scenario: Verify the leading field in the grid
    Given Item's Office screen
    When  User verify the leading field 'Master Code' in the grid
    Then  Leading field will be a link
    And   On click on 'Master Code' field, user will be navigated to View screen for the record

# Breadcrumb

  @catalog @item @officeView @ui @ignore
  Scenario: Verify the breadcrumb displayed on Item's Office screen
    Given Item's Office screen
    When  User verify the breadcrumb displayed on the screen
    Then  The breadcrumb will display following value: Catalog > Items

# Side bar navigation
  @catalog @item @officeView @ui @ignore
  Scenario: Verify the option for Item's Office screen in side bar navigation
    Given Catalog application main screen
    When  User verify the side bar navigation
    Then  There will be an icon in side bar navigation for Items
    And   The title for the option in side bar will be 'Items'

  @catalog @item @officeView @functional
  Scenario: Verify the option for Item's Office screen in side bar navigation navigates to Item's Office screen
    Given Catalog application main screen
    When  User click on option 'Items' from the side bar navigation
    Then  User will be navigated to Item's Office screen

# Sorting
  @catalog @item @officeView @ui @ignore
  Scenario: Verify sorting option on the field in Item's Office screen grid
    Given Item's Office screen
    When  User verify the sorting on grid fields
    Then  Sorting will be available only on following fields in the grid: 'Master Code', 'Short Description'

  @catalog @item @officeView @functional
  Scenario: Default sorting in Item's Office screen grid
    Given Item's Office screen
    When  User verify the default sorting on grid fields
    Then  Default sorting will be on 'Master Code' field alphabetically ascending sorted
    And   Sorting indicator will be displayed against 'Master Code' field indicating grid sorting in ascending order
    And   Sorting indicator will indicate descending order sorting on 'Master Code' field when user again click on 'Master Code' field label

  @catalog @item @officeView @functional
  Scenario: Sorting indication on the 'Short Description' field in Item's Office screen grid
    Given Item's Office screen
    When  User click on 'Short Description' field
    Then  Grid will be sorted on 'Short Description' field values in ascending order
    And   Sorting indicator will be displayed against 'Short Description' field indicating grid sorting in ascending order on 'Short Description' field
    And   Sorting indicator will indicate descending order sorting on 'Short Description' field when user again click on 'Short Description' field label

  @catalog @item @officeView @ui @ignore
  Scenario: No Sorting indication on the 'Status' or 'Merchandise hierarchy' field in Item's Office screen grid
    Given This scenario is UI - "UI scenarios are not implemented."
    And   Item's Office screen
    When  User verify 'Status' and 'Merchandise hierarchy' field
    Then  No Sorting indicator will be displayed on 'Status' and 'Merchandise hierarchy' field label

#Filter
  @catalog @item @officeView @ui @ignore
  Scenario: Verify the Search ability on fields in the Item's Office screen grid
    Given Item's Office screen
    When  User verify the Search ability on the fields in the grid
    Then  Search ability will be available on following fields in the grid: 'Master Code', 'Status', 'Short Description', 'Merchandise hierarchy'
    And   Default state of filter option will be enabled

  @catalog @item @officeView @functional
  Scenario: Structure text on fields when filter is enabled
    Given Item's Office screen with filter enabled
    When  User verify the Search text field for each column in the grid
    Then  The default structured text 'Type to Search' will be displayed in the Search field for each column
    And   User will be able to type and perform Search on multiple columns

  @catalog @item @officeView @ui @ignore
  Scenario: Free text searching and option to remove filter
    Given Item's Office screen with filter enabled
    When  User type any text in the search field for a column
    Then  Column data will be filtered on the fly as per user input
    And   There will be a clear icon available on the filter field for the column on mouse over/click to clear search for the column
    And   A clear icon will be available for clear search on the grid

  @catalog @item @officeView @ui @ignore
  Scenario: No result on filter
    Given This scenario is UI Ignored - "Definition already implemented at Merchandise Hierarchy."
    And   Item's Office screen with filter enabled
    When  User type any text in the search field for a column which resulted in no results
    Then  A generic text "No results found" will be displayed

  @catalog @item @officeView @ui @ignore
  Scenario: Verify that characters would get highlighted in the records based on the entered text
    Given Item's Office screen is opened
    When  User click on filter icon
    And   Enter the text on the filter text box
    Then  The Grid records will filtered out on the fly based on the enter criteria and characters will be highlighted in the Grid

# Records display indication
  @catalog @item @officeView @ui @ignore
  Scenario: Verify the Total records indication
    Given This scenario is UI Ignored - "Definition already implemented at Merchandise Hierarchy."
    And   Central Office Screen is Opened
    When  User navigate to Item's Office screen
    Then  Total number of records (y records) indication will be displayed on top of the grid as "y results"

  @catalog @item @officeView @ui @ignore
  Scenario: Verify the Record indication in case of record selection
    Given This scenario is UI Ignored - "Definition already implemented at Merchandise Hierarchy."
    And   Item's Office screen is Opened
    When  User select '<z>' record from grid
    Then  The record indication will be displayed as "y Results-z Selected"

  @catalog @item @officeView @functional
  Scenario: Verify the Record indication in case of filtering and selection
    Given Item's Office screen is opened
    When  User filter'<x>' record from grid out of '<y>' records
    And   User select '<z>' record from grid
    Then  The record indication will be displayed as 'x Results/y Results-z Selected'

# Mega selector
  @catalog @item @officeView @ui @ignore
  Scenario: Verify that on the click of Mega selector in case no records are selected in a grid
    Given This scenario is UI - "UI scenarios are not implemented."
    And   Item's Office screen is opened
    When  Click on the mega-selector
    Then  All the records will get selected

  @catalog @item @officeView @ui @ignore
  Scenario: On the click of Mega selector in case all records are selected in a grid
    Given This scenario is UI - "UI scenarios are not implemented."
    And   Item's Office screen is opened with all records selected
    When  User click on the mega-selector
    Then  All the records will get un-selected

  @catalog @item @officeView @ui @ignore
  Scenario: On the click of Mega selector in case one or more records selected in a grid
    Given This scenario is UI - "UI scenarios are not implemented."
    And   Item's Office screen is opened
    When  User select one record in a grid
    And   Click on the mega- selector
    Then  All the selected records will get un-selected

# Tool bar action
  @catalog @item @officeView @ui @ignore
  Scenario: Verify Tool bar action displayed when no record is selected form the grid
    Given This scenario is UI - "UI scenarios are not implemented."
    And Item's Office screen is opened
    When  User has not selected any record form the grid
    Then  Following Tool Bar action button will be enabled: 'Add'
    And   Following Tool Bar action buttons will be disabled: 'Edit', 'View'

  @catalog @item @officeView @ui @ignore
  Scenario: Verify Tool bar action displayed when single record is selected form the grid
    Given This scenario is UI - "UI scenarios are not implemented."
    And Item's Office screen is opened
    When  User has selected single record form the grid
    Then  Following Tool Bar action button will be enabled: 'Add', 'Edit', 'View'

  @catalog @item @officeView @ui @ignore
  Scenario: Verify Tool bar action displayed when multiple records are selected form the grid
    Given This scenario is UI - "UI scenarios are not implemented."
    And   Item's Office screen is opened
    When  User has selected multiple records form the grid
    Then  Following Tool Bar action button will be enabled: 'Add', 'Edit', 'View'

  @catalog @item @officeView @functional
  Scenario: Verify 'View' tool bar action when single record is selected
    Given Item's Office screen is opened
    When  User has selected Single record form the grid
    And   User click on View tool bar action
    Then  User will be navigated to selected record item screen in View mode

  @catalog @item @officeView @functional @ignore
  Scenario: Verify 'View' tool bar action when multiple records are selected
    Given Item's Office screen is opened
    When  User has selected multiple records form the grid
    And   User click on 'View' tool bar action
    Then  User will be navigated to first selected record item screen in View mode

  @catalog @item @officeView @functional
  Scenario: Verify 'Edit' tool bar action when single record is selected
    Given Item's Office screen is opened
    When  User has selected Single record form the grid
    And   User click on Edit tool bar action
    Then  User will be navigated to selected record item screen in Edit mode

  @catalog @item @officeView @functional @ignore
  Scenario: Verify 'Edit' tool bar action when multiple records are selected
    Given Item's Office screen is opened
    When  User has selected multiple records form the grid
    And   User click on 'Edit' tool bar action
    Then  User will be navigated to first selected record item screen in Edit mode

  @catalog @item @officeView @functional
  Scenario: Verify 'Add' tool bar action when single record is selected
    Given Item's Office screen is opened
    When  User has selected Single record form the grid
    And   User click on Add tool bar action
    Then  User will be navigated to Create Item's screen

  @catalog @item @officeView @ui @ignore
  Scenario: Verify 'Add' tool bar action when multiple records are selected
    Given Item's Office screen is opened
    When  User has selected multiple records form the grid
    And   User click on 'Add' tool bar action
    Then  User will be navigated to Create Item's screen

# Record selection using Ctrl and shift key
  @catalog @item @officeView @ui @ignore
  Scenario: Verify the functionality of record selection with Ctrl Key and up/down arrows
    Given This scenario is UI - "UI scenarios are not implemented."
    And Item's Office screen is opened
    When  User selects any one of the records
    And   User holds the CTRL key
    And   User clicks up/down arrows in the keyboard
    Then  The focus indication will get moved accordingly

  @catalog @item @officeView @ui @ignore
  Scenario: Verify the functionality of record selection with Ctrl Key and space when a record is selected
    Given This scenario is UI - "UI scenarios are not implemented."
    And   Item's Office screen is opened
    When  User selects any one of the record
    And   Selected record is focused
    And   User holds the CTRL key
    And   User clicks space in the keyboard
    Then  selected Record will get unselected
    And   Record selection / de-selection will toggle for every press of space bar

  @catalog @item @officeView @ui @ignore
  Scenario: Verify the functionality of record selection with Ctrl Key and space
    Given This scenario is UI - "UI scenarios are not implemented."
    And   Item's Office screen is opened
    When  One record is focused but not selected
    And   User holds the CTRL key
    And   User clicks space in the keyboard
    Then  focused Record will get selected

  @catalog @item @officeView @ui @ignore
  Scenario: Verify the functionality of sequential selection of records with Shift key
    Given This scenario is UI - "UI scenarios are not implemented."
    And Item's Office screen is opened
    When  A record <First> is selected by clicking on Checkbox
    And   User holds Shift key
    And   User select another Record <Second>
    Then  All the records from <First> to <Second> will get Selected and Checked

  @catalog @item @officeView @ui @ignore
  Scenario: Verify the functionality of sequential selection of records with Shift key and down arrow
    Given This scenario is UI - "UI scenarios are not implemented."
    And Item's Office screen is opened
    When  A record is focused and selected
    And   User holds Shift key
    And   Down arrow is pressed
    Then  Next record will get focused and selected

  @catalog @item @officeView @ui @ignore
  Scenario: Verify the functionality of sequential selection of records with Shift key and up arrow
    Given This scenario is UI - "UI scenarios are not implemented."
    And   Item's Office screen is opened
    When  A record is focused and selected
    And   User holds Shift key
    And   Up arrow is pressed
    Then  Previous record will get focused and selected

  @catalog @item @officeView @ui @ignore
  Scenario: Verify the functionality of sequential selection of records with Shift key and down arrow
    Given This scenario is UI - "UI scenarios are not implemented."
    And   Item's Office screen is opened
    When  multiple records are selected and first record from the selected record is focused
    And   User holds Shift key
    And   Down arrow is pressed
    Then  Focused record will get de-selected
    And   for every press of Down arrow next selected record will be deselected

  @catalog @item @officeView @ui @ignore
  Scenario: Verify the functionality of sequential selection of records with Shift key and Up arrow
    Given This scenario is UI - "UI scenarios are not implemented."
    And   Item's Office screen is opened
    When  multiple records are selected and last record from the selected record is focused
    And   User holds Shift key
    And   Up arrow is pressed
    Then  Focused record will get de-selected
    And   for every press of Up arrow previous selected record will be deselected
#Merchandise Hierarchy field
  @catalog @item @officeView @ui @ignore
  Scenario: Verify Merchandise hierarchy field for a Item record which is at highest level in the merchandise hierarchy
    Given Item's Office screen is opened
    When  User verify the Merchandise hierarchy field for an Item which is at Highest Level
    Then  The Merchandise hierarchy field will display 'Root'
    And   The 'Root' will be bolded
    And   No tooltip will be displayed on mouseover

  @catalog @item @officeView @ui @ignore
  Scenario: Verify Merchandise hierarchy field for a Item record which is not at highest level in the merchandise hierarchy and the path value is short
    Given Item's Office screen is opened
    When  User verify the Merchandise hierarchy field for an Item which is not at highest level and has short path value
    Then  The Merchandise hierarchy field will display Upper level's path
    And   The direct parent in the path will be bolded
    And   No tooltip will be displayed on mouseover

  @catalog @item @officeView @ui @ignore
  Scenario: Verify Merchandise hierarchy field for a Item record which has long path value
    Given Item's Office screen is opened
    When  User verify the Merchandise hierarchy field for an Item which has long path value
    Then  The Merchandise hierarchy field will display Upper level's path truncated at beginning and ellipsis will be added
    And   The direct parent in the path will be bolded
    And   Tooltip will be displayed on mouseover on path value in truncated mode displaying entire Item path in tooltip

  @catalog @item @officeView @ui @ignore
  Scenario: Verify Ellipsis functionality on Merchandise hierarchy field
    Given Item's Office screen is opened
    When  User verify the Merchandise hierarchy field for an Item which has long path value
    Then  The Merchandise hierarchy field will display Upper level's path truncated at beginning and ellipsis will be added
    And   The ellipsis will become bold and change its shape to a button on mouseover
    And   Merchandise hierarchy field will be expanded to show entire Item path on click on ellipsis
    And   An arrow icon will be displayed in expanded mode which on click will collapse the Merchandise hierarchy field

  @catalog @item @officeView @functional
  Scenario: Verify individual node in Merchandise hierarchy field
    Given Item's Office screen is opened
    When  User mouse over on individual node in the Merchandise hierarchy field value for a record
    Then  The node under mouse over will look clickable
    And   On click will navigate to Merchandise Hierarchy View screen for that particular node
