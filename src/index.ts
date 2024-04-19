
import { DirectiveBinding, Directive } from 'vue';
export default function (defaultImage:string) {
    let vLazy: Directive<HTMLImageElement, string> = async (el: HTMLImageElement, binding: DirectiveBinding) => {
        // 默认
        el.src = await import(defaultImage);
        // 判断是否到了可视区内
        const observer = new IntersectionObserver((entire) => {
            //可以通过这里面的intersectionRation属性去判断是否显示实现懒加载：这个属性是监视你的图片在页面出现的比例，完全出现就是1，出现一半就是0.5
            if (entire[0].intersectionRatio > 0) { //大于0就代表出现过
                el.src = binding.value
                observer.unobserve(el)

            }
        })
        observer.observe(el)
    }
}