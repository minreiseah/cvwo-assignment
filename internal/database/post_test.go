package db

import (
	"context"
	"database/sql"
	"testing"

	"github.com/stretchr/testify/require"

	"main/internal/util"
)

func createRandomPost(t *testing.T, sub string, threadID int32) Post{
    arg := CreatePostParams{
        Content: util.RandomString(100),
        ThreadID: threadID,
        Sub: sub,
    }

    post, err := testQueries.CreatePost(context.Background(), arg)
    require.NoError(t, err)
    require.NotEmpty(t, post)

    userSub, err := testQueries.GetUserSub(context.Background(), post.UserID)
    require.NoError(t, err)
    require.NotEmpty(t, userSub)

    require.Equal(t, arg.Content, post.Content)
    require.Equal(t, arg.ThreadID, post.ThreadID)
    require.Equal(t, arg.Sub, userSub)

    require.NotZero(t, post.ID)
    require.NotZero(t, post.CreatedAt)

    return post
}

func TestCreatePost(t *testing.T) {
    user := createRandomUser(t)
    thread := createRandomThread(t, user.Sub)
    createRandomPost(t, user.Sub, thread.ID)
}

func TestListPostsFromThread(t *testing.T) {
    user := createRandomUser(t)
    thread := createRandomThread(t, user.Sub)

	var lastPost Post
	for i := 0; i < 10; i++ {
        lastPost = createRandomPost(t, user.Sub, thread.ID)
	}

	posts, err := testQueries.ListPostsFromThread(context.Background(), thread.ID)
	require.NoError(t, err)
	require.NotEmpty(t, posts)

	for _, post := range posts {
		require.NotEmpty(t, post)
		require.Equal(t, lastPost.UserID, post.UserID)
		require.Equal(t, lastPost.ThreadID, post.ThreadID)
	}
}

func TestListPostsFromUser(t *testing.T) {
    user := createRandomUser(t)
    thread1 := createRandomThread(t, user.Sub)
    thread2 := createRandomThread(t, user.Sub)

	var lastPost Post
	for i := 0; i < 10; i++ {
        threadID := thread1.ID
        if(i % 2 == 0) {
            threadID = thread2.ID
        }
        lastPost = createRandomPost(t, user.Sub, threadID)
	}

	posts, err := testQueries.ListPostsFromUser(context.Background(), user.Sub)
	require.NoError(t, err)
	require.NotEmpty(t, posts)

	for i, post := range posts {
		require.NotEmpty(t, post)
		require.Equal(t, lastPost.UserID, post.UserID)
        if(i % 2 == 0) {
            require.Equal(t, thread2.ID, post.ThreadID)
        } else {
            require.Equal(t, thread1.ID, post.ThreadID)
        }
	}
}

func TestUpdatePost(t *testing.T) {
    user := createRandomUser(t)
    thread := createRandomThread(t, user.Sub)
    oldPost := createRandomPost(t, user.Sub, thread.ID)

    newContent := util.RandomString(100)

    arg := UpdatePostParams{
        ID: oldPost.ID,
        Content: sql.NullString{
            String: newContent,
            Valid: true,
        },
    }

    newPost, err := testQueries.UpdatePost(context.Background(), arg)

    require.NoError(t, err)
    require.NotEmpty(t, newPost)

    require.NotEqual(t, oldPost.Content, newPost.Content)
    require.Equal(t, newContent, newPost.Content)
}

func TestDeletePost(t *testing.T) {
    user := createRandomUser(t)
    thread := createRandomThread(t, user.Sub)
    post1 := createRandomPost(t, user.Sub, thread.ID)

    err := testQueries.DeletePost(context.Background(), post1.ID)
	require.NoError(t, err)

	post2, err := testQueries.GetPost(context.Background(), post1.ID)
	require.Error(t, err)
	require.EqualError(t, err, sql.ErrNoRows.Error())
	require.Empty(t, post2)

}
