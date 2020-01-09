import { addClass, removeClass } from './dom'

class PopupManager {
    constructor() {
        this.zIndex = 2000
        this.modal = null;
        this.transitionTimer = null
    }

    generateZIndex() {
        this.zIndex++
        return this.zIndex;
    }

    openModal() {
        if (!this.modal) {
            this.modal = document.createElement('div');
            this.modal.style.zIndex = this.generateZIndex();
            addClass(this.modal, ['k-modal', 'k-modal-enter'])
            this.transitionHook(() => {
                removeClass(this.modal, 'k-modal-enter')
            })
            document.body.appendChild(this.modal)
        } else {
            this.modal.style.zIndex = this.generateZIndex();
            this.modal.style.display = 'block'
            addClass(this.modal, 'k-modal-enter')
            this.transitionHook(() => {
                removeClass(this.modal, 'k-modal-enter')
            })
        }
    }

    closeModal() {
        if (this.modal) {
            addClass(this.modal, 'k-modal-leave')
            this.transitionHook(() => {
                removeClass(this.modal, 'k-modal-leave')
                this.modal.style.display = 'none'
            })
        }
    }

    transitionHook(cb) {
        this.removeTransitionTimer();
        this.transitionTimer = setTimeout(() => {
            cb()
        }, 300)
    }

    removeTransitionTimer() {
        if (this.transitionTimer) {
            clearTimeout(this.transitionTimer);
            this.transitionTimer = null
        }
    }
}

export default new PopupManager()
