Feature: Merchandise Hierarchy Landing Page
  As a retailer catalog owner,
  I would like to be able search for existing hierarchies in NR1 repository,
  so that I will be able to present or use those Hierarchy

#Merchandise Hierarchy Office screen Grid
  @catalog @mh @officeView @ui @ignore
  Scenario: Verify the data displayed for each record in Merchandise Hierarchy Office screen grid
    Given Merchandise Hierarchy Office screen
    When  User verify the data column displayed in the grid
    Then  Following columns will displayed in grid for each row: 'Code', 'Title', 'Description', 'Path'
    And   Checkbox will be available for each record row in the grid

  @catalog @mh @officeView @ui @ignore
  Scenario: Verify multiple record selection in the grid
    Given Merchandise Hierarchy Office screen
    When  User tries to select multiple record
    Then  User will be able to select multiple records

  @catalog @mh @officeView @ui @ignore
  Scenario: Verify selected records in the grid are highlighted
    Given Merchandise Hierarchy Office screen
    When  User select multiple record
    Then  Selected records will be highlighted
    And   Selected records text will be bolded

  @catalog @mh @officeView @ui @ignore
  Scenario: Verify mouse over on the records in the grid
    Given Merchandise Hierarchy Office screen
    When  User mouse over on any record in the grid
    Then  Record on which mouse over will be highlighted
    And   black dot will be displayed against the leading column indicating the record is under mouse over

  @catalog @mh @officeView @functional
  Scenario: Verify the leading field in the grid
    Given Merchandise Hierarchy Office screen
    When  User verify the leading field 'Code' in the grid
    Then  Leading field will be a link
    And   On click on 'Code' field, user will be navigated to View screen for the record

# Breadcrumb
  @catalog @mh @officeView @ui @ignore
  Scenario: Verify the breadcrumb displayed on Merchandise Hierarchy Office screen
    Given Merchandise Hierarchy Office screen
    When  User verify the breadcrumb displayed on the screen
    Then  The breadcrumb will display following value: Catalog > Merchandise Hierarchy

# Side bar navigation
  @catalog @mh @officeView @ui @ignore
  Scenario: Verify the option for Merchandise Hierarchy Office screen in side bar navigation
    Given Catalog application main screen
    When  User verify the side bar navigation
    Then  There will be an icon in side bar navigation for Merchandise Hierarchy
    And   The title for the option in side bar will be 'Merchandise Hierarchy'

  @catalog @mh @officeView @functional
  Scenario: Verify the option for Merchandise Hierarchy Office screen in side bar navigation navigates to Merchandise Hierarchy Office screen
    Given Catalog application main screen
    When  User click on option 'Merchandise Hierarchy' from the side bar navigation
    Then  User will be navigated to Merchandise Hierarchy Office screen

# Sorting
  @catalog @mh @officeView @ui @ignore
  Scenario: Verify sorting option on the field in Merchandise Hierarchy Office screen grid
    Given Merchandise Hierarchy Office screen
    When  User verify the sorting on grid fields
    Then  Sorting will be available on following fields in the grid: 'Code', 'Title'

  @catalog @mh @officeView @functional
  Scenario: Default sorting in Merchandise Hierarchy Office screen grid
    Given Merchandise Hierarchy Office screen
    When  User verify the default sorting on grid fields
    Then  Default sorting will be on Code field alphabetically ascending sorted
    And   Sorting indicator will be displayed against Code field indicating grid sorting in ascending order
    And   Sorting indicator will indicate descending order sorting on Code field when user again click on Code field label

  @catalog @mh @officeView @functional
  Scenario: Sorting indication on the Title field in Merchandise Hierarchy Office screen grid
    Given Merchandise Hierarchy Office screen
    When  User click on Title field
    Then  Grid will be sorted on Title field values in ascending order
    And   Sorting indicator will be displayed against Title field indicating grid sorting in ascending order on Title field
    And   Sorting indicator will indicate descending order sorting on Title field when user again click on Title field label

#Filter
  @catalog @mh @officeView @ui @ignore
  Scenario: Verify the Search ability on fields in the Merchandise Hierarchy Office screen grid
    Given Merchandise Hierarchy Office screen
    When  User verify the Search ability on the fields in the grid
    Then  Search ability will be available on following fields in the grid: 'Code', 'Title', 'Description', 'Path'
    And   Default state of filter option will be enabled

  @catalog @mh @officeView @functional
  Scenario: Structure text on fields when filter is enabled
    Given Merchandise Hierarchy Office screen with filter enabled
    When  User verify the search text field for each column in the grid
    Then  The default structured text 'Type to Search' will be displayed in the search field for each column
    And   User will be able to type and perform search on multiple columns

  @catalog @mh @officeView @ui @ignore
  Scenario: Free text searching and option to remove filter
    Given Merchandise Hierarchy Office screen with filter enabled
    When  User type any text in the search field for a column
    Then  Column data will be filtered on the fly as per user input
    And   There will be a clear icon available on the filter field for the column on mouse over/click to clear search for the column
    And   A clear icon will be available for clear search on the grid

  @catalog @mh @officeView @ui @ignore
  Scenario: No result on filter
    Given Merchandise Hierarchy Office screen with filter enabled
    When  User type any text in the search field for a column which resulted in no results
    Then  A generic text "No results found" will be displayed

  @catalog @mh @officeView @ui @ignore
  Scenario: Verify that characters would get highlighted in the records based on the entered text
    Given Merchandise Hierarchy Office screen is Opened
    When  User click on filter icon
    And   Enter the text on the filter text box
    Then  The Grid records will filtered out on the fly based on the enter criteria and characters will be highlighted in the Grid

# Records display indication
  @catalog @mh @officeView @ui @ignore
  Scenario: Verify the Total records indication
    Given Central Office Screen is Opened
    When  User navigate to Merchandise Hierarchy Office screen
    Then  Total number of records (y records) indication will be displayed on top of the grid as "y results"

  @catalog @mh @officeView @ui @ignore
  Scenario: Verify the Record indication in case of record selection
    Given Merchandise Hierarchy Office screen is Opened
    When  User select '<z>' record from grid
    Then  The record indication will be displayed as 'y Results-z Selected'

  @catalog @mh @officeView @functional
  Scenario: Verify the Record indication in case of filtering and selection
    Given Merchandise Hierarchy Office screen is Opened
    When  User filter'<x>' record from grid out of '<y>' records
    And   User select '<z>' record from grid
    Then  The record indication will be displayed as 'x Results/y Results-z Selected'

# Mega selector
  @catalog @mh @officeView @ui @ignore
  Scenario: Verify that on the click of Mega selector in case no records are selected in a grid
    Given Merchandise Hierarchy Office screen is Opened
    When  Click on the mega-selector
    Then  All the records will get selected

  @catalog @mh @officeView @ui @ignore
  Scenario: On the click of Mega selector in case all records are selected in a grid
    Given Merchandise Hierarchy Office screen is opened with all records selected
    When  User click on the mega-selector
    Then  All the records will get un-selected

  @catalog @mh @officeView @ui @ignore
  Scenario: On the click of Mega selector in case one or more records selected in a grid
    Given Merchandise Hierarchy Office screen is Opened
    When  User select one record in a grid
    And   Click on the mega- selector
    Then  All the selected records will get un-selected

# Tool bar action
  @catalog @mh @officeView @ui @ignore
  Scenario: Verify Tool bar action displayed when no record is selected form the grid
    Given Merchandise Hierarchy Office screen is Opened
    When  User has not selected any record form the grid
    Then  Following Tool Bar action button will be enabled: 'Add'
    And   Following Tool Bar action buttons will be disabled: 'Edit', 'Open'

  @catalog @mh @officeView @ui @ignore
  Scenario: Verify Tool bar action displayed when single record is selected form the grid
    Given Merchandise Hierarchy Office screen is Opened
    When  User has selected single record form the grid
    Then  Following Tool Bar action button will be enabled: 'Add', 'Edit', 'Open'

  @catalog @mh @officeView @ui @ignore
  Scenario: Verify Tool bar action displayed when multiple records are selected form the grid
    Given Merchandise Hierarchy Office screen is Opened
    When  User has selected multiple records form the grid
    Then  Following Tool Bar action button will be enabled: 'Add', 'Edit', 'Open'

  @catalog @mh @officeView @functional
  Scenario: Verify 'Open' tool bar action when single record is selected
    Given Merchandise Hierarchy Office screen is Opened
    When  User has selected single record form the grid
    And   User click on 'Open' tool bar action
    Then  User will be navigated to selected record screen in View mode

  @catalog @mh @officeView @functional @ignore
  Scenario: Verify 'Open' tool bar action when multiple records are selected
    Given Merchandise Hierarchy Office screen is Opened
    When  User has selected multiple records form the grid
    And   User click on 'Open' tool bar action
    Then  User will be navigated to first selected record screen in View mode

  @catalog @mh @officeView @functional
  Scenario: Verify 'Edit' tool bar action when single record is selected
    Given Merchandise Hierarchy Office screen is Opened
    When  User has selected single record form the grid
    And   User click on 'Edit' tool bar action
    Then  User will be navigated to selected record screen in Edit mode

  @catalog @mh @officeView @functional @ignore
  Scenario: Verify 'Edit' tool bar action when multiple records are selected
    Given Merchandise Hierarchy Office screen is Opened
    When  User has selected multiple records form the grid
    And   User click on 'Edit' tool bar action
    Then  User will be navigated to first selected record screen in Edit mode

  @catalog @mh @officeView @functional
  Scenario: Verify 'Add' tool bar action when single record is selected
    Given Merchandise Hierarchy Office screen is Opened
    When  User has selected single record form the grid
    And   User click on 'Add' tool bar action
    Then  User will be navigated to Create Merchandise hierarchy screen

  @catalog @mh @officeView @functional @ignore
  Scenario: Verify 'Add' tool bar action when multiple records are selected
    Given Merchandise Hierarchy Office screen is Opened
    When  User has selected multiple records form the grid
    And   User click on 'Add' tool bar action
    Then  User will be navigated to Create Merchandise hierarchy screen

# Record selection using Ctrl and shift key
  @catalog @mh @officeView @ui @ignore
  Scenario: Verify the functionality of record selection with Ctrl Key and up/down arrows
    Given Merchandise Hierarchy Office screen is Opened
    When  User selects any one of the records
    And   User holds the CTRL key
    And   User clicks up/down arrows in the keyboard
    Then  The focus indication will get moved accordingly

  @catalog @mh @officeView @ui @ignore
  Scenario: Verify the functionality of record selection with Ctrl Key and space when a record is selected
    Given Merchandise Hierarchy Office screen is Opened
    When  User selects any one of the record
    And   Selected record is focused
    And   User holds the CTRL key
    And   User clicks space in the keyboard
    Then  selected Record will get unselected
    And   Record selection / de-selection will toggle for every press of space bar

  @catalog @mh @officeView @ui @ignore
  Scenario: Verify the functionality of record selection with Ctrl Key and space
    Given Merchandise Hierarchy Office screen is Opened
    When  One record is focused but not selected
    And   User holds the CTRL key
    And   User clicks space in the keyboard
    Then  focused Record will get selected

  @catalog @mh @officeView @ui @ignore
  Scenario: Verify the functionality of sequential selection of records with Shift key
    Given Merchandise Hierarchy Office screen is Opened
    When  A record 'First' is selected by clicking on checkbox
    And   User holds Shift key
    And   User select another record 'Second'
    Then  All the records from 'First' to 'Second' will get selected and checked

  @catalog @mh @officeView @ui @ignore
  Scenario: Verify the functionality of sequential selection of records with Shift key and down arrow
    Given Merchandise Hierarchy Office screen is Opened
    When  A record is focused and selected
    And   User holds Shift key
    And   Down arrow is pressed
    Then  Next record will get focused and selected

  @catalog @mh @officeView @ui @ignore
  Scenario: Verify the functionality of sequential selection of records with Shift key and up arrow
    Given Merchandise Hierarchy Office screen is Opened
    When  A record is focused and selected
    And   User holds Shift key
    And   Up arrow is pressed
    Then  Previous record will get focused and selected

  @catalog @mh @officeView @ui @ignore
  Scenario: Verify the functionality of sequential selection of records with Shift key and down arrow
    Given Merchandise Hierarchy Office screen is Opened
    When  multiple records are selected and first record from the selected record is focused
    And   User holds Shift key
    And   Down arrow is pressed
    Then  Focused record will get de-selected
    And   for every press Down arrow next selected record will be deselected

  @catalog @mh @officeView @ui @ignore
  Scenario: Verify the functionality of sequential selection of records with Shift key and Up arrows
    Given Merchandise Hierarchy Office screen is Opened
    When  multiple records are selected and last record from the selected record is focused
    And   User holds Shift key
    And   Up arrow is pressed
    Then  Focused record will get de-selected
    And   for every press Up arrow previous selected record will be deselected
