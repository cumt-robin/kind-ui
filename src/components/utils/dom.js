import { isString, isArray } from './type'

export function addClass(ele, cls) {
    if (typeof ele === 'string') {
        ele = document.querySelector('ele')
    }
    if (isString(cls)) {
        ele.classList.add(cls)
    } else if (isArray(cls)){
        cls.forEach(item => {
            ele.classList.add(item)
        })
    }
}

export function removeClass(ele, cls) {
    if (typeof ele === 'string') {
        ele = document.querySelector('ele')
    }
    if (isString(cls)) {
        ele.classList.remove(cls)
    } else if (isArray(cls)){
        cls.forEach(item => {
            ele.classList.remove(item)
        })
    }
}

// 重新激活动画，需要传入移除动画class的方法，和设置动画class的方法
export function triggerAnimation(removeAnimClass, setAnimClass) {
    removeAnimClass();
    window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
            setAnimClass();
        });
    });
}
