Feature: Virgin Search
  As a user of virgin holidays
  I would like search for flights
  So that I can see what is available

  Background:
  Given I am on virgin holidays homepage

  Scenario: search
    When I select Dallas Texas USA in Destination dropdown list
    And I select London in Flying From dropdown list
    And I click Find Holidays button
    Then I should see "Sorry, there is no availability for the dates you have selected."