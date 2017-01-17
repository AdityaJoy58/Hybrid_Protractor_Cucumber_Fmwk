Feature: Hierarchy Path in Tree View
  As a Merchandise Hierarchy consumer via the central office,
  I would like to be able to see the merchandise hierarchy path is a tree view,
  So that I will be able to see and follow the path more easily

#Grid in Lower level section on Merchandise Hierarchy View Screen
#Pop-up on click of 'Path' field for a merchandise hierarchy node from the Merchandise Hierarchy grid
  @catalog  @mh @view @ui @ignore
  Scenario: Verify on top pop-up is displayed on click of 'Path' field for a merchandise hierarchy node from the grid
    Given User is on Merchandise Hierarchy View screen
    When  User click on 'Path' field for a hierarchy child node from lower level section
    Then  An always-on-top pop up will be displayed

  @catalog  @mh @view @ui @ignore
  Scenario: Verify on top pop-up remains displayed until closing it by clicking on the “close” button
    Given User is on Merchandise Hierarchy View screen
    When  User click on 'Path' field for a hierarchy child node from lower level section to open on-top pop up
    Then  On-top pop up will be closed when user click on 'Close' button

# Contents of the on-top pop up
  @catalog  @mh @view @ui @ignore
  Scenario: Verify on contents of top pop-up
    Given User is on Merchandise Hierarchy View screen
    When  User click on 'Path' field for a hierarchy child node from lower level section to open on-top pop up
    Then  The on-top pop up will display hierarchy tree with selected node's direct upper path up to the top level node

  @catalog  @mh @view @ui @ignore
  Scenario: Verify on-top pop up only display hierarchy and not the items
    Given User is on Merchandise Hierarchy View screen
    When  User click on 'Path' field for a hierarchy child node which is a leaf node from lower level section to open on-top pop up
    Then  The on-top pop up will display hierarchy tree with selected node's direct upper path up to the top level node
    And   The hierarchy tree will not show any items under the selected node in the hierarchy tree

# Hierarchy node in hierarchy tree
  @catalog  @mh @view @ui @ignore
  Scenario: Verify "+" icon on hierarchy node indicating that the node is collapsed in the hierarchy tree in on-top pop up
    Given User is on Merchandise Hierarchy View screen
    When  User click on 'Path' field for a hierarchy child node from lower level section (which has further child) to open on-top pop up
    Then  The current hierarchy node which has further descendants will show "+" icon indicating that the node is collapsed

  @catalog  @mh @view @ui @ignore
  Scenario: Verify "-" icon on hierarchy node indicating that the node is expanded in the hierarchy tree in on-top pop up
    Given User is on Merchandise Hierarchy View screen
    When  User click on 'Path' field for a hierarchy child node from lower level section to open on-top pop up
    Then  Any parent node of current hierarchy node which is expanded will show "-" icon indicating that the node is expanded

# Current node indications
  @catalog  @mh @view @ui @ignore
  Scenario: Verify current node is indicated in the On-Top pop up
    Given User is on Merchandise Hierarchy View screen
    When  User click on 'Path' field for a hierarchy child node from lower level section to open on-top pop up
    Then  The On-Top pop up will show hierarchy Tree with current selected hierarchy node as highlighted
    And   There will be a quick view icon ">" next to the current node

  @catalog  @mh @view @ui @ignore
  Scenario: verify mouse over on a node in the On-Top pop up
    Given User is on Merchandise Hierarchy View screen
    When  User click on 'Path' field for a hierarchy child node from lower level section to open on-top pop up
    And   User mouse over on any node in the hierarchy tree in pop up
    Then  Node under mouse over will also be highlighted
    And   A quick view icon ">" will also be displayed next to node

# On Top pop up title
  @catalog  @mh @view @ui @ignore
  Scenario: Verify On-Top pop up title
    Given User is on Merchandise Hierarchy View screen
    When  User click on 'Path' field for a hierarchy child node from lower level section
    Then  On-Top pop up will be displayed
    And   The pop up title will be 'Current node hierarchy'

# On click on a hierarchy node in hierarchy tree
  @catalog  @mh @view @ui @ignore
  Scenario: Verify on click of a hierarchy node in hierarchy tree will expand/collapse the node
    Given User is on Merchandise Hierarchy View screen
    When  User click on 'Path' field for a hierarchy child node from lower level section to open on-top pop up
    And   User click on a hierarchy node which is in collapse mode
    Then  The hierarchy node will expand
    And   The hierarchy node will collapse again when user again click on the hierarchy node

  @catalog  @mh @view @ui @ignore
  Scenario: Verify selected node is indicated in the On-Top pop up
    Given User is on Merchandise Hierarchy View screen
    When  User click on 'Path' field for a hierarchy child node from lower level section to open on-top pop up
    And   User click on any hierarchy node
    Then  The selected node is highlighted
    And   A quick view icon ">" will also be displayed next to node

# Quick view icon in On-Top pop up
  @catalog  @mh @view @functional
  Scenario: Verify navigation to hierarchy screen in view mode on click of quick view icon from On-Top pop up
    Given User is on Merchandise Hierarchy View screen
    When  User click on 'Path' field for a hierarchy child node from lower level section to open on-top pop up
    And   User mouse over on any hierarchy node and click on the quick view icon
    Then  On-Top pop up will be closed
    And   User will be navigated to Hierarchy screen in View mode for the node

#Grid in Merchandise Hierarchy Office Screen
#Pop-up on click of 'Path' field for a merchandise hierarchy node from the Merchandise Hierarchy grid
  @catalog  @mh @view @ui @ignore
  Scenario: Verify on top pop-up is displayed on click of 'Path' field for a merchandise hierarchy node from the grid
    Given User on Merchandise Hierarchy Office screen
    When  User click on 'Path' field for a hierarchy node
    Then  An always-on-top pop up will be displayed

  @catalog  @mh @view @ui @ignore
  Scenario: Verify on top pop-up remains displayed until closing it by clicking on the “close” button
    Given User on Merchandise Hierarchy Office screen
    When  User click on 'Path' field for a hierarchy node to open on-top pop up
    Then  On-top pop up will be closed when user click on 'Close' button

# Contents of the on-top pop up
  @catalog  @mh @view @ui @ignore
  Scenario: Verify on contents of top pop-up
    Given User on Merchandise Hierarchy Office screen
    When  User click on 'Path' field for a hierarchy node to open on-top pop up
    Then  The on-top pop up will display hierarchy tree with selected node's direct upper path up to the top level node

  @catalog  @mh @view @ui @ignore
  Scenario: Verify on-top pop up only display hierarchy and not the items
    Given User on Merchandise Hierarchy Office screen
    When  User click on 'Path' field for a hierarchy node which is a leaf node to open on-top pop up
    Then  The on-top pop up will display hierarchy tree with selected node's direct upper path up to the top level node
    And   The hierarchy tree will not show any items under the selected node in the hierarchy tree

# Hierarchy node in hierarchy tree
  @catalog  @mh @view @ui @ignore
  Scenario: Verify "+" icon on hierarchy node indicating that the node is collapsed in the hierarchy tree in on-top pop up
    Given User on Merchandise Hierarchy Office screen
    When  User click on 'Path' field for a hierarchy node (which has further child) to open on-top pop up
    Then  The current hierarchy node which has further descendants will show "+" icon indicating that the node is collapsed

  @catalog  @mh @view @ui @ignore
  Scenario: Verify "-" icon on hierarchy node indicating that the node is expanded in the hierarchy tree in on-top pop up
    Given User on Merchandise Hierarchy Office screen
    When  User click on 'Path' field for a hierarchy node to open on-top pop up
    Then  Any parent node of current hierarchy node which is expanded will show "-" icon indicating that the node is expanded

# Current node indications
  @catalog  @mh @view @ui @ignore
  Scenario: Verify current node is indicated in the On-Top pop up
    Given User on Merchandise Hierarchy Office screen
    When  User click on 'Path' field for a hierarchy node to open on-top pop up
    Then  The On-Top pop up will show hierarchy Tree with current selected hierarchy node as highlighted
    And   There will be a quick view icon ">" next to the current node

  @catalog  @mh @view @ui @ignore
  Scenario: verify mouse over on a node in the On-Top pop up
    Given User on Merchandise Hierarchy Office screen
    When  User click on 'Path' field for a hierarchy node to open on-top pop up
    And   User mouse over on any node in the hierarchy tree in pop up
    Then  Node under mouse over will also be highlighted
    And   A quick view icon ">" will also be displayed next to node

# On Top pop up title
  @catalog  @mh @view @ui @ignore
  Scenario: Verify On-Top pop up title
    Given User on Merchandise Hierarchy Office screen
    When  User click on 'Path' field for a hierarchy node
    Then  On-Top pop up will be displayed
    And   The pop up title will be 'Current node hierarchy'

# On click on a hierarchy node in hierarchy tree
  @catalog  @mh @view @ui @ignore
  Scenario: Verify on click of a hierarchy node in hierarchy tree will expand/collapse the node
    Given User on Merchandise Hierarchy Office screen
    When  User click on 'Path' field for a hierarchy node to open on-top pop up
    And   User click on a hierarchy node which is in collapse mode
    Then  The hierarchy node will expand
    And   The hierarchy node will collapse again when user again click on the hierarchy node

  @catalog  @mh @view @ui @ignore
  Scenario: Verify selected node is indicated in the On-Top pop up
    Given User on Merchandise Hierarchy Office screen
    When  User click on 'Path' field for a hierarchy node to open on-top pop up
    And   User click on any hierarchy node
    Then  The selected node is highlighted
    And   A quick view icon ">" will also be displayed next to node
