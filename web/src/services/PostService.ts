import apiClient from "../utils/common";

export interface PostData {
  post_id: number,
  content: string,
  created_at: string,
  updated_at?: string,

  thread_id: number,

  user_id: number,
  author: string,
  picture: string,
}

export interface PostCreationData {
  content: string,
  thread_id: number,
  sub: string,
}

class PostService {


  /** POST /threads/:thread_id/posts/new
* Description: Creates a new post in a specific thread.
* Request data format: JSON
* Response data format: JSON
* Authentication: Required
*/
  public async createPost(postData: PostCreationData): Promise<void> {
    try {
      const res = await apiClient.post(`/posts/new`, postData);
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  /** GET /posts
* Description: Retrieves a list of all posts.
* Request data format: None
* Response data format: JSON
* Authentication: None
*/
  public async getPosts(): Promise<PostData[]> {
    try {
      const res = await apiClient.get('/posts');
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  /** GET /threads/:thread_id/posts
* Description: Retrieves a list of all posts from a specified thread.
* Request data format: None
* Response data format: JSON
* Authentication: None
*/
  public async getThreadPosts(threadId: number): Promise<PostData[]> {
    try {
      const res = await apiClient.get(`/posts/threads/${threadId}`);
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  /** PUT /threads/:thread_id/posts/:post_id/edit
* Description: Edits a post from a specified thread.
* Request data format: JSON
* Response data format: JSON
* Authentication: Required
*/
  public async editPost(threadId: number, postId: number, postData: PostData): Promise<PostData> {
    try {
      const res = await apiClient.put(`/threads/${threadId}/posts/${postId}/edit`, postData);
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  /** DELETE /threads/:thread_id/posts/:post_id/delete
* Description: Deletes a post from a specified thread.
* Request data format: None
* Response data format: JSON
* Authentication: Required
*/
  public async deletePost(threadId: number, postId: number): Promise<void> {
    try {
      await apiClient.delete(`/threads/${threadId}/posts/${postId}/delete`);
    } catch (error) {
      throw error;
    }
  }



}

export default PostService
