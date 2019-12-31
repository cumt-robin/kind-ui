export function addClass(ele, cls) {
    if (typeof ele === 'string') {
        ele = document.querySelector('ele')
    }
    ele.classList.add(cls)
}

export function removeClass(ele, cls) {
    if (typeof ele === 'string') {
        ele = document.querySelector('ele')
    }
    ele.classList.remove(cls)
}

// 重新激活动画，需要传入移除动画class的方法，和设置动画class的方法
export default function triggerC3Animation(removeAnimClass, setAnimClass) {
    removeAnimClass();
    window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
            setAnimClass();
        });
    });
}