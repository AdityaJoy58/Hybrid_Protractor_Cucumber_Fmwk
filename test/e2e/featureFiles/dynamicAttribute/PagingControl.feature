Feature: Paging Control in Dynamic Attributes
  As a central office consumer
  I want to have the ability to navigate between records in edit and in view mode
  So it will be easier to edit and view records

  @catalog @da @ui @ignore
  #Available Tool bar action on record selection from grid
  Scenario: Verify available tool bar action buttons on selection of single record from grid
    Given Dynamic Attribute office screen is opened
    When  User select one record checkbox from the grid
    Then  Action button 'Edit' and 'View' will be enabled in the Tool bar

  @catalog @da @ui @ignore
  Scenario: Verify available tool bar action buttons on selection of multiple records from grid
    Given Dynamic Attribute office screen is opened
    When  User select multiple records checkbox from the grid
    Then  Action button 'Edit' and 'View' will be enabled in the Tool bar

  @catalog @da @ui @ignore
  #Paging indication on View of Single record
  Scenario:Paging indication in case single record view by toolbar action
    Given Dynamic Attribute office screen is opened
    When  User select one record
    And   Click on action tool bar 'View' button
    Then  record will open in view mode with paging indication as < 1/1 >
    And   'Next' and 'Previous' arrows in paging indication will be disabled

  @catalog @da @ui @ignore
  Scenario:Paging indication in case single record view by leading field's link
    Given Dynamic Attribute office screen is opened
    When  User click on the attribute id's link of any of the record
    Then  record will open in view mode with paging indication as < 1/1 >
    And   'Next' and 'Previous' arrows in paging indication will be disabled

  @catalog @da @ui @ignore
  Scenario:Paging indication in case single record view by double click
    Given Dynamic Attribute office screen is opened
    When  User double click anywhere on the record except attribute id link
    Then  record will open in view mode with paging indication as < 1/1 >
    And   'Next' and 'Previous' arrows in paging indication will be disabled

  @catalog @da @ui @ignore
  #Paging indication on Single record Edit
  Scenario:Paging indication in case single record edit by toolbar action
    Given Dynamic Attribute office screen is opened
    When  User select one record
    And   Click on action tool bar 'Edit' button
    Then  record will get open in edit mode with paging indication as < 1/1 >
    And   'Next' and 'Previous' arrows in paging indication will be disabled

  @catalog @da @ui @ignore
  #Paging indication on View of Multiple Records
  Scenario:Paging indication in case of multiple records view by toolbar action
    Given Dynamic Attribute office screen is opened
    When  User select 1st, 2nd and 3rd record in the grid
    And   Click on action tool bar 'View' button
    Then  first record will open in view mode with indication as < 1/3 >
    And   'Previous' arrow in paging indication will be disabled for the first record
    And   User will be able to navigate to next record by Next arrow

  @catalog @da @ui @ignore
  Scenario:Paging indication in case of multiple record view by leading field's link
    Given Dynamic Attribute office screen is opened
    When  User select 1st, 2nd and 3rd record in the grid
    And   User click on the 2nd record's leading fields link
    Then  2nd record will open in view mode with indication as < 2/3 >
    And   User will be able to navigate across all selected records by 'Next' and 'Previous' arrows

  @catalog @da @ui @ignore
  Scenario:Paging indication in case of multiple records view by double click
    Given Dynamic Attribute office screen is opened
    When  User select 1st, 2nd and 3rd record in the grid
    And   User double click on the 2nd record's row
    Then  2nd record will open in view mode with indication as < 2/3 >
    And   User will be able to navigate across all selected records by 'Next' and 'Previous' arrows

  @catalog @da @ui @ignore
  Scenario:View multi records from grid - select record and open non-selected record from Leading field's link
    Given Dynamic Attribute office screen is opened
    When  User select 2nd, 4th and 5th record in the grid
    And   User click on the 3rd record's leading field's link
    Then  3rd record will open in view mode with paging indication as < 2/4 >
    And   User will be able to navigate across all selected records by 'Next' and 'Previous' arrows

  @catalog @da @ui @ignore
  Scenario:View multi records from grid - select record and open non-selected record by double click
    Given Dynamic Attribute office screen is opened
    When  User select 2nd, 4th and 5th record in the grid
    And   User double click anywhere on the 6th record
    Then  6th record will open in view mode with paging indication as < 4/4 >
    And   'Next' arrow in paging navigation will be disabled
    And   User will be able to navigate to 'Previous' record by 'Previous' arrow

  @catalog @da @ui @ignore
  #Paging indication on Multiple Records Edit
  Scenario:Paging indication in case of multiple records open in Edit mode
    Given Dynamic Attribute office screen is opened
    When  User select 1st, 2nd and 3rd record in the grid
    And   Click on action tool bar 'Edit' button
    Then  first record will open in edit mode with indication as < 1/3 >
    And   'Previous' arrow in paging indication will be disabled for the first record
    And   User will be able to navigate to next record by Next arrow

  @catalog @da @ui @ignore
  #Paging indication for multiple selected filtered records.
  Scenario: Paging indication in case of filtered multiple records open in View mode
    Given Dynamic Attribute office screen is opened with 1st, 2nd, 3rd and 4th record selected
    When  User filter the grid such that 3rd record is filtered out
    And   Click on the action tool bar 'View' button
    Then  First record will open in View mode with Only 3 out of the 4 selected records in the pagination
    And   pagination indication will be < 1/3 >
    And   3rd record will not be part of pagination

  @catalog @da @ui @ignore
  Scenario: Paging indication in case of filtered multiple records open in Edit mode
    Given Dynamic Attribute office screen is opened with 1st, 2nd, 3rd and 4th record selected
    When  User filter the grid such that 3rd record is filtered out
    And   Click on the action tool bar 'Edit' button
    Then  First record will open in Edit mode with Only 3 out of the 4 selected records in the pagination
    And   pagination indication will be < 1/3 >
    And   3rd record will not be part of pagination

  @catalog @da @ui @ignore
  #Breadcrumb on paging indication
  Scenario:Breadcrumb displayed when records multiple records open in Edit mode
    Given Attribute 1st, 2nd and 3rd open in Edit mode from Dynamic Attribute office screen
    When  User is on 1st record open in Edit mode
    Then  breadcrumb will display 'Catalog > Dynamic Attribute > <Attribute ID of 1st record> - Edit'
    And   user will be able to navigate to 3rd record using paging control
    And   breadcrumb for 3rd record will display 'Catalog > Dynamic Attribute > Attribute ID of 3rd record>  Edit'

  @catalog @da @ui @ignore
  #Paging indication for new record
  Scenario:Paging indication in case of adding new record
    Given Dynamic Attribute office screen is opened
    When  User select 1st, 2nd and 3rd record in the grid
    And   Click on action tool bar 'Add' button
    Then  Create New Dynamic attribute screen will be displayed
    And   No paging control will be displayed on the screen

  @catalog @da @ui @ignore
  #Paging indication 'Next' and 'Previous' arrow behaviour
  Scenario: Next and previous should be disable accordingly
    Given Dynamic Attribute office screen is opened
    When  User select 1st, 2nd and 3rd record in the grid
    And   Click on action tool bar 'View' button
    Then  first record will open in view mode with indication as < 1/3 >
    And   'Previous' arrow in paging indication will be disabled for the first record
    And   paging control Next arrow will be disabled once user will navigate to last selected record (3rd record)
