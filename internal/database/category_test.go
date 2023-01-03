package db

import (
    "context"
    "database/sql"
    "testing"

    "github.com/stretchr/testify/require"

    "main/internal/util"
)

func createRandomCategory(t *testing.T) Category {
    arg := CreateCategoryParams{
        Name: util.RandomName(),
        Description: util.RandomString(20),
    }

    category, err := testQueries.CreateCategory(context.Background(), arg)
    require.NoError(t, err)
    require.NotEmpty(t, category)

    require.Equal(t, arg.Name, category.Name)
    require.Equal(t, arg.Description, category.Description)
    require.NotZero(t, category.ID)
    require.NotZero(t, category.CreatedAt)

    return category
}

func TestCreateCategory(t *testing.T) {
    createRandomCategory(t)
}

func TestGetCategory(t *testing.T) {
    category1 := createRandomCategory(t)
    category2, err := testQueries.GetCategory(context.Background(), category1.ID)

    require.NoError(t, err)
    require.NotEmpty(t, category2)

    require.Equal(t, category1, category2)
}

func TestUpdateCategoryOnlyName(t *testing.T) {
    oldCategory := createRandomCategory(t)

    newName := util.RandomName()

    arg := UpdateCategoryParams{
        ID: oldCategory.ID,
        Name: sql.NullString{
            String: newName,
            Valid: true,
        },
    }

    newCategory, err := testQueries.UpdateCategory(context.Background(), arg)

    require.NoError(t, err)
    require.NotEmpty(t, newCategory)

    require.NotEqual(t, oldCategory.Name, newCategory.Name)
    require.Equal(t, newName, newCategory.Name)

    require.Equal(t, oldCategory.ID, newCategory.ID)
    require.Equal(t, oldCategory.CreatedAt, newCategory.CreatedAt)

}

func TestUpdateCategoryOnlyDescription(t *testing.T) {
    oldCategory := createRandomCategory(t)

    newDescription := util.RandomString(20)

    arg := UpdateCategoryParams{
        ID: oldCategory.ID,
        Description: sql.NullString{
            String: newDescription,
            Valid: true,
        },
    }

    newCategory, err := testQueries.UpdateCategory(context.Background(), arg)

    require.NoError(t, err)
    require.NotEmpty(t, newCategory)

    require.NotEqual(t, oldCategory.Description, newCategory.Description)
    require.Equal(t, newDescription, newCategory.Description)

    require.Equal(t, oldCategory.ID, newCategory.ID)
    require.Equal(t, oldCategory.CreatedAt, newCategory.CreatedAt)
}

func TestUpdateCategoryAllFields(t *testing.T) {
    oldCategory := createRandomCategory(t)

    newName := util.RandomName()
    newDescription := util.RandomString(20)

    arg := UpdateCategoryParams{
        ID: oldCategory.ID,
        Name: sql.NullString{
            String: newName,
            Valid: true,
        },
        Description: sql.NullString{
            String: newDescription,
            Valid: true,
        },
    }

    newCategory, err := testQueries.UpdateCategory(context.Background(), arg)

    require.NoError(t, err)
    require.NotEmpty(t, newCategory)

    require.NotEqual(t, oldCategory.Name, newCategory.Name)
    require.Equal(t, newName, newCategory.Name)

    require.NotEqual(t, oldCategory.Description, newCategory.Description)
    require.Equal(t, newDescription, newCategory.Description)

    require.Equal(t, oldCategory.ID, newCategory.ID)
    require.Equal(t, oldCategory.CreatedAt, newCategory.CreatedAt)

}
