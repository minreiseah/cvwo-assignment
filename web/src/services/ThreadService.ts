import axios from "axios";

import apiClient from "../utils/common";
import {ThreadCardData} from "../app/forum/types"

export interface ThreadDisplayData {
  thread_id: number,
  title: string,
  content: string,
  created_at: string,
  updated_at?: string,

  category_ids?: number[],
  categories: string[],

  user_id: number,
  author: string,
  picture: string,
  replies: number,
  views: number,
}

export interface ThreadCreationData {
  title: string,
  content: string,
  category_ids: number[],
  user_id?: string | null, // sub
}

export type sortParamTypes = 'date_asc' | 'date_desc' | 'popularity_asc' | 'popularity_desc'


class ThreadService {

  /**
* POST /threads/new
* POST /threads_categories/new
* Description: Creates a new thread in a specified category AND creates composite link.
* Request data format: JSON
* Response data format: JSON
* Authentication: Required
*/
  public async createThread(threadCreationData: ThreadCreationData): Promise<void> {
    try {
      const res = await apiClient.post('threads/new', threadCreationData);

      console.log(res)

      const threadID = res.data.id; 
      const categoryIDs = threadCreationData.category_ids;

      // create composite link
      const threadCategories = categoryIDs.map( (categoryID) => ({
        category_id: categoryID,
        thread_id: threadID
      }));

      console.log(threadCategories)

      for(const tc of threadCategories) {
        await apiClient.post('/threads-categories', tc);
      }
    } catch (error) {
      throw error;
    }
  }

  /**
* GET /threads/:thread_id
* Description: Retrieves thread by thread_id
* Request data format: None
* Response data format: JSON
* Authentication: None
*/

  public async getThread(threadId: number): Promise<ThreadDisplayData> {
    try {
      const res = await axios.get(`/threads/${threadId}`);
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  /** 
* GET /threads
* Description: Retrieves a list of all threads.
* Request data format: None
* Response data format: JSON
* Authentication: None
*/
  public async getThreads(): Promise<ThreadCardData[]> {
    try {
      const res = await axios.get('/threads');
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  /** 
* GET /threads?sort=:sort_param
* Description: Retrieves a list of all threads sorted by time or popularity
* Request data format: None
* Response data format: JSON
* Authentication: None
*/
  public async getSortedThreads(sortParam: sortParamTypes): Promise<ThreadCardData[]> {
    try {
      const res = await axios.get('/threads', {
        params: {
          sort: sortParam,
        }
      });
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  /**
* GET /categories/:category_id/threads
* Description: Retrieves a list of all threads from a specified category.
* Request data format: None
* Response data format: JSON
* Authentication: None
*/
  public async getThreadsByCategory(categoryId: number): Promise<ThreadCardData[]> {
    try {
      const res = await axios.get(`/categories/${categoryId}/threads`);
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  /**
* PUT /threads/:thread_id/edit
* Description: Edits a thread.
* Request data format: JSON
* Response data format: JSON
* Authentication: Required
*/
  public async editThread(threadId: number, threadData: ThreadCreationData): Promise<void> {
    try {
      const res = await axios.put(`/threads/${threadId}/edit`, threadData);
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  /** 
* DELETE /threads/:thread_id/delete
*Description: Deletes a thread.
* Request data format: None
* Response data format: JSON
* Authentication: Required
*/
  public async deleteThread(threadId: number): Promise<void> {
    try {
      const response = await axios.delete(`/threads/${threadId}/delete`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

}

export default ThreadService
