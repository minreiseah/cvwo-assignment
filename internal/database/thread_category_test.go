package db

import (
    "context"
    "testing"

    "github.com/stretchr/testify/require"

)

func createLinkThreadAndCategory(t *testing.T, category Category, thread Thread) {
    arg := LinkThreadAndCategoryParams{
        CategoryID: category.ID,
        ThreadID: thread.ID,
    }

    link, err := testQueries.LinkThreadAndCategory(context.Background(), arg)

    require.NoError(t, err)
    require.NotEmpty(t, link)

    require.Equal(t, thread.ID, link.ThreadID)
    require.Equal(t, category.ID, link.CategoryID)
}

func TestLinkThreadAndCategory(t *testing.T) {
    user := createRandomUser(t)
    thread := createRandomThread(t, user.Sub)
    category := createRandomCategory(t)

    arg := LinkThreadAndCategoryParams{
        CategoryID: category.ID,
        ThreadID: thread.ID,
    }

    link, err := testQueries.LinkThreadAndCategory(context.Background(), arg)

    require.NoError(t, err)
    require.NotEmpty(t, link)

    require.Equal(t, thread.ID, link.ThreadID)
    require.Equal(t, category.ID, link.CategoryID)
}
