export function useSupabaseCrud(tableName) {
    const items = ref([]);
    const loading = ref(false);
    const error = ref(null);
    const supabase = useSupabaseClient();
    const user = useSupabaseUser();
  
    const fetchItems = async () => {
      loading.value = true;
      try {
        const { data, error } = await supabase.from(tableName).select('*').order('created_at', { ascending: true });
        items.value = data;
      } catch (e) {
        error.value = e.message;
      } finally {
        loading.value = false;
      }
    };
  
    const addNewItem = async (newItem) => {
      loading.value = true;
      try {
        // console.log(newItem);
        const { data, error } = await supabase
          .from(tableName)
          .insert([newItem])
          .select();
        items.value.push(data[0]);
  
        // console.log(data);
      } catch (e) {
        error.value = e.message;
      } finally {
        loading.value = false;
      }
    };
  
    const updateExistingItem = async (itemId, updatedFields) => {
      loading.value = true;
      try {
        const { data, error } = await supabase
          .from(tableName)
          .update(updatedFields)
          .match({ id: itemId });
        // await updateItem(tableName, itemId, updatedFields);
        const index = items.value.findIndex((item) => item.id === itemId);
        if (index !== -1) {
          Object.assign(items.value[index], updatedFields);
        }
      } catch (e) {
        error.value = e.message;
      } finally {
        loading.value = false;
      }
    };
  
    const removeItem = async (itemId) => {
      loading.value = true;
      try {
        const { data, error } = await supabase
          .from(tableName)
          .delete()
          .match({ id: itemId });
        // await deleteItem(tableName, itemId);
        items.value = items.value.filter((item) => item.id !== itemId);
      } catch (e) {
        error.value = e.message;
      } finally {
        loading.value = false;
      }
    };
  
    return {
      items,
      loading,
      error,
      fetchItems,
      addNewItem,
      updateExistingItem,
      removeItem,
    };
  }
  