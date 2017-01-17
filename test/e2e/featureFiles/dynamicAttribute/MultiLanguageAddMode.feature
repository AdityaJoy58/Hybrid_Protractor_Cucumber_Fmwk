Feature: MultiLanguage Feature during Dynamic Attributes Add
  As a retailer catalog owner,
  I would like to be able to translate the dynamic attribute name to different language
  So that it will be possible to display them in different languages

  @catalog @da @ml @functional
  Scenario:Verify the Add functionality in case user enter the attribute name
    Given Add Dynamic Attribute screen is opened
    When User enter the Attribute name
    And User click on the Culture button
    Then A pop up should get opened with the Culture and value
    And default culture and value will be displayed in the existing table below culture drop down

  @catalog @da @ml @ui @ignore
  Scenario:Verify the Add functionality in case user does not enter the attribute name
    Given Add Dynamic Attribute screen is opened
    When User leave the attribute name as blank
    And User click on the Culture button
    Then A pop up should get opened with the Culture and value
    And the system default culture will be displayed
    And the focus will be on the value field

  @catalog @da @ml @ui @ignore
  Scenario:Verify the culture drop down with flag
    Given Culture pop-up is opened
    When click on the drop down in pop up
    Then drop down should get displayed with different cultures
    And Each value should get display with relevant flag and country value in parenthesis

  @catalog @da @ml @ui @ignore
  Scenario:Verify the selection in culture drop down
    Given Culture pop-up is opened
    When User select the language from culture drop down
    Then Country should get appear with the corresponding flag in Parenthesis

  @catalog @da @ml @ui @ignore
  Scenario:Verify the culture drop down and value column in pop up
    Given Culture pop-up is opened
    Then A pop up should get opened with the Culture and value
    And User should be able to select the language from the culture drop down
    And User should be able to define the value for particular language

  @catalog @da @ml @ui @ignore
  Scenario: Verify the functionality that all the existing translation values should be in editable mode
    Given Culture pop-up is opened
    When User add the translation values
    And Values got added in existing values
    Then All the translation values should be in the Editable mode
    And User should be able to edit any existing value

  @catalog @da @ml @functional
  #Scroll down functionality needs to be implemented
  Scenario:Verify add functionality of culture and value in existing values
    Given Culture pop-up is opened
    When User select the language from culture drop down
    And User define the value for that language
    And User click on Add button
    Then language and value should get added in the bottom of the existing value
    And User should get noticed that add was performed

  @catalog @da @ml @ui @ignore
  #Black dot not working needs to be implemented
  Scenario:Verify add functionality of mouse over on the rows
    Given This scenario is UI Ignored - "UI scenarios are not implemented."
    And Culture pop-up is opened
    When User mouse over on the translation values in existing table
    Then a black dot and delete icon should keep on moving with mouse over

  @catalog @da @ml @functional
  Scenario:Verify that user is allowed to edit the existing values in add mode
    Given Culture pop-up is opened
    When User select a culture from drop down and enter the translation value
    And Value added in existing values
    Then User should be able to edit the existing translation values

  @catalog @da @ml @ui @ignore
  Scenario: Verify that user can enter one translation value against one language
    Given Culture pop-up is opened
    When Culture already exist in the translation values
    Then that culture will be displayed in the drop list as disabled.

  @catalog @da @ml @ui @ignore
  #Line should get shifted down
  Scenario:Verify add Translation Value text box length and warning message
    Given Culture pop-up is opened
    When user select the language from culture drop down
    And User define the value for that language to the max 256 characters
    Then User should be able to continue writing up to max allowed characters
    And Line should get shifted down to second row once characters exceed the length

  @catalog @da @ml @ui @ignore
  #Line should break in 2 rows
  Scenario:Verify text box truncation in 2 lines
    Given Culture pop-up is opened in create mode
    When user select the language from culture drop down
    And User define the value for that language which contains 2 lines
    Then value should get saved in Existing value
    And It should break in to 2 lines

  @catalog @da @ml @ui @ignore
  #Need ellipsis functionality
  Scenario:Verify text box truncation more than 2 lines and ellipsis for the existing translation values in pop up
    Given Culture pop-up is opened in create mode
    When user select the language from culture drop down
    And User define the value for that language to the max 256 characters
    And more than 3 lines are needed to display
    Then value should get saved in Existing value
    And It should get truncated and added with ellipsis

  @catalog @da @ml @ui @ignore
  #Need ellipsis functionality
  Scenario:Verify the functionality using view full translation name using a tooltip
    Given Culture pop-up is opened
    When User add transalation value with max 256 character
    And Value got saved with ellipsis
    And User mouse over on anywhere on the text
    Then User should be able to view full translation value on tooltip

  @catalog @da @ml @ui @ignore
  #Need ellipsis functionality
  Scenario:Verify the functionality of clicking on the elipsis
    Given Culture pop-up is opened
    When User add transalation value with max 256 character
    And Value got saved with ellipsis
    And User click the ellipsis
    Then text area should get expanded to show the full translation value
    And Cursor should be there in the end of the text
    And User should be able to edit the value

  @catalog @da @ml @ui @ignore
  Scenario:Verify the functionality of highlighting the characters in culture drop down
    Given Culture pop-up is opened
    When user start entering the character in the culture drop down box
    Then Text should get highlighted according to the user's input for each word

  @catalog @da @ml @ui @ignore
  #Need clear icon functionality
  Scenario:Verify the functionality of clear icon to clear search
    Given Culture pop-up is opened
    When User start entering the character in the culture drop down box
    Then Text should get highlighted according to the user's input for each word
    And User should be able to clear the search by clear icon

  @catalog @da @ml @ui @ignore
  #Need clear icon functionality
  Scenario:Verify that after using the clear button, search results will clear and full tree will redisplayed
    Given Culture pop-up is opened
    When User start entering the character in the culture drop down box
    And User clear the search by clear icon
    Then search results will clear and full tree would get redisplayed

  @catalog @da @ml @ui @ignore
  Scenario:Verify the functionality of enable Add button
    Given Culture pop-up is opened
    When User select a culture
    And Start entering single character in transalation values
    Then Button Add should get enabled

  @catalog @da @ml @ui @ignore
  Scenario:Verify the functionality of enable OK button
    Given Culture pop-up is opened
    When User add a value in the existing list
    Then Button OK should get enabled

  @catalog @da @ml @ui @functional
  Scenario:Verify the functionality of OK button
    Given Culture pop-up is opened
    When User add a value in the existing list
    And User click on the OK button
    Then Pop up should get closed
    And Save changes in the existing values

  @catalog @da @ml @ui @ignore
  Scenario:Verify the functionality of Cancel button
    Given Culture pop-up is opened
    When User add a value in the existing list
    And User click on the cancel button
    Then Pop up should get closed
    And changes would not got saved
# Given This scenario is UI Ignored - "UI scenarios are not implemented."
  @catalog @da @ml @ui @ignore
  Scenario:Verify the functionality of displaying the delete icon
    Given This scenario is UI Ignored - "UI scenarios are not implemented."
    And Culture pop-up is opened
    When clicking or mouse hovering on one of the records
    Then delete icon should be displayed on the records row

  @catalog @da @ml @ui @ignore
  Scenario:Verify the functionality of displaying the delete text as tooltip
    Given Culture pop-up is opened
    When user point specifically on the delete icon
    Then delete text should be displayed as tooltip

  @catalog @da @ml @ui @ignore
  #Scroll
  Scenario:Verify the functionality of scroll bar in the pop up
    Given Culture pop-up is opened
    When Exiting values of the translation values got increases
    Then a scroll down should get added on the right side
