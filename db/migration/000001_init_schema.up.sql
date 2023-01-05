CREATE TABLE "users" (
  "id" serial PRIMARY KEY,
  "name" varchar(255) NOT NULL,
  "email" varchar(255) NOT NULL,
  "picture" varchar(255) NOT NULL,
  "sub" varchar(255) UNIQUE NOT NULL,
  "created_at" timestamptz DEFAULT (now()) NOT NULL
);

CREATE TABLE "threads" (
  "id" serial PRIMARY KEY,
  "title" varchar(255) NOT NULL,
  "content" text NOT NULL,
  "views" int NOT NULL DEFAULT 0,
  "created_at" timestamptz DEFAULT (now()) NOT NULL,
  "user_id" int NOT NULL
);

CREATE TABLE "posts" (
  "id" serial PRIMARY KEY,
  "content" text NOT NULL,
  "created_at" timestamptz DEFAULT (now()) NOT NULL,
  "user_id" int NOT NULL,
  "thread_id" int NOT NULL
);

CREATE TABLE "categories" (
  "id" serial PRIMARY KEY,
  "name" varchar(255) NOT NULL,
  "description" text NOT NULL,
  "created_at" timestamptz DEFAULT (now()) NOT NULL
);

CREATE TABLE "threads_categories" (
  "category_id" int NOT NULL,
  "thread_id" int NOT NULL
);

CREATE INDEX ON "users" ("sub");

CREATE INDEX ON "posts" ("thread_id");

CREATE INDEX "PK_FK" ON "threads_categories" ("category_id", "thread_id");

ALTER TABLE "threads" ADD CONSTRAINT "FK_threads.user_id" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE;

ALTER TABLE "posts" ADD CONSTRAINT "FK_posts.user_id" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE;

ALTER TABLE "posts" ADD CONSTRAINT "FK_posts.thread_id" FOREIGN KEY ("thread_id") REFERENCES "threads" ("id") ON DELETE CASCADE;

ALTER TABLE "threads_categories" ADD CONSTRAINT "FK_threads_categories.category_id" FOREIGN KEY ("category_id") REFERENCES "categories" ("id") ON DELETE CASCADE;

ALTER TABLE "threads_categories" ADD CONSTRAINT "FK_threads_categories.thread_id" FOREIGN KEY ("thread_id") REFERENCES "threads" ("id") ON DELETE CASCADE;
