# Tests Plan

## Form Tests

1. Create monster, all fields empty
   - "All fields are required" warning
1. Create monster, Name entered
   - "All fields are required" warning
1. Create monster, Name, HP entered 
   - "All fields are required" warning
1. Create monster, Name, HP, Attack entered
   - "All fields are required" warning
1. Create monster, Name, HP, Attack , Defense entered 
   - "All fields are required" warning
1. Create monster, Name, HP, Attack , Defense, Speed entered
   - Monster is created with no placeholder image
1. Create monster, Name, HP, Attack , Defense, Speed entered, image selected
   - Monster is created with correct image

## List tests

1. Delete monster
   - Is deleted
1. Favorite/unfavorite monster 
   - Is favorited, assert [then] is unfavorited, assert

## Cleanup

1. Delete all monsters
   - There are no monsters shown

## Other potential tests

1. Viewport responsiveness : Is responsive

  