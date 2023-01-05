import apiClient from "../utils/common"

export interface StatisticsData {
	thread_count: number,
	message_count: number,
	user_count: number,
	newest_user: string,
}

class StatsService {
  public async getStatistics(): Promise<StatisticsData> {
    try {
      const res = await apiClient.get('/statistics');
      return res.data;
    } catch (error) {
      throw error;
    }
  }
}

export default StatsService
