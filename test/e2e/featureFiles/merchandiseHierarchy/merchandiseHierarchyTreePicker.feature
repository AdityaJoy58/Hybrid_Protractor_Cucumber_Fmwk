Feature: Set/Update Hierarchy Path using Tree Picker
  As a Retailer Catalog owner,
  I would like the ability to set and update the hierarchy path using an hierarchy picker
  So that the NR1 Catalog will be always up to date

#Hierarchy Tree Picker from Merchandise Hierarchy screen
  @catalog  @mh @set-update-path @ui @ignore
  Scenario: Verify Tree picker pop up is displayed when click on 'Set' button from Create Merchandise Hierarchy screen
    Given Create Merchandise Hierarchy screen
    When  User click on 'Set' button
    Then  Hierarchy Tree Picker pop up will be displayed
    And   The Pop-up title will be 'Select Parent'

  @catalog @mh @set-update-path @ui @ignore
  Scenario: Verify Tree picker pop up is displayed when click on 'Change' button from Edit Merchandise Hierarchy screen
    Given Edit Merchandise Hierarchy screen
    When  User click on 'change' button
    Then  Hierarchy Tree Picker pop up will be displayed
    And   The Pop-up title will be 'Select Parent'

  @catalog @mh @set-update-path @ui @ignore
  Scenario: Verify Hierarchy node lable as displayed in the Hierarchy Tree picker pop up in create mode
    Given Create Merchandise Hierarchy screen
    When  User open the Merchandise Hierarchy tree picker pop up
    Then  Tree Picker pop-up is displayed
    And   For each hierarchy node in the Tree Picker, the node lable will be the hierarchy node Title

  @catalog @mh @set-update-path @ui @ignore
  Scenario: Verify Hierarchy node lable as displayed in the Hierarchy Tree picker pop up in edit mode
    Given Edit Merchandise Hierarchy screen
    When  User open the Merchandise Hierarchy tree picker pop up
    Then  Tree Picker pop-up is displayed
    And   For each hierarchy node in the Tree Picker, the node lable will be the hierarchy node Title

# Node in Hierarchy Tree Picker
  @catalog @mh @set-update-path @ui @ignore
  Scenario: Verify Hierarchy Tree Picker pop up display the node current path value in create mode
    Given Create Merchandise Hierarchy screen
    When  User open the Merchandise Hierarchy tree picker pop up
    Then  Tree Picker pop-up is displayed
    And   'Current node's path' field in the pop-up will display the hierarchy path for the selected hierarchy node

  @catalog @mh @set-update-path @ui @ignore
  Scenario: Verify Hierarchy Tree Picker pop up display the node current path value in edit mode
    Given Edit Merchandise Hierarchy screen
    When  User open the Merchandise Hierarchy tree picker pop up
    Then  Tree Picker pop-up is displayed
    And   'Current node's path' field in the pop-up will display the hierarchy path for the selected hierarchy node

  @catalog @mh @set-update-path @ui @ignore
  Scenario: Verify default view of node's in Hierarchy Tree picker pop up in create mode
    Given Create Merchandise Hierarchy screen
    When  User open the Merchandise Hierarchy tree picker pop up
    Then  Tree Picker pop-up is displayed
    And   By default all the hierarchy node in the pop-up will be collapsed

  @catalog @mh @set-update-path @ui @ignore
  Scenario: Verify default view of node's in Hierarchy Tree picker pop up in edit mode
    Given Edit Merchandise Hierarchy screen
    When  User open the Merchandise Hierarchy tree picker pop up
    Then  Tree Picker pop-up is displayed
    And   By default all the hierarchy node in the pop-up will be collapsed

  @catalog @mh @set-update-path @ui @ignore
  Scenario: Verify selected node is highlighted in the hierarchy tree picker pop up
    Given Hierarchy Tree picker pop up is opened
    When  User select a hierarchy node
    Then  The selected node will get highlighted

# Hierarchy expand/collapse functionality
  #failing
  @catalog @mh @set-update-path @ui @ignore
  Scenario: Verify option to expand hierarchy node
    Given Hierarchy Tree picker pop up is open
    When  A node in hierarchy has descendants
    And   The hierarchy node is in collapsed mode
    Then  The hierarchy node will include a "+" icon next to it
    And   The hierarchy node will be bolded

  @catalog @mh @set-update-path @ui @ignore
  Scenario: Verify option to collapse hierarchy node
    Given Hierarchy Tree picker pop up is opened
    When  A node in hierarchy has descendants
    And   The hierarchy node is in expanded mode
    Then  The hierarchy node will include a "-" icon next to it
    And   The hierarchy node will be bolded

  @catalog @mh @set-update-path @ui @ignore
  Scenario: Verify option to expand/collapse for a node without descendants in the hierarchy
    Given Hierarchy Tree picker pop up is opened
    When  A node in hierarchy does not contain a descendants
    Then  The hierarchy node will not include any option to expand/collapse

  @catalog @mh @set-update-path @ui @ignore
  Scenario: Verify Hierarchy node expand action on click of expand icon
    Given Hierarchy Tree picker pop up is opened
    When  User click on '+' icon for a hierarchy node which has descendants
    Then  Hierarchy node will be expanded
    And   Direct child under hierarchy node will be displayed

  @catalog @mh @set-update-path @ui @ignore
  Scenario: Verify Hierarchy node expand action on click of hierarchy node label
    Given Hierarchy Tree picker pop up is opened
    When  User click on label for hierarchy node which has descendants
    Then  Hierarchy node will be Expanded
    And   Direct child under hierarchy node will be displayed

    #failing
  @catalog @mh @set-update-path @ui @ignore
  Scenario: Verify Hierarchy node collapse action on click of collapse icon
    Given Hierarchy Tree picker pop up is open
    When  User click on '-' icon for a hierarchy node which has descendants and is expanded
    Then  Hierarchy node will be collapsed
    And   All the hierarchy under the hierarchy node will be hidden

  @catalog @mh @set-update-path @ui @ignore
  Scenario: Verify Hierarchy node collapse action on click of hierarchy node label
    Given Hierarchy Tree picker Pop Up is opened
    When  User click on label for hierarchy node Which has descendants and is expanded
    Then  Hierarchy node will be collapsed
    And   All the hierarchy under the hierarchy node will be hidden

# Set/Change Parent for a hierarchy node using Tree Picker pop up
  @catalog @mh @set-update-path @ui @ignore
  Scenario: Default state of 'Set' button on Hierarchy Tree picker pop up
    Given Create Merchandise Hierarchy screen
    When  User click on 'Set' button
    Then  Hierarchy Tree picker pop up will be displayed
    And   The default value of the Parent field will be displayed as value for 'Current Node's path' in the Tree picker pop up
    And   The 'Set' button default state will be disabled

  @catalog @mh @set-update-path @ui @ignore
  Scenario: 'Set' button on Hierarchy Tree picker pop up
    Given Hierarchy Tree picker pop up is opened from Create Merchandise Hierarchy screen
    When  User select a hierarchy node
    Then  'Set' button will be enabled

  @catalog @mh @set-update-path @ui @ignore
  Scenario: Default state of 'Change' button on Hierarchy Tree picker pop up
    Given Edit Merchandise Hierarchy screen
    When  User click on 'change' button
    Then  Hierarchy Tree picker pop up will be displayed
    And   The current value of the Parent field will be displayed as value for 'Current Node's path' in the Tree picker pop up
    And   The 'Change' button default state will be disabled

  @catalog @mh @set-update-path @ui @ignore
  Scenario: 'Change' button on Hierarchy Tree picker pop up
    Given Hierarchy Tree picker pop up is opened from Edit Merchandise Hierarchy screen
    When  User select a hierarchy node
    Then  'Change' button will be enabled

  @catalog @mh @set-update-path @ui @ignore
  Scenario: 'Cancel' button on Hierarchy Tree picker pop up
    Given Hierarchy Tree picker pop up is opened from Create Merchandise Hierarchy screen
    When  User expanded hierarchy node's to select one of the hierarchy node from the hierarchy
    And   User click on 'Cancel' button
    Then  Selected hierarchy node will not be set as Parent for hierarchy node under creation
    And   Hierarchy Tree picker pop up will be closed

  @catalog @mh @set-update-path @functional @ignore
  Scenario: 'Cancel' button on Hierarchy Tree picker pop up
    Given Hierarchy Tree picker pop up is opened from Edit Merchandise Hierarchy screen
    When  User expanded hierarchy node's to select one of the hierarchy node from the hierarchy
    And   User click on 'Cancel' button
    Then  Selected hierarchy node will not set as Parent for hierarchy node under Edit
    And   Hierarchy Tree picker pop up will be closed

  @catalog @mh @set-update-path @ui @ignore
  Scenario: Set hierarchy parent using Tree picker pop up
    Given Hierarchy Tree picker pop up is opened from Create Merchandise Hierarchy screen
    When  User expanded hierarchy node's to select one of the hierarchy node from the hierarchy
    And   User click on 'set' button
    Then  Selected hierarchy node will be set as Parent for hierarchy node under creation
    And   Hierarchy Tree picker pop up will be closed

  @catalog @mh @set-update-path @functional
  Scenario: Change hierarchy parent using Tree picker pop up
    Given Hierarchy Tree picker pop up is opened from Edit Merchandise Hierarchy screen
    When  User expanded hierarchy node's to select one of the hierarchy node from the hierarchy
    And   User clicks on 'Change' button
    Then  Selected hierarchy node will be set as Parent for hierarchy node under Edit
    And   Hierarchy Tree picker pop up will be closed

  @catalog @mh @set-update-path @ui @ignore
  Scenario: Hierarchies not allowed for selection will not be displayed in hierarchy tree
    Given Hierarchy Tree picker pop up is opened
    When  User expands hierarchy nodes
    Then  Any hierarchy which is not allowed for selection will not be displayed in the hierarchy tree

# Search functionality on Hierarchy Tree picker pop up
  #failing
  @catalog @mh @set-update-path @ui @ignore
  Scenario: Search Text box on the Hierarchy Tree picker pop up
    Given Hierarchy Tree picker pop up is open
    When  User verify search feature on the Tree picker pop up
    Then  There will be a Search Text box available on the Hierarchy Tree picker pop up
    And   The default text in the text box will be 'Type to Search'

  @catalog @mh @set-update-path @functional
  Scenario: Search result on user input
    Given Hierarchy Tree picker pop up is opened
    When  User start typing in the search text box
    Then  Search will start as user type starting from 2nd character
    And   The search result will be presented in a flat list

  @catalog @mh @set-update-path @functional
  Scenario: Hierarchy node in search result
    Given Hierarchy Tree picker pop up is opened with search result displayed
    When  User verify the search result
    Then  Search result will display list of hierarchy node presenting merchandise hierarchy title and its path (upper levels) for each result in the list
    And   According to user’s input, text will be highlighted for each word containing input string

  @catalog @mh @set-update-path @ui @ignore
  Scenario: Option to clear search
    Given Hierarchy Tree picker pop up is opened
    When  User start typing in the search text box
    Then  A clear icon will be added to search field
    And   Clicking clear icon will clear the search

  @catalog @mh @set-update-path @ui @ignore
  Scenario: Matching result indication
    Given Hierarchy Tree picker pop up is opened
    When  User start typing in the search text box
    Then  Matching entries will be displayed in the search result list
    And   Total records indication will be displayed showing the number of matching results

  @catalog @mh @set-update-path @ui @ignore
  Scenario: Set Parent from the search result from Hierarchy Tree picker pop up
    Given Hierarchy Tree picker pop up is opened with search result displayed
    When  User tap to select one of the merchandise hierarchy node from the search result
    Then  The selected hierarchy node will be highlighted
    And   The selected hierarchy node will be set as Parent for the current hierarchy when user click on 'Set'/'Change' button

  @catalog @mh @set-update-path @ui @ignore
  Scenario: Hierarchies not allowed for selection will not be displayed in search result
    Given Hierarchy Tree picker pop up is opened
    When  User start typing in the search text box
    Then  Matching entries will be displayed in the search result list
    And   Any matching hierarchy which is not allowed for selection will not be displayed in the search result list

# Error on selection of invalid parent from tree picker
  #failing
  @catalog @mh @set-update-path @ui @ignore
  Scenario: Display error message when user select an invalid parent from hierarchy tree picker from Create screen
    Given Hierarchy Tree picker pop up is open from Create Merchandise Hierarchy screen
    When  User select child node of the current hierarchy node as parent
    And   User click on 'set' button
    Then  Error message will be displayed informing user that the selected node is invalid selection for Parent node

  @catalog @mh @set-update-path @ui @ignore
  Scenario: Display error message when user select an invalid parent from hierarchy tree picker from Edit screen
    Given Hierarchy Tree picker pop up is open from Edit Merchandise Hierarchy screen
    When  User select child node of the current hierarchy node as parent
    And   User clicks on 'Change' button
    Then  Error message will be displayed informing user that the selected node is invalid selection for Parent node