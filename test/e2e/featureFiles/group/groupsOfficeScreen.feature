Feature: Groups Landing Page
  As a retailer catalog owner,
  I would like to be able search for existing groups from the Central Office,
  so that I will be able to present and use those groups

#Group Office screen Grid
  @catalog @group @officeView @ui @ignore
  Scenario: Verify the data displayed for each record in Group Office screen grid
    Given Group Office screen is opened
    When  User verify the data column displayed in the grid
    Then  Following columns will displayed in grid for each row: 'Code', 'Title', 'Description'
    And   Checkbox will be available for each record row in the grid

  @catalog @group @officeView @ui @ignore
  Scenario: Verify multiple record selection in the grid
    Given Group Office screen is opened
    When  User tries to select multiple record
    Then  User will be able to select multiple records

  @catalog @group @officeView @ui @ignore
  Scenario: Verify selected records in the grid are highlighted
    Given Group Office screen is opened
    When  User select multiple record
    Then  Selected records will be highlighted
    And   Selected records text will be bolded

  @catalog @group @officeView @ui @ignore
  Scenario: Verify mouse over on the records in the grid
    Given Group Office screen is opened
    When  User mouse over on any record in the grid
    Then  Record on which mouse over will be highlighted
    And   black dot will be displayed against the leading column indicating the record is under mouse over

  @catalog @group @officeView @functional
  Scenario: Verify the leading field in the grid
    Given Group Office screen is opened
    When  User verify the leading field 'Code' in the grid
    Then  Leading field will be a link
    And   On click on 'Code' field, user will be navigated to Group View screen for the record

# Breadcrumb
  @catalog @group @officeView @ui @ignore
  Scenario: Verify the breadcrumb displayed on Group Office screen
    Given Group Office screen is opened
    When  User verify the breadcrumb displayed on the screen
    Then  The breadcrumb will display following value: Catalog > Groups

# Side bar navigation
  @catalog @group @officeView @ui @ignore
  Scenario: Verify the option for Group Office screen in side bar navigation
    Given Catalog application main screen
    When  User verify the side bar navigation
    Then  There will be an icon in side bar navigation for Group
    And   The title for the option in side bar will be 'Groups'

  @catalog @group @officeView @functional
  Scenario: Verify the option for Group Office screen in side bar navigation navigates to Group Office screen
    Given Catalog application main screen
    When  User click on option 'Groups' from the side bar navigation
    Then  User will be navigated to Group Office screen

# Sorting
  @catalog @group @officeView @ui @ignore
  Scenario: Verify sorting option on the field in Group Office screen grid
    Given Group Office screen is opened
    When  User verify the sorting on grid fields
    Then  Sorting will be available on following fields in the grid: 'Code', 'Title', 'Description'

  @catalog @group @officeView @functional
  Scenario: Default sorting in Group Office screen grid
    Given Group Office screen is opened
    When  User verify the default sorting on grid fields
    Then  Default sorting will be on 'Code' field alphabetically ascending sorted
    And   Sorting indicator will be displayed against 'Code' field indicating grid sorting in ascending order
    And   Sorting indicator will indicate descending order sorting on 'Code' field when user again click on 'Code' field label

  @catalog @group @officeView @functional
  Scenario: Sorting indication on the 'Title' field in Group Office screen grid
    Given Group Office screen is opened
    When  User click on 'Title' field
    Then  Grid will be sorted on 'Title' field values in ascending order
    And   Sorting indicator will be displayed against 'Title' field indicating grid sorting in ascending order on 'Title' field
    And   Sorting indicator will indicate descending order sorting on 'Title' field when user again click on 'Title' field label

  @catalog @group @officeView @functional
  Scenario: Sorting indication on the 'Description' field in Group Office screen grid
    Given Group Office screen is opened
    When  User click on 'Description' field
    Then  Grid will be sorted on 'Description' field values in ascending order
    And   Sorting indicator will be displayed against 'Description' field indicating grid sorting in ascending order on 'Description' field
    And   Sorting indicator will indicate descending order sorting on 'Description' field when user again click on 'Description' field label

#Filter
  @catalog @group @officeView @ui @ignore
  Scenario: Verify the Search ability on fields in the Group Office screen grid
    Given Group Office screen is opened
    When  User verify the Search ability on the fields in the grid
    Then  Search ability will be available on following fields in the grid: 'Code', Title', 'Description'
    And   Default state of filter option will be enabled

  @catalog @group @officeView @functional
  Scenario: Structure text on fields when filter is enabled
    Given Group Office screen with filter enabled
    When  User verify the search text field in Group screen for each column in the grid
    Then  The default structured text 'Type to Search' will be displayed in the search field for each column
    And   User will be able to type and perform search on multiple columns

  @catalog @group @officeView @ui @ignore
  Scenario: Free text searching and option to remove filter
    Given Group Office screen with filter enabled
    When  User type any text in the search field for a column
    Then  Column data will be filtered on the fly as per user input
    And   There will be a clear icon available on the filter field for the column on mouse over/click to clear search for the column
    And   A clear icon will be available for clear search on the grid

  @catalog @group @officeView @ui @ignore
  Scenario: No result on filter
    Given Group Office screen with filter enabled
    When  User type any text in the search field for a column which resulted in no results
    Then  A generic text "No results found" will be displayed

  @catalog @group @officeView @ui @ignore
  Scenario: Verify that characters would get highlighted in the records based on the entered text
    Given Group Office screen is opened
    When  User click on filter icon
    And   Enter the text on the filter text box
    Then  The Grid records will filtered out on the fly based on the enter criteria and characters will be highlighted in the Grid

# Records display indication
  @catalog @group @officeView @ui @ignore
  Scenario: Verify the Total records indication
    Given Central Office Screen is Opened
    When  User navigate to Group Office screen
    Then  Total number of records (y records) indication will be displayed on top of the grid as "y results"

  @catalog @group @officeView @ui @ignore
  Scenario: Verify the Record indication in case of record selection
    Given Group Office screen is opened
    When  User select '<z>' record from grid
    Then  The record indication will be displayed as 'y Results-z Selected'

  @catalog @group @officeView @functional
  Scenario: Verify the Record indication in case of filtering and selection
    Given Group Office screen is opened
    When  User filter'<x>' record from grid out of '<y>' records
    And   User select '<z>' record from grid
    Then  The record indication will be displayed as 'x Results/y Results-z Selected'

# Mega selector
  @catalog @group @officeView @ui @ignore
  Scenario: Verify that on the click of Mega selector in case no records are selected in a grid
    Given Group Office screen is opened
    When  Click on the mega-selector
    Then  All the records will get selected

  @catalog @group @officeView @ui @ignore
  Scenario: On the click of Mega selector in case all records are selected in a grid
    Given Group Office screen is opened with all records selected
    When  User click on the mega-selector
    Then  All the records will get un-selected

  @catalog @group @officeView @ui @ignore
  Scenario: On the click of Mega selector in case one or more records selected in a grid
    Given Group Office screen is opened
    When  User select one record in a grid
    And   Click on the mega- selector
    Then  All the selected records will get un-selected

# Tool bar action
  @catalog @group @officeView @ui @ignore
  Scenario: Verify Tool bar action displayed when no record is selected form the grid
    Given Group Office screen is opened
    When  User has not selected any record form the grid
    Then  Following Tool Bar action button will be enabled: 'Add'
    And   Following Tool Bar action buttons will be disabled: 'Edit', 'View'

  @catalog @group @officeView @ui @ignore
  Scenario: Verify Tool bar action displayed when single record is selected form the grid
    Given Group Office screen is opened
    When  User has selected single record form the grid
    Then  Following Tool Bar action button will be enabled: 'Add', 'Edit', 'View'

  @catalog @group @officeView @ui @ignore
  Scenario: Verify Tool bar action displayed when multiple records are selected form the grid
    Given Group Office screen is opened
    When  User has selected multiple records form the grid
    Then  Following Tool Bar action button will be enabled: 'Add', 'Edit', 'View'

  @catalog @group @officeView @functional
  Scenario: Verify 'View' tool bar action when single record is selected
    Given Group Office screen is opened
    When  User has selected single record form the grid
    And   User click on 'View' tool bar action in Group office screen
    Then  User will be navigated to selected record group screen in View mode

  @catalog @group @officeView @functional @ignore
  Scenario: Verify 'View' tool bar action when multiple records are selected
    Given Group Office screen is opened
    When  User has selected multiple records form the grid
    And   User click on 'View' tool bar action in Group office screen
    Then  User will be navigated to first selected record group screen in View mode

  @catalog @group @officeView @functional
  Scenario: Verify 'Edit' tool bar action when single record is selected
    Given Group Office screen is opened
    When  User has selected single record form the grid
    And   User click on 'Edit' tool bar action in Group office screen
    Then  User will be navigated to selected record group screen in Edit mode

  @catalog @group @officeView @functional @ignore
  Scenario: Verify 'Edit' tool bar action when multiple records are selected
    Given Group Office screen is opened
    When  User has selected multiple records form the grid
    And   User click on 'Edit' tool bar action in Group office screen
    Then  User will be navigated to first selected record group screen in Edit mode

  @catalog @group @officeView @functional
  Scenario: Verify 'Add' tool bar action when single record is selected
    Given Group Office screen is opened
    When  User has selected single record form the grid
    And   User click on 'Add' tool bar action
    Then  User will be navigated to Create Group screen

  @catalog @group @officeView @functional @ignore
  Scenario: Verify 'Add' tool bar action when multiple records are selected
    Given Group Office screen is opened
    When  User has selected multiple records form the grid
    And   User click on 'Add' tool bar action
    Then  User will be navigated to Create Group screen

# Record selection using Ctrl and shift key
  @catalog @group @officeView @ui @ignore
  Scenario: Verify the functionality of record selection with Ctrl Key and up/down arrows
    Given Group Office screen is opened
    When  User selects any one of the records
    And   User holds the CTRL key
    And   User clicks up/down arrows in the keyboard
    Then  The focus indication will get moved accordingly

  @catalog @group @officeView @ui @ignore
  Scenario: Verify the functionality of record selection with Ctrl Key and space when a record is selected
    Given Group Office screen is opened
    When  User selects any one of the record
    And   Selected record is focused
    And   User holds the CTRL key
    And   User clicks space in the keyboard
    Then  selected Record will get unselected
    And   Record selection / de-selection will toggle for every press of space bar

  @catalog @group @officeView @ui @ignore
  Scenario: Verify the functionality of record selection with Ctrl Key and space
    Given Group Office screen is opened
    When  One record is focused but not selected
    And   User holds the CTRL key
    And   User clicks space in the keyboard
    Then  focused Record will get selected

  @catalog @group @officeView @ui @ignore
  Scenario: Verify the functionality of sequential selection of records with Shift key
    Given Group Office screen is opened
    When  A record 'First' is selected by clicking on checkbox
    And   User holds Shift key
    And   User select another record 'Second'
    Then  All the records from 'First' to 'Second' will get selected and checked

  @catalog @group @officeView @ui @ignore
  Scenario: Verify the functionality of sequential selection of records with Shift key and down arrow
    Given Group Office screen is opened
    When  A record is focused and selected
    And   User holds Shift key
    And   Down arrow is pressed
    Then  Next record will get focused and selected

  @catalog @group @officeView @ui @ignore
  Scenario: Verify the functionality of sequential selection of records with Shift key and up arrow
    Given Group Office screen is opened
    When  A record is focused and selected
    And   User holds Shift key
    And   Up arrow is pressed
    Then  Previous record will get focused and selected

  @catalog @group @officeView @ui @ignore
  Scenario: Verify the functionality of sequential selection of records with Shift key and down arrow
    Given Group Office screen is opened
    When  multiple records are selected and first record from the selected record is focused
    And   User holds Shift key
    And   Down arrow is pressed
    Then  Focused record will get de-selected
    And   for every press Down arrow next selected record will be deselected

  @catalog @group @officeView @ui @ignore
  Scenario: Verify the functionality of sequential selection of records with Shift key and Up arrow
    Given Group Office screen is opened
    When  multiple records are selected and last record from the selected record is focused
    And   User holds Shift key
    And   Up arrow is pressed
    Then  Focused record will get de-selected
    And   for every press Up arrow previous selected record will be deselected
