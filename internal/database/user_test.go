package db

import (
	"context"
	"testing"
	"time"

	"github.com/stretchr/testify/require"

	"main/internal/util"
)

func createRandomUser(t *testing.T) User {
    arg := CreateUserParams{
        Name: util.RandomName(),
        Email: util.RandomEmail(),
        Picture: util.RandomString(40),
        Sub: util.RandomString(30),
    }

    user, err := testQueries.CreateUser(context.Background(), arg)
    require.NoError(t, err)
    require.NotEmpty(t, user)

    require.Equal(t, arg.Name, user.Name)
    require.Equal(t, arg.Email, user.Email)
    require.Equal(t, arg.Picture, user.Picture)
    require.Equal(t, arg.Sub, user.Sub)

    require.NotZero(t, user.ID)
    require.NotZero(t, user.CreatedAt)

    return user
}

// Tests

func TestCreateUser(t *testing.T) {
    createRandomUser(t)
}

func TestCreateUserConflict(t *testing.T) {
    user1 := createRandomUser(t)

    newPicture := util.RandomString(40)

    arg := CreateUserParams{
        Name: user1.Name,
        Email: user1.Email,
        Picture: newPicture,
        Sub: user1.Sub,
    }

    user2, err := testQueries.CreateUser(context.Background(), arg)

    require.NoError(t, err)
    require.NotEmpty(t, user2)

    require.Equal(t, user1.ID, user2.ID)
    require.Equal(t, user1.Name, user2.Name)
    require.Equal(t, user1.Email, user2.Email)
    require.Equal(t, user1.Sub, user2.Sub)
    require.WithinDuration(t, user1.CreatedAt, user2.CreatedAt, time.Second)
    

    require.NotEqual(t, user1.Picture, user2.Picture)
    require.Equal(t, newPicture, user2.Picture)

}

func TestGetUser(t *testing.T) {
    // create account
    user1 := createRandomUser(t)
    user2, err := testQueries.GetUser(context.Background(), user1.ID)

    require.NoError(t, err)
    require.NotEmpty(t, user2)

    require.Equal(t, user1.ID, user2.ID)
    require.Equal(t, user1.Name, user2.Name)
    require.Equal(t, user1.Email, user2.Email)
    require.Equal(t, user1.Picture, user2.Picture)
    require.Equal(t, user1.Sub, user2.Sub)
    require.WithinDuration(t, user1.CreatedAt, user2.CreatedAt, time.Second)
}

func TestGetUserID(t *testing.T) {
    user := createRandomUser(t)
    userID, err := testQueries.GetUserID(context.Background(), user.Sub)

    require.NoError(t, err)
    require.NotEmpty(t, userID)

    require.Equal(t, user.ID, userID)
}

func TestGetUserSub(t *testing.T) {
    user := createRandomUser(t)
    userSub, err := testQueries.GetUserSub(context.Background(), user.ID)

    require.NoError(t, err)
    require.NotEmpty(t, userSub)

    require.Equal(t, user.Sub, userSub)
}
