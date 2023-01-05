package db

import (
    "context"
    "database/sql"
    "testing"

    "github.com/stretchr/testify/require"

    "main/internal/util"
)

func createRandomThread(t *testing.T, sub string) Thread {
    arg := CreateThreadParams{
        Title: util.RandomName(),
        Content: util.RandomString(100),
        Sub: sub,
    }

    thread, err := testQueries.CreateThread(context.Background(), arg)
    require.NoError(t, err)
    require.NotEmpty(t, thread)

    userSub, err := testQueries.GetUserSub(context.Background(), thread.UserID)
    require.NoError(t, err)
    require.NotEmpty(t, userSub)

    require.Equal(t, arg.Title, thread.Title)
    require.Equal(t, arg.Content, thread.Content)
    require.Equal(t, arg.Sub, userSub)

    require.NotZero(t, thread.ID)
    require.NotZero(t, thread.CreatedAt)
    require.Equal(t, thread.Views, int32(0))

    return thread
}

func TestCreateThread(t *testing.T) {
    user := createRandomUser(t)
    createRandomThread(t, user.Sub)
}

func TestGetThread(t *testing.T) {
    user := createRandomUser(t)
    thread1 := createRandomThread(t, user.Sub)
    category := createRandomCategory(t)

    createLinkThreadAndCategory(t, category, thread1)

    thread2, err := testQueries.GetThread(context.Background(), thread1.ID)

    require.NoError(t, err)
    require.NotEmpty(t, thread2)

    require.Equal(t, thread1.ID, thread2.ThreadID)
    require.Equal(t, thread1.Title, thread2.Title)
    require.Equal(t, thread1.Content, thread2.Content)
    require.Equal(t, thread1.Views, thread2.Views)
    require.Equal(t, thread1.CreatedAt, thread2.CreatedAt)

    require.Equal(t, user.ID, thread2.UserID)
    require.Equal(t, user.Name, thread2.Name)
    require.Equal(t, user.Picture, thread2.Picture)
}

func TestUpdateThreadOnlyTitle(t *testing.T) {
    user := createRandomUser(t)
    oldThread := createRandomThread(t, user.Sub)

    newTitle := util.RandomString(10)

    arg := UpdateThreadParams{
        Title: sql.NullString{
            String: newTitle,
            Valid: true,
        },
        ID: oldThread.ID,
    }

    newThread, err := testQueries.UpdateThread(context.Background(), arg)

    require.NoError(t, err)
    require.NotEmpty(t, newThread)

    require.NotEqual(t, oldThread.Title, newThread.Title)
    require.Equal(t, newTitle, newThread.Title)

    require.Equal(t, oldThread.ID, newThread.ID)
    require.Equal(t, oldThread.UserID, newThread.UserID)
}

func TestUpdateThreadOnlyContent(t *testing.T) {
    user := createRandomUser(t)
    oldThread := createRandomThread(t, user.Sub)

    newContent := util.RandomString(100)

    arg := UpdateThreadParams{
        Content: sql.NullString{
            String: newContent,
            Valid: true,
        },
        ID: oldThread.ID,
    }

    newThread, err := testQueries.UpdateThread(context.Background(), arg)

    require.NoError(t, err)
    require.NotEmpty(t, newThread)

    require.NotEqual(t, oldThread.Content, newThread.Content)
    require.Equal(t, newContent, newThread.Content)

    require.Equal(t, oldThread.ID, newThread.ID)
    require.Equal(t, oldThread.UserID, newThread.UserID)

}

func TestUpdateThreadAllFields(t *testing.T) {
    user := createRandomUser(t)
    oldThread := createRandomThread(t, user.Sub)

    newTitle := util.RandomString(10)
    newContent := util.RandomString(100)

    arg := UpdateThreadParams{
        Title: sql.NullString{
            String: newTitle,
            Valid: true,
        },
        Content: sql.NullString{
            String: newContent,
            Valid: true,
        },
        ID: oldThread.ID,
    }

    newThread, err := testQueries.UpdateThread(context.Background(), arg)

    require.NoError(t, err)
    require.NotEmpty(t, newThread)

    require.NotEqual(t, oldThread.Title, newThread.Title)
    require.Equal(t, newTitle, newThread.Title)

    require.NotEqual(t, oldThread.Content, newThread.Content)
    require.Equal(t, newContent, newThread.Content)

    require.Equal(t, oldThread.ID, newThread.ID)
    require.Equal(t, oldThread.UserID, newThread.UserID)
}
