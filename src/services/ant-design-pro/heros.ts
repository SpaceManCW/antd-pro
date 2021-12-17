import { request } from 'umi';
export async function getHeroList() {
    return request('/api/heroList')
}