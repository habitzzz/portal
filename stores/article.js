const supabase = useSupabaseClient();

export const useArticle = defineStore('article', {
    state: () => ({
        title: '',
        article: '',
        category: '',
        listData: {},
    }),
    getters: {
        getState(state) {
            const {
                title, article, category, listData
            } = state;

            return {
                title, article, category, listData
            };
        },
    },
    actions: {
        changeState(nameState, value){
            this[nameState] = value;
        },
        async dataArticle(){
            const {data, error} = await supabase.from('articles').select();
            this.listData = data;            
        }
    },
})