# API Endpoints

## Overview

![](database_schema.png)

The database schema includes the following entities:

- **Users**: Represents the users of the forum, with attributes such as username, email, and password.

- **Categories**: Represents the categories in the forum, with attributes such as title and description.

- **Threads**: Represents the threads in the forum, with attributes such as title, content, and user_id.

- **Posts**: Represents the posts or replies in the forum, with attributes such as content, thread_id, and user_id.

The entities are **related** as follows:

- Each thread belongs to a *single* category, and *each* category can have *multiple* threads.
- Each post belongs to a *single* thread, and *each* thread can have *multiple* posts.
- Each user can create *multiple* threads and posts.

Based on this schema, we have defined the following API endpoints:

## Endpoints

### Users

Retrieve and create users.

#### `GET /users`

- Description: Retrieves a list of *all* users.
- Request data format: None
- Response data format: JSON
- Authentication: None

#### `POST /users`

- Description: Creates a new user.
- Request data format: JSON
- Response data format: JSON
- Authentication: None

### Categories

Retrieve all categories. Note that users are not allowed to create categories. Only administrators are able to create and manage categories in the database.

#### `GET /categories`

- Description: Retrieves a list of *all* categories.
- Request data format: None
- Response data format: JSON


### Threads

Retrieve all threads or threads from a specific category. Create threads in a specific category.

#### `GET /threads`

- Description: Retrieves a list of *all* threads.
- Request data format: None
- Response data format: JSON
- Authentication: None

#### `POST /threads`

- Description: Creates a *new* thread.
- Request data format: JSON
- Response data format: JSON
- Authentication: Required

#### `GET /categories/:category_id/threads`

- Description: Retrieves a list of *all* threads from a *specified* category.
- Request data format: None
- Response data format: JSON
- Authentication: None
- Authentication: None

### Posts

Retrieve all posts or posts from a specific thread. Create posts(replies) in a specific thread.

#### `GET /posts`

- Description: Retrieves a list of *all* posts.
- Request data format: None
- Response data format: JSON
- Authentication: None

#### `POST /posts`

- Description: Creates a *new* post. 
- Request data format: JSON
- Response data format: JSON
- Authentication: Required

#### `GET /threads/:thread_id/posts`

- Description: Retrieves a list of *all* posts from a *specified* thread.
- Request data format: None
- Response data format: JSON
- Authentication: None

