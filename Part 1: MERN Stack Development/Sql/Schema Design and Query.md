
                                                
                                                ## Schema Design

1.User Table:
    . UserId: Unique identifier for each user (primary key).
    . Username: User's username.
    . Email: User's email address (unique).

//Mysql code for creating User Table

CREATE TABLE User (
    UserID INT PRIMARY KEY AUTO_INCREMENT,
    Username VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
);


2.Post Table:
    . PostId: Unique identifier for each post (primary key).
    . Title: Title of the blog post.
    . Content: The main content of the blog post.
    . UserId: Foreign key referencing the user who authored the post.

//Mysql code for creating Post Table

CREATE TABLE Post (
   PostID INT PRIMARY KEY AUTO_INCREMENT,
   Title VARCHAR(255) NOT NULL,
   Content TEXT NOT NULL,
   UserID INT,
   FOREIGN KEY (UserID) REFERENCES User(UserID)
);


3.Comment Table:
    . CommentId: Unique identifier for each comment (primary key).
    . Content: The content of the comment.
    . UserId: Foreign key referencing the user who wrote the comment.
    . PostId: Foreign key referencing the post to which the comment belongs.

//Mysql code for creating Comment Table

CREATE TABLE Comment (
   CommentID INT PRIMARY KEY,
   Content TEXT NOT NULL,
   UserID INT,
   PostID INT,
   FOREIGN KEY (UserID) REFERENCES User(UserID),
   FOREIGN KEY (PostID) REFERENCES Post(PostID)
);


                                                   #Query
.Write a MySql query to find all posts created by a specific user, including the user details.

SELECT
    Post.PostId,
    Post.Title,
    Post.Content,
    User.UserId,
    User.Username
FROM
    Post
JOIN
    User ON Post.UserId = User.UserId
WHERE
    User.UserId = 1;
