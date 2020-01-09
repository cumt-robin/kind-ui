import { getType, isObject, isArray, isBasicType } from './type'

/**
 * 深拷贝，此处不考虑Symbol,Map,Set,Function等数据类型
 * @param {any} obj 待深拷贝的数据
 */
export function deepClone(obj) {
    let newObj;
    if (isObject(obj)) {
        newObj = {};
        Object.keys(obj).forEach(key => {
            newObj[key] = deepClone(obj[key])
        })
    } else if (isArray(obj)) {
        newObj = [];
        obj.forEach(item => {
            newObj.push(deepClone(item))
        })
    } else {
        newObj = obj;
    }
    return newObj
}