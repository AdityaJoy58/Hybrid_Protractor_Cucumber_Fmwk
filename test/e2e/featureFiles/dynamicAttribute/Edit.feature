Feature: Edit Dynamic Attribute
  In order to search for dynamic attribute
  As a retailer catalog owner
  I would like to update existing item attribute in my catalog in an easy way from the Central Office
  so that the attribute will fit my needs

  @catalog @da @edit @functional
  Scenario:Verify the edit functionality
    Given Dynamic attribute screen is opened
    When User select the record
    And click on the tool bar action Edit
    Then Dynamic Attribute name should be editable field
    And Dynamic Attribute ID, creation date and last updated date should be Read only


  @catalog @da @edit @ui @ignore
  Scenario: Verify that Attribute ID is non editable field
    Given Dynamic attribute screen is opened
    When User navigate to Edit Dynamic Attribute screen
    Then User should not be able to edit the Attribute ID

  @catalog @da @edit @ui @ignore
  Scenario: Verify the Tool bar actions
    Given Dynamic attribute screen is opened
    When User navigate to Edit Dynamic Attribute screen
    Then tool bar actions Save, Done and Cancel should be active

  @catalog @da @edit @ui @ignore
  Scenario: Verify the breadcrumbs path
    Given Dynamic attribute screen is opened
    When User navigate to Edit Dynamic Attribute screen
    Then  Breadcrumbs path display as Catalog -> Dynamic Attribute  >  Dynamic Attribute A - edit mode

  @catalog @da @edit @functional
  Scenario: Verify that Dynamic Attribute name is mandatory fields
    Given Edit Dynamic attribute screen is opened
    When User leave the Dynamic Attribute name as Blank
    And click on the save or done button
    Then application should display an error message 'Attribute Name is Mandatory.'

  @catalog @da @edit @ui @ignore
  Scenario: Verify the business validation message on the attribute name field length
    Given Edit Dynamic attribute screen is opened
    When User enter the Attribute name to the maximum character as 256
    Then  Application should display a business validation message message - 'entered more than the maximum length (256).'

  @catalog @da @edit @functional
  Scenario: Verify the Save button functionality
    Given Edit Dynamic attribute screen is opened
    When User edit the Attribute name
    And click on the save button
    Then value is saved
    And save changes remain in edit mode

  @catalog @da @edit @functional
  Scenario: Verify the Done button functionality
    Given Edit Dynamic attribute screen is opened
    When User edit the Attribute name
    And click on Done button
    Then value is saved
    And Edit mode should get closed and attribute record will be displayed in view mode