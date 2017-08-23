import { get } from '../get'

export function getSearchData(page, cityName, category, keyword) {
    const keywordStr = keyword ? '/' + keyword : ''
    const result = get('http://localhost:3001/api/search/' + page + '/' + cityName + '/' + category + keywordStr)
    return result
}