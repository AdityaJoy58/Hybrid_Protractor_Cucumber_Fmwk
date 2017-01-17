Feature: Lower Level Nodes of Merchandise Hierarchy in Tree View
  As a Merchandise Hierarchy consumer via the central Office,
  I would like to have the ability to view the lower level nodes for each hierarchy in a more graphical way via the Central Office
  so that it will provide a better understanding of the hierarchy

#Display hierarchy tree in lower level section
  @catalog  @mh @view @ui @ignore
  Scenario: Verify change in display of child node list to hierarchy tree view on Hierarchy view screen lower level section
    Given User on Merchandise Hierarchy View screen
    When  User click on 'Tree View' button from lower level section
    Then  Child node list in lower level section will be changed to hierarchy tree view displaying entire hierarchy tree

  @catalog  @mh @view @ui @ignore
  Scenario: Verify Tree View only display hierarchy and not the items
    Given User on Merchandise Hierarchy View screen
    When  User click on 'Tree View' button from lower level section
    And   User expand the entire hierarchy tree
    Then  The hierarchy tree in lower level section will only display hierarchy nodes
    And   No items will be displayed below the leaf node in the hierarchy tree

# Expand / Collapse option on Hierarchy node in hierarchy tree
  @catalog  @mh @view @ui @ignore
  Scenario: Verify the expand option "+" icon on hierarchy node indicating that the node is collapsed in the hierarchy tree view
    Given User on Merchandise Hierarchy View screen
    When  User click on 'Tree View' button from lower level section
    Then  The hierarchy node will show "+" icon indicating that the node is collapsed and has further descendants

  @catalog  @mh @view @ui @ignore
  Scenario: Verify the collapse option "-" icon on hierarchy node indicating that the node is expanded in the hierarchy tree view
    Given User on Merchandise Hierarchy View screen
    When  User click on 'Tree View' button from lower level section
    Then  The hierarchy node will show "-" icon indicating that the node is expanded

# On click on a hierarchy node in hierarchy tree
  @catalog  @mh @view @ui @ignore
  Scenario: Verify on click of a hierarchy node in hierarchy tree will highlight the node
    Given User on Merchandise Hierarchy View screen
    When  User click on 'Tree View' button from lower level section
    And   User click on a hierarchy node from the hierarchy tree view
    Then  The selected node will be highlighted
    And   A quick view icon ">" will also be displayed next to the node

# Quick view icon in On-Top pop up
  @catalog  @mh @view @functional
  Scenario: Verify navigation to hierarchy screen in view mode on click of quick view icon from Tree View
    Given User on Merchandise Hierarchy View screen
    When  User click on 'Tree View' button from lower level section
    And   User click on a hierarchy node from the hierarchy tree view
    And   User click on the quick view icon
    Then  User will be navigated to Hierarchy screen in View mode for the selected node

# Button label in Tree View
  @catalog  @mh @view @ui @ignore
  Scenario: Verify 'Tree View' button label will change to 'Grid View' when hierarchy tree is displayed in lower level section
    Given User on Merchandise Hierarchy View screen
    When  User click on 'Tree View' button from lower level section
    Then  Lower level section will display hierarchy tree
    And   Button label in lower level section will change to 'Grid View'
