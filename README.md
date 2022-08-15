# Task Manager

This repo is an example of how a task manager API might be modeled and created.

## Features

Users can create tasks, add tags to them, assign them, and change their state. Task title and summary can be edited, as can assignees and tags. Comments can be added to a task.

When viewing tasks, they can be searched by multiple fields, e.g. "get all tasks with state of 'in progress' and assignee id of 000." Tasks can also be filtered by tags, e.g. "get all tasks with tag of 'bugfix'."

Each task has an audit trail. This is a list of all changes that have been made to it, including original creation, tag addition/removal, state changes, and comments added or deleted. These changes include information about the user that made them and the timestamp they were made at.

## Models and Relationships

USER
  - identifier - unique id
  - name - string

COMMENT
  - identifier - unique id
  - taskId - foreign key
  - userId - foreign key
  - text - text
  - timestamp - timestamp

STATE
  - identifier - unique id
  - name - string

TASK
  - identifier - unique id
  - title - string
  - text - text
  - assigneeId - foreign key
  - requesterId - foreign key
  - currentStateId - foreign key

TAG
  - identifier - unique id
  - name - string

TASK-TAG
  - identifier - unique id
  - taskId - foreign key
  - tagId - foreign key

CHANGE
  - identifier - unique id
  - taskChangeId - foreign key
  - fieldName - string
  - newValue - text (TODO: point this to a previous ChangeId rather than have it be raw text)
  - previousValue - text

TASK-CHANGE
  - identifier - unique id
  - taskId - foreign key
  - userId - foreign key
  - timestamp - timestamp
