-- name: GetStatistics :one
SELECT 
    (SELECT COUNT(*) FROM threads) as "thread_count",
    (SELECT COUNT(*) FROM posts) as "message_count",
    (SELECT COUNT(*) FROM users) as "user_count",
    (SELECT name FROM users ORDER BY created_at DESC LIMIT 1) as "newest_user";
