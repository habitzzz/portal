<template>
  <NuxtLayout name="cms">
    <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
      <!-- Breadcrumb Start -->
      <div
        class="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
      >
        <h2 class="text-2xl font-bold text-black dark:text-white">Artikel</h2>

        <nav>
          <ol class="flex items-center gap-2">
            <li>
              <NuxtLink class="font-medium" to="/">Dashboard /</NuxtLink>
            </li>
            <li class="font-medium text-primary">Artikel</li>
          </ol>
        </nav>
      </div>
      <!-- Breadcrumb End -->

      <!-- ====== Table Section Start -->
      <div class="flex flex-col gap-10">
        <!-- ====== Table Three Start -->
        <div
          class="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1"
        >
          <div class="max-w-full overflow-x-auto">
            <div class="flex justify-between">
              <h2 class="text-xl font-bold">Daftar Artikel</h2>
              <NuxtLink to="/cms/articles/manage/add">
                <button
                  class="flex w-fit mb-2 justify-center rounded bg-primary py-3 px-5 font-medium text-white"
                >
                  Tambah
                </button>
              </NuxtLink>
            </div>
            <table class="w-full table-auto">
              <thead>
                <tr class="bg-slate-200 text-left dark:bg-meta-4">
                  <th
                    class="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11"
                  >
                    Judul
                  </th>
                  <th
                    class="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white"
                  >
                    Tanggal
                  </th>
                  <th
                    class="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white"
                  >
                    Kategori
                  </th>
                  <th class="py-4 px-4 font-medium text-black dark:text-white">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in articlesStore.getState.listData" :key="item.id">
                  <td
                    class="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11"
                  >
                    <h5 class="font-medium text-black dark:text-white">
                      {{ item.title }}
                    </h5>
                  </td>
                  <td
                    class="border-b border-[#eee] py-5 px-4 dark:border-strokedark"
                  >
                    <p class="text-black dark:text-white">{{ item.post }}</p>
                  </td>
                  <td
                    class="border-b border-[#eee] py-5 px-4 dark:border-strokedark"
                  >
                    <p
                      class="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success"
                    >
                      {{ item.category }}
                    </p>
                  </td>
                  <td
                    class="border-b border-[#eee] py-5 px-4 dark:border-strokedark"
                  >
                    <div class="flex items-center space-x-3.5">
                      <button @click="editRow(item)" class="hover:text-primary">
                        <i class="i-ph:pencil-duotone" />
                      </button>
                      <button @click="deleteRow(item)"  class="hover:text-primary">
                        <i class="i-ph:trash-duotone" />
                      </button>
                      <button class="hover:text-primary">
                        <i class="i-ph:link-duotone" />
                      </button>
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

        <!-- ====== Table Three End -->
      </div>
      <!-- ====== Table Section End -->
    </div>
  </NuxtLayout>
</template>
  
<script setup>
definePageMeta({
  middleware: "auth",
});

const articlesStore = useArticle();
const {items, loading, error, fetchItems, removeItem} = useSupabaseCrud('articles');

onMounted( async () => {
  await fetchItems();
  articlesStore.changeState('listData', items.value);
    console.log(items.value)
})

function editRow(data) {
  articlesStore.changeState('id', data.id);
  articlesStore.changeState('title', data.title);
  articlesStore.changeState('article', data.post);
  articlesStore.changeState('category', data.category);

  navigateTo('/cms/articles/manage/edit')

}

async function deleteRow(data) {
  await removeItem(data.id);
  await fetchItems();

  articlesStore.changeState('listData', items.value);
}
</script>