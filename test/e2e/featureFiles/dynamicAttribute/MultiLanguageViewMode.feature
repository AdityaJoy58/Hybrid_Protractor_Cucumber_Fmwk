Feature: MultiLanguage Feature during Dynamic Attributes View
  As a retailer catalog owner,
  I would like to be able to translate the dynamic attribute name to different language
  So that it will be possible to display them in different languages

  @catalog @da @ml @ui @ignore
  Scenario: View translation on attribute name for which translations exist
    Given View Dynamic Attribute screen is opened
    When User click on the culture icon of Attribute name
    Then A pop up should get opened with the culture and value
    And User should be able to view all the existing transalation values for that attributes
    And User should not be able to make any changes on the pop up


  @catalog @da @ml @functional
  Scenario: Attribute name in Default language should in view mode
    Given Dynamic Attribute screen is opened
    When User drill down a record in view mode
    Then Attribute name should get appear in default language (English)

  @catalog @da @ml @ui @ignore
  Scenario: No transalation values defined for a value
    Given View Dynamic Attribute screen opened
    When User view an attribute for which translation does not exist
    Then Culture icon should be disable

  @catalog @da @ml @ui @ignore
  Scenario: clicking or mouse over on the culture icon of attribute name for which no transalation values defined for a value
    Given View Dynamic Attribute screen opened
    When User click or mouse over on the culture icon of attribute name for which no transalation values defined for a value
    Then Relevent text message should be displayed as 'No Translation were define'

  @catalog @da @ml @ui @ignore
  Scenario: Scroll bar in order to view the entire translation
    Given View Dynamic Attribute Screen is opened
    When User click on culture button
    Then scroll bar should get appear in order to view all the translation values

  @catalog @da @ml @ui @ignore
  #Depend on ellipsis
  Scenario: Verify that there should be no ellipsis in view mode
    Given View Dynamic Attribute screen is opened
    When User view a translation value which is added with ellipsis
    Then User should be able to view the same translation value without ellipsis in view mode