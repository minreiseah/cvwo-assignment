package db

import (
    "context"
    "testing"

    "github.com/stretchr/testify/require"

)

func TestCreateThreadCategoryCompositeLink(t *testing.T) {
    user := createRandomUser(t)
    thread := createRandomThread(t, user.Sub)
    category := createRandomCategory(t)

    arg := CreateThreadCategoryCompositeLinkParams{
        CategoryID: category.ID,
        ThreadID: thread.ID,
    }

    link, err := testQueries.CreateThreadCategoryCompositeLink(context.Background(), arg)

    require.NoError(t, err)
    require.NotEmpty(t, link)

    require.Equal(t, thread.ID, link.ThreadID)
    require.Equal(t, category.ID, link.CategoryID)
}
