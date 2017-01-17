Feature: View Dynamic Attribute
  In order to add, edit and view item attributes
  As a retailer catalog owner
  I would like to be able to view existing item attribute details in my catalog from the Central Office
  so that I can verify that the attribute fit my needs

  @catalog @da @view @functional
  Scenario: View dynamic attributes in view mode
    Given  Dynamic attribute screen Opened
    When User select the record by checkbox
    And Click on the tool bar action View
    Then record should get opened with the attributes Dynamic Attribute Id, Dynamic Attribute name, creation date and Last update name


  @catalog @da @view @functional
  Scenario: Verify the edit functionality in view mode
    Given  Dynamic attribute screen Opened
    When User select the record by checkbox
    And Click on the tool bar action View
    Then Edit button should be active
    And user should be able to edit the record in edit mode by clicking edit button

  @catalog @da @view @ui @ignore
  Scenario: Verify the breadcrumbs path
    Given Dynamic attribute screen Opened
    When User select the record by checkbox
    And Click on the tool bar action View
    Then  Breadcrumbs path display as Catalog -> Dynamic Attribute > Dynamic Attribute A





