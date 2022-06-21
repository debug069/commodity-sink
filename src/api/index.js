import request from './request'

// 首页三级联动接口
export const threeLevelLinkage = () => request({ url: '/product/getBaseCategoryList', method: 'get' })
