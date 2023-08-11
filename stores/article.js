export const useArticle = defineStore('article', {
    state: () => ({
        id:0,
        title: '',
        article: '',
        category: '',
        listData: {},
    }),
    getters: {
        getState(state) {
            const {
                id, title, article, category, listData
            } = state;

            return {
                id, title, article, category, listData
            };
        },
    },
    actions: {
        changeState(nameState, value){
            this[nameState] = value;
        },
    },
})