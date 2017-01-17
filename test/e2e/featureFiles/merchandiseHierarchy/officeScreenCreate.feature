Feature: Create Merchandise Hierarchy
  As a Retailer Catalog owner,
  I would like to be able to create hierarchies in NR1 from the Central Office,
  so that I will be able to connect items to a hierarchy

#Hierarchy Details Section entries
# Elongation and Expansion feature on Code and Title field
  @catalog @mh @create @ui @ignore
  Scenario: Verify Code field size allow user input only upto the maximum size allowed
    Given Create Merchandise Hierarchy Office Screen
    When  User type into Code field
    And   User has typed in maximum allowed number of characters
    Then  User will be not be able to type into the field
    And   Message will be displayed informing user that maximum allowed size has been reached

  @catalog @mh @create @ui @ignore
  Scenario: Verify Title field size dynamically (expand vertically) according to user input upto the maximum allowed size
    Given Create Merchandise Hierarchy Office Screen
    When  User type into Title field
    Then  Title field will size dynamically (expand vertically) to accommodate user input
    And   User will not be allowed to type further when maximum allowed size has reached
    And   Message will be displayed informing user that maximum allowed size has been reached

#Parent field in Hierarchy Details Section
  @catalog @mh @create @ui @ignore
  Scenario: Verify Parent field in Hierarchy Details section on Create Merchandise Hierarchy Office Screen when Add is performed from the Merchandise Hierarchy page – Root
    Given Merchandise Hierarchy Office Screen
    When  User click on 'New' action button
    Then  Create Merchandise Hierarchy Office Screen will be displayed
    And   Parent field on the create screen will have default value as Root

  @catalog @mh @create @ui @ignore
  Scenario: Verify Parent field in Hierarchy Details section on Create Merchandise Hierarchy Office Screen when Add is performed from the Merchandise Hierarchy Node Details page
    Given View Merchandise Hierarchy office Screen for hierarchy node
    When  User click on 'New' action button
    Then  Create Merchandise Hierarchy Office Screen will be displayed
    And   Parent field on the Create screen will have default value as node’s path including the node from which the Add is Performed

  @catalog @mh @create @ui @ignore
  Scenario: Verify Parent field value in Hierarchy Details section on Create Merchandise Hierarchy Office Screen
    Given Create Merchandise Hierarchy Office Screen
    When  User verify the Parent Field value in the Hierarchy Details section
    Then  Parent field  will only display ellipsis and the parent value with a Slash between them
    And   the parent value will be Bolded

  @catalog @mh @create @ui @ignore
  Scenario: Verify entire Parent field value shown in tool tip
    Given Create Merchandise Hierarchy Office Screen
    When  User mouse over on Parent field
    Then  Tool tip will be Displayed
    And   Entire Parent path field value will be shown in tool tip

# Ellipsis in Parent field
  @catalog @mh @create @ui @ignore
  Scenario: Verify Ellipsis button behaviour on mouse over
    Given Create Merchandise Hierarchy Office Screen
    When  user mouse over on ellipsis in Parent field
    Then  Ellipsis will be Bolded
    And   Ellipsis will change its shape to Button

  @catalog @mh @create @ui @ignore
  Scenario: Verify Parent field is expanded on click on Ellipsis
    Given Create Merchandise Hierarchy Office Screen
    When  User click on Ellipsis in Parent Field
    Then  Parent field will be expanded to show entire path with Parent Bolded
    And   There will be an arrow icon to collapse the Parent field

  @catalog @mh @create @ui @ignore
  Scenario: Verify Parent fields is collapsed again to show Ellipsis on clicking arrow icon.
    Given Create Merchandise Hierarchy Office Screen with Parent field expanded
    When  User click on arrow icon in the Parent Field
    Then  Parent field will collapse Back
    And   will show ellipsis and the hierarchy parent

# Culture feature for Title and Description fields in Create Merchandise Hierarchy Office Screen
  @catalog @mh @create @ui @ignore
  Scenario: Verify culture feature on Title field in Create Merchandise Hierarchy Office Screen
    Given Create Merchandise Hierarchy Office Screen
    When  User verify the Title field in Create Merchandise Hierarchy Office Screen
    Then  A culture icon will be available for the Field

  @catalog @mh @create @ui @ignore
  Scenario: Verify culture feature on Description field in Create Merchandise Hierarchy Office Screen
    Given Create Merchandise Hierarchy Office Screen
    When  User verify the Description field in Create Merchandise Hierarchy Office Screen
    Then  A culture icon will be available for the Field

  @catalog @mh @create @ui @ignore
  Scenario: Verify on click behaviour for Culture icon for Title field in Create Merchandise Hierarchy Office Screen
    Given Create Merchandise Hierarchy Office Screen
    When  User click on culture icon for Title field in Create Merchandise Hierarchy Office Screen
    Then  A culture pop-up will open for the Field

  @catalog @mh @create @ui @ignore
  Scenario: Verify on click behaviour for Culture icon for Title field in Create Merchandise Hierarchy Office Screen when user has already typed in value for the Title field
    Given Create Merchandise Hierarchy Office Screen
    When  User entered a value for Title field
    And   User click on culture icon for Title Field
    Then  A culture pop-up will open for the Field
    And   The user typed in value will already be added as the default culture value for Title field in the pop-up

  @catalog @mh @create @ui @ignore
  Scenario: Verify on click behaviour for Culture icon for Description field in Create Merchandise Hierarchy Office Screen
    Given Create Merchandise Hierarchy Office Screen
    When  User click on culture icon for Description field in Create Merchandise Hierarchy Office Screen
    Then  A culture pop-up will open for the Field

  @catalog @mh @create @ui @ignore
  Scenario: Verify on click behaviour for Culture icon for Description field in Create Merchandise Hierarchy Office Screen when user has already typed in value for the Description field
    Given Create Merchandise Hierarchy Office Screen
    When  User entered a value for Description field
    And   User click on culture icon for Description Field
    Then  A culture pop-up will open for the Field
    And   The user typed in value will already be added as the default culture value for Description field in the pop-up

# Keyboard Tab feature
  @catalog @mh @create @ui @ignore
  Scenario: Verify user is able to navigate among different fields using keyboard tab on Create Merchandise Hierarchy Office Screen
    Given Create Merchandise Hierarchy Office Screen
    When  User click on any field in Hierarchy Details section and then click on tab from keyboard
    Then  User will be able to navigate among different fields on the screen using Tab from keyboard

# 'Set' button click display Tree picker pop-up
  @catalog @mh @create @ui @ignore
  Scenario: Verify Merchandise hierarchy tree picker pop-up displayed on click of 'Set' button
    Given Create Merchandise Hierarchy Office Screen
    When  User click on 'Set' button of the Parent field
    Then  Merchandise hierarchy tree picker pop-up will be Displayed

# Action buttons and validations
  @catalog @mh @create @ui @ignore
  Scenario: Verify the Action buttons displayed on Create Merchandise Hierarchy Office Screen
    Given Create Merchandise Hierarchy Office Screen
    When  User verify the action buttons available in the tool bar on the screen
    Then  Following action buttons will be displayed: 'Save','Done','Cancel'
    And   Action buttons 'Edit' and 'Add' will be hidden

  @catalog @mh @create @functional
  Scenario: Verify on Save of new hierarchy, the hierarchy is saved and the screen stays in Edit mode.
    Given Create Merchandise Hierarchy Office Screen
    When  User enters all the valid information in the required fields
    And   Click 'Save' button
    Then  New hierarchy will be saved
    And   Notification will be displayed to user that the Record was saved successfully
    And   Merchandise hierarchy screen will be displayed in Edit mode
    And   breadcrumb will display  Catalog > Merchandise Hierarchy > hierarchy title>  Edit

  @catalog @mh @create @functional
  Scenario: Verify on clicking Done of new hierarchy, the hierarchy is saved and the screen stays in View mode.
    Given Create Merchandise Hierarchy Office Screen
    When  User enters all the valid information in the required fields
    And   Click 'Done' button
    Then  New hierarchy will Be saved
    And   Notification will be displayed to user that the Record was saved successfully
    And   Merchandise hierarchy screen will be displayed in View mode
    And   breadcrumb will display  Catalog > Merchandise hierarchy > hierarchy title>

  @catalog @mh @create @functional
  Scenario: Verify on clicking Save for new hierarchy with no hierarchy code
    Given Create Merchandise Hierarchy Office Screen
    When  User enters no data in Code field or Title Field or Description Field
    And   Click 'Save' button
    Then  New hierarchy will not be saved
    And   Error message will be displayed informing user that Required Field is mandatory

  @catalog @mh @create @functional
  Scenario: Verify on clicking Save for new hierarchy with no hierarchy code
    Given Create Merchandise Hierarchy Office Screen
    When  User enters no data in Code field or Title Field or Description Field
    And   Click 'Done' button
    Then  New hierarchy will not be saved
    And   Error message will be displayed informing user that Required Field is mandatory

  @catalog @mh @create @functional
  Scenario: Verify on clicking Save for new hierarchy with existing hierarchy code
    Given Create Merchandise Hierarchy Office Screen
    When  User enters an existing hierarchy code data in Code field
    And   Click 'Save' button
    Then  New hierarchy will not be saved
    And   Error message will be displayed informing user that record with the same Code already exist

  @catalog @mh @create @functional @ignore
  Scenario: Verify clicking No from Cancel message prompt for new hierarchy
    Given Create Merchandise Hierarchy Office Screen
    When  User enters all the valid information in the required fields
    And   Click 'Cancel' button
    And   Click 'No' from cancel message prompt
    Then  User will stay on Create merchandise hierarchy office screen.

  @catalog @mh @create @functional @ignore
  Scenario: Verify clicking Yes from Cancel message prompt for new hierarchy
    Given Create Merchandise Hierarchy Office Screen
    When  User enters all the valid information in the required fields
    And   Click 'Cancel' button
    And   Click 'Yes' from cancel message prompt
    Then  User will navigate back to grid view for merchandise hierarchy
    And   New hierarchy will not be created

  @catalog @mh @create @ui @ignore
  Scenario: Verify Cancel message prompt on navigating away from Create Merchandise Hierarchy Office Screen
    Given Create Merchandise Hierarchy Office Screen
    When  User enters all the valid information in the required fields
    And   User navigate away from screen by using back button\ using breadcrumbs\ page browsing\ Other
    Then  Message prompt will be displayed asking user If user would like to discard changes
    And   Message prompt will have 'Yes' and 'No' Options

# breadcrumb
  @catalog @mh @create @ui @ignore
  Scenario: Verify breadcrumb path for Create Merchandise Hierarchy Office Screen
    Given Create Merchandise Hierarchy Office Screen
    When  User verify the breadcrumb on the screen
    Then  breadcrumb path will display Catalog -> Merchandise Hierarchy > [Hierarchy path] > New Hierarchy Node



