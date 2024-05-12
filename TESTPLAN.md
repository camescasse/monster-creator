# Test Plan

The application allows us to create, delete and favorite each `Monster` from a set of values with boundaries.

So, in order to provide quick feedback to the developers, we've plan a set of tests to be executed automatically as part of each release.

If any of the tests fails, we should stop the deployment and rollback to a previously working version.

## Form Tests

When creating a new Monster, we should consider the following scenarios:

### Create a Monster should work only if:

1. `name` should not be empty and at least 1 character long.
2. An image must be able to be selected.
3. The following stats should be between 1-100:
   1. `HP`
   2. `Attack`
   3. `Defense`
   4. `Speed`

### Missing any required fiels should display a warning

A red warning message saying `"All fields are required"` should be displayed when at least one of the following is missing:

1. `Name`
2. `HP`
3. `Attack`
4. `Defense`
5. `Speed`

### Monster's should be required

The current implementation allows Monsters to be created without an image, this is probably a bug, but we had to asume this is intended behavior for this project.

## List tests

### Empty state

While there are no Monster's added to the list yet, we should see a header that says `"There are no monsters"`.

### Monsters saved

1. While there is at least one `Monster` on the list, the `"There are no monsters"` header should change to `"Your Monsters"`.
2. The newly added `Monster` should be displayed on a card with the options to `Favorite` and `Delete` it.
3. Selecting the `Favorite` button should change the `heart` Icon Button from `gray` to `red`, and viceversa.
4. Selecting the `Delete` button, should immediately remove the `Monster` from the list.
5. If there are no more `Monster` left to on the list, the header should go from `"Your Monsters"` to `"There are no monsters"`.


## Data Cleanup

Since the data of this web app is only saved locally, no data cleanup steps are needed. With each test execution, the app will be in a `clean` state.

## Other potential tests

1. Responsiveness: the current implementation does not support tablets/phones devices properly.

  