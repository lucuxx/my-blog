import CardNav from './card.vue';
import LabelNav from './label.vue';
import ListNav from './list.vue';
import SmallLabel from './Small-label.vue';
import commentList from './commentList.vue';


export default {
    install(Vue: any) {
        Vue.component('CardNav', CardNav);
        Vue.component('LabelNav', LabelNav);
        Vue.component('ListNav', ListNav);
        Vue.component('SmallLabel', SmallLabel);
        Vue.component('commentList', commentList);
    },
};

