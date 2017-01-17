Feature: Dynamic Attributes Landing Page
  In order to search for dynamic attribute
  As a retailer catalog owner,
  I would like to be able search for existing dynamic attribute from the Central Office,
  so that I will be able to present or use those attributes

  @catalog @da @officeView @ui @ignore
  Scenario:Verify the functionality Dynamic attribute grid is available with Attribute id and Attribute name
    Given Cental Office Screen is Opened
    When User navigate to Dynamic Attribute page
    Then Dynamic Attribute page should get open with Attribute id and Attribute name columns in grid

  @catalog @da @officeView @ui @ignore
  Scenario: Verify the Total records indication
    Given Cental Office Screen is Opened
    When User navigate to Dynamic Attribute page
    Then Total number of record indication should be there on top of the grid

  @catalog @da @officeView @ui @ignore
  Scenario: Verify the Total record count
    Given Cental Office Screen is Opened
    When User navigate to Dynamic Attribute page
    Then Total number of record count should be total no of records exist in grid

  @catalog @da @officeView @functional
  Scenario Outline: Verify the Record indication in case of filtering and selection
    Given Catalog Office Screen Should be Opened
    When User filter "<x>" record from grid out of "<y>" records
    And User select "<z>" record from grid
    And Count the total records in a grid
    Then The record indication should be appear as x records/y records-z records
    Examples:
      | y   | x   | z  |
      | 6   | 4   | 2  |

  @catalog @da @officeView @functional
  Scenario: Verify that Attribute id is Hyper text
    Given Dynamic Attribute screen is Opened
    When User mouse over on attribute id and click on it
    Then Attribute id should get opened in view mode

  @catalog @da @officeView @ui @ignore
  Scenario: Verify the sorting indication on both columns
    Given Cental Office Screen is Opened
    When User navigate to Dynamic Attribute page
    Then Sorting indication should be there next to both the columns

  @catalog @da @officeView @ui @ignore
  Scenario: Verify the default functionality of sorting
    Given Cental Office Screen is Opened
    When User navigate to Dynamic Attribute page
    Then all the records should be alphabetically sorted based on the Dynamic attribute field by default

  @catalog @da @officeView @functional
  Scenario: Verify that records would get sort in descending order on first click
    Given Dynamic Attribute page is opened
    When user click on the sorting option first time on any of the column
    Then all the records should get sorted in descending order
    And down arrow should get highlighted in black color

  @catalog @da @officeView @functional
  Scenario: Verify that records would get sort in ascending order on second click
    Given Dynamic Attribute page is opened
    When user click on the sorting option second time on any of the column
    Then all the records should get sorted in ascending order
    And up arrow should get highlighted in black color

  @catalog @da @officeView @ui @ignore
  Scenario: Verify that user is able to filter records on any of the column
    Given Catalog office Screen Should be Opened
    When  User Click on search Text box
    And User Enter single Text in Search Text
    Then The results should be filtered on the basis of filter criteria

  @catalog @da @officeView @ui @ignore
  Scenario: Verify that user has the ability to remove the filter
    Given filter is applier on the columns
    When  user click on the remove filter icon
    Then filter should get remove and grid should get appear in alphabetical order by attribute id by default

  @catalog @da @officeView @ui @ignore
  Scenario: Verify the filtering functioanlity on both columns
    Given Cental Office Screen is Opened
    When User navigate to Dynamic Attribute page
    Then filter should be shown on both the columns by default

  @catalog @da @officeView @functional
  Scenario: Verify that user is able to filter records on any of the columns
    Given Dynamic Attribute screen is Opened
    When User click on search Text box of any of the column
    And enters text in search Text
    Then The results should be filtered on the fly based on the filter criteria entered by user

  @catalog @da @officeView @ui @ignore
  Scenario: Verify that user is able to filter by multi filtering
    Given Dynamic Attribute screen is Opened
    When  User Click on search Text box
    And User enter search criteria in both the columns
    Then The results will be filtered on the basis of entered search criteria

  @catalog @da @officeView @ui @ignore
  Scenario: Verify that characters would get highlighted in the records based on the entered text
    Given Dynamic Attribute screen is Opened
    When User click on filter icon
    And start entering the text on the filter text box
    Then The Grid records will filtered out on the fly based on the enter criteia and characters would get highlighted in the Grid

  @catalog @da @officeView @ui @ignore
  Scenario:Verify that On the click of Mega selector in case no records are selected in a grid
    Given Dynamic Attribute screen is Opened
    When click on the mega-selector
    Then All the records should get checked

  @catalog @da @officeView @ui @ignore
  Scenario: Verify in case no results match based on the user’s input in filter textbox
    Given  Dynamic Attribute screen is Opened
    When User click on filter icon
    And start entering the text on the filter text box which does not match the existng data
    Then System should Shows generic text in which No results found indication will be displayed

  @catalog @da @officeView @ui @ignore
  Scenario: On the click of Mega selector in case all records are selected in a grid
    Given Dynamic Attribute screen is Opened
    When click on the mega-selector
    And User click on the mega- selector
    Then All the records sould get unchecked

  @catalog @da @officeView @ui @ignore
  Scenario: On the click of Mega selector in case one or more records selected in a grid
    Given  Dynamic Attribute screen is Opened
    When User select one record in a grid
    And User click on the mega- selector
    Then All the records sould get unchecked

  @catalog @da @officeView @ui @ignore
  Scenario: Verify that tool bar actions buttons would be  avaible
    Given Cental Office Screen is Opened
    When User navigate to the dynamic attribute page
    Then  user should be able to see all 3 tool bar action button as Add Update and Edit.

  @catalog @da @officeView @functional
  Scenario: Verify the functionality of tool bar action 'Add'
    Given Cental Office Screen is Opened
    When User navigate to the dynamic attribute page
    Then tool bar action 'Add' should be active
    And user should be able to click on the tool bar action 'Add'

  @catalog @da @officeView @functional
  Scenario: Verify the functionality of tool bar action 'Edit'
    Given  Dynamic Attribute screen is Opened
    When User does the single or multiple selection
    Then tool bar action 'Edit' should become active
    And user should be able to click on the tool bar action 'Edit'

  @catalog @da @officeView @functional
  Scenario: Verify the functionality of tool bar action 'View'
    Given  Dynamic Attribute screen is Opened
    When User does the single or multiple selection
    Then tool bar action 'View' should become active
    And user should be able to click on the tool bar action 'View'

  @catalog @da @officeView @ui @ignore
  Scenario: Verify the selection of one record by clicking anywhere on the row except checkbox
    Given  Dynamic Attribute screen is Opened
    When One record is selected by clicking anywhere on the row
    Then Record should get highlighted with focus

  @catalog @da @officeView @ui @ignore
  Scenario:Verify the selection of one record by clicking anywhere on the row and other record by checkbox
    Given  Dynamic Attribute screen is Opened
    When One record is selected by clicking anywhere on the row
    And Second record is selected by clicking on check box
    Then highlighlting with foucus should get moved from first record to second record

  @catalog @da @officeView @ui @ignore
  Scenario: Verify the functionality of selection of records by clicking checkbox
    Given  Dynamic Attribute screen is Opened
    When User selects one record  by clicking on checkbox
    And User selects another record by clicking on checkbox
    Then Both the records should get highlighted
    And Focus should get move to the latest selected record

  @catalog @da @officeView @ui @ignore
  Scenario: click on the unchecked record when one or more records are checked
    Given  Dynamic Attribute screen is Opened
    When User selects one record  by clicking on checkbox
    And User selects another record by clicking on checkbox
    And User clicking anywhere on the row of a unchecked record
    Then Focus should get moved to newly selected record but not highlighted

  @catalog @da @officeView @ui @ignore
  Scenario: Verify the functionality of unchecking records when one or more records are checked
    Given Dynamic Attribute screen is Opened
    When User selects one record  by clicking on checkbox
    And User selects another record by clicking on checkbox
    And User unselects any one of the checked records by clicking on checkbox
    Then Focus should get moved to unselected record
    And record should not be highlighted

  @catalog @da @officeView @ui @ignore
  Scenario: Verify the functionality of record selection with Ctrl Key and up/down arrows
    Given  Dynamic Attribute screen is Opened
    When User selects any one of the records
    And User holds the CTRL key
    And User clicks  up/down arrows in the keyboard
    Then The focus indication should get moved accordingly

  @catalog @da @officeView @ui @ignore
  Scenario: Verify the functionality of record selection with Ctrl Key and space when a record is selected
    Given  Dynamic Attribute screen is Opened
    When User selects any one of the records
    And Selected record is focused
    And User holds the CTRL key
    And User clicks space in the keyboard
    Then Record should get unselected

  @catalog @da @officeView @ui @ignore
  Scenario: Verify the functionality of record selection with Ctrl Key and space
    Given  Dynamic Attribute screen is Opened
    When One record is focused but not selected
    And User holds the CTRL key
    And User clicks space in the keyboard
    Then Record should get selected

  @catalog @da @officeView @ui @ignore
  Scenario Outline: Verify the functionality of sequential selection of records with Shift key
    Given  Dynamic Attribute screen is Opened
    When "<First>" record is selected by clicking on checkbox OR
    And User holds Shift key
    And User select the "<Second>" record
    Then All the records from "<First>" to "<Second>" should get selected and checked
    Examples:
      | First | Second |
      | 1     | 5      |

  @catalog @da @officeView @ui @ignore
  Scenario Outline: Verify the functionality of sequential selection of records with Shift key and down arrow
    Given  Dynamic Attribute screen is Opened
    When "<first>" record is focused and selected
    And User holds Shift key
    And Down arrow is pressed
    Then "<second>" record should get focused and selected
    Examples:
      | first | second |
      | 1     | 2      |

  @catalog @da @officeView @ui @ignore
  Scenario Outline: Verify the functionality of sequential selection of records with Shift key and down arrow when one or more records are selected
    Given  Dynamic Attribute screen is Opened
    When "<first>" record is selected
    And "<second>" record is focused and highlighted
    And User holds Shift key
    And Down arrow is pressed
    Then "<third>" record should get focused and selected
    Examples:
      | first | second | third |
      | 1     | 2      | 3     |

  @catalog @da @officeView @ui @ignore
  Scenario Outline: Verify the functionality of sequential selection of records with Shift key and up arrow when one or more records are selected
    Given  Dynamic Attribute screen is Opened
    When "<first>" record is selected
    And "<second>" record is focused and highlighted
    And User holds Shift key
    And Up arrow is pressed
    Then Focus should be removed from "<second>" record
    And "<second>" record should get unselected
    Examples:
      | first | second |
      | 1     | 2     |

