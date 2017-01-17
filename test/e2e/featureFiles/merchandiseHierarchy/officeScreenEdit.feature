Feature: Edit Merchandise Hierarchy
  As a Retailer catalog owner,
  I would like to have an option to update existing hierarchies in NR1 repository from the Central Office
  so that the NR1 catalog will be always up to date

#Hierarchy Details Section entries
  @catalog @mh @edit @ui @ignore
  Scenario: Verify entries in Hierarchy Details section on Edit Merchandise Hierarchy Office Screen
    Given Edit Merchandise Hierarchy Office Screen
    When  User verify the entries in the hierarchy Details section
    Then  Hierarchy details section will have 'Code','Title','Description','Parent' fields
    And   'Code' field will be the Mandatory field

# Elongation and Expansion feature on Code and Title field
  @catalog @mh @edit @ui @ignore
  Scenario: Verify Code field size allow user input only upto the maximum size allowed
    Given Edit Merchandise Hierarchy Office Screen
    When  User type into code field
    And   User has typed maximum allowed number of characters
    Then  User will not be able to type into the field
    And   Message will be displayed informing user maximum allowed size has been reached

  @catalog @mh @edit @ui @ignore
  Scenario: Verify Title field size dynamically (expand vertically) according to user input upto the maximum allowed size
    Given Edit Merchandise Hierarchy Office Screen
    When  User type into title field
    Then  title field will size dynamically (expand vertically) to accommodate user input
    And   user will not be allowed to type further when maximum allowed size has been reached
    And   Message will be displayed informing user maximum allowed size has been reached

#Parent field in Hierarchy Details Section
  @catalog @mh @edit @ui @ignore
  Scenario: Verify Parent field value in Hierarchy Details section on Edit Merchandise Hierarchy Office Screen
    Given Edit Merchandise Hierarchy Office Screen
    When  User verify the Parent field value in the Hierarchy details section
    Then  Parent Field  will only display ellipsis and the parent value with a slash between them
    And   the Parent value will be bolded

  @catalog @mh @edit @ui @ignore
  Scenario: Verify entire Parent field value shown in tool tipaction buttons 'Edit' and 'Add' will be Hidden
    Given Edit Merchandise Hierarchy Office Screen
    When  user mouse over on Parent field
    Then  Tool tip will be displayed
    And   Entire Parent field value will be shown in tool tip

# Ellipsis in Parent field
  @catalog @mh @edit @ui @ignore
  Scenario: Verify Ellipsis button behaviour on mouse over
    Given Edit Merchandise Hierarchy Office Screen
    When  user mouse over on Ellipsis in Parent field
    Then  Ellipsis will be bolded
    And   Ellipsis will change its shape to button

  @catalog @mh @edit @ui @ignore
  Scenario: Verify Parent field is expanded on click on Ellipsis
    Given Edit Merchandise Hierarchy Office Screen
    When  user click on Ellipsis in Parent field
    Then  Parent field will be expanded to show entire path with parent Bolded
    And   there will be an arrow icon to collapse the Parent Field

  @catalog @mh @edit @ui @ignore
  Scenario: Verify Parent fields is collapsed again to show Ellipsis on clicking arrow icon.
    Given Edit Merchandise Hierarchy Office Screen with Parent field expanded
    When  user click on arrow icon in the Parent field
    Then  Parent field will Collapse Back
    And   will show ellipsis and the Hierarchy parent

# Culture feature for Title and Description fields in Edit Merchandise Hierarchy Office Screen
  @catalog @mh @edit @ui @ignore
  Scenario: Verify culture feature on Title field in Edit Merchandise Hierarchy Office Screen
    Given Edit Merchandise Hierarchy Office Screen
    When  User verify the Title field in Edit Merchandise Hierarchy Office Screen
    Then  A culture Icon will be available for the Field

  @catalog @mh @edit @ui @ignore
  Scenario: Verify culture feature on Description field in Edit Merchandise Hierarchy Office Screen
    Given Edit Merchandise Hierarchy Office Screen
    When  User verify the Description field in edit Merchandise Hierarchy Office Screen
    Then  A culture Icon will be available for the Field

  @catalog @mh @edit @ui @ignore
  Scenario: Verify on click behaviour for Culture icon for Title field in Edit Merchandise Hierarchy Office Screen
    Given Edit Merchandise Hierarchy Office Screen
    When  User click on culture icon for Title Field in Edit Merchandise Hierarchy Office Screen
    Then  A culture pop-up will open for the field

  @catalog @mh @edit @ui @ignore
  Scenario: Verify on click behaviour for Culture icon for Title field in Edit Merchandise Hierarchy Office Screen when user has edited value for the Title field
    Given Edit Merchandise Hierarchy Office Screen
    When  User edited the value for Title field
    And   User click on culture icon for Title field
    Then  Culture pop-up will open for the field
    And   The user edited value will be displayed as the value for the default culture for Title field in the pop-up

  @catalog @mh @edit @ui @ignore
  Scenario: Verify on click behaviour for Culture icon for Description field in Edit Merchandise Hierarchy Office Screen
    Given Edit Merchandise Hierarchy Office Screen
    When  User click on culture icon for Description field in Edit Merchandise Hierarchy Office Screen
    Then  A culture pop-up will open for the field

  @catalog @mh @edit @ui @ignore
  Scenario: Verify on click behaviour for Culture icon for Description field in Edit Merchandise Hierarchy Office Screen when user has edited value for the Description field
    Given Edit Merchandise Hierarchy Office Screen
    When  User edited the value for Description field
    And   User click on culture icon for Description field
    Then  Culture pop-up will open for the field
    And   The user edited value will be displayed as the value for the default culture for Description field in the pop-up

# Keyboard Tab feature
  @catalog @mh @edit @ui @ignore
  Scenario: Verify user is able to navigate among different fields using keyboard tab on Edit Merchandise Hierarchy Office Screen
    Given Edit Merchandise Hierarchy Office Screen
    When  User clicks on any field in Hierarchy Details section and then click on tab from keyboard
    Then  User will be able to navigate among different fields on screen using Tab from keyboard

# 'Change' button click display Tree picker pop-up
  @catalog @mh @edit @ui @ignore
  Scenario: Verify Merchandise hierarchy tree picker pop-up displayed on click of 'Change' button
    Given Edit Merchandise Hierarchy Office Screen
    When  User click on 'Change' button
    Then  Merchandise hierarchy tree picker pop-up will be displayed

# Action buttons and validations
  @catalog @mh @edit @ui @ignore
  Scenario: Verify the Action buttons displayed on Edit Merchandise Hierarchy Office Screen for a hierarchy node which is not the lowest level node in hierarchy
    Given Edit Merchandise Hierarchy Office Screen
    When  User verify Action buttons available in the tool bar on the screen
    Then  Following action buttons will be displayed : 'Save','Done','Cancel'
    And   action buttons 'Edit' will be hidden

  @catalog @mh @edit @ui @ignore
  Scenario: Verify the Action buttons displayed on Edit Merchandise Hierarchy Office Screen for a hierarchy node which is the lowest level node in hierarchy
    Given Edit Merchandise Hierarchy Office Screen
    When  User verify Action buttons available in the tool bar on the screen
    Then  Following action buttons will be displayed : 'Save','Done','Cancel'

  @catalog @mh @edit @functional
  Scenario: Verify on clicking 'Save' action button, the hierarchy is saved and the screen stays in Edit mode.
    Given Edit Merchandise Hierarchy Office Screen
    When  User make changes to the field values
    And   click 'Save' button
    Then  The changes Made to the hierarchy will be saved
    And   Notification will be displayed to user that the record was saved successfully
    And   Merchandise hierarchy screen will be displayed in edit mode
    And   breadcrumb will display  Catalog > merchandise Hierarchy >hierarchy title - Edit

  @catalog @mh @edit @functional
  Scenario: Verify on clicking Done action button, the hierarchy is saved and the screen stays in View mode.
    Given Edit Merchandise Hierarchy Office Screen
    When  User make changes to the field values
    And   click 'Done' button
    Then  The changes Made to the hierarchy will be saved
    And   Notification will be displayed to user that the record was saved successfully
    And   Merchandise hierarchy screen will be displayed in view mode
    And   breadcrumb Will display  Catalog > Merchandise Hierarchy> hierarchy title

  @catalog @mh @edit @functional
  Scenario: Verify on clicking Save action button with no hierarchy code
    Given Edit Merchandise Hierarchy Office Screen
    When  User removes data in Code field or Title Field or Description Field
    And   click 'Save' button
    Then  The hierarchy will not be saved
    And   Error message will be displayed informing user that Required Fields are mandatory

  @catalog @mh @edit @functional
  Scenario: Verify on clicking Save action button with no hierarchy code
    Given Edit Merchandise Hierarchy Office Screen
    When  User removes data in Code field or Title Field or Description Field
    And   click 'Done' button
    Then  The hierarchy will not be saved
    And   Error message will be displayed informing user that Required Fields are mandatory

  @catalog @mh @edit @functional
  Scenario: Verify on clicking Save action button with existing hierarchy code
    Given Edit Merchandise Hierarchy Office Screen
    When  User enters existing hierarchy code data in Code field
    And   click 'Save' button
    Then  The hierarchy will not be saved
    And   Error message will be displayed informing user record with the same Code already exist

  @catalog @mh @edit @ui @ignore
  Scenario: Verify Cancel message prompt on navigating away from Edit Merchandise Hierarchy Office Screen
    Given Edit Merchandise Hierarchy Office Screen
    When  User enters all the valid information in required fields
    And   User navigate away from screen by using back button\ using breadcrumbs\ page browsing\ other
    Then  Message prompt will be displayed asking user if user would like to discard changes
    And   Message prompt will have 'Yes' And 'No' Options

# breadcrumb
  @catalog @mh @edit @ui @ignore
  Scenario: Verify breadcrumb path for Edit Merchandise Hierarchy Office Screen
    Given Edit Merchandise Hierarchy Office Screen
    When  User verify breadcrumb on the screen
    Then  breadcrumb path will display Catalog -> Merchandise Hierarchy > Hierarchy path > hierarchy title> - Edit



