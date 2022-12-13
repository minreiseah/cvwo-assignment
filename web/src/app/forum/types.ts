export interface ThreadCardProps {
    id: number,
    title: string,
    author: string,
    picture: string,
    timestamp: Date
    categories: string[]
    replies: number,
    views: number,
}

