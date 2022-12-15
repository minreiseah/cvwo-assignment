import axios from "axios";

export interface CategoryData {
  category_id: number,
  category: string,
}

class CategoryService {


  /** GET /categories
* Description: Retrieves a list of all categories.
* Request data format: None
* Response data format: JSON
* Authentication: None
*/
  public async getCategories(): Promise<CategoryData[]> {
    try {
      const res = await axios.get('/categories');
      return res.data;
    } catch (error) {
      throw error;
    }
  }

}

export default CategoryService
