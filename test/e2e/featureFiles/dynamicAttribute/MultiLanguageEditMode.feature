Feature: MultiLanguage Feature during Dynamic Attributes Edit
  As a retailer catalog owner,
  I would like to be able to translate the dynamic attribute name to different language
  So that it will be possible to display them in different languages

  @catalog @da @ml @functional
  Scenario:Verify the functionality of adding a new value in edit mode
    Given Edit Dynamic attribute is opened
    When User click on the culture button
    And User select the culture and enter the translation value
    And click on Add button
    Then Value should get saved in existing values

  @catalog @da @ml @ui @ignore
  Scenario: Verify the functionality of Ok button as disbale if no changes are made
    Given Edit Dynamic attribute is opened
    When User click on the culture button
    Then All the translation values should be in the editable mode
    And Ok button should be disable

  @catalog @da @ml @ui @ignore
  Scenario: Verify the functionality of enable ok button in case any changes are made
    Given Edit Dynamic attribute is opened
    When User click on the culture button
    And make changes in any of the translation values
    Then Ok button should get enabled