Feature: Create Dynamic Attribute
  As a retailer catalog owner
  I would like to create new item attributes in my catalog in an easy way from the Central Office
  so that I will be able to use them in the future for any use

  @catalog @da @create @ui @ignore
  Scenario: Verify the Tool bar actions
    Given Dynamic Attribute screen opened
    When User navigate to Add Dynamic Attribute page
    Then tool bar action Cancel, Save and Done should be active

  @catalog @da @create @functional
  Scenario:Verify the Add functionality
    Given Dynamic Attribute screen opened
    When User click on the tool bar action Add
    Then Add Dynamic Attribute screens should get opened with Dynamic attribute id and Dynamic Attribute name field

  @catalog @da @create @ui @ignore
  Scenario: Verify the Tab key functionality
    Given Edit dynamic attribute screen opened
    When User presses the tab key on the keyboard
    Then User should be able to move between fields by the fields order

  @catalog @da @create @functional
  Scenario: Verify the Save button functioanlity
    Given Add Dynamic attribute screen is opened
    When User enter the Attribute ID and Attribute name
    And click on Save button
    Then value got saved
    And Save changes stay in edit mode

  @catalog @da @create @functional
  Scenario: Verify the Done button functioanlity
    Given Add Dynamic attribute screen is opened
    When User enter the Attribute ID and Attribute name
    And click on Done button
    Then value got saved
    And Edit mode should get closed
    And attribute record should be displayed in view mode

  @catalog @da @create @functional @ignore
  Scenario: Verify the cancel button functioanlity with Yes Discard changes
    Given Add Dynamic attribute screen is opened
    When User enter the Attribute ID and Attribute name
    And click on cancel button
    Then A message should prompt asking if user want to discard the changes
    And user click on Yes
    Then values should not get saved and move back to previous screen

  @catalog @da @create @functional @ignore
  Scenario: Verify the cancel button functioanlity with No Discard changes
    Given Add Dynamic attribute screen is opened
    When User enter the Attribute ID and Attribute name
    And click on cancel button
    Then A message should prompt asking if user want to discard the changes
    And user click on No
    Then values should not get saved and stay in the record

  @catalog @da @create @functional
  Scenario: Verify that Dynamic Attribute Id is mandatory field
    Given Add Dynamic attribute screen is opened
    When User leave the Dynamic Attribute id as blank
    And enter the dynamic name
    And click on the save or done botton
    Then application should display an error message 'Attribute Id is mandatory.'

  @catalog @da @create @functional
  Scenario: Verify that Dynamic Attribute name is mandatory field
    Given Add Dynamic attribute screen is opened
    When User leave the Dynamic Attribute name as blank
    And enter the dynamic id
    And click on the save or done botton
    Then application should display an error message 'Attribute Name is mandatory.'

  @catalog @da @create @functional
  Scenario: Verify that Attribute with same id can not be saved
    Given Add Dynamic attribute screen is opened
    When User enter the attribute id which is already exist
    And click on the save or done botton
    Then application should display an error message 'An attribute with same id is already exist'

  @catalog @da @create @functional
  Scenario: Verify that record is saved sucessfully
    Given Add Dynamic attribute screen is opened
    When User enter the attribute id and attribute name
    And click on the save or done botton
    Then Value got saved successfully
    And application should display an message - 'Record saved successfully'

  @catalog @da @create @ui @ignore
  Scenario: Verify the length of Attribute ID field
    Given Add Dynamic attribute screen is opened
    When User enter the attribute id
    Then  Application should not allow user to enter more then 64 characters  in Attribute ID field

  @catalog @da @create @ui @ignore
  Scenario: Verify the business validation message on the attribute name field
    Given Add Dynamic attribute screen is opened
    When User enter the attribute name to the maximum character as 261
    Then  application should display a business validation message message - 'entered more than the maximum length (256).'

  @catalog @da @create @ui @ignore
  Scenario: Verify the breadcrumbs path
    Given Add Dynamic attribute screen is opened
    When User navigate to Add dynamic attribute screen
    Then  Bredcrumbs should get appear as Catalog -> Dynamic Attribute > New Dynamic Attribute
